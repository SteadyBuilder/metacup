import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP1_TRIALS: Record<string, Trial> = {
  't1_1': {
    id: 't1_1',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 1,
    chapterTitle: '제1막: 거대한 지식의 회랑',
    backgroundScene:
      '끝이 보이지 않는 거대한 아카이브의 문이 열렸다. 천장까지 닿은 서가에는 미지의 기술과 오래된 문헌들이 빽빽하고, 중앙 제어대에는 복잡한 룬 문자와 기계 장치가 규칙적인 맥박처럼 깜빡인다. 아무도 정답을 가르쳐주지 않는 공간, 본능적으로 내 발걸음이 향하는 곳은 명확하다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"겉핥기식 시도는 시간 낭비다. 중앙 제어대의 회로와 작동 매뉴얼을 집요하게 파고들어, 이 공간이 움직이는 근본 원리와 시스템 구조를 먼저 머릿속에 완성한다."',
        whisper: {
          gain: '흔들리지 않는 시스템 전체 설계도와 본질적 원리 이해',
          cost: '초기 세부 분석에 소모되는 상당한 시간과 정적인 집중'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_2A',
        reactionText: '회로의 맥락이 눈앞에 선명해진다. 본질을 짚어내자 안개가 걷히기 시작했다.'
      },
      {
        id: 'B',
        text: '"완벽한 이해를 기다릴 필요는 없다. 손에 잡히는 단말기 레버를 가볍게 당겨보며, 실시간으로 일어나는 반응과 변화를 관찰해 즉각적으로 감각을 맞춘다."',
        whisper: {
          gain: '즉각적인 가시적 피드백과 빠른 현장 감각 습득',
          cost: '예상치 못한 기계 오작동이나 예외 상황에 대한 순발력 요구'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't1_2B',
        reactionText: '장치가 딸깍 소리를 내며 빛을 뿜었다. 빠른 피드백이 두뇌를 자극한다.'
      }
    ]
  },

  't1_2A': {
    id: 't1_2A',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 2,
    chapterTitle: '제2막 (분석): 얽힌 데이터의 매듭',
    backgroundScene:
      '중앙 제어대가 깨어나며 방대한 양의 암호화된 데이터 로그가 쏟아져 나온다. 수천 페이지에 달하는 기록 속에는 이전 탐험가들이 실패했던 치명적인 병목 현상과 불완전한 기록들이 뒤엉켜 있다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"모든 현상에는 반드시 필연적인 인과관계가 있다. 엉킨 로그들의 상관관계를 끝까지 추적하여, 오류를 일으키는 단 하나의 핵심 변수를 완벽히 짚어낸다."',
        whisper: {
          gain: '오류의 근본 원인 영구적 박멸 및 고도의 논리적 정합성',
          cost: '깊은 몰입으로 인한 에너지 소모와 주변 환경에 대한 차단'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_3A',
        reactionText: '복잡한 실타래 사이로 뚜렷한 인과관계의 선이 드러났다.'
      },
      {
        id: 'B',
        text: '"전부 해독할 필요는 없다. 실패한 기록들 속에서 지금 당장 통과할 수 있는 실용적인 우회 패턴 세 가지만 빠르게 추려내어 적용한다."',
        whisper: {
          gain: '군더더기 없는 즉각적 돌파와 에너지 보존',
          cost: '시스템의 나머지 80% 미지 영역을 남겨두는 불완전함'
        },
        weights: { execution: 3, strategic: 1 },
        nextTrialId: 't1_3B',
        reactionText: '불필요한 군더더기를 쳐내자 단숨에 문이 열리는 통로가 보였다.'
      }
    ]
  },

  't1_2B': {
    id: 't1_2B',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 2,
    chapterTitle: '제2막 (직관): 예기치 못한 불꽃',
    backgroundScene:
      '레버를 당기자 경보음과 함께 환기 밸브에서 뜨거운 증기가 솟구친다. 매뉴얼에는 없는 돌발 상황. 눈앞에는 부러진 파이프와 아무렇게나 흩어진 도구들이 나뒹굴고 있다.',
    fx: 'warning',
    options: [
      {
        id: 'A',
        text: '"규칙에 얽매일 이유가 없다. 흩어진 잡동사니 중 적당한 금속 파이프와 렌치를 조합해, 증기를 반대로 빼내는 기발한 임시 우회 배관을 즉석에서 조립한다."',
        whisper: {
          gain: '틀을 깨는 창의적 발상과 초고속 임기응변',
          cost: '임시 조치이기에 오래 지속되기 힘든 안정성 한계'
        },
        weights: { creativity: 3, execution: 2 },
        nextTrialId: 't1_3C',
        reactionText: '엉뚱해 보였던 조합이 기적처럼 들어맞으며 증기가 멎었다.'
      },
      {
        id: 'B',
        text: '"증기 압력이 치솟는 리듬이 있다. 서두르지 않고 밸브가 떨리는 주기와 미세한 소리를 온몸으로 감지하여, 압력이 최저로 떨어지는 찰나의 순간에 메인 밸브를 단숨에 잠근다."',
        whisper: {
          gain: '날카로운 감각적 타이밍과 한 번의 깔끔한 종결',
          cost: '타이밍을 놓칠 경우 치러야 할 추가적인 위험 노출'
        },
        weights: { strategic: 2, resilience: 3 },
        nextTrialId: 't1_3D',
        reactionText: '정적 속에서 손끝의 감각이 빛을 발했다. 위험이 완벽히 가라앉았다.'
      }
    ]
  },

  't1_3A': {
    id: 't1_3A',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 핵 (임계점 돌파)',
    backgroundScene:
      '마침내 아카이브의 심장부인 지식의 핵 앞에 섰다. 핵은 마치 살아있는 유기체처럼 방대한 질문을 던지며, 나라는 사람이 문제를 마주할 때 품는 최종적인 철학을 묻는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"세상의 소음이 아무리 커도 나는 진리의 구조와 불변하는 원리를 믿는다. 화려한 겉치레보다 언제나 흔들리지 않는 뼈대를 세우는 것이 나의 본질이다."',
        whisper: { gain: '확고부동한 사색과 깊이', cost: '빠른 유행과 임기응변에 대한 무관심' },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '나침반의 바늘이 깊은 침묵 속에서 진북을 가리킨다.'
      },
      {
        id: 'B',
        text: '"아무리 위대한 이론도 현실에서 쓸모 있게 작동하지 못하면 껍데기다. 어떤 복잡한 지식이든 손에 잡히는 도구와 솔루션으로 치환해내는 것이 나의 본질이다."',
        whisper: { gain: '실용적인 완결력과 빠른 실체화', cost: '순수 이론 탐구에 대한 조급함' },
        weights: { execution: 3, strategic: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '손바닥 위에 단단한 실체가 쥐어졌다.'
      }
    ]
  },

  't1_3B': {
    id: 't1_3B',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 핵 (실용의 미학)',
    backgroundScene:
      '우회로를 뚫고 도달한 심장부에서 지식의 핵이 빛을 발한다. 복잡함을 단번에 단순함으로 압축해낸 나의 방식에 핵이 공명하고 있다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"문제를 해결하는 데 필요한 건 100%의 완벽함이 아니라, 80%의 군더더기 없는 완결성과 작동성이다. 나는 낭비를 걷어내는 실용적 설계자다."',
        whisper: { gain: '압도적인 작업 속도와 효율성', cost: '극단적인 디테일 완벽주의와의 충돌' },
        weights: { execution: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '경쾌하게 군더더기가 떨어져 나가며 본질만 남았다.'
      },
      {
        id: 'B',
        text: '"단순히 나 혼자 해결하는 것에 그치지 않고, 누구나 쉽게 같은 문제를 풀 수 있도록 직관적이고 쉬운 도구로 패키징하는 것이 나의 본질이다."',
        whisper: { gain: '타인을 위한 높은 활용성과 확장성', cost: '도구 정제에 소모되는 2차 공수' },
        weights: { collaboration: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '누구나 쓸 수 있는 단단한 도구가 완성되었다.'
      }
    ]
  },

  't1_3C': {
    id: 't1_3C',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 핵 (창작의 불꽃)',
    backgroundScene:
      '임시 배관의 창의적 해법을 딛고 선 심장부. 지식의 핵이 다채로운 스펙트럼의 빛을 뿜으며, 고정관념을 깨뜨린 직관의 힘을 반긴다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"정해진 매뉴얼대로 따라가는 것은 영혼을 메마르게 한다. 나는 기존의 틀을 깨고 새로운 가능성과 형태를 빚어낼 때 가장 강한 생명력을 얻는다."',
        whisper: { gain: '독보적인 독창성과 감각적 파괴력', cost: '반복적인 루틴 업무에 대한 급격한 피로' },
        weights: { creativity: 3, resilience: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '가슴속에서 새로운 영감의 불씨가 타올랐다.'
      },
      {
        id: 'B',
        text: '"창의성은 그 자체로 사람들의 마음을 움직이는 힘이어야 한다. 번뜩이는 아이디어로 타인의 막힌 숨통을 틔워주고 영감을 주는 것이 나의 본질이다."',
        whisper: { gain: '사람들에게 주는 강렬한 공감과 영향력', cost: '타인의 감정 반응에 대한 민감성' },
        weights: { creativity: 2, collaboration: 3 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '공명의 파동이 공간 전체로 따스하게 퍼져나갔다.'
      }
    ]
  },

  't1_3D': {
    id: 't1_3D',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 핵 (균형과 통찰)',
    backgroundScene:
      '정적 속에서 위기를 수습한 뒤 마주한 심장부. 지식의 핵이 깊고 은은한 청옥빛을 띠며, 혼란 속에서도 평정을 잃지 않은 내면의 깊이를 묻는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"폭풍 속에서도 조급해하지 않고 흐름과 맥락을 읽어내는 것. 어떤 혼돈 속에서도 흔들리지 않는 내면의 중심을 지키는 것이 나의 본질이다."',
        whisper: { gain: '극도의 위기 회복력과 내면의 평정심', cost: '외부에서 보기에 다소 느려 보이는 신중함' },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '깊은 바다처럼 고요한 확신이 전신을 감쌌다.'
      },
      {
        id: 'B',
        text: '"문제의 기술적 결함보다 중요한 건 그 뒤에 있는 사람들의 마음과 상황이다. 보이지 않는 결핍을 감지하고 온기를 불어넣는 것이 나의 본질이다."',
        whisper: { gain: '깊은 신뢰 형성과 인간적 유대감', cost: '타인의 고통을 내 것처럼 떠안는 심리적 부담' },
        weights: { collaboration: 3, resilience: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '사람을 향한 따뜻한 이해가 나침반의 바늘을 적셨다.'
      }
    ]
  }
};

export function determineStep1Profile(scores: Record<CompassDimension, number>): StepProfile {
  if (scores.strategic >= scores.execution && scores.strategic >= scores.creativity) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '본질을 꿰뚫는 분석적 탐구자',
      englishTitle: 'The Analytic Deep-Diver',
      coreTraits: [
        '복잡한 현상 아래 숨겨진 본질적 원리와 구조 분석',
        '피상적인 유행보다 변하지 않는 근본 팩트 선호',
        '논리적 인과관계가 명확할 때 터져 나오는 집중력',
        '혼란 속에서도 시스템 전체의 뼈대를 완성하는 힘'
      ],
      summary:
        '단순히 겉으로 드러난 현상에 일희일비하지 않고, 문제의 근원과 시스템의 작동 원리를 끝까지 파고듭니다. 탄탄한 팩트와 논리적 구조를 기반으로 흔들리지 않는 지식의 초석을 세우는 진정한 탐구형 기질입니다.'
    };
  } else if (scores.execution >= scores.creativity) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '쓸모 있는 실체를 빚는 실용적 구축가',
      englishTitle: 'The Pragmatic Builder',
      coreTraits: [
        '불필요한 군더더기를 쳐내는 80% 실용 완결주의',
        '손에 잡히는 도구와 명확한 결과물 중심의 사고',
        '복잡한 이론을 현장에서 즉각 쓸 수 있는 솔루션으로 전환',
        '지체 없는 실행과 빠른 가시적 피드백 추구'
      ],
      summary:
        '공허한 탁상공론이나 과도한 완벽주의의 늪에 빠지지 않습니다. 당장 손에 쥘 수 있는 실체와 작동하는 도구를 빠르게 만들어내며, 현실의 문제를 가장 깔끔하고 단호하게 해결하는 실전형 구축가입니다.'
    };
  } else if (scores.creativity >= scores.collaboration) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '직관으로 길을 여는 감각적 개척가',
      englishTitle: 'The Intuitive Trailblazer',
      coreTraits: [
        '기존의 규칙과 매뉴얼을 깨뜨리는 신선한 조합과 발상',
        '새로운 자극과 가능성을 마주할 때 솟구치는 호기심',
        '정형화된 틀을 벗어나 독창적인 형태를 빚어내는 창작력',
        '위기 상황에서도 유연하게 우회로를 뚫어내는 임기응변'
      ],
      summary:
        '남들이 지나간 뻔한 길을 답습하는 것을 거부합니다. 직관적인 감각과 기발한 상상력으로 흩어진 조각들을 새롭게 결합하여, 세상에 없던 독창적인 해법과 경험을 창조해내는 자유로운 탐험가입니다.'
    };
  } else {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '마음과 맥락을 짚는 공감형 조율가',
      englishTitle: 'The Empathetic Synthesizer',
      coreTraits: [
        '말 뒤에 숨은 사람들의 미세한 감정과 결핍 포착',
        '차가운 규칙보다 사람의 존엄성과 성장을 중시하는 온기',
        '파편화된 요소들을 유기적으로 엮어내는 통합적 감각',
        '타인의 숨통을 틔워주고 신뢰를 회복시키는 포용력'
      ],
      summary:
        '단순히 기능적 해결에 그치지 않고, 그 문제를 겪고 있는 사람의 정서와 상황적 맥락을 깊이 헤아립니다. 사람과 사람, 생각과 생각을 따스하게 연결하여 가장 조화롭고 지속 가능한 해법을 도출해냅니다.'
    };
  }
}
