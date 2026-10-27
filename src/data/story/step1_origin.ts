import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP1_TRIALS: Record<string, Trial> = {
  // ⚔️ Scene 01: 안개 걷힌 광장 (첫 반응 / 호기심 vs 상황 파악)
  't1_1': {
    id: 't1_1',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 1,
    chapterTitle: '제1막: 안개 걷힌 미지의 광장',
    backgroundScene:
      '안개가 서서히 걷히고, 난생처음 보는 낯선 세계의 광장 한가운데에 홀로 도착했습니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"오, 흥미진진한데? 일단 주변부터 둘러보며 발길 닿는 대로 가보자."',
        whisper: {
          gain: '즉각적인 탐험과 새로운 가능성의 발견',
          cost: '예상치 못한 위험에 무방비로 노출될 위험'
        },
        weights: { creativity: 3, execution: 2 },
        nextTrialId: 't1_2',
        reactionText: '호기심에 이끌려 발길 닿는 대로 첫 발을 내딛자 낯선 공기가 온몸을 감쌌다.'
      },
      {
        id: 'B',
        text: '"잠깐, 멈춰 서서 여기가 어디인지, 안전한 곳인지 상황 파악부터 하자."',
        whisper: {
          gain: '불필요한 위험을 줄이는 냉철한 안전 확보',
          cost: '초기 탐험과 기동의 일시적 지연'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_2',
        reactionText: '발걸음을 멈추고 사방의 지형과 공기의 흐름을 차분히 살폈다.'
      }
    ]
  },

  // ⚔️ Scene 02: 갈림길 앞에서의 의사결정 (직관 vs 단서)
  't1_2': {
    id: 't1_2',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 2,
    chapterTitle: '제2막: 갈림길 앞의 결단',
    backgroundScene:
      '광장 끝에 다다르자, 어두운 숲길과 가파른 절벽 길 두 갈래 길이 나타났습니다. 양쪽 모두 위험과 기회가 공존해 보입니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"이유는 모르겠지만 저쪽 길이 더 끌려. 내 감과 첫인상을 믿고 일단 발걸음을 옮기자."',
        whisper: {
          gain: '망설임 없는 신속한 결단과 영감의 흐름',
          cost: '객관적인 근거 부족으로 인한 시행착오 가능성'
        },
        weights: { creativity: 3, strategic: 1 },
        nextTrialId: 't1_3',
        reactionText: '내면의 이끌림에 몸을 맡기고 망설임 없이 길을 정했다.'
      },
      {
        id: 'B',
        text: '"표지판 흔적이나 앞서간 사람들의 발자국, 바람의 냄새 같은 객관적인 단서를 먼저 찾아본 뒤 결정하자."',
        whisper: {
          gain: '검증된 실마리를 통한 안전하고 확실한 경로 선택',
          cost: '단서를 수집하고 비교하는 시간 소모'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't1_3',
        reactionText: '바닥의 흔적과 표식을 짚어보자 가장 타당한 길이 눈에 들어왔다.'
      }
    ]
  },

  // ⚔️ Scene 03: 낯선 여행자와의 조우 (독립성 vs 연대 본능)
  't1_3': {
    id: 't1_3',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 모닥불 앞의 여행자',
    backgroundScene:
      '선택한 길을 한참 걷다 보니, 저 멀리 모닥불 앞에 웅크리고 있는 낯선 여행자가 보입니다. 그 역시 이 세계에 떨어진 모험가로 보입니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"상대가 누구인지, 무슨 속셈이 있는지 알 수 없다. 내 페이스를 방해받지 않고 혼자 은밀하게 지나가는 게 훨씬 안전하고 편해."',
        whisper: {
          gain: '나만의 온전한 통제권과 불필요한 마찰 방지',
          cost: '타인에게서 얻을 수 있는 정보나 도움의 포기'
        },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 't1_4',
        reactionText: '기척을 숨기고 조용히 거리를 유지한 채 발걸음을 재촉했다.'
      },
      {
        id: 'B',
        text: '"이 낯선 곳에서 동행이나 정보는 큰 힘이 된다. 가벼운 인사를 건네며 모닥불을 쬐고 서로 가진 실마리를 나눠보자."',
        whisper: {
          gain: '새로운 정보 획득과 든든한 상호 연대의 기회',
          cost: '상대의 예측 불가능한 의도와 에너지 소모'
        },
        weights: { collaboration: 3, execution: 1 },
        nextTrialId: 't1_4',
        reactionText: '모닥불을 향해 다가가 인사를 건네며 경계의 벽을 낮췄다.'
      }
    ]
  },

  // ⚔️ Scene 04: 막다른 벽 앞에서의 돌파 (정면 돌파 vs 우회 기동)
  't1_4': {
    id: 't1_4',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 4,
    chapterTitle: '제4막: 가로막힌 통로',
    backgroundScene:
      '여행자를 뒤로하고 홀로 길을 걷던 중, 마침내 목적지로 이어지는 유일한 통로에 다다랐습니다. 그런데 거대한 낙석이 무너져 내려 통로 전체가 완전히 가로막혀 있습니다. 주변은 가파른 바위산입니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"원래 가려던 길이다. 바위 틈새를 찾아 파내거나, 위험을 감수하더라도 낙석을 타고 넘어가 끝장을 봐야 직성이 풀려."',
        whisper: {
          gain: '본래의 방향을 관철하는 우직한 집념과 돌파',
          cost: '무리한 체력 소모와 부상의 위험'
        },
        weights: { resilience: 3, execution: 2 },
        nextTrialId: 't1_5',
        reactionText: '무너진 돌무더기에 손을 얹고 정면으로 맞설 틈을 노려보았다.'
      },
      {
        id: 'B',
        text: '"막힌 곳에 힘을 빼는 건 비효율적이다. 한 발 물러서서 산을 돌아가는 우회로나 전혀 다른 샛길을 찾아 빠르게 발길을 돌리자."',
        whisper: {
          gain: '불필요한 소모를 줄이는 유연한 상황 적응력',
          cost: '새로운 샛길에서 마주칠 미지의 변수'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't1_5',
        reactionText: '미련 없이 몸을 돌려 가파른 산등성이 샛길을 찾아 나섰다.'
      }
    ]
  },

  // ⚔️ Scene 05: 숨겨진 동굴의 보상 (지적 탐구 vs 실용적 실리)
  't1_5': {
    id: 't1_5',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 5,
    chapterTitle: '제5막: 유적의 비밀 동굴',
    backgroundScene:
      '막힌 낙석을 피해 가파른 산등성이 샛길을 돌아가던 중, 덤불 뒤에 숨겨진 오래된 유적의 비밀 동굴을 우연히 발견했습니다. 안으로 들어서자 두 개의 제단이 놓여 있습니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"이 낯선 세계가 어떻게 작동하는지, 숨겨진 진실과 법칙을 깊이 이해할 수 있는 지적 갈증을 채워줄 고대 기록을 집어 들자."',
        whisper: {
          gain: '세계의 작동 원리를 꿰뚫는 본질적 지적 쾌감',
          cost: '당장 현실의 위기를 막아줄 물리적 도구의 부재'
        },
        weights: { strategic: 3, creativity: 2 },
        nextTrialId: 't1_6',
        reactionText: '고대 기록의 문양을 매만지자 세계의 비밀이 가슴 깊이 스며들었다.'
      },
      {
        id: 'B',
        text: '"추상적인 이야기보다는, 당장 닥쳐올 위험을 막아주고 여정을 안전하고 편하게 만들어 줄 실용적인 특수 도구함을 챙기자."',
        whisper: {
          gain: '어떤 난관도 직접 손으로 해결할 수 있는 실질적 유용성',
          cost: '근본적인 메커니즘을 파악하는 지적 시야의 축소'
        },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 't1_6',
        reactionText: '묵직한 도구함을 품에 안자 당장 무엇이든 풀어낼 든든함이 솟았다.'
      }
    ]
  },

  // ⚔️ Scene 06: 무너지는 유적과 카운트다운 (시스템적 통제 vs 감각적 임기응변)
  't1_6': {
    id: 't1_6',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 6,
    chapterTitle: '제6막: 무너지는 천장과 톱니 함정',
    backgroundScene:
      '도구함을 챙겨 들자마자 쿵 하는 굉음과 함께 동굴 천장이 흔들리며 입구가 무너지기 시작합니다! 탈출할 수 있는 시간은 단 수십 초. 바닥에는 복잡한 톱니 함정이 작동하기 시작했습니다.',
    fx: 'warning',
    options: [
      {
        id: 'A',
        text: '"서두르면 끝장이다. 호흡을 가다듬고 방금 얻은 도구로 톱니 함정의 핵심 부품을 순서대로 멈춰 세워 안전한 탈출로를 확보하자."',
        whisper: {
          gain: '냉철한 이성을 바탕으로 한 확실하고 안전한 통제',
          cost: '찰나의 지체로 탈출 시간이 촉박해지는 위험'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_7',
        reactionText: '심호흡과 함께 도구를 찔러 넣어 핵심 부품을 단단히 멈춰 세웠다.'
      },
      {
        id: 'B',
        text: '"장치를 멈출 시간이 없다! 떨어지는 돌과 톱니를 동물적인 감각으로 피하며 온몸을 던져 입구 틈새로 미끄러져 나가자."',
        whisper: {
          gain: '찰나의 순간 몸을 살려내는 기민한 반사 신경',
          cost: '거친 낙하물에 스치며 겪는 생채기와 위험'
        },
        weights: { execution: 3, resilience: 2 },
        nextTrialId: 't1_7',
        reactionText: '온몸을 날려 낙하물을 아슬아슬하게 피하며 틈새로 굴러 나왔다.'
      }
    ]
  },

  // ⚔️ Scene 07: 안개 낀 거대한 호수 (안전 우회 vs 즉석 도하)
  't1_7': {
    id: 't1_7',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 7,
    chapterTitle: '제7막: 안개 자욱한 호수',
    backgroundScene:
      '간발의 차로 무너지는 입구 틈새를 굴러 빠져나왔습니다. 뒤편에서 굉음과 함께 동굴이 완전히 매몰됩니다. 거친 숨을 몰아쉬며 고개를 드니, 눈앞에 짙은 안개로 둘러싸인 거대한 호수가 펼쳐져 있습니다. 호수 건너편에는 희미하게 탑의 불빛이 보이지만, 배도 다리도 보이지 않습니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"이 안개 속을 헤엄치거나 뗏목을 만들어 무작정 건너는 건 무모하다. 호숫가를 따라 걸으며 다른 우회로나 건널 수 있는 얕은 여울을 차분히 찾아보자."',
        whisper: {
          gain: '예상치 못한 수중 위험을 완벽히 차단하는 안전성',
          cost: '호숫가를 돌아가는 데 드는 시간과 체력 소모'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_8',
        reactionText: '차분하게 호숫가 갈대숲을 따라 발걸음을 옮기며 안전한 길을 모색했다.'
      },
      {
        id: 'B',
        text: '"호수가 얼마나 넓은지 알 수 없는데 빙 돌아가다간 날이 저문다. 부서진 통나무와 덩굴을 엮어 즉석 뗏목을 만들고 곧바로 호수를 가로질러 건너가자."',
        whisper: {
          gain: '목표를 향해 가장 빠르게 직선으로 도달하는 추진력',
          cost: '안개 속 깊은 물에서 마주칠 급류나 암초의 위험'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't1_8',
        reactionText: '주변 통나무를 덩굴로 동여매고 거침없이 수면 위로 띄웠다.'
      }
    ]
  },

  // ⚔️ Scene 08: 녹슨 수문과 도르래 (원리 정석 복원 vs 파괴적 돌파)
  't1_8': {
    id: 't1_8',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 8,
    chapterTitle: '제8막: 녹슨 수문과 도르래 장치',
    backgroundScene:
      '자욱한 갈대밭을 헤치며 호숫가를 따라 한참을 걷던 중, 호수의 물을 가두고 있는 오래된 수문과 거대한 도르래 장치를 발견했습니다. 이 수문만 열어 물을 빼낸다면 바닥이 드러나 걸어서 호수 건너편 탑으로 갈 수 있습니다. 하지만 도르래 장치는 세월의 무게로 뻑뻑하게 녹슬어 굳어 있습니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"품에 챙겨온 도구함을 꺼내자. 녹슨 부품들의 결합 구조를 하나씩 살피고 기름칠을 해서, 원래 만들어진 방식대로 부드럽게 돌려 수문을 들어 올리자."',
        whisper: {
          gain: '장치의 본래 설계를 살려내는 완성도 높은 해결',
          cost: '녹을 닦아내고 균형을 맞추는 섬세한 손길과 시간'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't1_9',
        reactionText: '부품 하나하나에 기름을 먹이자 굳었던 도르래가 스르륵 풀려 돌았다.'
      },
      {
        id: 'B',
        text: '"언제 하나하나 뜯어서 기름칠하고 있겠어. 지지대의 가장 약한 이음매에 쐐기를 박고 도구로 강하게 비틀어 부수면 단숨에 물이 빠져나갈 거야."',
        whisper: {
          gain: '복잡한 과정을 단숨에 건너뛰는 파격적인 시간 단축',
          cost: '장치 파손으로 인해 수문이 완전히 닫히지 않을 위험'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't1_9',
        reactionText: '이음매를 강하게 내리치자 굉음과 함께 수문이 단숨에 터져 열렸다.'
      }
    ]
  },

  // ⚔️ Scene 09: 탑 철문 앞 쓰러진 여행자 (인간 구호 vs 과업 실행)
  't1_9': {
    id: 't1_9',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 9,
    chapterTitle: '제9막: 탑 문 앞의 쓰러진 자',
    backgroundScene:
      '수문이 열리고 호수의 물이 빠져나가자 드러난 진흙길을 걸어, 마침내 호수 건너편 신비로운 석탑 입구에 도착했습니다. 그런데 굳게 닫힌 탑의 철문 바로 앞에, 지치고 탈진해 쓰러져 있는 한 여행자가 보입니다. 그의 손에는 탑의 문을 열 수 있는 열쇠가 쥐어져 있습니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"많이 위태로워 보인다. 문을 여는 건 그다음이다. 먼저 내 물과 비상 식량을 나눠주고 숨을 고를 수 있게 도와주자."',
        whisper: {
          gain: '동료의 생명을 살리고 형성되는 깊은 신뢰와 유대',
          cost: '내 비축 물자 소모와 탑 진입의 일시적 지체'
        },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 't1_10',
        reactionText: '물병을 열어 여행자의 입술을 적셔주자 희미하게 숨이 돌아왔다.'
      },
      {
        id: 'B',
        text: '"시간을 지체할 수 없다. 일단 손에 쥔 열쇠를 조심스럽게 건네받아 문부터 열고, 안쪽의 안전한 장소로 이 사람을 데리고 들어가자."',
        whisper: {
          gain: '목표 달성과 생존을 동시에 노리는 신속한 효율성',
          cost: '위급한 상황에서 다소 냉정해 보일 수 있는 우선순위'
        },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 't1_10',
        reactionText: '열쇠를 받아 묵직한 철문을 돌려 열고 즉시 안으로 몸을 들였다.'
      }
    ]
  },

  // ⚔️ Scene 10: 탑의 수직 통로 (확실한 돌계단 vs 빠른 도르래 승강기)
  't1_10': {
    id: 't1_10',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 10,
    chapterTitle: '제10막: 꼭대기로 향하는 두 가지 길',
    backgroundScene:
      '건네준 물과 식량 덕분에 기운을 차린 여행자가 깊이 감사해하며, 품에 쥐고 있던 열쇠로 마침내 탑의 거대한 철문을 열어주었습니다. 안으로 들어서자 끝이 보이지 않는 높은 천장 아래, 탑의 꼭대기로 향하는 두 가지 방법이 보입니다. 하나는 벽을 따라 튼튼하게 놓인 \'돌계단\'이고, 다른 하나는 굵은 쇠줄에 매달린 채 위아래로 움직이는 \'고대 도르래 승강기\'입니다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"승강기는 줄이 끊어지거나 고장 나면 끝장이다. 숨이 차고 시간이 걸리더라도, 내 두 발로 확실하게 딛고 올라갈 수 있는 돌계단으로 가자."',
        whisper: {
          gain: '내 몸과 호흡으로 직접 통제하는 절대적 확실성',
          cost: '수백 개의 돌계단을 오르며 감당해야 하는 육체적 피로'
        },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 't1_11',
        reactionText: '돌계단에 굳건히 발을 딛으며 한 걸음씩 흔들림 없이 올랐다.'
      },
      {
        id: 'B',
        text: '"수십 층을 걸어 올라가다간 정상에 닿기도 전에 지친다. 위험 부담이 조금 있더라도, 도르래 승강기의 손잡이를 당겨 단숨에 위로 솟구치자."',
        whisper: {
          gain: '도구의 힘을 빌려 정점까지 수직으로 단축하는 기동력',
          cost: '도르래 줄과 기계의 결함 위험에 운명을 맡기는 불안'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't1_11',
        reactionText: '승강기 레버를 힘차게 당기자 바람을 가르며 위로 솟구쳤다.'
      }
    ]
  },

  // ⚔️ Scene 11: 닫혀가는 정상의 문 (골든타임 돌파 vs 완충과 회복)
  't1_11': {
    id: 't1_11',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 11,
    chapterTitle: '제11막: 닫혀가는 정상의 문',
    backgroundScene:
      '수백 개의 가파른 돌계단을 밟고 오르자 숨이 턱 끝까지 차오르고 다리가 무겁게 굳어옵니다. 마침내 탑의 꼭대기를 바로 앞둔 마지막 쉼터에 도착했습니다. 이곳에는 시원하고 맑은 물이 솟아나는 샘터와 푹신한 휴식 의자가 놓여 있지만, 한편으로는 밖에서 어두운 밤안개가 탑을 집어삼키며 정상의 문이 서서히 닫히려는 기운이 느껴집니다.',
    fx: 'warning',
    options: [
      {
        id: 'A',
        text: '"문이 닫히면 모든 게 헛수고다. 여기서 주저앉으면 다시는 못 일어난다. 숨이 턱에 차더라도 이를 악물고 마지막 계단을 향해 단숨에 질주하자."',
        whisper: {
          gain: '골든타임을 놓치지 않는 불굴의 집중력과 임계점 극복',
          cost: '에너지 고갈로 인해 정상 도달 직후 겪는 탈진'
        },
        weights: { resilience: 3, execution: 3 },
        nextTrialId: 't1_12',
        reactionText: '이를 악물고 마지막 힘을 쥐어짜 내어 닫히는 문틈으로 돌진했다.'
      },
      {
        id: 'B',
        text: '"탈진한 채로 정상의 문을 넘어가 봤자 다음 시련을 버티지 못한다. 문이 닫히더라도 내 몸이 먼저다. 샘물로 목을 축이고 숨을 완전히 고른 뒤 차분하게 올라가자."',
        whisper: {
          gain: '자신의 상태를 지키는 온전한 회복과 내적 평정심',
          cost: '정상의 문이 닫혀 새로운 우회 통로를 개척해야 하는 수고'
        },
        weights: { strategic: 2, resilience: 3 },
        nextTrialId: 't1_12',
        reactionText: '샘물로 목을 축이고 숨을 가다듬으며 다음 발걸음을 준비했다.'
      }
    ]
  },

  // ⚔️ Scene 12: 천공의 제단 (궁극적 지향과 나침반)
  't1_12': {
    id: 't1_12',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 12,
    chapterTitle: '제12막: 천공의 제단과 진실의 수정구',
    backgroundScene:
      '닫히기 직전의 문틈으로 몸을 던져, 마침내 탑의 꼭대기 하늘이 탁 트인 천공의 제단에 섰습니다. 시원한 바람이 땀을 식혀주고, 제단 중앙에는 당신이 겪어온 모든 여정과 기질을 투영하는 신비로운 \'진실의 수정구\'가 빛을 발하고 있습니다. 그 수정구는 당신이 이 험난한 여정을 거쳐 궁극적으로 도달하고 싶은 삶의 형태를 묻고 있습니다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"어떤 거센 폭풍우와 세상의 혼란이 닥쳐와도, 내 힘으로 지켜낼 수 있는 완벽하고 흔들림 없는 \'나만의 단단한 보금자리와 터전\'을 완성하는 것."',
        whisper: {
          gain: '누구에게도 침범받지 않는 안전하고 영속적인 자율 영역',
          cost: '새로운 외부 세계에 대한 모험과 확장의 절제'
        },
        weights: { strategic: 3, resilience: 3 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '수정구에서 뿜어져 나온 푸른빛이 흔들리지 않는 견고한 성채의 상을 띄웠다.'
      },
      {
        id: 'B',
        text: '"안주하지 않고 안개 너머의 미지의 세계를 향해 지평선을 끊임없이 넓혀나가는 \'영원한 탐험가이자 개척자\'로 살아가는 것."',
        whisper: {
          gain: '끝없는 성장과 새로운 지평을 열어젖히는 가슴 뛰는 자유',
          cost: '정착되지 않은 불안정함과 끊임없이 감수해야 할 변화'
        },
        weights: { creativity: 3, execution: 3 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '수정구가 황금빛으로 물들며 끝없는 지평선의 궤적을 비췄다.'
      }
    ]
  }
};

export function determineStep1Profile(scores: Record<CompassDimension, number>): StepProfile {
  // Sir의 시그니처: 전략적 분석 + 높은 지속성/독자생존 ➔ 흔들리지 않는 요새 구축가
  if (scores.strategic >= 10 && scores.resilience >= 10) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '흔들리지 않는 요새 구축가',
      englishTitle: 'The Pragmatic Architect',
      coreTraits: [
        '현실의 단서와 팩트를 먼저 읽는 냉철한 관찰력',
        '불필요한 소모전을 피하고 실리적인 샛길을 찾는 지혜',
        '추상적인 이론보다 손에 잡히는 실용 도구와 완성도 중시',
        '결정적 마감 앞에선 임계점을 돌파하며 나만의 단단한 터전 구축'
      ],
      summary:
        '들뜨지 않고 현실의 팩트와 흐름을 먼저 읽으며, 불필요한 고집 대신 기민하고 유연한 우회로를 찾아냅니다. 쓸데없는 군더더기를 배제한 실질적 도구와 완성도를 무기로 삼으며, 결정적 순간에는 온몸을 던져 임계점을 돌파해 누구에게도 흔들리지 않는 견고한 삶의 터전을 일궈냅니다.'
    };
  }

  if (scores.strategic >= scores.execution && scores.strategic >= scores.creativity) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '본질을 꿰뚫는 분석적 탐구자',
      englishTitle: 'The Analytic Deep-Diver',
      coreTraits: [
        '현상 이면에 숨겨진 본질적 원리와 구조 분석',
        '피상적인 유행보다 변하지 않는 근본 팩트 선호',
        '인과관계가 명확할 때 터져 나오는 깊은 집중력',
        '혼란 속에서도 전체의 뼈대를 차분히 완성하는 힘'
      ],
      summary:
        '겉으로 드러난 현상에 일희일비하지 않고, 문제의 근원과 사물의 작동 원리를 끝까지 파고듭니다. 탄탄한 팩트와 논리적 구조를 기반으로 흔들리지 않는 지식의 초석을 세우는 진정한 탐구형 기질입니다.'
    };
  } else if (scores.execution >= scores.creativity) {
    return {
      step: 1,
      stepName: 'STEP 1: 근본 기질 (Core Temperament)',
      archetypeTitle: '쓸모 있는 실체를 빚는 실용적 구축가',
      englishTitle: 'The Pragmatic Builder',
      coreTraits: [
        '불필요한 군더더기를 쳐내는 실용 완결주의',
        '손에 잡히는 도구와 명확한 결과물 중심의 사고',
        '복잡한 이론을 현장에서 즉각 쓸 수 있는 해법으로 전환',
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
        '기존의 뻔한 방식을 깨뜨리는 신선한 발상',
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
        '차가운 규칙보다 사람의 존엄성과 온기를 중시',
        '파편화된 요소들을 유기적으로 엮어내는 통합적 감각',
        '타인의 숨통을 틔워주고 신뢰를 회복시키는 포용력'
      ],
      summary:
        '단순히 기능적 해결에 그치지 않고, 그 문제를 겪고 있는 사람의 정서와 상황적 맥락을 깊이 헤아립니다. 사람과 사람, 생각과 생각을 따스하게 연결하여 가장 조화롭고 지속 가능한 해법을 도출해냅니다.'
    };
  }
}
