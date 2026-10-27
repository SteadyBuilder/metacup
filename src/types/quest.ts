export type TemperamentDimension =
  | 'cognitive_depth'   // 깊은 사유와 구조적 원리 탐구 (vs 직관적 패턴)
  | 'intuitive_flow'    // 직관적 감각과 유연한 발상
  | 'autonomous_focus'  // 자율적 고독과 깊은 내적 몰입 (vs 관계적 연대)
  | 'relational_spark'  // 외부 교류와 사람 간의 시너지
  | 'logical_rigor'     // 논리적 엄밀함과 무결점 완결성 (vs 가치/감정)
  | 'value_driven'      // 철학적 가치와 내면의 진정성
  | 'bold_breakthrough' // 불확실성을 뚫는 모험과 기동성 (vs 신중한 안정)
  | 'prudent_refine';   // 신중한 검증과 점진적 고도화

export type TasteDomain =
  | 'tech_systems'     // 기술, 시스템, 아키텍처, 자동화
  | 'human_narrative'  // 인간 심리, 스토리텔링, 철학, 커뮤니케이션
  | 'business_capital' // 비즈니스, 자본, 전략, 시장 메커니즘
  | 'art_aesthetics'   // 예술, 미학, 감각적 디자인, 표현
  | 'craft_creation'   // 0 to 1 구현, 공예적 디테일, 프로덕트 제작
  | 'knowledge_curation'; // 방대한 지식의 구조화, 통찰 큐레이션

export type FxType = 'none' | 'shake' | 'warning' | 'pulse';

export interface WhisperCost {
  gain: string; // 얻는 가치
  cost: string; // 치를 대가
}

export interface MonologueOption {
  id: 'A' | 'B';
  text: string; // 1인칭 내면 독백 지문
  whisper: WhisperCost; // 🔍 [속삭임] 기회비용
  temperamentWeights?: Partial<Record<TemperamentDimension, number>>;
  tasteWeights?: Partial<Record<TasteDomain, number>>;
  nextTrialId: string; // 다음 시련 ID 또는 제어 키워드
  reactionText: string; // 선택 직후 내면의 호흡/반응
}

export interface Trial {
  id: string;
  step: 1 | 2 | 3;
  stepTitle: string; // 예: "1단계: 근본 기질 규명", "2단계: 취향 & 테마 탐색", "3단계: 추천 검증"
  trialNumber: number;
  chapterTitle: string;
  backgroundScene: string; // MUD 소설형 현장 상황 묘사
  fx: FxType;
  options: [MonologueOption, MonologueOption];
}

// 3단계: 추천 업무/역할에 대한 호불호 판단 아이템
export interface ProposedRole {
  id: string;
  title: string;          // 직무/분야명 (예: "1인 지식 아키텍트 & 자동화 빌더")
  tagline: string;        // 한 줄 슬로건
  description: string;    // 어떤 활동을 매일 하는지
  fitReason: string;      // 1단계 기질 & 2단계 취향과의 구체적 결합 이유
  dailyReality: string;   // 이 일을 할 때 마주하는 현실적 호흡
  requiredAction: string; // 오늘 당장 시도해볼 수 있는 첫걸음
}

export interface RoleJudgment {
  role: ProposedRole;
  preference: 'like' | 'dislike'; // 좋다(선호) vs 싫다(피로/비선호)
}

// 최종 1단계 기질 프로필
export interface TemperamentProfile {
  title: string;          // 아키타입 타이틀 (예: "심연의 본질을 꿰뚫는 전략적 사유가")
  epithet: string;        // 수식어
  coreTraits: string[];   // 기질적 핵심 특성 4가지
  deepEngine: string;     // 내면을 움직이는 근본 동력
  shadowPoint: string;    // 무의식적 그림자 / 스트레스 트리거
  energyRecharge: string; // 에너지가 채워지는 고유한 방식
}

// 최종 2단계 취향 프로필
export interface TasteProfile {
  primaryDomain: string;     // 1순위 관심 도메인
  secondaryDomain: string;   // 2순위 관심 도메인
  preferredActivityStyle: string; // 선호 활동 스타일 (0 to 1 빌더 vs 체계적 고도화자 등)
  intellectualCatalyst: string; // 지적 호기심이 폭발하는 순간
  tasteSummary: string;
}

// 최종 연대기 결과
export interface ChronicleResult {
  temperament: TemperamentProfile; // 1단계 근본 기질
  taste: TasteProfile;             // 2단계 취향 및 관심 테마
  judgedRoles: RoleJudgment[];     // 3단계에서 판단한 업무 후보군
  selectedBestRoles: ProposedRole[]; // Sir가 "좋다"고 선택한 최적의 경로
  discardedRoles: ProposedRole[];    // Sir가 "싫다"고 걸러낸 경로
  grandSynthesis: string;          // 종합 해설 (기질 × 취향 × 자가 검증의 결론)
  temperamentRadar: { axis: string; label: string; score: number; fullMark: number }[];
  tasteRadar: { domain: string; label: string; score: number; fullMark: number }[];
}
