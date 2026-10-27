import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP3_TRIALS: Record<string, Trial> = {
  // ⚔️ STEP 3 - 1막: 새로운 도구가 주어진 시대
  't3_1': {
    id: 't3_1',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 1,
    chapterTitle: '제1막: 강력한 도구가 주어진 신세계',
    backgroundScene:
      '과거 수십, 수백 명이 매달려야 했던 일들을 이제 단 한 사람의 지혜와 강력한 도구로 단숨에 해낼 수 있는 시대가 열렸습니다. 나만의 든든한 조력자를 손에 쥐었을 때, 내 본능이 먼저 가리키는 방향은 어디일까요.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"남의 밑에서 부품처럼 일할 생각은 없다. 똑똑한 도구를 내 비서이자 조력자로 삼아, 내가 구상한 1인 서비스와 실질적인 해결책을 내 손으로 직접 만들어 세상에 선보인다."',
        whisper: {
          gain: '1인 창작자로서의 압도적 기동성과 100% 자율성',
          cost: '기획부터 완성, 운영까지 스스로 감당해야 하는 책임의 무게'
        },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 't3_2A',
        reactionText: '머릿속의 아이디어가 손끝을 통해 실제로 작동하는 결과물로 구현된다.'
      },
      {
        id: 'B',
        text: '"단순한 작업은 도구에게 맡기면 된다. 나는 도구의 방대한 능력을 지렛대 삼아, 사람들의 시야를 틔워주는 독보적인 통찰과 수준 높은 지식 콘텐츠를 빚어낸다."',
        whisper: {
          gain: '깊이 있는 지식 자산화와 강력한 영향력',
          cost: '끊임없이 시대의 흐름과 본질을 파고들어야 하는 지적 에너지'
        },
        weights: { strategic: 3, creativity: 2 },
        nextTrialId: 't3_2B',
        reactionText: '수많은 정보의 조각들이 날카로운 통찰의 문장으로 정돈된다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 2막 A: 내가 구축할 현실의 해결책
  't3_2A': {
    id: 't3_2A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 2,
    chapterTitle: '제2막: 내가 구축할 현실의 해결책',
    backgroundScene:
      '도구들의 힘을 빌려 세상을 바꿀 기회가 주어졌습니다. 내가 사람들에게 선보이고 싶은 진짜 무기의 결이 구체화됩니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"사람들이 매일 반복하며 끙끙 앓는 번거로운 수작업(데이터 정리, 문서 작성, 전달 등)을 엮어 버튼 한 번에 끝내는 깔끔한 자동화 해결책을 구축한다."',
        whisper: {
          gain: '명확한 비효율 제거와 실무 시간의 압도적 단축',
          cost: '초기 세팅과 단계별 연결 설계의 꼼꼼함 요구'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't3_3A',
        reactionText: '수십 단계의 번거로운 작업이 단 하나의 깔끔한 버튼 뒤로 사라졌다.'
      },
      {
        id: 'B',
        text: '"사람들이 일상에서 느끼는 가려운 곳이나 재미를 겨냥해, 누구나 쓰기 편하고 직관적인 1인 웹/앱 서비스를 며칠 만에 완성해 세상에 내놓는다."',
        whisper: {
          gain: '사용자들과의 직접 소통 및 빠른 반응 확인',
          cost: '지속적인 개선과 사람들에게 알리기 위한 홍보 노력'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't3_3B',
        reactionText: '눈앞에 완성된 결과물이 세상 사람들의 손안에서 살아 숨 쉬기 시작했다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 2막 B: 지식과 관계의 지향점
  't3_2B': {
    id: 't3_2B',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 2,
    chapterTitle: '제2막: 지식과 관계의 지향점',
    backgroundScene:
      '도구가 쏟아내는 수많은 정보 속에서, 오직 사람만이 빚어낼 수 있는 대체 불가능한 가치를 들여다봅니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"정보의 홍수 속에서 진짜 알짜배기 핵심 원리만 날카롭게 추려내어, 초보자도 10분 만에 이해할 수 있는 고품질 요약 가이드와 지식 지도를 만든다."',
        whisper: {
          gain: '높은 신뢰도의 전문 큐레이터로서의 입지와 콘텐츠 자산화',
          cost: '지속적인 팩트 확인과 리서치에 투입되는 시간'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't3_3C',
        reactionText: '안개 같던 정보들이 한눈에 꿰뚫어 볼 수 있는 지도로 정돈되었다.'
      },
      {
        id: 'B',
        text: '"기술이 발전할수록 사람들은 진정성 있는 조언과 인간적인 유대를 갈망한다. 새로운 도구를 쥔 사람들을 모아 서로 돕고 함께 성장하는 따뜻한 커뮤니티를 만든다."',
        whisper: {
          gain: '대체 불가능한 강력한 인간적 신뢰와 끈끈한 네트워크',
          cost: '커뮤니티 구성원들과의 꾸준한 소통과 정서적 케어'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't3_3D',
        reactionText: '차가운 화면 너머로 따스한 온기와 소속감이 피어오른다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 3막 A: 1인 아키텍트의 길
  't3_3A': {
    id: 't3_3A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 1인 설계자의 독립 선언',
    backgroundScene:
      '나만의 기질과 취향, 그리고 새로운 시대의 도구가 하나로 맞물려 최종 항로를 비춥니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"나는 스마트 도구들을 총괄하는 1인 시스템 아키텍트다. 불필요한 인력 낭비 없이 혼자서도 기업 수준의 자동화와 탄탄한 프로세스를 구축하는 마스터가 된다."',
        whisper: { gain: '1인으로서 극대화된 레버리지와 높은 독립성', cost: '새로운 도구 트렌드에 대한 지속적인 학습' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '나만의 자동화 영역이 빈틈없이 가동되기 시작했다.'
      },
      {
        id: 'B',
        text: '"나는 실제 사람들의 일과 삶을 편하게 해주는 현실의 해결사다. 현장의 복잡한 고민을 경청하고 스마트 도구를 결합해 가장 실용적인 사이다 해답을 선물한다."',
        whisper: { gain: '확실한 현실 수요와 실전 문제 해결력', cost: '다양한 실무 현장의 변수에 대응하는 유연성' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '고민하던 사람들의 얼굴에 안도와 미소가 번졌다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 3막 B: 솔로 메이커의 도약
  't3_3B': {
    id: 't3_3B',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 1인 메이커의 도약',
    backgroundScene:
      '새로운 시대에 펼쳐질 나만의 독자적인 무대를 확인합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"작지만 유용한 디지털 도구를 연속으로 만들어내는 1인 메이커. 실패를 두려워하지 않고 내 아이디어를 빠르게 세상에 선보여 검증하는 실전가가 된다."',
        whisper: { gain: '독립적인 자립 파이프라인과 빠른 실행력', cost: '사람들에게 널리 알리기 위한 지속적인 시도' },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '하나의 서비스가 세상 위로 힘차게 닻을 올렸다.'
      },
      {
        id: 'B',
        text: '"단순한 도구를 넘어 사용하는 사람의 가슴을 뛰게 만드는 경험 디렉터. 기술과 감성을 절묘하게 버무려 대체 불가능한 특별한 작품을 선보인다."',
        whisper: { gain: '독보적인 브랜드 가치와 열성적인 팬덤 형성', cost: '디자인과 완성도에 대한 치열한 고심' },
        weights: { creativity: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '독창적인 감동을 전하는 작품이 빛을 발했다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 3막 C: 지식 큐레이터의 완성
  't3_3C': {
    id: 't3_3C',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식 큐레이터의 완성',
    backgroundScene:
      '세상에 넘쳐나는 정보 속에서 나만의 단단한 지식 성채를 완성합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"복잡한 전문 분야를 단칼에 정리해 주는 대한민국 최고의 치트시트 메이커. 누구나 내 자료만 보면 막힘없이 문제를 풀 수 있는 지식 아카이브를 구축한다."',
        whisper: { gain: '독보적인 전문성과 신뢰도 높은 권위', cost: '방대한 정보 속에서 끊임없는 선별 작업' },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '수많은 사람들의 길잡이가 되어줄 지식의 등대가 켜졌다.'
      },
      {
        id: 'B',
        text: '"트렌드의 이면을 짚고 앞선 통찰을 전하는 미래 전망 에디터. 단순한 사실 나열을 넘어 세상이 어디로 흘러가는지 방향을 제시하는 나침반이 된다."',
        whisper: { gain: '시대를 앞서가는 통찰력과 강력한 파급력', cost: '매일 쏟아지는 글로벌 트렌드 분석의 피로도' },
        weights: { strategic: 3, creativity: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '시대를 관통하는 날카로운 통찰이 완성되었다.'
      }
    ]
  },

  // ⚔️ STEP 3 - 3막 D: 커뮤니티 빌더의 결실
  't3_3D': {
    id: 't3_3D',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 따뜻한 커뮤니티 빌더의 결실',
    backgroundScene:
      '사람과 사람이 만나 시너지를 내는 위대한 연대의 장을 엽니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"외로운 1인 도전자들이 서로 기대고 의지하며 함께 성장하는 안전한 보금자리 커뮤니티를 일궈내는 든든한 멘토가 된다."',
        whisper: { gain: '끈끈한 인간적 유대와 깊은 보람', cost: '구성원들의 다양한 감정과 고민을 보듬는 지속적인 헌신' },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '사람들이 서로의 온기를 나누며 함께 성장하는 터전이 마련되었다.'
      },
      {
        id: 'B',
        text: '"서로 다른 재능을 가진 이들을 엮어 새로운 프로젝트를 띄우는 프로젝트 인큐베이터. 혼자서는 불가능했던 일들을 팀의 힘으로 실현해 낸다."',
        whisper: { gain: '폭발적인 프로젝트 시너지와 영향력', cost: '서로 다른 이해관계와 팀워크 조율의 난도' },
        weights: { collaboration: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '개개인의 힘이 모여 거대한 기적을 만들어내기 시작했다.'
      }
    ]
  }
};

export function determineStep3Profile(scores: Record<CompassDimension, number>): StepProfile {
  if (scores.strategic >= scores.execution && scores.strategic >= scores.collaboration) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '1인 지능형 자동화 아키텍트',
      englishTitle: 'The Solo Intelligent Architect',
      coreTraits: [
        '불필요한 반복 작업을 없애는 원클릭 자동화 프로세스 설계',
        '스마트 도구들을 레버리지로 삼는 1인 시스템 구축',
        '인과관계를 파악하고 구조적 문제를 근본 해결',
        '최소 자원으로 최대 효율을 뽑아내는 고수익 파이프라인'
      ],
      summary:
        '거대한 팀이나 복잡한 인력 채용 없이도, 지능형 도구들을 유기적으로 결합하여 혼자서 기업 수준의 단단한 프로세스를 완성해 냅니다. 군더더기 없는 자동화 시스템으로 시간을 절약하고 압도적인 레버리지를 누리는 최적의 포지션입니다.'
    };
  } else if (scores.execution >= scores.strategic) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '사이다 솔루션을 띄우는 1인 마이크로 메이커',
      englishTitle: 'The Solo Micro-Maker',
      coreTraits: [
        '아이디어를 며칠 만에 실전 프로덕트로 완성하는 기동력',
        '현실의 뾰족한 불편을 해결하는 실용적 직관성',
        '망설임 없는 출시와 빠른 피드백 수용',
        '내 손으로 직접 세상을 바꾸는 실전 오너십'
      ],
      summary:
        '복잡한 이론이나 탁상공론을 거부하고, 사람들의 실제 불편을 즉각 해결해 주는 실전 도구를 빠르게 세상에 내놓습니다. 실패를 두려워하지 않는 기민한 실행력으로 나만의 독자적인 디지털 자산을 만들어내는 진정한 메이커입니다.'
    };
  } else if (scores.creativity >= scores.collaboration) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '시대를 읽는 지식 큐레이터 & 통찰 에디터',
      englishTitle: 'The Insight Curator',
      coreTraits: [
        '방대한 정보의 홍수 속에서 핵심 알짜배기를 낚아채는 혜안',
        '초보자도 10분 만에 이해시키는 명쾌한 지식 시각화',
        '트렌드의 이면을 꿰뚫고 미래의 방향을 제시하는 통찰',
        '높은 신뢰를 기반으로 한 고품질 지식 자산화'
      ],
      summary:
        '단순한 정보 나열을 넘어, 세상의 소음 속에서 변하지 않는 본질적 지식과 트렌드를 예리하게 포착합니다. 복잡한 지식을 누구나 쉽게 소화할 수 있는 나침반으로 재가공하여, 대체 불가능한 지식 자산과 영향력을 구축합니다.'
    };
  } else {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '사람을 모으고 시너지를 빚는 커뮤니티 빌더',
      englishTitle: 'The Community Catalyst',
      coreTraits: [
        '외로운 도전자들에게 온기와 용기를 북돋우는 멘토링',
        '다양한 재능을 엮어 새로운 프로젝트를 띄우는 연결력',
        '깊은 신뢰를 기반으로 한 건강한 지식 공유 생태계 구축',
        '함께 성장하는 연대의 힘으로 불가능을 실현하는 리더십'
      ],
      summary:
        '기술이 고도화될수록 더욱 귀해지는 인간적인 연결과 신뢰의 가치를 빚어냅니다. 흩어져 있는 도전자들을 하나로 모으고 각자의 잠재력을 이끌어내며, 따뜻한 연대와 팀워크로 위대한 결과물을 함께 만들어내는 구심점입니다.'
    };
  }
}
