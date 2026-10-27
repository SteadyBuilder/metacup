import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP3_TRIALS: Record<string, Trial> = {
  't3_1': {
    id: 't3_1',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 1,
    chapterTitle: '제1막: 지능의 날개를 단 나침반',
    backgroundScene:
      '나의 근본 기질과 몰입 취향이 명확해진 순간, 시련의 무대는 현실의 거대한 패러다임 전환기인 ‘AI 시대의 교차로’로 이어진다. 수백 명의 코더와 기획자가 수개월 걸려 하던 일을, 이제 단 한 사람이 AI라는 거대한 지능 에이전트를 조율하며 해낼 수 있는 시대. 이 강력한 지능의 날개를 쥐었을 때, 내 본능이 가리키는 방향은 어디인가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"거대한 조직의 부품이 될 필요는 없다. AI를 나의 개발자이자 디자이너로 삼아, 내가 상상한 유용한 1인 서비스나 자동화 솔루션을 내 손으로 직접 빌드하고 론칭한다."',
        whisper: {
          gain: '독립적인 1인 프로덕트 메이커로서의 압도적 기동성과 창작 자율성',
          cost: '기획부터 구현, 운영까지 혼자 감당해야 하는 오너십의 무게'
        },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 't3_2A',
        reactionText: '머릿속의 아이디어가 즉시 손끝을 통해 작동하는 코드로 치환된다.'
      },
      {
        id: 'B',
        text: '"단순한 기능 구현은 AI가 다 해준다. 나는 AI의 방대한 정보력을 지렛대 삼아, 사람들의 길을 밝히는 독보적인 인사이트 콘텐츠와 차별화된 지식 자산을 빚어낸다."',
        whisper: {
          gain: '깊이 있는 지식 자산화와 강력한 퍼스널 브랜드 및 영향력',
          cost: '끊임없이 새로운 트렌드와 본질을 사색해야 하는 지적 에너지'
        },
        weights: { strategic: 3, creativity: 2 },
        nextTrialId: 't3_2B',
        reactionText: '수많은 정보의 조각들이 날카로운 통찰의 문장으로 재구성된다.'
      }
    ]
  },

  't3_2A': {
    id: 't3_2A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 2,
    chapterTitle: '제2막 (빌더): 내가 구축하고 싶은 현실의 가치',
    backgroundScene:
      'AI 개발 에이전트와 페어 프로그래밍을 시작했다. 내가 풀고 싶은 현실 문제의 결이 구체화된다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"사람들이 매일 반복하며 시간을 낭비하는 복잡한 수작업들(데이터 정리, 이메일, 보고서 등)을 n8n과 AI API로 연결해 원클릭으로 끝내는 지능형 자동화 파이프라인을 구축한다."',
        whisper: {
          gain: '명확한 비효율 제거와 B2B/개인 실무 효율성 극대화',
          cost: '초기 API 및 데이터 연동 설계의 정밀성 요구'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't3_3A',
        reactionText: '수십 단계의 번거로운 작업이 단 하나의 버튼 뒤로 사라졌다.'
      },
      {
        id: 'B',
        text: '"사람들이 일상에서 겪는 특정한 결핍이나 재미를 겨냥해, 직관적인 UI와 맞춤형 알고리즘을 갖춘 감도 높은 1인 마이크로 웹/앱 서비스를 빠르게 출시하고 테스트한다."',
        whisper: {
          gain: '엔드 유저와의 직접 소통 및 빠른 제품-시장 적합성 검증',
          cost: '지속적인 UI/UX 개선과 마케팅/유입 전략 수립'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't3_3B',
        reactionText: '눈앞에 완성된 서비스 프로토타입이 살아 숨 쉬기 시작했다.'
      }
    ]
  },

  't3_2B': {
    id: 't3_2B',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 2,
    chapterTitle: '제2막 (크리에이터): 지식과 관계의 지향점',
    backgroundScene:
      'AI를 활용해 정보의 바다를 탐색한다. 기계가 흉내 낼 수 없는 나만의 차별화된 가치가 드러난다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"쏟아지는 AI 정보의 홍수 속에서 핵심 원리와 노하우만을 날카롭게 큐레이션하고, 초보자도 쉽게 따라 할 수 있는 고품질 지식 아카이브와 가이드북을 만든다."',
        whisper: {
          gain: '높은 신뢰도의 전문 큐레이터로서의 입지와 콘텐츠 자산화',
          cost: '지속적인 검증과 리서치에 투입되는 시간'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't3_3C',
        reactionText: '안개 같던 정보들이 한눈에 꿰뚫어 볼 수 있는 지도 형태로 정돈되었다.'
      },
      {
        id: 'B',
        text: '"AI가 고도화될수록 사람들은 진정성 있는 인간적 유대와 멘토를 갈망한다. AI 도구를 손에 쥔 사람들을 모아 함께 학습하고 자극을 나누는 하이브리드 커뮤니티를 만든다."',
        whisper: {
          gain: '대체 불가능한 강력한 인간적 신뢰와 충성도 높은 네트워크',
          cost: '커뮤니티 내 다양한 사람들과의 적극적인 교류와 케어'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't3_3D',
        reactionText: '차가운 화면 너머로 따스한 온기와 소속감이 피어오른다.'
      }
    ]
  },

  't3_3A': {
    id: 't3_3A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: AI 시대 나의 독립 선언',
    backgroundScene:
      '모든 시련의 관문을 통과했다. 나만의 기질과 취향, 그리고 AI 시대의 도구가 하나로 맞물려 최종적인 항로를 가리킨다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"나는 AI 에이전트 군단을 총괄하는 1인 시스템 아키텍트다. 불필요한 인력 낭비 없이 혼자서도 기업 수준의 정교한 자동화와 백엔드를 완성하는 워크플로우 마스터가 된다."',
        whisper: { gain: '1인 기업의 극대화된 레버리지와 고수익성', cost: '지속적인 최신 AI 툴 스택 학습' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '나만의 AI 자동화 제국이 빈틈없이 가동되기 시작했다.'
      },
      {
        id: 'B',
        text: '"나는 실제 사람들의 일과 삶을 편하게 해주는 현실적인 솔루셔니스트다. 현장의 복잡한 요구사항을 경청하고 AI를 결합해 가장 실용적인 해답을 즉각 선물한다."',
        whisper: { gain: '확실한 고객 수요와 실전 컨설팅/해결력', cost: '다양한 실무 현장의 가변성 대응' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '문제를 겪던 이들의 얼굴에 안도와 미소가 번졌다.'
      }
    ]
  },

  't3_3B': {
    id: 't3_3B',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 1인 프로덕트 메이커의 도약',
    backgroundScene:
      '서비스의 첫 번째 릴리즈 버전이 배포 준비를 마쳤다. AI 시대에 펼쳐질 나의 무대를 확인한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"작지만 날카로운 마이크로 SaaS와 버티컬 서비스를 연속으로 만들어내는 솔로프리너(Solopreneur). 실패를 두려워하지 않고 아이디어를 빠르게 시장에 던져 검증하는 메이커가 된다."',
        whisper: { gain: '독립적인 수익 파이프라인과 빠른 제품 반복 주기', cost: '초기 유저 획득을 위한 마케팅 시도' },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '하나의 서비스가 전 세계 웹 위로 힘차게 닻을 올렸다.'
      },
      {
        id: 'B',
        text: '"단순한 도구를 넘어 사용자에게 감동과 영감을 주는 아름다운 디지털 경험 디렉터. 기술과 예술, AI의 장점을 절묘하게 버무려 대체 불가능한 시각/체험형 프로덕트를 선보인다."',
        whisper: { gain: '독보적인 브랜드 가치와 팬덤 형성', cost: '디자인과 완성도에 대한 치열한 고심' },
        weights: { creativity: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '보는 순간 마음을 사로잡는 매혹적인 인터페이스가 완성되었다.'
      }
    ]
  },

  't3_3C': {
    id: 't3_3C',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 지식 아키텍처의 정점',
    backgroundScene:
      '수많은 파편이 정돈되어 하나의 거대한 지식 체계가 되었다. AI 시대 지식 전문가로서의 길을 걷는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"AI 시대에 남들이 놓치기 쉬운 본질과 실무 노하우를 발굴해 전자책, 뉴스레터, 전문 가이드로 자산화하는 버티컬 지식 디렉터가 된다. 내 지식 자체가 영구적인 자산이 된다."',
        whisper: { gain: '지속 가능한 디지털 지식 자산 구축', cost: '지속적인 깊이 있는 집필과 업데이트' },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '나만의 지식 서고가 견고한 디지털 자산으로 빛나기 시작했다.'
      },
      {
        id: 'B',
        text: '"복잡한 기술과 세상의 흐름을 대중의 언어로 번역해주는 인텔리전스 스토리텔러. AI를 조율해 매력적인 글, 영상, 인포그래픽을 쏟아내는 콘텐츠 파이프라인을 구축한다."',
        whisper: { gain: '넓은 대중적 도달 범위와 강력한 미디어 파워', cost: '플랫폼 알고리즘 트렌드에 대한 기민함' },
        weights: { creativity: 3, collaboration: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '세상으로 송출되는 내 콘텐츠에 수많은 공감의 불빛이 켜진다.'
      }
    ]
  },

  't3_3D': {
    id: 't3_3D',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 휴먼 터치와 신뢰의 요새',
    backgroundScene:
      '기술이 넘쳐날수록 인간의 체온이 가장 귀해진다. AI 시대를 관통하는 인간 중심의 포지션을 완성한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"AI 툴은 도구일 뿐, 핵심은 사람의 막막함과 고립감을 풀어주는 것이다. 같은 목표를 가진 사람들을 엮어 서로를 이끌어주는 고밀도 멤버십 커뮤니티의 호스트가 된다."',
        whisper: { gain: '대체할 수 없는 강력한 유대감과 구독형 비즈니스', cost: '지속적인 모더레이션과 멤버 케어' },
        weights: { collaboration: 3, resilience: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '서로를 지탱하는 든든한 사람들의 연대가 완성되었다.'
      },
      {
        id: 'B',
        text: '"기술에 서툰 이들에게 AI를 친절하게 가르쳐주고 그들의 잠재력을 터뜨려주는 1:1 라이프 & 비즈니스 코치. 한 사람의 삶이 실제로 바뀌는 순간을 만들어낸다."',
        whisper: { gain: '깊은 개인적 만족감과 높은 신뢰 기반 고객 관계', cost: '개별 멘토링에 투입되는 시간' },
        weights: { collaboration: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '눈앞의 사람이 두려움을 떨치고 미소 지었다.'
      }
    ]
  }
};

export function determineStep3Profile(scores: Record<CompassDimension, number>): StepProfile {
  if (scores.strategic >= scores.creativity && scores.strategic >= scores.collaboration) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: 'AI 워크플로우 & 지능형 시스템 아키텍트',
      englishTitle: 'The AI Workflow & Pipeline Architect',
      coreTraits: [
        '복잡한 반복 수작업을 AI API와 자동화 툴로 연결해 최적화',
        '혼자서도 기업 수준의 시스템을 운용하는 1인 레버리지 역량',
        '흩어진 데이터와 툴을 하나의 유기적 파이프라인으로 구조화',
        '최신 AI 모델의 특성을 꿰뚫고 최적의 프롬프트를 설계하는 통찰'
      ],
      summary:
        'AI를 단순한 채팅 도구가 아닌, 내 손발이 되는 자동화 파이프라인으로 조율합니다. 비효율적인 수작업을 기술로 걷어내고 혼자서도 10인분의 생산성을 내는 지능형 시스템을 설계하는 데 최고의 적성을 발휘합니다.'
    };
  } else if (scores.execution >= scores.creativity) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '1인 AI 서비스 빌더 & 마이크로 프로덕트 메이커',
      englishTitle: 'The Solo AI Product Builder',
      coreTraits: [
        '아이디어를 AI 도구(Cursor, v0 등)로 며칠 만에 실체화하는 기동력',
        '작지만 날카로운 현실의 가려움을 긁어주는 마이크로 서비스 기획',
        '완벽주의를 버리고 빠르게 시장에 배포해 검증하는 실행주의',
        '개발부터 브랜딩까지 전 과정을 유연하게 조율하는 솔로프리너십'
      ],
      summary:
        '코딩의 진입장벽이 무너진 AI 시대의 가장 강력한 수혜자입니다. 복잡한 조직이나 투자 유치 없이도, 혼자의 힘으로 아이디어를 당장 작동하는 웹/앱 서비스로 뚝딱 구현해 세상에 던지는 1인 메이커 영역에 완벽히 부합합니다.'
    };
  } else if (scores.creativity >= scores.collaboration) {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: '버티컬 AI 콘텐츠 디렉터 & 지식 자산 큐레이터',
      englishTitle: 'The Vertical AI Content Director',
      coreTraits: [
        'AI를 활용한 초고속 리서치와 독창적 관점의 글·미디어 창작',
        '정보 과잉 시대에 필요한 핵심만 정제해 전달하는 큐레이션 역량',
        '나만의 고유한 세계관과 감각이 녹아든 디지털 지식 자산화',
        'AI 생성 도구를 자유자재로 다뤄 시각/스토리텔링 가치를 극대화'
      ],
      summary:
        'AI가 쏟아내는 수많은 텍스트 속에서 나만의 날카로운 통찰과 감각적 편집력을 발휘합니다. 독보적인 버티컬 지식 콘텐츠, 뉴스레터, 가이드북, 인터랙티브 미디어를 빚어내며 디지털 자산을 쌓아가는 크리에이터 영역에 최적화되어 있습니다.'
    };
  } else {
    return {
      step: 3,
      stepName: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
      archetypeTitle: 'AI-휴먼 하이브리드 커뮤니티 파운더 & 코치',
      englishTitle: 'The Hybrid Community Founder & Coach',
      coreTraits: [
        '기술이 줄 수 없는 인간적 온기와 진정성 있는 관계 형성',
        'AI 도구를 배우고 싶어 하는 사람들을 잇고 성장시키는 촉매 역할',
        '신뢰 기반의 고밀도 멤버십과 버티컬 커뮤니티 운영',
        '개개인의 막막함을 짚어내고 맞춤형 로드맵을 선물하는 공감력'
      ],
      summary:
        'AI가 발전할수록 역설적으로 가장 귀해지는 것은 ‘사람 간의 신뢰와 연결’입니다. AI의 강력한 생산성을 바탕으로 사람들의 두려움을 덜어주고, 함께 배우고 성장할 수 있는 커뮤니티와 1:1 코칭 비즈니스를 꽃피우는 데 천부적인 재능을 보입니다.'
    };
  }
}
