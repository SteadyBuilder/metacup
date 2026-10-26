export type CompassDimension =
  | 'strategic'     // 전략적 혜안 (통찰/구조화)
  | 'execution'     // 실행 돌파력 (결단/방어선)
  | 'creativity'    // 유연한 기동성 (임기응변/창의)
  | 'collaboration' // 조화로운 연대 (동료애/조직 소통)
  | 'resilience';   // 불굴의 회복력 (임계점 돌파/마지노선)

export type FxType = 'none' | 'shake' | 'warning' | 'pulse';

export interface WhisperCost {
  gain: string; // 얻는 가치
  cost: string; // 치를 대가
}

export interface MonologueOption {
  id: 'A' | 'B';
  text: string; // 1인칭 내면 독백 지문 (따옴표 "...")
  whisper: WhisperCost; // 🔍 [속삭임] 기회비용
  weights: Partial<Record<CompassDimension, number>>;
  nextTrialId: string; // 분기 경로 (다음 시련 ID)
  reactionText: string; // 선택 직후 내면의 호흡/반응
}

export interface Trial {
  id: string;
  step: 1 | 2 | 3;
  stepTitle: string;
  trialNumber: number;
  chapterTitle: string;
  backgroundScene: string; // MUD 소설형 현장 상황 묘사 (질문문 배제)
  fx: FxType;
  options: [MonologueOption, MonologueOption];
}

export interface StepProfile {
  step: number;
  stepName: string;
  archetypeTitle: string;
  englishTitle: string;
  coreTraits: string[];
  summary: string;
}

export interface ChronicleResult {
  step1: StepProfile;
  step2: StepProfile;
  step3: StepProfile;
  grandTitle: string;
  grandEpithet: string;
  corePhilosophy: string;
  decisionPattern: string;
  synergyRoles: string[];
  blindSpots: string[];
  jarvisChronicleEpilogue: string;
  scores: Record<CompassDimension, number>;
  radarData: { dimension: string; label: string; score: number; fullMark: number }[];
}
