import { Trial, TasteDomain, TasteProfile } from '@/types/quest';

export const STEP2_TRIALS: Record<string, Trial> = {
  t2_1: {
    id: 't2_1',
    step: 2,
    stepTitle: '2단계: 취향 & 관심 주제 탐색',
    trialNumber: 1,
    chapterTitle: '지식의 아카이브 (지적 호기심의 갈림길)',
    backgroundScene:
      '회랑의 문이 열리며 거대한 도서관이 나타났다. 한쪽 서가에는 복잡한 기계와 코드, 자동화 시스템의 청사진이 꽂혀 있고, 다른 쪽 서가에는 인간의 마음, 역사, 철학, 무의식을 파헤친 고서들이 꽂혀 있다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"기술과 아키텍처의 설계도에 먼저 손이 간다. 보이지 않는 메커니즘과 새로운 도구의 원리를 탐구하고 싶다."',
        whisper: {
          gain: '현대 문명을 지배하는 강력한 기술적 레버리지',
          cost: '인간적 정서나 인문학적 깊이에 대한 거리감'
        },
        tasteWeights: { tech_systems: 4, craft_creation: 2 },
        nextTrialId: 't2_2',
        reactionText: '시스템의 논리적 뼈대와 작동 원리를 보며 지적 도파민이 차오른다.'
      },
      {
        id: 'B',
        text: '"인간의 마음과 서사를 다룬 책에 이끌린다. 사람이 왜 그렇게 행동하고 무엇에 흔들리는지 그 심연을 읽고 싶다."',
        whisper: {
          gain: '사람의 마음을 움직이는 깊은 공감과 스토리텔링',
          cost: '정량적 시스템 구축에 필요한 기술적 지연'
        },
        tasteWeights: { human_narrative: 4, knowledge_curation: 2 },
        nextTrialId: 't2_2',
        reactionText: '활자 너머에 숨겨진 인간 본성의 맥박을 짚으며 사색에 잠긴다.'
      }
    ]
  },

  t2_2: {
    id: 't2_2',
    step: 2,
    stepTitle: '2단계: 취향 & 관심 주제 탐색',
    trialNumber: 2,
    chapterTitle: '가치의 용광로 (자본과 미학)',
    backgroundScene:
      '중앙 광장으로 걸어 나왔다. 한편에서는 시장의 수요를 분석하고 자본의 승수를 극대화하는 전략 회의가 열리고 있고, 다른 편에서는 사람의 감각을 마비시킬 만큼 아름다운 디자인과 예술적 완성도를 다듬는 공방이 있다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"자본의 흐름과 비즈니스 모델에 눈길이 머문다. 작은 자원으로 큰 가치를 만들어내는 교환의 법칙을 파악하고 싶다."',
        whisper: {
          gain: '현실 세계에서 생존하고 승리하는 강력한 자본화 감각',
          cost: '순수 미학적 완결성에 대한 타협'
        },
        tasteWeights: { business_capital: 4, tech_systems: 1 },
        nextTrialId: 't2_3',
        reactionText: '시장의 보이지 않는 손과 구조적 기회를 관찰하며 눈빛이 예리해진다.'
      },
      {
        id: 'B',
        text: '"감각을 사로잡는 아름다움과 디테일 공방으로 향한다. 조잡한 10개보다 영혼이 담긴 단 하나의 완성도에 전율한다."',
        whisper: {
          gain: '대체 불가능한 독창성과 감각적 품격',
          cost: '완벽을 기하느라 길어지는 제작 주기와 현실적 타협'
        },
        tasteWeights: { art_aesthetics: 4, craft_creation: 2 },
        nextTrialId: 't2_3',
        reactionText: '모서리의 각도와 색채의 조화 속에서 형언할 수 없는 평온을 찾는다.'
      }
    ]
  },

  t2_3: {
    id: 't2_3',
    step: 2,
    stepTitle: '2단계: 취향 & 관심 주제 탐색',
    trialNumber: 3,
    chapterTitle: '창조의 작업대 (활동 양식의 선호)',
    backgroundScene:
      '신비로운 작업대 위에 백지와 정리되지 않은 수만 권의 양피지가 놓여 있다. 당신의 손에 주어진 시간은 한정되어 있다. 당신은 어떤 작업에 착수하고 싶은가?',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"아무것도 없는 백지 위에 나만의 새로운 서비스나 창작물을 0에서 1로 직접 빌드해 올리고 싶다."',
        whisper: {
          gain: '세상에 없던 것을 빚어내는 창조자의 순수한 기쁨',
          cost: '정돈되지 않은 모호함과 수많은 시행착오의 피로'
        },
        tasteWeights: { craft_creation: 4, tech_systems: 2 },
        nextTrialId: 't2_4',
        reactionText: '첫 번째 벽돌돌을 쌓아 올리며 무에서 유가 태어나는 쾌감을 맛본다.'
      },
      {
        id: 'B',
        text: '"흩어진 정보와 지식의 파편들을 꿰뚫어, 누구나 한눈에 본질을 짚을 수 있는 압축된 지도로 정리하고 싶다."',
        whisper: {
          gain: '복잡한 세상을 한눈에 조망하게 돕는 정제된 지적 가치',
          cost: '직접 프로덕트를 빌드하는 물리적 창작감의 감소'
        },
        tasteWeights: { knowledge_curation: 4, human_narrative: 2 },
        nextTrialId: 't2_4',
        reactionText: '뒤엉킨 실타래를 풀어 하나의 정갈한 체계로 엮어내며 안도감을 느낀다.'
      }
    ]
  },

  t2_4: {
    id: 't2_4',
    step: 2,
    stepTitle: '2단계: 취향 & 관심 주제 탐색',
    trialNumber: 4,
    chapterTitle: '가장 깊은 희열 (몰입의 촉매)',
    backgroundScene:
      '해가 저물고 작업의 결과물을 바라본다. 당신의 영혼이 진정으로 "이 시간은 참으로 값졌다"고 느끼는 결정적인 순간은 무엇인가?',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"내가 잠든 사이에도 혼자서 빈틈없이 돌아가는 시스템이나 자동화된 도구를 완성해 두었을 때."',
        whisper: {
          gain: '시간과 공간을 초월하는 자율적 레버리지의 희열',
          cost: '사람들과 직접 나누는 온기와 감정 교류의 부재'
        },
        tasteWeights: { tech_systems: 3, business_capital: 3 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '물 흐르듯 작동하는 시스템을 바라보며 깊은 지적 안식을 얻는다.'
      },
      {
        id: 'B',
        text: '"내가 남긴 생각, 글, 결과물을 접한 사람이 \'내 삶의 막힌 매듭이 풀렸다\'고 감사를 보내올 때."',
        whisper: {
          gain: '인간과 인간 사이에 흐르는 가장 깊은 울림과 연결감',
          cost: '타인의 반응과 피드백에 영향을 받을 수 있는 감정선'
        },
        tasteWeights: { human_narrative: 3, art_aesthetics: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '타인의 가슴에 던진 작은 파문이 내면을 환하게 비춘다.'
      }
    ]
  }
};

export function determineTasteProfile(
  scores: Partial<Record<TasteDomain, number>>
): TasteProfile {
  const domains: { key: TasteDomain; label: string; score: number }[] = [
    { key: 'tech_systems', label: '기술 & 자동화 시스템', score: scores.tech_systems || 0 },
    { key: 'human_narrative', label: '인간 심리 & 서사 철학', score: scores.human_narrative || 0 },
    { key: 'business_capital', label: '비즈니스 & 자본 전략', score: scores.business_capital || 0 },
    { key: 'art_aesthetics', label: '예술 & 감각적 미학', score: scores.art_aesthetics || 0 },
    { key: 'craft_creation', label: '0 to 1 프로덕트 빌딩', score: scores.craft_creation || 0 },
    { key: 'knowledge_curation', label: '지식 구조화 & 큐레이션', score: scores.knowledge_curation || 0 }
  ];

  domains.sort((a, b) => b.score - a.score);

  const primary = domains[0];
  const secondary = domains[1];

  let activityStyle = '0 to 1의 독창적 창조와 직접 구현';
  if ((scores.knowledge_curation || 0) > (scores.craft_creation || 0)) {
    activityStyle = '복잡한 지식과 파편화된 정보를 체계적으로 압축·큐레이션하는 분석적 정돈';
  } else if ((scores.business_capital || 0) > 4) {
    activityStyle = '시장 가치를 극대화하고 최소 자원으로 지렛대를 만드는 전략적 설계';
  }

  let catalyst = '복잡한 문제를 단 하나의 우아한 시스템으로 풀어낼 때';
  if (primary.key === 'human_narrative') {
    catalyst = '사람의 깊은 결핍을 짚어내고 그 마음에 거대한 울림을 주었을 때';
  } else if (primary.key === 'art_aesthetics') {
    catalyst = '남들이 미처 보지 못한 감각적 디테일과 완성도로 감탄을 이끌어낼 때';
  } else if (primary.key === 'business_capital') {
    catalyst = '자본과 자원의 흐름을 읽어내어 폭발적인 가치 승수를 증명했을 때';
  }

  return {
    primaryDomain: primary.label,
    secondaryDomain: secondary.label,
    preferredActivityStyle: activityStyle,
    intellectualCatalyst: catalyst,
    tasteSummary: `${primary.label} 영역을 코어로 삼고, ${secondary.label} 요소를 결합할 때 지적 몰입이 극대화되는 취향 스펙트럼`
  };
}
