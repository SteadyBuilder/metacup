import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP1_TRIALS: Record<string, Trial> = {
  't1_1': {
    id: 't1_1',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 1,
    chapterTitle: '제1막: 튜토리얼 없는 히든 던전',
    backgroundScene:
      '[시스템 : 고대 지식의 회랑에 입장하셨습니다.]\n\n천장 끝까지 솟아오른 거대한 서가와 웅웅거리며 푸른빛을 뿜는 메인 콘솔. 튜토리얼도 없고 흔한 가이드 퀘스트 창조차 뜨지 않는다. 아무도 답을 알려주지 않는 낯선 공간, 내 손이 본능적으로 향하는 곳은 어디인가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"공략집이 없으면 내가 쓰면 그만이다. 제어판의 회로 흐름과 작동 알고리즘부터 뜯어본다. 뼈대와 규칙만 꿰뚫으면 이 던전 전체가 내 손바닥 안이다."',
        whisper: {
          gain: '흔들리지 않는 시스템 전체 설계도와 완벽한 원리 파악',
          cost: '초기 분석에 들어가는 정적인 집중과 시간 소모'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_2A',
        reactionText: '콘솔의 내부 알고리즘이 머릿속에 선명하게 그려진다. 시스템의 뼈대가 보이기 시작했다.'
      },
      {
        id: 'B',
        text: '"언제 회로를 다 뜯어보고 있나? 일단 눈앞의 메인 레버부터 당겨본다. 화면에 뜨는 실시간 로그와 피드백을 직접 몸으로 겪어보면 답이 나온다."',
        whisper: {
          gain: '즉각적인 가시적 피드백과 빠른 현장 감각 습득',
          cost: '예상치 못한 기계 오작동이나 돌발 트랩에 대한 순발력 요구'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't1_2B',
        reactionText: '쿠구구궁-! 레버가 내려가며 화려한 불빛이 번쩍인다. 즉각적인 반응에 심장이 뛴다.'
      }
    ]
  },

  't1_2A': {
    id: 't1_2A',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 2,
    chapterTitle: '제2막 (분석): 쏟아지는 붉은색 에러 로그',
    backgroundScene:
      '[경고 : 알 수 없는 연산 오류로 프로세스가 멈췄습니다.]\n\n중앙 모니터에 수천 줄의 붉은색 오류 코드가 폭포처럼 쏟아져 내린다. 과거 수많은 도전자들이 이 복잡한 병목 구간을 넘지 못하고 탈락했다. 복잡하게 꼬인 데이터 덩어리를 마주한 순간.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"버그에는 반드시 원인이 있는 법. 로그의 인과관계를 끝까지 추적해서, 전체 시스템을 마비시키는 단 하나의 치명적인 변수를 찾아내 박살 낸다."',
        whisper: {
          gain: '오류의 근본 원인 영구 박멸 및 완벽한 시스템 장악',
          cost: '끝을 볼 때까지 주변 상황을 잊어버리는 과도한 몰입'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't1_3A',
        reactionText: '수천 줄의 노이즈 사이로 결정적인 버그 라인이 번쩍 떠올랐다.'
      },
      {
        id: 'B',
        text: '"에러를 전부 다 고칠 필요는 없다. 실패한 기록들 속에서 지금 당장 문을 열 수 있는 우회 패턴 3개만 빠르게 추려내서 즉시 통과한다."',
        whisper: {
          gain: '군더더기 없는 즉각적 돌파와 쿨타임 없는 진행',
          cost: '시스템의 나머지 80% 영역을 미지의 상태로 남겨두는 찜찜함'
        },
        weights: { execution: 3, strategic: 1 },
        nextTrialId: 't1_3B',
        reactionText: '쓸데없는 군더더기를 쳐내자 굳게 닫혀있던 격벽이 스르륵 열렸다.'
      }
    ]
  },

  't1_2B': {
    id: 't1_2B',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 2,
    chapterTitle: '제2막 (직관): 굉음과 함께 터진 증기 트랩',
    backgroundScene:
      '삐-익-! 치이이익-!\n\n레버를 내리자마자 귓전을 때리는 경보음과 함께 파이프가 파열되며 고압 증기가 터져 나왔다. 매뉴얼에도 없는 돌발 상황. 발치에는 부러진 배관과 흩어진 고철 장비들이 뒹굴고 있다.',
    fx: 'warning',
    options: [
      {
        id: 'A',
        text: '"정석대로 갈 이유가 없지. 바닥에 뒹구는 고철 파이프와 렌치를 조합해서, 솟구치는 증기를 역방향으로 빼내는 변칙 배관을 즉석에서 조립한다."',
        whisper: {
          gain: '틀을 깨부수는 창의적 발상과 초고속 임기응변',
          cost: '임시 조치이기에 오래 버티지 못하는 내구도 한계'
        },
        weights: { creativity: 3, execution: 2 },
        nextTrialId: 't1_3C',
        reactionText: '남들이 보면 미쳤다고 할 조합이었지만, 결과는 대성공이다. 증기가 멎었다.'
      },
      {
        id: 'B',
        text: '"증기가 치솟는 데도 일정한 패턴과 박자가 있다. 온몸의 감각을 곤두세우고 기다리다가, 압력이 0으로 뚝 떨어지는 찰나의 순간에 메인 밸브를 단숨에 낚아챈다."',
        whisper: {
          gain: '날카로운 감각적 타이밍과 한 번의 깔끔한 종결',
          cost: '타이밍을 놓치면 고스란히 뒤집어써야 하는 리스크'
        },
        weights: { strategic: 2, resilience: 3 },
        nextTrialId: 't1_3D',
        reactionText: '탁! 완벽한 타이밍에 밸브를 꺾어 잠갔다. 소름 돋는 정적이 찾아왔다.'
      }
    ]
  },

  't1_3A': {
    id: 't1_3A',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 코어 (본질과의 대면)',
    backgroundScene:
      '[시스템 : 히든 룸의 심장부 \'지식의 코어\'에 도달하셨습니다.]\n\n영롱하게 회전하는 거대한 마도 코어가 공명하며 나라는 플레이어의 근본을 묻는다. 거친 난이도의 게임 속에서, 내가 끝까지 고수하는 플레이 스타일은 무엇인가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"겉만 번지르르한 꼼수나 일시적인 버프는 안 믿는다. 어떤 패치가 와도 흔들리지 않는 탄탄한 뼈대와 완벽한 메커니즘을 구축하는 것이 내 본질이다."',
        whisper: { gain: '흔들리지 않는 구조적 통찰과 깊이', cost: '반짝 유행하는 메타에 대한 무관심' },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '나침반 바늘이 깊은 침묵 속에서 흔들림 없이 고정되었다.'
      },
      {
        id: 'B',
        text: '"이론이 아무리 거창해 봤자 인게임에서 안 돌아가면 무쓸모다. 손에 쥐었을 때 즉시 몬스터를 썰어버릴 수 있는 실전 무기와 장비로 치환해내는 게 내 본질이다."',
        whisper: { gain: '단단한 현실 구현력과 빠른 완결', cost: '순수 이론 연구에 대한 피로감' },
        weights: { execution: 3, strategic: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '손바닥 위에 묵직하고 단단한 실전 무기가 쥐어졌다.'
      }
    ]
  },

  't1_3B': {
    id: 't1_3B',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 코어 (실전 압축의 미학)',
    backgroundScene:
      '[시스템 : 숏컷 루트를 개척하여 코어 룸에 진입했습니다.]\n\n군더더기를 전부 날려버리고 초고속으로 문을 뚫어낸 나의 플레이에 코어가 반응한다. 내가 가장 즐기는 문제 해결의 미학은 어디에 닿아있는가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"클리어에 필요한 건 100점짜리 완벽주의가 아니라, 80점짜리 빠른 작동성이다. 쓸데없는 군더더기는 다 쳐내고 핵심 기능만 빠르게 돌리는 게 내 본질이다."',
        whisper: { gain: '압도적인 퀘스트 클리어 속도와 기동력', cost: '디테일에 집착하는 완벽주의자들과의 호흡 차이' },
        weights: { execution: 3, resilience: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '군더더기가 깎여나가며 가장 날카로운 핵심만 남았다.'
      },
      {
        id: 'B',
        text: '"나 혼자만 깨고 끝내면 아쉽지. 복잡한 던전도 초보자 누구나 딸깍 클릭 한 번으로 통과할 수 있게 템플릿과 치트키 툴로 만들어 배포하는 게 내 본질이다."',
        whisper: { gain: '압도적인 대중적 활용성과 확장 파급력', cost: '도구를 정제하고 가다듬는 추가 공수' },
        weights: { collaboration: 3, execution: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '누구나 쓸 수 있는 직관적인 만능 도구가 완성되었다.'
      }
    ]
  },

  't1_3C': {
    id: 't1_3C',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 코어 (변칙 플레이어의 탄생)',
    backgroundScene:
      '[시스템 : 히든 기믹 \'변칙 배관\'이 성공적으로 기동했습니다.]\n\n치이익-! 뿜어져 나오던 증기가 뚝 멎었다. 고철 덩어리를 대충 엮어 만든 임시 파이프라인. 남들이 보면 미쳤다고 할 조합이었지만 결과는 대성공이다. 웅웅거리며 다채로운 빛을 뿜는 코어가 내 플레이 방식을 반긴다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"정해진 공략대로만 따라갈 거면 NPC랑 뭐가 다른가? 룰은 깨부수라고 있는 법. 남들이 상상도 못한 조합으로 판을 뒤엎을 때, 그때가 진짜 게임 시작이다."',
        whisper: { gain: '독보적인 오리지널리티와 룰 브레이커의 쾌감', cost: '단순 반복 퀘스트에 대한 극심한 지루함' },
        weights: { creativity: 3, resilience: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '가슴속에서 걷잡을 수 없는 영감의 불꽃이 타올랐다.'
      },
      {
        id: 'B',
        text: '"창의성은 결국 사람들의 가슴을 뛰게 만들어야 가치가 있다. 꽉 막혀서 고통받던 파티원들에게 \'이런 방법도 있어!\'라며 숨통을 틔워줄 때 가장 짜릿하다."',
        whisper: { gain: '사람들에게 주는 강렬한 임팩트와 팬덤 형성', cost: '타인의 반응에 대한 지속적인 심리적 안테나' },
        weights: { creativity: 2, collaboration: 3 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '주변의 모든 이들에게 짜릿한 전율이 전염되었다.'
      }
    ]
  },

  't1_3D': {
    id: 't1_3D',
    step: 1,
    stepTitle: 'STEP 1: 근본 기질 (Core Temperament)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식의 코어 (평정심의 극의)',
    backgroundScene:
      '[시스템 : 위기 상황을 완벽한 평정심으로 제어하셨습니다.]\n\n폭주하던 트랩이 가라앉고 찾아온 고요. 지식의 코어가 깊은 청옥빛을 은은하게 뿜어내며, 어떤 돌발 사태에도 멘탈을 잃지 않는 내면의 그릇을 묻는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"서버가 터지고 전장이 아수라장이 되어도 조급해하지 않는다. 큰 흐름을 읽고 평정심을 유지하며, 가장 결정적인 순간에 한 방을 꽂아 넣는 게 내 본질이다."',
        whisper: { gain: '절대 무너지지 않는 멘탈과 회복 탄력성', cost: '외부에서 보기에 다소 느긋해 보이는 신중함' },
        weights: { resilience: 3, strategic: 2 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '깊은 심해처럼 고요한 확신이 전신을 감쌌다.'
      },
      {
        id: 'B',
        text: '"기계적 수치보다 중요한 건 옆에 있는 파티원의 멘탈이다. 패닉에 빠진 동료의 상태창을 먼저 살피고 온기를 불어넣어 대열을 정비하는 게 내 본질이다."',
        whisper: { gain: '끈끈한 신뢰와 절대적인 파티원들의 충성도', cost: '남들의 고통까지 내 짐으로 짊어지는 심리적 과부하' },
        weights: { collaboration: 3, resilience: 1 },
        nextTrialId: 'UNLOCK_STEP2',
        reactionText: '사람을 향한 따뜻한 이해가 나침반 바늘을 적셨다.'
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
