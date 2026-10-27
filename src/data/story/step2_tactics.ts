import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP2_TRIALS: Record<string, Trial> = {
  // ⚔️ STEP 2 - 1막: 두 개의 각성 공방
  't2_1': {
    id: 't2_1',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 1,
    chapterTitle: '제1막: 두 개의 작업실 문',
    backgroundScene:
      '천공의 제단 너머, 상반된 기운을 뿜어내는 두 개의 거대한 작업실 문이 열렸습니다. 한쪽 문 너머에서는 수많은 장치들이 한 치의 오차도 없이 맞물려 자동으로 돌아가고 있고, 다른 쪽 문 너머에서는 보는 이의 마음을 흔드는 매혹적인 색채와 독창적인 작품들이 일렁이고 있습니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"지루한 단순 반복은 질색이다. 정교한 도구들이 톱니처럼 맞물려 저절로 돌아갈 때, 그 물 흐르듯 막힘없는 흐름에서 짜릿한 전율을 느낀다."',
        whisper: {
          gain: '논리적 쾌감과 군더더기 없는 프로세스 최적화',
          cost: '감성적이거나 감각적인 표현 요소의 절제'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't2_2A',
        reactionText: '질서정연하게 돌아가는 장치들의 작동음이 깊은 쾌감을 선사한다.'
      },
      {
        id: 'B',
        text: '"차가운 기계보다 사람의 마음을 사로잡는 독창적인 이야기와 아름다움에 끌린다. 상상을 눈앞의 실체로 그려내고 사람들의 감각을 깨우는 작업실로 들어선다."',
        whisper: {
          gain: '풍부한 감성적 표현력과 사람들의 기억에 각인되는 임팩트',
          cost: '정형화된 수치나 규격화된 기준으로 측정하기 어려운 모호함'
        },
        weights: { creativity: 3, collaboration: 2 },
        nextTrialId: 't2_2B',
        reactionText: '다채로운 색채와 영감이 살아 숨 쉬듯 눈앞에 번져나간다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 2막 A: 나만의 작업 모드와 에너지원
  't2_2A': {
    id: 't2_2A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막: 나만의 작업 모드와 에너지원',
    backgroundScene:
      '정교하게 정돈된 작업대 위에 다양한 도구와 설계도들이 가지런히 놓여 있습니다. 몇 시간 동안 밥 먹는 것도 잊고 깊숙이 빠져들게 만드는 내 진짜 몰입의 순간을 마주합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"아무의 간섭도 없는 고요한 나만의 공간에서, 내 기준과 설계대로 온전히 통제하여 티끌 하나 없는 단단한 구조를 세울 때 가장 깊은 힘을 얻는다."',
        whisper: {
          gain: '극한의 자율성과 나 혼자만의 완성에 대한 깊은 자부심',
          cost: '타인과의 잦은 소통과 피드백 과정에서 오는 피로감'
        },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 't2_3A',
        reactionText: '외부의 소음이 차단되고 오직 나만의 단단한 영역이 세워진다.'
      },
      {
        id: 'B',
        text: '"내가 만든 깔끔하고 유용한 도구 덕분에 주변 사람들이 \'와, 정말 편해졌다! 삶의 질이 달라졌다\'며 감탄할 때, 그 확실한 쓸모에서 최고의 보람을 느낀다."',
        whisper: {
          gain: '체감되는 실질적 파급력과 즉각적인 실무 가치 입증',
          cost: '순수한 완성도보다 사용자의 편의성에 맞추는 타협'
        },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 't2_3B',
        reactionText: '사람들의 불편을 덜어주는 명쾌한 해결책이 환하게 빛을 발한다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 2막 B: 독창성의 불꽃
  't2_2B': {
    id: 't2_2B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 2,
    chapterTitle: '제2막: 독창성의 불꽃',
    backgroundScene:
      '벽면 가득 채워진 다채로운 스케치와 영감의 조각들. 머릿속의 상상을 세상 밖으로 끄집어내는 과정에서 나를 가장 설레게 하는 순간을 마주합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"남들이 유행 따라 찍어내는 흔한 결과물은 거부한다. 오직 내 안에서 우러나온 고유한 시선과 독보적인 미학이 100% 녹아든 작품을 완성할 때 희열을 느낀다."',
        whisper: {
          gain: '대체 불가능한 독창성과 순수한 자기표현의 쾌감',
          cost: '대중의 통속적인 취향이나 빠른 상업적 타협과의 거리감'
        },
        weights: { creativity: 3, resilience: 2 },
        nextTrialId: 't2_3C',
        reactionText: '세상 그 누구와도 닮지 않은 독창적인 결이 뿜어져 나온다.'
      },
      {
        id: 'B',
        text: '"내 작품이 공개되었을 때 사람들의 눈이 휘둥그레지고, 서로 이야기를 나누며 광장 전체가 들썩이는 연결의 순간을 지켜볼 때 가슴이 벅차오른다."',
        whisper: {
          gain: '강력한 정서적 공감대와 열광적인 호응 형성',
          cost: '대중의 반응과 피드백에 대한 지속적인 감정 소모'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't2_3D',
        reactionText: '사람과 사람 사이를 잇는 따뜻한 에너지가 공간을 가득 채운다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 3막 A: 간결한 해결 vs 견고한 신뢰
  't2_3A': {
    id: 't2_3A',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 일의 미학 (간결함 vs 견고함)',
    backgroundScene:
      '모든 준비가 끝나고 완성된 작업물이 첫 시험 가동을 앞두고 있습니다. 내가 추구하는 일의 가장 이상적인 모습은 무엇일까요.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"손가락 한 번 까딱하는 동작으로 복잡한 열 단계 일이 단 1초 만에 정리되는 것. 쓸데없는 군더더기 고생이 전혀 없는 깔끔한 방식이야말로 내가 가장 사랑하는 일의 형태다."',
        whisper: { gain: '극도의 일의 효율성과 단순함의 미학', cost: '비정형적이고 감정적인 돌발 업무에 대한 피로감' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '단 한 번의 가벼운 동작으로 모든 혼란이 질서정연하게 정돈되었다.'
      },
      {
        id: 'B',
        text: '"어떤 거센 폭풍우가 몰아쳐도 절대 흔들리지 않는 든든함. 겉은 화려하지 않아도 보이지 않는 곳까지 단단하게 지탱해 주는 안정적인 설계에 내 취향이 닿아있다."',
        whisper: { gain: '장기적인 신뢰성과 든든한 안정감', cost: '빠른 속도감보다는 신중한 검증 과정 요구' },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '어떤 충격에도 끄떡없는 튼튼한 삶의 초석이 완성되었다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 3막 B: 직관적 단순함 vs 날카로운 결정타
  't2_3B': {
    id: 't2_3B',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 쓸모의 미학 (직관 vs 결정타)',
    backgroundScene:
      '현장에서 바로 쓰일 실전 도구가 완성되었습니다. 거창한 말 대신 당장 문제를 해결해 주는 실체 앞에서 일의 보람을 확인합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"긴 설명서를 읽을 필요도 없이 3초 만에 이해되는 직관적인 단순함. 복잡한 문제를 누구나 쓰기 편하고 시원한 방식으로 바꿔주는 일에 깊이 몰입한다."',
        whisper: { gain: '대중적인 친근함과 높은 편의성', cost: '고도화된 전문 기능의 의도적 축소' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '누구나 쉽게 쓸 수 있는 명쾌한 해결책이 완성되었다.'
      },
      {
        id: 'B',
        text: '"남들이 며칠 밤을 새우며 끙끙 앓던 골칫거리를 단숨에 낚아채어, 당장 쓸 수 있는 날카로운 결과물로 완성해 건네줄 때 심장이 뛴다."',
        whisper: { gain: '대체 불가능한 해결사로서의 존재감', cost: '해결하기 까다로운 고난도 난제만 몰려드는 부담' },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '복잡한 난제를 쾌도난마로 끊어내는 한 방이 터져 나왔다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 3막 C: 타협 없는 고집 vs 시대를 이끄는 파도
  't2_3C': {
    id: 't2_3C',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 창작의 길 (깊이 vs 파급력)',
    backgroundScene:
      '세상에 단 하나뿐인 고유한 창작물이 모습을 드러냈습니다. 나만의 결을 지켜나가는 일에 대한 태도를 들여다봅니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"세상의 유행이나 얄팍한 평판에 휘둘리지 않고, 나만의 깊은 철학과 고집을 한 치의 타협 없이 끝까지 지켜내는 뚝심 있는 장인으로 남고 싶다."',
        whisper: { gain: '시간이 흘러도 변치 않는 고전적 깊이와 아우라', cost: '폭넓은 대중성과 빠른 상업적 확장의 한계' },
        weights: { resilience: 3, creativity: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '시간이 지나도 바래지 않을 나만의 오리지널리티가 깃들었다.'
      },
      {
        id: 'B',
        text: '"나만의 뾰족한 개성을 지키면서도, 세상 사람들의 마음을 파고들어 시대의 흐름을 바꾸는 새로운 유행을 직접 만들어내고 싶다."',
        whisper: { gain: '시대를 주도하는 트렌드세터로서의 폭발적 파급력', cost: '시장의 빠른 변화 속도에 맞춰 끊임없이 변신해야 하는 긴장감' },
        weights: { creativity: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '새로운 시대를 열어젖힐 거대한 파도가 일렁이기 시작했다.'
      }
    ]
  },

  // ⚔️ STEP 2 - 3막 D: 든든한 조력자 vs 역동적 구심점
  't2_3D': {
    id: 't2_3D',
    step: 2,
    stepTitle: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
    trialNumber: 3,
    chapterTitle: '제3막: 연대의 결 (조력자 vs 구심점)',
    backgroundScene:
      '사람들이 모여들어 내 창작물을 둘러싸고 온기와 활기가 가득 찹니다. 함께하는 사람들과의 관계 속에서 내가 추구하는 가치를 확인합니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"서로의 아픔과 결핍을 따뜻하게 보듬고, 각자의 숨겨진 잠재력이 활짝 피어나도록 곁에서 조용히 힘을 실어주는 든든한 조력자가 되고 싶다."',
        whisper: { gain: '깊고 단단한 인간적 신뢰와 조화로운 커뮤니티', cost: '내 자신의 성과나 이름이 전면에 드러나지 않는 아쉬움' },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '사람들의 지친 마음에 든든한 버팀목이 놓였다.'
      },
      {
        id: 'B',
        text: '"흩어져 있던 사람들의 마음을 하나로 묶고, 아무도 상상하지 못했던 거대한 도전과 축제를 이끌어내는 에너지 넘치는 구심점이 되고 싶다."',
        whisper: { gain: '사람들을 움직이는 카리스마와 거대한 프로젝트 완수', cost: '수많은 이해관계와 감정 충돌을 조율해야 하는 무게감' },
        weights: { collaboration: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP3',
        reactionText: '수많은 사람들의 심장이 하나의 박자로 힘차게 뛰기 시작했다.'
      }
    ]
  }
};

export function determineStep2Profile(scores: Record<CompassDimension, number>): StepProfile {
  if (scores.strategic >= scores.creativity && scores.strategic >= scores.collaboration) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '군더더기를 없애는 프로세스 최적화가',
      englishTitle: 'The Process Optimizer',
      coreTraits: [
        '불필요한 반복 노가다를 질색하는 효율 본능',
        '도구들이 물 흐르듯 맞물려 돌아가는 질서 선호',
        '혼자만의 고요한 시간 속에서 발휘되는 깊은 집중력',
        '장기적으로 흔들리지 않는 견고한 완성도 추구'
      ],
      summary:
        '지루하고 비효율적인 반복 작업을 용납하지 않습니다. 도구와 장치들이 유기적으로 결합되어 저절로 돌아가는 시스템을 만들 때 깊은 카타르시스를 느끼며, 방해 없는 환경에서 단단한 기반을 구축할 때 가장 강력한 몰입을 보입니다.'
    };
  } else if (scores.execution >= scores.strategic) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '즉각적인 쓸모를 증명하는 실전 해결사',
      englishTitle: 'The Utility Maker',
      coreTraits: [
        '누구나 3초 만에 쓰는 직관적인 편의성 추구',
        '현실의 뾰족한 고통을 단숨에 덜어주는 명쾌함',
        '복잡한 이론보다 즉각적인 효용과 피드백 선호',
        '주변의 감탄과 실질적 변화에서 얻는 보람'
      ],
      summary:
        '탁상공론이나 난해한 설명서를 질색합니다. 사람들이 겪는 현실의 불편을 가장 직관적이고 시원한 도구로 풀어낼 때 짜릿한 성취감을 느끼며, 내가 만든 것이 세상에 확실한 도움을 줄 때 지치지 않는 에너지를 얻습니다.'
    };
  } else if (scores.creativity >= scores.collaboration) {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '대체 불가능한 결을 빚는 오리지널 크리에이터',
      englishTitle: 'The Original Creator',
      coreTraits: [
        '양산형 유행을 거부하는 독보적인 감각과 미학',
        '내면의 상상을 세상에 꺼내놓는 순수한 표현욕구',
        '타협 없는 장인적 고집과 완성도',
        '새로운 시대를 열어젖히는 독창적인 아이디어'
      ],
      summary:
        '남들의 뒤를 쫓는 흔한 결과물을 거부합니다. 오직 나만의 고유한 시선과 철학이 담긴 독창적인 작품을 창조할 때 살아있음을 느끼며, 뻔한 세상을 뒤흔드는 신선한 영감을 불어넣는 창작의 엔진을 품고 있습니다.'
    };
  } else {
    return {
      step: 2,
      stepName: 'STEP 2: 취향 & 몰입 동기 (Taste & Energy Drivers)',
      archetypeTitle: '사람의 마음을 잇는 공감의 커넥터',
      englishTitle: 'The Human Connector',
      coreTraits: [
        '타인의 성장과 변화를 조용히 돕는 든든한 조력',
        '사람과 사람 사이의 온기와 연결을 만드는 능력',
        '함께 만들어내는 따뜻한 에너지 속에서의 충전',
        '깊은 신뢰를 기반으로 한 건강한 연대 형성'
      ],
      summary:
        '차가운 기계나 나 혼자만의 성취보다, 사람들과의 따뜻한 교감과 성장에서 가장 큰 에너지를 얻습니다. 타인의 결핍을 보듬고 숨은 잠재력을 이끌어내며, 흩어진 사람들을 하나로 엮어내는 선한 영향력의 구심점입니다.'
    };
  }
}
