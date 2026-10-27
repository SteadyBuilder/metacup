import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP2_TRIALS: Record<string, Trial> = {
  't2_1': {
    id: 't2_1',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 1,
    chapterTitle: '제1막: 두 개의 각성 공방',
    backgroundScene:
      '[시스템 : 2차 각성 구역 \'몰입의 공방\'이 열렸습니다.]\n\n눈앞에 상반된 기운을 뿜어내는 두 개의 작업실 포탈이 열렸다. 한쪽 포탈 너머에서는 수만 개의 정교한 톱니바퀴와 마도 회로가 한 치의 오차도 없이 맞물려 돌아가고, 다른 쪽 포탈 너머에서는 보는 이의 넋을 빼놓는 매혹적인 색채와 빛이 일렁인다. 내 심장을 뛰게 만드는 곳은 어디인가.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"지루한 수작업 노가다는 질색이다. 톱니바퀴와 매크로가 단 한 번에 맞물려 전자동으로 돌아가는 시스템을 볼 때, 그 완벽한 프로세스에서 짜릿한 전율을 느낀다."',
        whisper: {
          gain: '논리적 카타르시스와 군더더기 제로의 프로세스 최적화',
          cost: '감성적이거나 감각적인 표현 요소의 절제'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't2_2A',
        reactionText: '질서 정연하게 돌아가는 마도 톱니의 회전음이 뇌리에 깊은 쾌감을 선사한다.'
      },
      {
        id: 'B',
        text: '"차가운 기계보다 사람의 마음을 훔치는 독창적인 서사와 비주얼에 끌린다. 상상을 눈앞의 실체로 그려내고 감각을 깨우는 아티팩트 아틀리에로 들어선다."',
        whisper: {
          gain: '풍부한 감성적 표현력과 사람들의 기억에 각인되는 임팩트',
          cost: '정형화된 수치나 규격화된 데이터 측정의 난해함'
        },
        weights: { creativity: 3, collaboration: 2 },
        nextTrialId: 't2_2B',
        reactionText: '화려한 색채와 마력이 캔버스 위로 살아 숨 쉬듯 번져나간다.'
      }
    ]
  },

  't2_2A': {
    id: 't2_2A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막 (시스템): 나만의 작업 모드와 에너지원',
    backgroundScene:
      '[퀘스트 : 나만의 자동화 파이프라인을 구축하십시오.]\n\n작업대 위에 수많은 모듈들이 정렬되어 있다. 몇 시간 동안 밥 먹는 것도 잊고 화면 속으로 빠져들게 만드는 내 진짜 몰입의 엔진을 마주한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"아무의 간섭도 없는 고요한 개인 던전에서, 복잡한 파이프라인을 온전히 내 뜻대로 통제하고 0.1초의 딜레이도 없는 완벽한 아키텍처를 세울 때 가장 깊은 에너지를 얻는다."',
        whisper: {
          gain: '극한의 자율성과 혼자만의 완결에 대한 깊은 자부심',
          cost: '타인과의 빈번한 소통과 피드백 과정에서 오는 피로감'
        },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 't2_3A',
        reactionText: '외부의 소음이 차단되고 오직 나만의 완벽한 성채가 세워진다.'
      },
      {
        id: 'B',
        text: '"내가 짠 깔끔한 도구 덕분에 파티원들이 \'와, 진짜 편하다! 삶의 질이 달라졌다!\' 하며 감탄할 때, 그 확실한 쓸모와 효용에서 최고의 보람을 느낀다."',
        whisper: {
          gain: '체감되는 실질적 파급력과 즉각적인 실무 가치 입증',
          cost: '순수 기술적 완성도보다 대중의 사용성에 맞추는 타협'
        },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 't2_3B',
        reactionText: '사람들의 고통을 덜어주는 명쾌한 해결책이 빛을 발했다.'
      }
    ]
  },

  't2_2B': {
    id: 't2_2B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막 (창작): 오리지널리티의 폭발',
    backgroundScene:
      '[퀘스트 : 세상에 없던 고유한 아티팩트를 빚어내십시오.]\n\n벽면 가득 채워진 콘셉트 아트와 시각적 스케치들. 머릿속의 상상을 세상에 꺼내놓는 과정에서 나를 가장 설레게 하는 순간이 있다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"남들이 유행 따라 찍어내는 흔한 양산형 결과물은 거부한다. 오직 내 안에서 우러나온 고유한 관점과 독보적인 미학이 100% 녹아든 전설 아이템을 완성할 때 희열을 느낀다."',
        whisper: {
          gain: '대체 불가능한 독창성과 순수한 자기표현의 쾌감',
          cost: '대중의 통속적인 취향이나 빠른 상업적 타협과의 거리감'
        },
        weights: { creativity: 3, resilience: 2 },
        nextTrialId: 't2_3C',
        reactionText: '세상 그 누구와도 닮지 않은 독창적인 아우라가 뿜어져 나온다.'
      },
      {
        id: 'B',
        text: '"내 작품이 공개되었을 때 사람들의 눈이 휘둥그레지고, 서로 경험을 나누며 광장 전체가 들썩이는 연결의 순간을 지켜볼 때 가슴이 벅차오른다."',
        whisper: {
          gain: '강력한 정서적 공감대와 열광적인 팬덤 형성',
          cost: '대중의 반응과 피드백에 대한 지속적인 감정 소모'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't2_3D',
        reactionText: '사람과 사람 사이를 잇는 뜨거운 에너지가 공간을 가득 채운다.'
      }
    ]
  },

  't2_3A': {
    id: 't2_3A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 시스템의 미학 (딸깍의 쾌감)',
    backgroundScene:
      '[시스템 : 파이프라인의 최종 빌드가 완료되었습니다.]\n\n모든 모듈이 결합되고 시스템이 가동을 시작한다. 내가 추구하는 일의 가장 이상적인 모습은 무엇인가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"딸깍 클릭 한 번으로 복잡한 10단계 퀘스트가 1초 만에 정리되는 것. 쓸데없는 군더더기 노가다가 1도 없는 깔끔한 자동화야말로 내가 가장 사랑하는 일의 형태다."',
        whisper: { gain: '극도의 프로세스 효율성과 자동화 미학', cost: '비정형적이고 감정적인 돌발 업무에 대한 기피' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '단 한 번의 클릭으로 모든 혼란이 질서정연하게 정돈되었다.'
      },
      {
        id: 'B',
        text: '"어떤 폭풍우가 몰아쳐도 서버가 절대 터지지 않는 견고함. 겉은 화려하지 않아도 보이지 않는 곳까지 단단하게 지탱해 주는 안정적인 설계에 내 취향이 닿아있다."',
        whisper: { gain: '장기적 신뢰성과 든든한 안정감', cost: '빠른 속도감보다는 신중한 검증 과정 요구' },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '어떤 충격에도 끄떡없는 요새의 초석이 완성되었다.'
      }
    ]
  },

  't2_3B': {
    id: 't2_3B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 쓸모의 미학 (사이다 솔루션)',
    backgroundScene:
      '[시스템 : 실전용 솔루션 아이템이 완성되었습니다.]\n\n화려한 미사여구 대신 당장 현장에서 폭발적인 성능을 발휘하는 실체. 일에서 느끼는 나의 진짜 보람을 확인한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"긴 설명서 읽을 필요도 없이 3초 만에 이해되는 직관적인 단순함. 복잡한 문제를 가장 쓰기 편한 사이다 인터페이스로 바꿔주는 일에 깊이 몰입한다."',
        whisper: { gain: '압도적인 사용성과 빠른 대중 보급력', cost: '부차적인 기능들의 과감한 가지치기' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '머리 아픈 복잡함이 사라지고 명쾌한 단순함만 남았다.'
      },
      {
        id: 'B',
        text: '"유저들이 매일 겪던 고통스러운 병목을 단번에 뚫어주는 구원 투수. 가려운 곳을 정확하게 긁어주어 환호성을 자아내는 실전 도구를 깎을 때 희열을 느낀다."',
        whisper: { gain: '확실한 사용자 충성도와 문제 해결의 쾌감', cost: '끊임없이 밀려오는 요구사항 대응' },
        weights: { execution: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '막혀있던 혈관이 시원하게 뚫리듯 환호성이 터져 나왔다.'
      }
    ]
  },

  't2_3C': {
    id: 't2_3C',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 독창성의 미학 (독보적 퀄리티)',
    backgroundScene:
      '[시스템 : 전설급 유니크 아이템이 연성을 마쳤습니다.]\n\n눈부신 오라를 뿜어내는 완성작. 남들과 똑같은 길을 걷지 않는 나만의 확실한 차별점을 확인한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"남들의 시선이나 기존의 뻔한 클리셰를 비틀어버리는 발칙하고 신선한 시도. 세상에 널린 양산형 결과물이 아닌, 오직 나만의 숨결이 깃든 독창적 작품에 열광한다."',
        whisper: { gain: '강렬한 아이덴티티와 독보적인 오리지널리티', cost: '대중적 보편성과의 타협 거부' },
        weights: { creativity: 3, strategic: 1 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '그 누구와도 닮지 않은 독창적인 문양이 새겨졌다.'
      },
      {
        id: 'B',
        text: '"보는 순간 감탄이 절로 나오는 감각적 디테일. 작은 여백 하나, 색감 한 방울까지 내 취향과 세계관이 완벽히 조화를 이룬 마스터피스에 취한다."',
        whisper: { gain: '극상의 감성적 완성도와 미적 만족감', cost: '마지막 1% 디테일을 잡는 데 걸리는 집착' },
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
    chapterTitle: '제3막: 공명의 미학 (길드의 탄생)',
    backgroundScene:
      '[시스템 : 모여든 유저들의 유대감이 공명하고 있습니다.]\n\n내 결과물이 사람들의 마음에 가닿아 따스한 불빛을 밝힌다. 일이 내게 가져다주는 궁극의 가치.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"외롭게 혼자 헤매던 유저들이 서로를 발견하고 끈끈한 길드를 이루도록 판을 깔아주는 것. 내 작업이 사람들을 잇는 든든한 다리가 될 때 가장 큰 존재 이유를 찾는다."',
        whisper: { gain: '단단한 커뮤니티 자산과 신뢰 네트워크', cost: '다양한 사람들의 관계를 케어하는 수고' },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '흩어져 있던 불빛들이 모여 거대한 별자리를 이룬다.'
      },
      {
        id: 'B',
        text: '"성장이 멈춰 좌절하던 유저의 숨은 잠재력을 알아보고, 마침내 레벨업의 벽을 깨부수는 순간을 함께 목격하는 것. 사람의 변화를 이끄는 버프를 줄 때 가장 행복하다."',
        whisper: { gain: '깊은 멘토십의 보람과 진정한 감사의 온기', cost: '개별적 관심과 감정적 에너지의 지속적 투입' },
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
