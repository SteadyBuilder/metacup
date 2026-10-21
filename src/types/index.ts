export type DimensionKey = 'strategic' | 'execution' | 'creativity' | 'collaboration' | 'resilience';

export interface DimensionScores {
  strategic: number;
  execution: number;
  creativity: number;
  collaboration: number;
  resilience: number;
}

export interface TournamentOption {
  id: 'A' | 'B';
  title: string;
  subtitle: string;
  badge: string;
  weights: Partial<DimensionScores>;
  jarvisReaction: string;
}

export interface TournamentRound {
  id: number;
  roundNumber: number;
  theme: string;
  jarvisPrompt: string;
  optionA: TournamentOption;
  optionB: TournamentOption;
}

export interface SubjectiveInputs {
  immersion: string;
  petPeeve: string;
}

export interface CareerPathway {
  role: string;
  matchScore: number;
  category: string;
  reason: string;
  nextAction: string;
  recommendedSkills: string[];
}

export interface ArchetypeResult {
  code: string;
  name: string;
  tagline: string;
  summary: string;
  keyStrengths: string[];
  blindSpots: string[];
  jarvisVerdict: string;
  scores: DimensionScores;
  radarData: { dimension: string; score: number; fullMark: number }[];
  careerPathways: CareerPathway[];
  subjectiveInsights?: {
    immersionAnalysis: string;
    energyPreservationAdvice: string;
  };
}
