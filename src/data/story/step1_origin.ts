import { Trial, TemperamentDimension, TemperamentProfile } from '@/types/quest';

export const STEP1_TRIALS: Record<string, Trial> = {
  t1_1: {
    id: 't1_1',
    step: 1,
    stepTitle: '1단계: 근본 기질 규명',
    trialNumber: 1,
    chapterTitle: '미지의 회랑 (인식의 시발점)',
    backgroundScene:
      '안개 자욱한 미지의 거대한 고대 구조물 앞에 섰다. 단 한 번도 본 적 없는 기괴한 메커니즘이 침묵 속에 맞물려 있다. 앞서간 이들의 흔적은 끊겼고, 당신은 이 문을 열어야만 한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"구조를 전부 이해하려 들면 늦는다. 손끝의 감각과 직관으로 직접 건드려보며 틈새를 열겠다."',
        whisper: {
          gain: '신속한 기동성과 상황 적응력',
          cost: '예기치 못한 돌발 변수에 노출될 위험'
        },
        temperamentWeights: { intuitive_flow: 3, bold_breakthrough: 2 },
        nextTrialId: 't1_2',
        reactionText: '손끝에 전해지는 진동과 흐름을 읽으며 즉각적인 대응 태세를 갖춘다.'
      },
      {
        id: 'B',
        text: '"함부로 건드려선 안 된다. 겉의 문양과 기어의 맞물림을 분석해 근본 작동 원리부터 규명하겠다."',
        whisper: {
          gain: '오차 없는 본질 파악과 안정성',
          cost: '사유와 분석에 소모되는 시간의 지연'
        },
        temperamentWeights: { cognitive_depth: 3, prudent_refine: 2 },
        nextTrialId: 't1_2',
        reactionText: '소음을 끄고 기둥에 새겨진 인과관계의 뼈대를 집요하게 응시한다.'
      }
    ]
  },

  t1_2: {
    id: 't1_2',
    step: 1,
    stepTitle: '1단계: 근본 기질 규명',
    trialNumber: 2,
    chapterTitle: '고립된 등대 (에너지의 원천)',
    backgroundScene:
      '끝없는 폭풍 속에서 정신적 에너지가 바닥났다. 더 이상의 판단을 내리기 위해선 영혼의 배터리를 다시 채워 넣어야 한다. 두 개의 공간이 눈앞에 나타난다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"모든 문을 걸어 잠그고 홀로 침묵 속에 잠기겠다. 외부 소음이 완벽히 차단될 때 비로소 내가 복원된다."',
        whisper: {
          gain: '흔들리지 않는 내면의 순도와 깊은 사유',
          cost: '외부 시각과의 단절 및 고립감'
        },
        temperamentWeights: { autonomous_focus: 4 },
        nextTrialId: 't1_3',
        reactionText: '문이 닫히자 고요한 심연 속에서 흩어졌던 나의 조각들이 제자리를 찾는다.'
      },
      {
        id: 'B',
        text: '"뜻이 통하는 이들과 모닥불 앞에 마주 앉겠다. 치열한 문답과 대화의 불꽃 속에서 다시 생명력을 얻는다."',
        whisper: {
          gain: '다양한 관점의 화학 작용과 생동감',
          cost: '타인의 감정선과 리듬에 맞추는 피로도'
        },
        temperamentWeights: { relational_spark: 4 },
        nextTrialId: 't1_3',
        reactionText: '주고받는 눈빛과 언어 속에서 얼어붙었던 영혼에 온기가 돈다.'
      }
    ]
  },

  t1_3: {
    id: 't1_3',
    step: 1,
    stepTitle: '1단계: 근본 기질 규명',
    trialNumber: 3,
    chapterTitle: '차가운 저울 (판단의 나침반)',
    backgroundScene:
      '중대한 결단의 갈림길에 도달했다. 한쪽은 빈틈없는 논리와 효율의 길이지만 누군가의 가슴을 아프게 할 수 있고, 다른 한쪽은 내면의 철학과 온기가 살아있으나 비효율과 번거로움을 감내해야 한다.',
    fx: 'warning',
    options: [
      {
        id: 'A',
        text: '"감정이나 주관에 휘둘리지 않는다. 인과적 정합성과 시스템의 무결점이 결국 최선의 결과를 만든다."',
        whisper: {
          gain: '감정에 휩쓸리지 않는 냉철한 완결성',
          cost: '기계적 차가움과 정서적 괴리'
        },
        temperamentWeights: { logical_rigor: 4 },
        nextTrialId: 't1_4',
        reactionText: '냉철한 이성의 잣대로 군더더기를 쳐내며 객관적 인과에 집중한다.'
      },
      {
        id: 'B',
        text: '"숫자나 효율이 전부가 아니다. 내가 지키고자 하는 존재의 존엄성과 내면의 진정성이 가장 앞서야 한다."',
        whisper: {
          gain: '양심과 철학이 담긴 고결한 진정성',
          cost: '논리적 예외 상황과 비효율의 무게'
        },
        temperamentWeights: { value_driven: 4 },
        nextTrialId: 't1_4',
        reactionText: '가슴 깊은 곳의 맥박을 짚으며 타협할 수 없는 가치에 손을 얹는다.'
      }
    ]
  },

  t1_4: {
    id: 't1_4',
    step: 1,
    stepTitle: '1단계: 근본 기질 규명',
    trialNumber: 4,
    chapterTitle: '벼랑 끝의 도약 (위기 반응과 저항선)',
    backgroundScene:
      '벼랑 끝에서 거센 비바람이 몰아친다. 건너편 땅은 보이지만 다리는 끊겼다. 밧줄을 걸고 지금 당장 뛰어넘어야 할지, 아니면 비바람이 잦아들 때까지 안전한 지지대를 쌓고 기다려야 할지 선택해야 한다.',
    fx: 'shake',
    options: [
      {
        id: 'A',
        text: '"100%의 안전은 환상이다. 60%의 확신만 있다면 허공을 향해 몸을 던져 길을 만들어내겠다."',
        whisper: {
          gain: '압도적인 기동성과 판을 바꾸는 돌파력',
          cost: '추락의 위험과 높은 스트레스 비용'
        },
        temperamentWeights: { bold_breakthrough: 4 },
        nextTrialId: 't1_5',
        reactionText: '심장이 요동치지만 지체 없이 도약의 반동을 싣는다.'
      },
      {
        id: 'B',
        text: '"모험으로 운을 시험하지 않는다. 지형을 측량하고 튼튼한 와이어를 고정한 뒤 한 걸음씩 건너겠다."',
        whisper: {
          gain: '확실한 안전 마진과 정밀한 통제력',
          cost: '타이밍의 상실과 과도한 신중함'
        },
        temperamentWeights: { prudent_refine: 4 },
        nextTrialId: 't1_5',
        reactionText: '호흡을 고르고 쐐기를 깊게 박아 넣으며 오차 범위를 0으로 수렴시킨다.'
      }
    ]
  },

  t1_5: {
    id: 't1_5',
    step: 1,
    stepTitle: '1단계: 근본 기질 규명',
    trialNumber: 5,
    chapterTitle: '심연의 거울 (본질 탐구와 매듭)',
    backgroundScene:
      '회랑의 가장 깊은 성소에 도달했다. 거울에 비친 자신의 눈동자를 들여다본다. 당신이 세상을 이해하고 몰입할 때, 가장 본질적으로 쾌감을 느끼는 순간은 언제인가?',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"현상의 껍데기 아래 숨겨진 \'원리와 법칙\'을 명쾌하게 규명하고 나만의 체계로 세울 때."',
        whisper: {
          gain: '세상을 꿰뚫는 본질적 통찰과 구조화',
          cost: '추상적 개념에 매몰되어 현실 감각이 무뎌질 위험'
        },
        temperamentWeights: { cognitive_depth: 3, autonomous_focus: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '내면 깊은 곳에서 복잡한 세상의 암호가 풀리는 전율을 느낀다.'
      },
      {
        id: 'B',
        text: '"순간의 영감과 느낌을 포착하여 살아있는 감각적 리듬으로 즉시 변주하고 표현해낼 때."',
        whisper: {
          gain: '생동감 넘치는 창의성과 유연한 변주',
          cost: '지속적인 구조적 체계 유지의 번거로움'
        },
        temperamentWeights: { intuitive_flow: 3, relational_spark: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '정형화된 틀을 깨고 자유로운 리듬 속으로 의식이 헤엄친다.'
      }
    ]
  }
};

export function determineTemperamentProfile(
  scores: Partial<Record<TemperamentDimension, number>>
): TemperamentProfile {
  const cog = (scores.cognitive_depth || 0) >= (scores.intuitive_flow || 0) ? 'deep' : 'flow';
  const eng = (scores.autonomous_focus || 0) >= (scores.relational_spark || 0) ? 'solo' : 'social';
  const jud = (scores.logical_rigor || 0) >= (scores.value_driven || 0) ? 'logic' : 'value';
  const crs = (scores.bold_breakthrough || 0) >= (scores.prudent_refine || 0) ? 'bold' : 'prudent';

  // 16가지 조합 중 대표 아키타입 매핑
  if (cog === 'deep' && eng === 'solo' && jud === 'logic') {
    return {
      title: '심연의 원리를 꿰뚫는 구조적 아키텍트',
      epithet: '소음 속에서 보이지 않는 본질의 뼈대를 세우고 고독 속에서 완전성을 빚는 사유자',
      coreTraits: [
        '본질 지향성: 현상의 겉핥기를 질색하며, "왜 그런가"의 근본 인과를 끝까지 파고듭니다.',
        '자율적 고독: 혼자만의 침묵 속에서 사유할 때 에너지가 폭발적으로 회복됩니다.',
        '체계적 무결점: 주먹구구식 임기응변보다 한 번의 깔끔한 시스템 설계를 지향합니다.',
        crs === 'bold' ? '결단적 돌파: 철저한 사유 끝에 확신이 서면 주저 없이 판을 뒤흔듭니다.' : '정밀한 마진: 오차를 허용하지 않는 치밀한 안정성을 구축합니다.'
      ],
      deepEngine: '세상의 혼돈을 나만의 명쾌한 지적 모델과 자율적 시스템으로 환원하는 지적 쾌감',
      shadowPoint: '타인의 비논리적 주장이나 반복적인 비효율을 마주할 때 급격한 정신적 피로를 느낌',
      energyRecharge: '방해받지 않는 독립된 공간에서 깊은 사유와 개인적 연구에 몰입할 때'
    };
  }

  if (cog === 'deep' && eng === 'solo' && jud === 'value') {
    return {
      title: '영혼의 진정성을 빚는 고요한 철학자',
      epithet: '시대의 유행에 휩쓸리지 않고, 내면의 신념과 깊은 사유로 고유한 세계를 축조하는 탐도자',
      coreTraits: [
        '내적 진정성: 숫자의 크기보다 "이것이 내 영혼에 진실한가"를 최우선으로 묻습니다.',
        '독립적 심연: 다수의 의견에 편승하지 않고 오롯이 스스로 납득할 때까지 사유합니다.',
        '통찰적 깊이: 인간과 사물의 이면에 깃든 고유한 가치와 서사를 읽어냅니다.',
        crs === 'bold' ? '신념적 결단: 확신이 들면 주변의 만류에도 독자적인 길을 개척합니다.' : '신중한 수호: 소중한 가치를 훼손하지 않기 위해 한 걸음씩 깊이 있게 전진합니다.'
      ],
      deepEngine: '나만의 철학적 신념이 왜곡되지 않고 세상에 정갈한 형태로 실체화되는 순간',
      shadowPoint: '타협을 강요하는 세속적 압박이나 무의미한 형식주의를 마주할 때 깊은 환멸',
      energyRecharge: '홀로 고요히 글을 쓰거나 생각을 정리하며 영혼의 중심을 다잡을 때'
    };
  }

  if (cog === 'flow' && eng === 'solo') {
    return {
      title: '직관의 불꽃을 다듬는 독립적 크리에이터',
      epithet: '틀에 갇힌 이론 대신 감각적인 직관으로 현실의 빈틈을 파고드는 감각적 메이커',
      coreTraits: [
        '직관적 감각: 복잡한 수치 분석보다 손끝의 감각과 흐름을 통해 답을 찾아냅니다.',
        '자율적 기동성: 결재나 긴 회의 없이 혼자서 빠르게 시도하고 변주할 때 빛이 납니다.',
        '창의적 변주: 기존의 규칙을 그대로 따르기보다 의외의 연결고리를 만들어냅니다.',
        '실질적 결과 지향: 이론적 담론에 머물지 않고 즉시 시각화되거나 체감되는 결과물을 만듭니다.'
      ],
      deepEngine: '머릿속에 떠오른 감각적 이미지를 군더더기 없이 현실에 즉시 구현해낼 때',
      shadowPoint: '경직된 매뉴얼이나 끝없는 문서 작업으로 손발이 묶일 때 질식할 것 같은 답답함',
      energyRecharge: '자유로운 환경에서 좋아하는 작업물을 만지작거리며 프로토타이핑할 때'
    };
  }

  // 기본/공통 프로필
  return {
    title: '현실의 돌파구를 찾는 입체적 전략가',
    epithet: '사유의 깊이와 실행의 감각을 균형 있게 조율하며 복잡한 매듭을 풀어내는 탐색자',
    coreTraits: [
      '유연한 균형 감각: 이론에 매몰되지도, 무모한 충동에 휩쓸리지도 않는 입체적 조망',
      '자율적 추진력: 스스로 목표를 정의하고 최적의 경로를 찾아 나서는 주체성',
      '본질적 문제해결: 겉으로 드러난 증상이 아닌 진짜 병목을 찾아 효율적으로 해소',
      '가치와 실용의 조화: 의미 있는 일과 현실적 성과 사이의 교집합을 집요하게 추적'
    ],
    deepEngine: '복잡하게 엉킨 현실의 문제를 명쾌한 접근법으로 해결하고 결과를 눈으로 확인할 때',
    shadowPoint: '명확한 방향성 없이 무의미하게 소모되는 상황에 처했을 때의 무력감',
    energyRecharge: '스스로 통제권을 가진 프로젝트를 시작하거나 정리된 결과물을 마주할 때'
  };
}
