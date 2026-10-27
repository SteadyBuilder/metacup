import {
  TemperamentDimension,
  TasteDomain,
  ProposedRole,
  Trial,
  RoleJudgment
} from '@/types/quest';

// 1단계(기질) × 2단계(취향) 조합에 따른 후보군 데이터베이스
export function generateProposedRoles(
  tempScores: Partial<Record<TemperamentDimension, number>>,
  tasteScores: Partial<Record<TasteDomain, number>>
): ProposedRole[] {
  const isDeep = (tempScores.cognitive_depth || 0) >= (tempScores.intuitive_flow || 0);
  const isSolo = (tempScores.autonomous_focus || 0) >= (tempScores.relational_spark || 0);
  const isLogic = (tempScores.logical_rigor || 0) >= (tempScores.value_driven || 0);

  const roles: ProposedRole[] = [];

  // 후보 1: 시스템 & 자동화 아키텍트 계열
  if ((tasteScores.tech_systems || 0) >= 3 || isLogic) {
    roles.push({
      id: 'role_sys_architect',
      title: '⚡ 지능형 시스템 & AI 워크플로우 아키텍트',
      tagline: '사람의 개입 없이도 정교하게 맞물려 돌아가는 자율적 파이프라인 구축자',
      description:
        '반복적이고 번거로운 수작업을 질색하며, API·AI 에이전트·자동화 도구를 엮어 한 번 구축하면 영구히 돌아가는 백엔드 시스템과 비즈니스 파이프라인을 설계합니다.',
      fitReason: isDeep
        ? '현상의 인과관계를 꿰뚫고 구조적 군더더기를 없애는 Sir의 깊은 사유 기질과 기술 시스템 취향의 완벽한 합치'
        : '복잡한 과정을 직관적으로 연결하여 즉각적인 효율을 뽑아내는 기질적 강점 발휘',
      dailyReality:
        '화려한 겉포장보다는 데이터의 흐름, 자동화 트리거, 시스템 예외 처리와 로직의 무결성을 점검하는 정적이고 몰입도 높은 하루',
      requiredAction: '내가 매주 1시간 이상 소모하는 번거로운 일 1개를 정해 n8n/Python으로 완전 자동화 스크립트 작성해보기'
    });
  }

  // 후보 2: 1인 마이크로 프로덕트 / 유틸리티 빌더 계열
  roles.push({
    id: 'role_solo_builder',
    title: '🛠️ 1인 독립 마이크로 서비스 & 프로덕트 빌더',
    tagline: '조직의 번잡한 결재 없이 내 손으로 직접 0에서 1을 빚어내는 솔로 메이커',
    description:
      '시장과 일상의 가려운 곳을 찾아내어, AI 코딩 어시스턴트와 최신 툴을 활용해 며칠 만에 작동하는 웹서비스나 유틸리티를 독립적으로 런칭하고 운영합니다.',
    fitReason: isSolo
      ? '타인의 참견이나 긴 회의에 에너지를 뺏기지 않고, 자율적인 통제권을 쥐고 있을 때 폭발하는 고유한 몰입 기질'
      : '세상과의 접점을 직접적인 제품으로 만들어내고자 하는 창작 본능',
    dailyReality:
      '기획, 개발, UI, 배포까지 전 과정을 혼자 조율하며 온전한 주체성을 누리는 대신, 혼자서 모든 버그와 마주해야 하는 책임감',
    requiredAction: '기존에 불편했던 문제를 해결하는 1페이지짜리 미니 웹툴을 주말 동안 완성해보기'
  });

  // 후보 3: 지식 아카이브 & 통찰 큐레이터 계열
  if ((tasteScores.knowledge_curation || 0) >= 3 || (tasteScores.human_narrative || 0) >= 3 || isDeep) {
    roles.push({
      id: 'role_knowledge_curator',
      title: '📚 버티컬 지식 지도 & 심층 통찰 아키비스트',
      tagline: '소음이 가득한 세상에서 본질만을 정제하여 압축된 지적 나침반을 제공하는 큐레이터',
      description:
        '방대한 정보와 파편화된 지식 속에서 핵심 뼈대를 추출하고, 이를 누구나 직관적으로 이해할 수 있는 독자적인 지식 베이스나 치트시트, 디지털 자산으로 엮어냅니다.',
      fitReason:
        '단편적인 유행에 흔들리지 않고 깊은 원리를 탐구하여 질서를 세우는 본능과 정돈된 지식을 사랑하는 지적 취향의 결합',
      dailyReality:
        '수많은 문서와 자료의 핵심을 추출하고, Notion이나 아카이브 도구에 나만의 체계적인 카테고리로 지식을 정돈하는 지적 정진의 시간',
      requiredAction: '내가 알고 있는 가장 자신 있는 전문 지식을 1장의 완결된 마인드맵/다이어그램으로 요약해보기'
    });
  }

  // 후보 4: 비즈니스 전략 & 자본 레버리지 설계자
  if ((tasteScores.business_capital || 0) >= 3 || isLogic) {
    roles.push({
      id: 'role_capital_strategist',
      title: '📈 비즈니스 메커니즘 & 자본 레버리지 설계자',
      tagline: '노동 시간의 단순 교환을 넘어, 최소 자원으로 최대 승수를 만드는 가치 교환의 룰 메이커',
      description:
        '사람들이 기꺼이 돈과 시간을 지불하는 가치의 병목을 포착하고, 디지털 에셋·자동화 세일즈 펀널을 결합해 지속 가능한 수익화 엔진을 직조합니다.',
      fitReason:
        '효율과 인과관계를 중시하는 이성적 판단 기질과 시장의 메커니즘을 분석하고자 하는 현실 감각의 결합',
      dailyReality:
        '숫자와 지표, 전환율, 가격 결정 구조를 들여다보며 비효율적인 단계를 쳐내고 마진을 극대화하는 계산적 일상',
      requiredAction: '기존에 무료로 제공되던 어떤 가치를 패키징하여 첫 결제 링크(Stripe/스마트스토어 등)를 붙여보기'
    });
  }

  // 후보 5: 감각적 경험 & 스토리텔링 디자이너
  if ((tasteScores.art_aesthetics || 0) >= 3 || (tasteScores.human_narrative || 0) >= 4) {
    roles.push({
      id: 'role_aesthetic_storyteller',
      title: '🎨 감각적 서사 & 인터랙티브 경험 디자이너',
      tagline: '사람의 마음을 뒤흔드는 깊은 미학과 스토리텔링으로 고유한 세계관을 빚어내는 창작자',
      description:
        '단순한 기능을 넘어 사용자가 마주하는 첫인상, 텍스트의 뉘앙스, 시각적 감도와 공간적 몰입감을 설계하여 잊히지 않는 감동을 선사합니다.',
      fitReason:
        '인간의 내면과 감각적 완성도에 깊게 공명하는 취향과 디테일을 타협하지 않는 영혼의 본능',
      dailyReality:
        '글자 하나의 어조, 여백과 색감의 미세한 조화, 사람들의 정서적 반응을 섬세하게 조율하는 감각적 집중의 연속',
      requiredAction: '내가 사랑하는 브랜드나 창작물의 감동 요소를 3줄의 원칙으로 정리하고 내 작업물에 이식해보기'
    });
  }

  // 최소 4개 보장
  return roles.slice(0, 4);
}

// 동적으로 생성된 추천 역할들을 3단계 시련(Trial) 객체로 변환
export function createStep3TrialFromRole(
  role: ProposedRole,
  trialIndex: number,
  totalCount: number
): Trial {
  const isLast = trialIndex === totalCount - 1;
  const nextTrialId = isLast ? 'CHRONICLE' : `t3_${trialIndex + 2}`;

  return {
    id: `t3_${trialIndex + 1}`,
    step: 3,
    stepTitle: '3단계: 추천 분야 호불호 판단',
    trialNumber: trialIndex + 1,
    chapterTitle: `미래의 갈림길 ${trialIndex + 1} / ${totalCount}`,
    backgroundScene: `1단계 기질과 2단계 취향이 교차하며 세 번째 성소의 거울에 구체적인 미래의 형상이 맺힙니다.\n\n[제안된 역할]: ${role.title}\n"${role.tagline}"\n\n📌 현실의 일상: ${role.description}\n🔍 매칭 이유: ${role.fitReason}\n⚖️ 일상의 호흡: ${role.dailyReality}\n\n이 역할을 매일의 주업무이자 삶의 방식으로 마주했을 때, 당신의 본능적 심장은 어떻게 반응합니까?`,
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: `"좋다. 가슴이 뛴다. 이 일의 현실적인 고단함과 책임까지 기꺼이 짊어질 열망이 솟는다."`,
        whisper: {
          gain: '내 기질과 취향이 100% 온전히 발휘되는 최적의 활로 확보',
          cost: '이 선택을 현실로 증명하기 위한 끈질긴 실행의 의무'
        },
        nextTrialId,
        reactionText: `본능의 승인을 확인했습니다. '${role.title}'을(를) 나의 최우선 경로로 새깁니다.`
      },
      {
        id: 'B',
        text: `"싫다. 피로하다. 머리로는 그럴듯해 보이지만, 매일 마주하기엔 내 영혼의 에너지가 고갈될 것 같다."`,
        whisper: {
          gain: '나에게 맞지 않는 불필요한 길을 사전에 과감히 배제하는 통찰',
          cost: '해당 영역이 줄 수 있는 기회비용의 포기'
        },
        nextTrialId,
        reactionText: `솔직한 거부감을 인정했습니다. 남들의 기준이 아닌 나만의 필터로 '${role.title}'을(를) 쳐냅니다.`
      }
    ]
  };
}
