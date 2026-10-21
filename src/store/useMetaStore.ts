'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { DimensionScores, SubjectiveInputs, ArchetypeResult } from '@/types';
import { determineArchetype } from '@/lib/archetypes';

const INITIAL_SCORES: DimensionScores = {
  strategic: 0,
  execution: 0,
  creativity: 0,
  collaboration: 0,
  resilience: 0
};

interface MetaState {
  currentRound: number;
  answers: Record<number, 'A' | 'B'>;
  scores: DimensionScores;
  subjectiveInputs: SubjectiveInputs;
  result: ArchetypeResult | null;
  isAnalyzing: boolean;

  // Actions
  selectOption: (roundIndex: number, optionKey: 'A' | 'B', weights: Partial<DimensionScores>) => void;
  goToRound: (roundIndex: number) => void;
  setSubjectiveInput: (field: keyof SubjectiveInputs, value: string) => void;
  computeResult: () => ArchetypeResult;
  setResult: (result: ArchetypeResult) => void;
  setIsAnalyzing: (val: boolean) => void;
  resetAll: () => void;
}

export const useMetaStore = create<MetaState>()(
  persist(
    (set, get) => ({
      currentRound: 0,
      answers: {},
      scores: INITIAL_SCORES,
      subjectiveInputs: {
        immersion: '',
        petPeeve: ''
      },
      result: null,
      isAnalyzing: false,

      selectOption: (roundIndex, optionKey, weights) => {
        const { answers, scores } = get();
        const prevAnswer = answers[roundIndex];

        // If user already answered this round, prevent double scoring or update
        // Simple update: recalculate from previous state
        const updatedAnswers = { ...answers, [roundIndex]: optionKey };

        const updatedScores: DimensionScores = {
          strategic: scores.strategic + (weights.strategic || 0),
          execution: scores.execution + (weights.execution || 0),
          creativity: scores.creativity + (weights.creativity || 0),
          collaboration: scores.collaboration + (weights.collaboration || 0),
          resilience: scores.resilience + (weights.resilience || 0)
        };

        set({
          answers: updatedAnswers,
          scores: updatedScores,
          currentRound: Math.min(15, roundIndex + 1)
        });
      },

      goToRound: (roundIndex) => {
        set({ currentRound: Math.max(0, Math.min(15, roundIndex)) });
      },

      setSubjectiveInput: (field, value) => {
        set((state) => ({
          subjectiveInputs: {
            ...state.subjectiveInputs,
            [field]: value
          }
        }));
      },

      computeResult: () => {
        const { scores, subjectiveInputs } = get();
        const calculated = determineArchetype(scores, subjectiveInputs);
        set({ result: calculated });
        return calculated;
      },

      setResult: (result) => set({ result }),
      setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),

      resetAll: () => {
        set({
          currentRound: 0,
          answers: {},
          scores: INITIAL_SCORES,
          subjectiveInputs: { immersion: '', petPeeve: '' },
          result: null,
          isAnalyzing: false
        });
      }
    }),
    {
      name: 'metacup-storage-v1',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
