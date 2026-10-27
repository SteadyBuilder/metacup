'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  ChronicleResult,
  FxType,
  MonologueOption,
  RoleJudgment,
  TasteDomain,
  TemperamentDimension,
  Trial,
  WhisperCost,
  ProposedRole
} from '@/types/quest';
import { STATIC_TRIALS, getResolvedTrial } from '@/data/story/allTrials';
import {
  generateProposedRoles,
  createStep3TrialFromRole
} from '@/data/story/step3_judgment';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';

export interface UnlockModalState {
  isOpen: boolean;
  unlockedStep: 2 | 3;
  nextTrialId: string;
}

interface QuestState {
  currentTrialId: string;
  history: string[];
  decisions: Record<string, { optionId: 'A' | 'B'; text: string; reaction: string }>;
  
  // 1단계: 기질 점수
  temperamentScores: Partial<Record<TemperamentDimension, number>>;
  // 2단계: 취향 점수
  tasteScores: Partial<Record<TasteDomain, number>>;
  // 3단계: 추천 역할 및 호불호 판단
  proposedRoles: ProposedRole[];
  dynamicStep3Trials: Record<string, Trial>;
  judgedRoles: RoleJudgment[];

  activeWhisper: WhisperCost | null;
  activeFx: FxType;
  timerSeconds: number;
  isTimerRunning: boolean;
  chronicleResult: ChronicleResult | null;
  isCompleted: boolean;
  unlockModal: UnlockModalState | null;

  // Actions
  startQuest: () => void;
  selectOption: (option: MonologueOption) => void;
  proceedFromUnlock: () => void;
  rewindTo: (trialId: string) => void;
  rewindToPrevious: () => void;
  openWhisper: (whisper: WhisperCost) => void;
  closeWhisper: () => void;
  triggerFx: (fx: FxType) => void;
  decrementTimer: () => void;
  resetTimer: () => void;
  calculateChronicle: () => ChronicleResult;
  resetQuest: () => void;
}

export const useQuestStore = create<QuestState>()(
  persist(
    (set, get) => ({
      currentTrialId: 't1_1',
      history: [],
      decisions: {},
      temperamentScores: {},
      tasteScores: {},
      proposedRoles: [],
      dynamicStep3Trials: {},
      judgedRoles: [],
      activeWhisper: null,
      activeFx: 'none',
      timerSeconds: 10,
      isTimerRunning: true,
      chronicleResult: null,
      isCompleted: false,
      unlockModal: null,

      startQuest: () => {
        const initialTrial = STATIC_TRIALS['t1_1'];
        set({
          currentTrialId: 't1_1',
          history: [],
          decisions: {},
          temperamentScores: {},
          tasteScores: {},
          proposedRoles: [],
          dynamicStep3Trials: {},
          judgedRoles: [],
          activeWhisper: null,
          activeFx: initialTrial ? initialTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          chronicleResult: null,
          isCompleted: false,
          unlockModal: null
        });
      },

      selectOption: (option) => {
        const {
          currentTrialId,
          history,
          decisions,
          temperamentScores,
          tasteScores,
          proposedRoles,
          dynamicStep3Trials,
          judgedRoles
        } = get();

        // 1. 기질 점수 누적
        const newTempScores = { ...temperamentScores };
        if (option.temperamentWeights) {
          Object.entries(option.temperamentWeights).forEach(([key, val]) => {
            const dim = key as TemperamentDimension;
            newTempScores[dim] = (newTempScores[dim] || 0) + (val || 0);
          });
        }

        // 2. 취향 점수 누적
        const newTasteScores = { ...tasteScores };
        if (option.tasteWeights) {
          Object.entries(option.tasteWeights).forEach(([key, val]) => {
            const domain = key as TasteDomain;
            newTasteScores[domain] = (newTasteScores[domain] || 0) + (val || 0);
          });
        }

        // 3. 3단계 호불호 판단 기록
        const newJudgedRoles = [...judgedRoles];
        if (currentTrialId.startsWith('t3_')) {
          const index = parseInt(currentTrialId.replace('t3_', ''), 10) - 1;
          const targetRole = proposedRoles[index];
          if (targetRole) {
            newJudgedRoles.push({
              role: targetRole,
              preference: option.id === 'A' ? 'like' : 'dislike'
            });
          }
        }

        // 4. 결정 기록
        const newDecisions = {
          ...decisions,
          [currentTrialId]: {
            optionId: option.id,
            text: option.text,
            reaction: option.reactionText
          }
        };

        const newHistory = [...history, currentTrialId];

        // 5. 스텝 전환 잠금해제 트리거 확인
        if (option.nextTrialId === 'UNLOCK_STEP2') {
          set({
            decisions: newDecisions,
            history: newHistory,
            temperamentScores: newTempScores,
            tasteScores: newTasteScores,
            isTimerRunning: false,
            unlockModal: {
              isOpen: true,
              unlockedStep: 2,
              nextTrialId: 't2_1'
            }
          });
          return;
        }

        if (option.nextTrialId === 'UNLOCK_STEP3') {
          // 1단계 기질 × 2단계 취향을 교차하여 3단계 추천 역할 및 시련 동적 생성!
          const generated = generateProposedRoles(newTempScores, newTasteScores);
          const dynamicTrials: Record<string, Trial> = {};
          generated.forEach((role, idx) => {
            const trial = createStep3TrialFromRole(role, idx, generated.length);
            dynamicTrials[trial.id] = trial;
          });

          set({
            decisions: newDecisions,
            history: newHistory,
            temperamentScores: newTempScores,
            tasteScores: newTasteScores,
            proposedRoles: generated,
            dynamicStep3Trials: dynamicTrials,
            isTimerRunning: false,
            unlockModal: {
              isOpen: true,
              unlockedStep: 3,
              nextTrialId: 't3_1'
            }
          });
          return;
        }

        // 6. 종착지(CHRONICLE) 확인
        if (option.nextTrialId === 'CHRONICLE') {
          const result = synthesizeChronicle(newTempScores, newTasteScores, newJudgedRoles);
          set({
            decisions: newDecisions,
            history: newHistory,
            temperamentScores: newTempScores,
            tasteScores: newTasteScores,
            judgedRoles: newJudgedRoles,
            chronicleResult: result,
            isCompleted: true,
            isTimerRunning: false
          });
          return;
        }

        // 7. 일반 다음 시련으로 전진
        const nextTrial = getResolvedTrial(option.nextTrialId, dynamicStep3Trials);
        set({
          currentTrialId: option.nextTrialId,
          history: newHistory,
          decisions: newDecisions,
          temperamentScores: newTempScores,
          tasteScores: newTasteScores,
          judgedRoles: newJudgedRoles,
          activeFx: nextTrial ? nextTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          activeWhisper: null
        });
      },

      proceedFromUnlock: () => {
        const { unlockModal, dynamicStep3Trials } = get();
        if (!unlockModal) return;

        const nextTrialId = unlockModal.nextTrialId;
        const nextTrial = getResolvedTrial(nextTrialId, dynamicStep3Trials);

        set({
          unlockModal: null,
          currentTrialId: nextTrialId,
          activeFx: nextTrial ? nextTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          activeWhisper: null
        });
      },

      rewindTo: (trialId) => {
        const { history, decisions, dynamicStep3Trials } = get();
        const targetIndex = history.indexOf(trialId);
        if (targetIndex === -1 && trialId !== 't1_1') return;

        const newHistory = targetIndex === -1 ? [] : history.slice(0, targetIndex);
        const newDecisions = { ...decisions };
        Object.keys(newDecisions).forEach((key) => {
          if (!newHistory.includes(key)) {
            delete newDecisions[key];
          }
        });

        const targetTrial = getResolvedTrial(trialId, dynamicStep3Trials);
        set({
          currentTrialId: trialId,
          history: newHistory,
          decisions: newDecisions,
          activeFx: targetTrial ? targetTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          activeWhisper: null,
          unlockModal: null
        });
      },

      rewindToPrevious: () => {
        const { history, rewindTo } = get();
        if (history.length === 0) return;
        const previousTrialId = history[history.length - 1];
        rewindTo(previousTrialId);
      },

      openWhisper: (whisper) => set({ activeWhisper: whisper }),
      closeWhisper: () => set({ activeWhisper: null }),
      triggerFx: (fx) => set({ activeFx: fx }),
      decrementTimer: () => {
        const { timerSeconds, isTimerRunning } = get();
        if (!isTimerRunning) return;
        if (timerSeconds <= 1) {
          set({ timerSeconds: 0 });
        } else {
          set({ timerSeconds: timerSeconds - 1 });
        }
      },
      resetTimer: () => set({ timerSeconds: 10, isTimerRunning: true }),

      calculateChronicle: () => {
        const { temperamentScores, tasteScores, judgedRoles } = get();
        const result = synthesizeChronicle(temperamentScores, tasteScores, judgedRoles);
        set({ chronicleResult: result, isCompleted: true });
        return result;
      },

      resetQuest: () => {
        get().startQuest();
      }
    }),
    {
      name: 'quest-storage',
      partialize: (state) => ({
        currentTrialId: state.currentTrialId,
        history: state.history,
        decisions: state.decisions,
        temperamentScores: state.temperamentScores,
        tasteScores: state.tasteScores,
        proposedRoles: state.proposedRoles,
        dynamicStep3Trials: state.dynamicStep3Trials,
        judgedRoles: state.judgedRoles,
        chronicleResult: state.chronicleResult,
        isCompleted: state.isCompleted
      })
    }
  )
);
