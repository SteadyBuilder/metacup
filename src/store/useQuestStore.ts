'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChronicleResult, CompassDimension, FxType, MonologueOption, WhisperCost } from '@/types/quest';
import { ALL_TRIALS } from '@/data/story/allTrials';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';

const INITIAL_SCORES: Record<CompassDimension, number> = {
  strategic: 0,
  execution: 0,
  creativity: 0,
  collaboration: 0,
  resilience: 0
};

export interface UnlockModalState {
  isOpen: boolean;
  unlockedStep: 2 | 3;
  nextTrialId: string;
}

interface QuestState {
  currentTrialId: string;
  history: string[]; // 이전 시련 ID 목록 (⏪ 여정의 지도 되감기 지원)
  decisions: Record<string, { optionId: 'A' | 'B'; text: string; reaction: string }>;
  scores: Record<CompassDimension, number>;
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
      scores: INITIAL_SCORES,
      activeWhisper: null,
      activeFx: 'none',
      timerSeconds: 10,
      isTimerRunning: true,
      chronicleResult: null,
      isCompleted: false,
      unlockModal: null,

      startQuest: () => {
        const initialTrial = ALL_TRIALS['t1_1'];
        set({
          currentTrialId: 't1_1',
          history: [],
          decisions: {},
          scores: INITIAL_SCORES,
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
        const { currentTrialId, history, decisions, scores } = get();

        // 1. 점수 누적
        const newScores = { ...scores };
        Object.entries(option.weights).forEach(([key, val]) => {
          const dim = key as CompassDimension;
          newScores[dim] = (newScores[dim] || 0) + (val || 0);
        });

        // 2. 결정 기록
        const newDecisions = {
          ...decisions,
          [currentTrialId]: {
            optionId: option.id,
            text: option.text,
            reaction: option.reactionText
          }
        };

        const newHistory = [...history, currentTrialId];

        // 3. 스텝 전환 잠금해제 트리거 확인
        if (option.nextTrialId === 'UNLOCK_STEP2') {
          set({
            decisions: newDecisions,
            history: newHistory,
            scores: newScores,
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
          set({
            decisions: newDecisions,
            history: newHistory,
            scores: newScores,
            isTimerRunning: false,
            unlockModal: {
              isOpen: true,
              unlockedStep: 3,
              nextTrialId: 't3_1'
            }
          });
          return;
        }

        // 4. 종착지(CHRONICLE) 확인
        if (option.nextTrialId === 'CHRONICLE' || !ALL_TRIALS[option.nextTrialId]) {
          const result = synthesizeChronicle(newScores);
          set({
            decisions: newDecisions,
            history: newHistory,
            scores: newScores,
            chronicleResult: result,
            isCompleted: true,
            isTimerRunning: false
          });
          return;
        }

        // 5. 일반 다음 시련으로 전진
        const nextTrial = ALL_TRIALS[option.nextTrialId];
        set({
          currentTrialId: option.nextTrialId,
          history: newHistory,
          decisions: newDecisions,
          scores: newScores,
          activeFx: nextTrial ? nextTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          activeWhisper: null
        });
      },

      proceedFromUnlock: () => {
        const { unlockModal } = get();
        if (!unlockModal) return;

        const nextTrialId = unlockModal.nextTrialId;
        const nextTrial = ALL_TRIALS[nextTrialId];

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
        const { history, decisions } = get();
        const targetIndex = history.indexOf(trialId);
        if (targetIndex === -1 && trialId !== 't1_1') return;

        // targetIndex 이후의 기록 제거
        const newHistory = targetIndex === -1 ? [] : history.slice(0, targetIndex);
        const newDecisions = { ...decisions };
        Object.keys(newDecisions).forEach((key) => {
          if (!newHistory.includes(key)) {
            delete newDecisions[key];
          }
        });

        const targetTrial = ALL_TRIALS[trialId] || ALL_TRIALS['t1_1'];
        set({
          currentTrialId: trialId,
          history: newHistory,
          decisions: newDecisions,
          activeFx: targetTrial ? targetTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          activeWhisper: null,
          isCompleted: false,
          unlockModal: null
        });
      },

      rewindToPrevious: () => {
        const { history } = get();
        if (history.length === 0) return;
        const previousTrialId = history[history.length - 1];
        get().rewindTo(previousTrialId);
      },

      openWhisper: (whisper) => {
        set({ activeWhisper: whisper });
      },

      closeWhisper: () => {
        set({ activeWhisper: null });
      },

      triggerFx: (fx) => {
        set({ activeFx: fx });
      },

      decrementTimer: () => {
        const { timerSeconds, isTimerRunning } = get();
        if (!isTimerRunning) return;
        if (timerSeconds <= 1) {
          set({ timerSeconds: 0 });
        } else {
          set({ timerSeconds: timerSeconds - 1 });
        }
      },

      resetTimer: () => {
        set({ timerSeconds: 10, isTimerRunning: true });
      },

      calculateChronicle: () => {
        const { scores } = get();
        const result = synthesizeChronicle(scores);
        set({ chronicleResult: result, isCompleted: true });
        return result;
      },

      resetQuest: () => {
        const initialTrial = ALL_TRIALS['t1_1'];
        set({
          currentTrialId: 't1_1',
          history: [],
          decisions: {},
          scores: INITIAL_SCORES,
          activeWhisper: null,
          activeFx: initialTrial ? initialTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          chronicleResult: null,
          isCompleted: false,
          unlockModal: null
        });
      }
    }),
    {
      name: 'quest-compass-storage',
      partialize: (state) => ({
        currentTrialId: state.currentTrialId,
        history: state.history,
        decisions: state.decisions,
        scores: state.scores,
        chronicleResult: state.chronicleResult,
        isCompleted: state.isCompleted
      })
    }
  )
);
