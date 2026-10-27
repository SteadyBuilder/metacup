import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP2_TRIALS: Record<string, Trial> = {
  't2_1': {
    id: 't2_1',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 1,
    chapterTitle: '제1막: 두 개의 창작 공방',
    backgroundScene:
      '근본 기질의 안개를 걷어내자, 눈앞에 상반된 에너지를 뿜어내는 두 개의 작업실 문이 나타났다. 한쪽 문 너머에서는 수만 개의 정교한 톱니바퀴와 데이터 파이프라인이 한 치의 오차도 없이 맞물리는 소리가 들리고, 다른 쪽 문 너머에서는 깊은 영감을 자극하는 색채와 서사, 감각적인 빛의 파동이 일렁인다. 내 심장을 뛰게 만드는 공간은 어디인가.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"복잡한 과정들이 물 흐르듯 단번에 맞물려 돌아가는 구조를 볼 때 전율을 느낀다. 번잡한 수작업을 없애고 모든 것이 논리적으로 완벽히 자동화되는 시스템 공방으로 들어선다."',
        whisper: {
          gain: '논리적 쾌감과 군더더기 없는 프로세스 최적화',
          cost: '감성적이거나 감각적인 표현 요소의 절제'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't2_2A',
        reactionText: '질서 정연한 톱니바퀴의 회전음이 뇌리에 깊은 안정과 흥분을 선사한다.'
      },
      {
        id: 'B',
        text: '"차가운 기계음보다 사람의 감정을 흔드는 독창적인 이야기와 아름다움에 끌린다. 상상을 눈앞의 실체로 그려내고 감각을 깨우는 영감의 아틀리에로 들어선다."',
        whisper: {
          gain: '풍부한 감성적 표현력과 사람들의 마음에 남는 울림',
          cost: '정형화된 규칙이나 데이터 측정의 난해함'
        },
        weights: { creativity: 3, collaboration: 2 },
        nextTrialId: 't2_2B',
        reactionText: '다채로운 색채와 빛이 내면의 캔버스 위로 번져나간다.'
      }
    ]
  },

  't2_2A': {
    id: 't2_2A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막 (시스템): 몰입의 리듬과 에너지원',
    backgroundScene:
      '시스템 공방의 작업대 위에서 나만의 워크플로우를 조립하고 있다. 수 시간 동안 시간의 흐름조차 잊고 빠져들게 만드는 내 에너지의 진짜 원천을 마주한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"누구의 간섭도 없는 고요한 공간에서, 복잡한 파이프라인을 완전히 내 뜻대로 통제하고 다듬어 흠잡을 데 없는 완벽한 아키텍처를 세울 때 가장 깊은 에너지를 얻는다."',
        whisper: {
          gain: '극한의 자율성과 독립적 완결에 대한 깊은 자부심',
          cost: '타인과의 빈번한 소통이나 피드백 과정에 대한 에너지 소모'
        },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 't2_3A',
        reactionText: '고요한 정적 속에서 나만의 성채가 완성되어 간다.'
      },
      {
        id: 'B',
        text: '"아무리 멋진 시스템이라도 결국 사람이 써야 빛이 난다. 내가 다듬은 간결한 도구 덕분에 타인의 수고가 극적으로 줄어들고 감탄하는 모습을 볼 때 가장 큰 보람을 느낀다."',
        whisper: {
          gain: '현실적인 영향력과 즉각적인 실무적 가치 입증',
          cost: '순수 기술적 난이도보다 사용성 조율에 쏟는 타협'
        },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 't2_3B',
        reactionText: '타인의 번거로움을 덜어주는 명쾌한 해결책이 빛을 발했다.'
      }
    ]
  },

  't2_2B': {
    id: 't2_2B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막 (창작): 영감의 맥락과 연결',
    backgroundScene:
      '영감의 아틀리에 벽면에 수많은 이야기와 시각적 스케치들이 걸려 있다. 머릿속의 상상을 세상에 꺼내놓는 과정에서 나를 가장 설레게 하는 순간이 있다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"세상의 유행이나 타인의 시선에 휘둘리지 않고, 오직 내 안에서 우러나온 고유한 관점과 오리지널한 미학을 하나의 작품으로 오롯이 완성해낼 때 가장 큰 쾌감을 느낀다."',
        whisper: {
          gain: '대체 불가능한 독창성과 순수한 자기표현의 희열',
          cost: '대중의 즉각적인 선호나 상업적 타협과의 거리감'
        },
        weights: { creativity: 3, resilience: 2 },
        nextTrialId: 't2_3C',
        reactionText: '나만의 독보적인 색채가 선명한 궤적을 그린다.'
      },
      {
        id: 'B',
        text: '"작업물이 세상에 공개되었을 때 사람들의 눈빛이 빛나고, 서로의 경험과 감정이 이어지며 커뮤니티가 들썩이는 연결의 순간을 지켜볼 때 가슴이 벅차오른다."',
        whisper: {
          gain: '강력한 인간적 공감대 형성과 문화적 파급력',
          cost: '대중의 반응과 피드백에 대한 지속적인 심리적 안테나 가동'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't2_3D',
        reactionText: '사람과 사람 사이를 잇는 따뜻한 온기가 피어오른다.'
      }
    ]
  },

  't2_3A': {
    id: 't2_3A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 완성을 정의하는 내면의 기준',
    backgroundScene:
      '작업의 종착역에 다다랐다. 시스템이 가동을 시작하며 내가 추구하는 일의 궁극적 미학을 되묻는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"버튼 하나로 복잡한 10단계가 1초 만에 깔끔하게 끝나는 것. 쓸데없는 군더더기가 1도 없는 미니멀하고 매끄러운 파이프라인이야말로 내가 가장 사랑하는 일의 형태다."',
        whisper: { gain: '극도의 프로세스 효율성과 자동화 미학', cost: '예외적이고 비정형적인 업무에 대한 기피' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '단 하나의 클릭으로 모든 혼란이 질서로 정돈되었다.'
      },
      {
        id: 'B',
        text: '"시간이 지나도 고장 나지 않는 견고한 뼈대. 겉으로 드러나지 않아도 보이지 않는 곳까지 단단하게 지탱해주는 안정적인 설계에 내 취향이 닿아있다."',
        whisper: { gain: '장기적 신뢰성과 안정성', cost: '빠른 속도감보다는 신중한 검증 과정' },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '어떤 충격에도 흔들리지 않는 견고한 기반이 다져졌다.'
      }
    ]
  },

  't2_3B': {
    id: 't2_3B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 쓸모의 미학 (현실적 실체)',
    backgroundScene:
      '완성된 도구가 작업대 위에 놓였다. 복잡한 이론 대신 당장 현실에서 힘을 발휘하는 실체에 대한 나의 취향이 묻어난다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"설명서가 없어도 세 살 아이조차 직관적으로 누를 수 있는 명쾌한 단순함. 복잡한 문제를 가장 친절하고 쉬운 인터페이스로 바꿔주는 일에 깊이 몰입한다."',
        whisper: { gain: '뛰어난 사용성과 즉각적인 보급력', cost: '복잡한 기능들의 과감한 가지치기' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '복잡함이 사라지고 오직 직관적인 편리함만 남았다.'
      },
      {
        id: 'B',
        text: '"누군가의 반복되는 고통을 끝장내는 사이다 같은 해결책. 가려운 곳을 정확하게 긁어주어 사람들의 감탄을 자아내는 실전 솔루션을 빚을 때 환희를 느낀다."',
        whisper: { gain: '확실한 고객 만족과 문제 해결의 카타르시스', cost: '지속적인 사용자 피드백 대응' },
        weights: { execution: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '막혀있던 혈관이 뚫리듯 시원한 환호성이 울린다.'
      }
    ]
  },

  't2_3C': {
    id: 't2_3C',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 고유성의 미학 (독창적 표현)',
    backgroundScene:
      '캔버스 위의 빛이 굳어지며 하나의 독창적인 세계관이 완성되었다. 남들과 다른 나만의 차별점을 정의하는 순간이다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"남들의 시선이나 기존의 클리셰를 비틀어버리는 낯설고 신선한 시도. 세상에 흔한 양산형 결과물이 아닌, 오직 나만의 숨결이 깃든 독창적 산출물에 열광한다."',
        whisper: { gain: '강렬한 아이덴티티와 오리지널리티', cost: '대중적 보편성과의 타협 거부' },
        weights: { creativity: 3, strategic: 1 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '그 누구와도 닮지 않은 독창적인 문양이 새겨졌다.'
      },
      {
        id: 'B',
        text: '"보고만 있어도 마음이 편안해지거나 심장이 두근거리는 감각적 완성도. 작은 폰트 하나, 색감 한 톤까지 내 취향과 철학이 조화롭게 녹아든 아름다움에 취한다."',
        whisper: { gain: '높은 감성적 퀄리티와 미적 만족감', cost: '디테일 조율에 걸리는 시간' },
        weights: { creativity: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '모든 조각이 아름다운 하모니를 이루며 빛난다.'
      }
    ]
  },

  't2_3D': {
    id: 't2_3D',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 공명의 미학 (사람과 커뮤니티)',
    backgroundScene:
      '작업물이 사람들의 마음에 가닿아 따스한 불빛을 밝힌다. 일이 가져다주는 궁극의 가치를 확인한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"외로웠던 사람들이 서로를 발견하고 끈끈하게 뭉치도록 판을 깔아주는 것. 내 작업이 사람들을 잇는 튼튼한 다리가 되어줄 때 가장 큰 존재 이유를 찾는다."',
        whisper: { gain: '단단한 커뮤니티 자산과 신뢰 네트워크', cost: '다양한 사람들의 관계를 케어하는 수고' },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '혼자였던 불빛들이 모여 거대한 별자리를 이룬다.'
      },
      {
        id: 'B',
        text: '"누군가의 잠재력을 알아보고 용기를 북돋워 주어, 그 사람이 한 걸음 성장하는 순간을 함께 목격하는 것. 사람의 변화를 이끄는 촉매제로서 일할 때 행복하다."',
        whisper: { gain: '깊은 보람과 멘토십의 기쁨', cost: '개별적 관심과 감정적 에너지 지속 투입' },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '한 사람의 눈동자에 새로운 자신감이 깃든다.'
      }
    ]
  }
};

export function determineStep2Profile(scores: Record<CompassDimension, number>): StepProfile {
  if (scores.strategic >= scores.creativity && scores.strategic >= scores.collaboration) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '정교한 시스템과 자동화의 미학',
      englishTitle: 'The System & Flow Connoisseur',
      coreTraits: [
        '불필요한 반복과 번잡한 수작업을 없애는 최적화 추구',
        '논리적 인과관계와 데이터 파이프라인이 매끄럽게 흐를 때의 쾌감',
        '간섭 없는 독립적인 공간에서 터져 나오는 높은 자율적 몰입',
        '시간이 흘러도 고장 나지 않는 견고한 구조 지향'
      ],
      summary:
        '군더더기 없는 파이프라인과 논리적으로 정돈된 자동화 시스템을 볼 때 가장 깊은 몰입과 쾌감을 느낍니다. 번잡한 소음에서 벗어나 나만의 규칙과 질서를 세우고, 복잡함을 한 번의 매끄러운 흐름으로 압축해내는 구조화의 미학가입니다.'
    };
  } else if (scores.execution >= scores.creativity) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '군더더기 없는 즉각적 실체화',
      englishTitle: 'The Pragmatic Realizer',
      coreTraits: [
        '설명서 없이도 직관적으로 와닿는 직관적 결과물 선호',
        '타인의 막힌 고통을 즉각 해결해주는 사이다 같은 솔루션',
        '장황한 이론보다 지금 당장 써먹을 수 있는 도구의 쾌감',
        '빠른 프로토타이핑과 실전 배포를 통한 가시적 보람'
      ],
      summary:
        '머릿속에 떠오른 아이디어가 손에 잡히는 단단한 실체로 구현되는 순간에 가장 큰 희열을 느낍니다. 이론에 머무르지 않고 현실의 가려운 곳을 정확하게 긁어주며, 복잡함을 걷어내고 누구나 누릴 수 있는 유용한 도구를 만들어낼 때 에너지가 샘솟습니다.'
    };
  } else if (scores.creativity >= scores.collaboration) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '독창적 오리지널리티와 감각적 표현',
      englishTitle: 'The Creative Artisan',
      coreTraits: [
        '기존의 클리셰를 거부하는 신선하고 독특한 관점',
        '시각, 서사, 감각이 조화롭게 녹아든 높은 완성도',
        '나만의 고유한 색채와 철학이 담긴 오리지널 산출물 지향',
        '아이디어가 구체적 형태와 매력을 갖춰가는 창작의 몰입'
      ],
      summary:
        '세상에 흔한 양산형 방식이나 남들이 만들어둔 틀에 갇히는 것을 거부합니다. 오직 나만의 독보적인 시선과 감각을 투영하여 사람들의 뇌리에 강렬하게 남는 독창적인 세계관과 경험을 빚어낼 때 지치지 않는 창작열을 불태웁니다.'
    };
  } else {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '사람을 잇고 깨우는 공명의 파동',
      englishTitle: 'The Resonance & Growth Catalyst',
      coreTraits: [
        '결과물 뒤에 모여드는 사람들의 살아있는 반응과 교류',
        '타인의 잠재력을 깨우고 함께 성장할 때 느끼는 깊은 보람',
        '사람과 사람 사이의 신뢰와 따뜻한 커뮤니티 조성',
        '외로운 이들에게 든든한 디딤돌과 다리가 되어주는 역할'
      ],
      summary:
        '차가운 데이터나 기계보다, 사람의 마음이 움직이고 연결되는 순간에 가장 큰 가치와 동기를 느낍니다. 내 작업이 사람들에게 실질적인 위로와 영감이 되고, 서로를 지지하는 건강한 커뮤니티의 불씨가 될 때 최고의 보람을 얻습니다.'
    };
  }
}
