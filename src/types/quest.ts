export type CompassDimension =
  | 'strategic'     // 분석적 탐구 / 구조화 (원리와 시스템)
  | 'execution'     // 실용적 돌파 / 현실 구현 (도구 제작 및 빠른 실행)
  | 'creativity'    // 직관적 창작 / 감각적 개척 (아이디어와 변주)
  | 'collaboration' // 공감적 연대 / 휴먼 터치 (사람과 커뮤니티)
  | 'resilience';   // 몰입 지속성 / 자율 독립성 (끈기와 독자 생존);

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
  nextTrialId: string; // 분기 경로 (다음 시련 ID, 'UNLOCK_STEP2' | 'UNLOCK_STEP3' | 'CHRONICLE' 등)
  reactionText: string; // 선택 직후 내면의 호흡/반응
}

export interface Trial {
  id: string;
  step: 1 | 2 | 3;
  stepTitle: string;
  trialNumber: number;
  chapterTitle: string;
  backgroundScene: string; // MUD 소설형 현장 상황 묘사 (1인칭 관찰/상황)
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

export interface AiWorkDomain {
  category: string;       // 카테고리명 (예: "1인 AI 마이크로 서비스 빌더")
  fitReason: string;      // 기질 및 취향과의 궁합 이유
  recommendedTools: string[]; // 추천 AI 및 노코드 툴 (Cursor, v0, Claude, n8n 등)
  actionItem: string;     // 오늘 당장 시작할 수 있는 첫걸음
}

export interface ChronicleResult {
  step1: StepProfile; // 1. 근본 기질
  step2: StepProfile; // 2. 취향 & 몰입 동기
  step3: StepProfile; // 3. 적합 업무 영역
  grandTitle: string; // 나의 코어 아이덴티티
  grandEpithet: string;
  corePhilosophy: string;
  decisionPattern: string;
  aiWorkDomains: AiWorkDomain[]; // AI 시대 최적 업무 카테고리 3선
  synergyRoles: string[]; // 참고용 협업/포지셔닝 키워드
  blindSpots: string[]; // 주의점 / 보완할 점
  aiCollaborationGuide: string; // AI 도구 활용 가이드 (내 기질에서 AI를 비서로 부리는 법)
  jarvisChronicleEpilogue: string;
  scores: Record<CompassDimension, number>;
  radarData: { dimension: string; label: string; score: number; fullMark: number }[];
}
