import { Trial } from '@/types/quest';
import { STEP1_TRIALS } from './step1_origin';
import { STEP2_TRIALS } from './step2_tactics';
import { STEP3_TRIALS } from './step3_conflict';

export const ALL_TRIALS: Record<string, Trial> = {
  ...STEP1_TRIALS,
  ...STEP2_TRIALS,
  ...STEP3_TRIALS
};
