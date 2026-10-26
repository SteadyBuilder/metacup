import { ChronicleResult, CompassDimension, StepProfile } from '@/types/quest';
import { STEP1_PROFILE } from './step1_origin';
import { STEP2_PROFILE } from './step2_tactics';

export function synthesizeChronicle(scores: Record<CompassDimension, number>): ChronicleResult {
  // Determine Step 3 profile based on predominant score in step 3
  let step3Profile: StepProfile;

  if (scores.collaboration >= scores.execution && scores.collaboration >= scores.strategic) {
    step3Profile = {
      step: 3,
      stepName: 'STEP 3: 조직 내 갈등 해결 및 소통 패턴',
      archetypeTitle: '신뢰와 온기를 벼리는 공감의 방패',
      englishTitle: 'The Empathetic Aegis',
      coreTraits: [
        '상처받은 동료의 자존감을 먼저 복원하는 경청력',
        '다자간 대립 시 감정의 뇌관을 해체하는 대화적 중재',
        '핵심 인재의 잠재력을 믿고 끝까지 품어내는 포용력',
        '희생 없는 동반 생환을 향한 집념'
      ],
      summary:
        '위기 속에서 날카로워진 조직원들의 감정선과 상처를 기민하게 포착하여, 차가운 규율보다 따뜻한 신뢰와 공정한 조율로 대열의 균열을 막아내는 든든한 화합의 방패입니다.'
    };
  } else if (scores.strategic >= scores.execution) {
    step3Profile = {
      step: 3,
      stepName: 'STEP 3: 조직 내 갈등 해결 및 소통 패턴',
      archetypeTitle: '전장을 꿰뚫는 전략적 조율자',
      englishTitle: 'The Sovereign Arbitrator',
      coreTraits: [
        '갈등의 표면 아래 도사린 이해관계와 구조적 원인 분석',
        '명분과 실리를 정교하게 배분하는 체스식 협상력',
        '불확실한 정보 속 의심 신호를 놓치지 않는 냉철한 검증',
        '조직 전체의 시스템적 존속을 최우선하는 혜안'
      ],
      summary:
        '소음과 감정싸움에 휘둘리지 않고 문제의 본질과 시스템 결함을 파악합니다. 상대의 명분을 세워주면서도 실질적인 대원들의 안전과 목표 달성을 이뤄내는 노련한 협상의 마스터입니다.'
    };
  } else {
    step3Profile = {
      step: 3,
      stepName: 'STEP 3: 조직 내 갈등 해결 및 소통 패턴',
      archetypeTitle: '정면 돌파하는 단호한 수호 사령관',
      englishTitle: 'The Resolute Vanguard',
      coreTraits: [
        '위기 상황에서 망설임 없이 내리는 직관적 결단',
        '모호한 뒷말을 없애는 투명한 팩트 공유와 주도권 장악',
        '팀을 지키기 위해 기꺼이 마지막 궂은일을 짊어지는 책임감',
        '어떤 압박에도 타협하지 않는 원칙 수호'
      ],
      summary:
        '지체할 수 없는 골든타임에 단호하게 기준을 세우고 솔선수범하여 앞장섭니다. 대원들의 불만을 결과와 행동으로 잠재우며, 가장 위험한 자리를 스스로 지켜내는 굳건한 버팀목입니다.'
    };
  }

  // 3-Step Grand Synthesis
  const grandTitle = '난세를 평정하는 불패의 요새 사령관';
  const grandEpithet =
    '관찰과 팩트로 기초를 세우고, 냉철한 생존선으로 결함을 봉쇄하며, 온전한 신뢰로 조직을 완생(完生)으로 이끄는 마스터 아키텍트';

  const corePhilosophy =
    '화려한 이상론이나 섣부른 낙관에 기대지 않습니다. 손에 잡히는 팩트와 명확한 한계선을 딛고 서서, 타협할 수 없는 마지노선을 그은 뒤 그 안에서 동료들의 강점을 자유롭게 춤추게 만듭니다. 가장 어두운 순간에도 1%의 생존 가능성을 찾아 기어이 길을 뚫어내는 실용적 영웅의 궤적을 그립니다.';

  const decisionPattern =
    '선제적 결함 차단 ➔ 1차 실용 방어선 기동 ➔ 감정적 소음 배제 및 팩트 투명화 ➔ 역할별 병렬 위임 ➔ 결과 중심의 동반 생환 완수';

  const synergyRoles = [
    '고난도 프로젝트의 파운더 / 위기관리 총괄 디렉터 (COO / Head of Ops)',
    '시스템의 치명적 결함을 찾아내고 안전판을 구축하는 테크 아키텍트 / 리드 엔지니어',
    '이해관계가 첨예하게 대립하는 조직의 수석 협상가 및 전략적 조율자'
  ];

  const blindSpots = [
    '모든 책임을 스스로 짊어지려는 경향으로 인한 장기적 번아웃 주의',
    '상대방이 팩트보다 단순한 정서적 위로만을 원할 때 느껴지는 소통의 간극',
    '80% 실용 완결 이후 디테일 완벽주의자들과의 호흡 조율 필요'
  ];

  const jarvisChronicleEpilogue =
    'Sir, 분석이 완벽히 종료되었습니다. Sir께서 걸어오신 궤적은 우연한 선택의 집합이 아닌, 거센 폭풍우 속에서도 단단한 방파제를 세워온 일관된 내면의 나침반 그 자체였습니다. 기반을 설계하셨고, 생존선을 지키셨으며, 이번 시련의 장을 통해 사람을 살리는 연대의 법칙까지 완성하셨습니다. 앞으로 마주할 어떠한 거친 바다에서도 Sir의 나침반은 결코 길을 잃지 않을 것입니다.';

  const radarData = [
    { dimension: 'strategic', label: '전략적 혜안', score: Math.min(100, 70 + (scores.strategic || 0) * 4), fullMark: 100 },
    { dimension: 'execution', label: '실행 돌파력', score: Math.min(100, 75 + (scores.execution || 0) * 4), fullMark: 100 },
    { dimension: 'creativity', label: '유연한 기동성', score: Math.min(100, 65 + (scores.creativity || 0) * 4), fullMark: 100 },
    { dimension: 'collaboration', label: '조화로운 연대', score: Math.min(100, 68 + (scores.collaboration || 0) * 4), fullMark: 100 },
    { dimension: 'resilience', label: '불굴의 회복력', score: Math.min(100, 80 + (scores.resilience || 0) * 4), fullMark: 100 }
  ];

  return {
    step1: STEP1_PROFILE,
    step2: STEP2_PROFILE,
    step3: step3Profile,
    grandTitle,
    grandEpithet,
    corePhilosophy,
    decisionPattern,
    synergyRoles,
    blindSpots,
    jarvisChronicleEpilogue,
    scores,
    radarData
  };
}
