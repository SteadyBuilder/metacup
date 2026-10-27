import { Trial } from '@/types/quest';
import { STEP1_TRIALS } from './step1_origin';
import { STEP2_TRIALS } from './step2_taste';

export const STATIC_TRIALS: Record<string, Trial> = {
  ...STEP1_TRIALS,
  ...STEP2_TRIALS
};

export const ALL_TRIALS = STATIC_TRIALS;

export function getResolvedTrial(
  trialId: string,
  dynamicStep3Trials?: Record<string, Trial>
): Trial {
  if (dynamicStep3Trials && dynamicStep3Trials[trialId]) {
    return dynamicStep3Trials[trialId];
  }
  return STATIC_TRIALS[trialId] || STATIC_TRIALS['t1_1'];
}
