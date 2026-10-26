'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChronicleResult, CompassDimension, FxType, MonologueOption, WhisperCost } from '@/types/quest';
import { STEP3_TRIALS } from '@/data/story/step3_conflict';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';

const INITIAL_SCORES: Record<CompassDimension, number> = {
  strategic: 0,
  execution: 0,
  creativity: 0,
  collaboration: 0,
  resilience: 0
};

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

  // Actions
  startQuest: () => void;
  selectOption: (option: MonologueOption) => void;
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
      currentTrialId: 't3_1',
      history: [],
      decisions: {},
      scores: INITIAL_SCORES,
      activeWhisper: null,
      activeFx: 'none',
      timerSeconds: 10,
      isTimerRunning: true,
      chronicleResult: null,
      isCompleted: false,

      startQuest: () => {
        const initialTrial = STEP3_TRIALS['t3_1'];
        set({
          currentTrialId: 't3_1',
          history: [],
          decisions: {},
          scores: INITIAL_SCORES,
          activeWhisper: null,
          activeFx: initialTrial ? initialTrial.fx : 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          chronicleResult: null,
          isCompleted: false
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

        // 3. 종착지(CHRONICLE) 확인
        if (option.nextTrialId === 'CHRONICLE' || !STEP3_TRIALS[option.nextTrialId]) {
          const result = synthesizeChronicle(newScores);
          set({
            decisions: newDecisions,
            history: newHistory,
            scores: newScores,
            activeWhisper: null,
            activeFx: 'pulse',
            isTimerRunning: false,
            chronicleResult: result,
            isCompleted: true
          });
          return;
        }

        const nextTrial = STEP3_TRIALS[option.nextTrialId];

        set({
          currentTrialId: option.nextTrialId,
          history: newHistory,
          decisions: newDecisions,
          scores: newScores,
          activeWhisper: null,
          activeFx: nextTrial.fx,
          timerSeconds: 10,
          isTimerRunning: true
        });
      },

      rewindTo: (targetTrialId) => {
        const { history, decisions } = get();
        const targetIndex = history.indexOf(targetTrialId);
        if (targetIndex === -1 && targetTrialId !== 't3_1') return;

        const newHistory = targetTrialId === 't3_1' ? [] : history.slice(0, targetIndex);
        const newDecisions = { ...decisions };

        // 이후 결정들 정리
        Object.keys(newDecisions).forEach((tId) => {
          if (!newHistory.includes(tId) && tId !== targetTrialId) {
            delete newDecisions[tId];
          }
        });

        const targetTrial = STEP3_TRIALS[targetTrialId] || STEP3_TRIALS['t3_1'];

        set({
          currentTrialId: targetTrialId,
          history: newHistory,
          decisions: newDecisions,
          activeWhisper: null,
          activeFx: targetTrial.fx,
          timerSeconds: 10,
          isTimerRunning: true,
          isCompleted: false
        });
      },

      rewindToPrevious: () => {
        const { history } = get();
        if (history.length === 0) return;
        const prevTrialId = history[history.length - 1];
        get().rewindTo(prevTrialId);
      },

      openWhisper: (whisper) => set({ activeWhisper: whisper }),
      closeWhisper: () => set({ activeWhisper: null }),

      triggerFx: (fx) => set({ activeFx: fx }),

      decrementTimer: () => {
        const { timerSeconds, isTimerRunning } = get();
        if (!isTimerRunning) return;
        if (timerSeconds <= 1) {
          set({ timerSeconds: 0, isTimerRunning: false });
        } else {
          set({ timerSeconds: timerSeconds - 1 });
        }
      },

      resetTimer: () => set({ timerSeconds: 10, isTimerRunning: true }),

      calculateChronicle: () => {
        const { scores } = get();
        const result = synthesizeChronicle(scores);
        set({ chronicleResult: result });
        return result;
      },

      resetQuest: () => {
        set({
          currentTrialId: 't3_1',
          history: [],
          decisions: {},
          scores: INITIAL_SCORES,
          activeWhisper: null,
          activeFx: 'none',
          timerSeconds: 10,
          isTimerRunning: true,
          chronicleResult: null,
          isCompleted: false
        });
      }
    }),
    {
      name: 'mind-quest-storage'
    }
  )
);
