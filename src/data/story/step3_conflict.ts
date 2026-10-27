import { Trial, StepProfile, CompassDimension } from '@/types/quest';

export const STEP3_TRIALS: Record<string, Trial> = {
  't3_1': {
    id: 't3_1',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 1,
    chapterTitle: '제1막: 치트키가 주어진 신세계',
    backgroundScene:
      '[시스템 : 최종 각성 영역 \'AI 특이점의 전장\'에 진입하셨습니다.]\n\n과거 수백 명의 대기업 팀이 수개월간 매달려야 했던 일들을, 이제 단 한 명의 솔로 플레이어가 AI 에이전트 군단을 조율하며 해치울 수 있는 시대. 사기적인 치트키가 내 손에 쥐어졌을 때, 내 본능이 가리키는 방향은 어디인가.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"거대 길드의 부품으로 썩을 생각은 없다. AI를 내 전속 개발자이자 디자이너로 삼아서, 내가 구상한 1인 서비스와 자동화 솔루션을 내 손으로 직접 빌드하고 세상에 론칭한다."',
        whisper: {
          gain: '1인 프로덕트 메이커로서의 압도적 기동성과 100% 창작 자율성',
          cost: '기획부터 배포, 운영까지 혼자 감당해야 하는 오너십의 무게'
        },
        weights: { execution: 3, strategic: 2 },
        nextTrialId: 't3_2A',
        reactionText: '머릿속의 아이디어가 즉시 손끝을 통해 실제로 작동하는 프로덕트로 구현된다.'
      },
      {
        id: 'B',
        text: '"단순 기능 구현은 AI한테 시키면 된다. 나는 AI의 방대한 연산력을 지렛대 삼아, 사람들의 시야를 틔워주는 독보적인 인사이트와 1티어 지식 콘텐츠를 빚어낸다."',
        whisper: {
          gain: '깊이 있는 지식 자산화와 강력한 퍼스널 브랜드 및 영향력',
          cost: '끊임없이 트렌드와 본질을 파고들어야 하는 지적 에너지'
        },
        weights: { strategic: 3, creativity: 2 },
        nextTrialId: 't3_2B',
        reactionText: '수많은 정보의 파편들이 날카로운 통찰의 문장으로 재구성된다.'
      }
    ]
  },

  't3_2A': {
    id: 't3_2A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 2,
    chapterTitle: '제2막 (빌더): 내가 구축할 현실의 치트키',
    backgroundScene:
      '[퀘스트 : AI 페어 프로그래밍을 시작합니다.]\n\n화면 가득 펼쳐진 개발 인터페이스. 내가 시장에 선보이고 싶은 진짜 무기의 결이 구체화된다.',
    fx: 'none',
    options: [
      {
        id: 'A',
        text: '"사람들이 매일 반복하며 끙끙 앓는 지루한 수작업들(데이터 정리, 이메일, 문서 작업 등)을 n8n과 AI API로 묶어 딸깍 1초 만에 끝내는 지능형 자동화 파이프라인을 구축한다."',
        whisper: {
          gain: '명확한 비효율 제거와 B2B/개인 실무 효율성의 극대화',
          cost: '초기 API 및 데이터 연동 설계의 정밀성 요구'
        },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 't3_3A',
        reactionText: '수십 단계의 번거로운 작업이 단 하나의 버튼 뒤로 사라졌다.'
      },
      {
        id: 'B',
        text: '"사람들이 일상에서 느끼는 뾰족한 결핍이나 재미를 겨냥해, 직관적인 UI를 갖춘 감도 높은 1인 마이크로 웹/앱 서비스를 3일 만에 완성해 시장에 던져본다."',
        whisper: {
          gain: '유저들과의 직접 소통 및 빠른 제품-시장 적합성 검증',
          cost: '지속적인 UI/UX 개선과 트래픽 유입 전략 수립'
        },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 't3_3B',
        reactionText: '눈앞에 완성된 프로덕트가 전 세계 웹 위에서 살아 숨 쉬기 시작했다.'
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
      '[퀘스트 : AI를 활용해 정보의 바다를 지휘하십시오.]\n\n기계가 쏟아내는 수억 개의 데이터 속에서, 오직 인간만이 빚어낼 수 있는 대체 불가능한 가치가 드러난다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"정보의 홍수 속에서 진짜 알짜배기 공략법과 핵심 원리만 날카롭게 큐레이션해서, 초보자도 10분 만에 마스터하는 고품질 지식 아카이브와 치트시트를 만든다."',
        whisper: {
          gain: '높은 신뢰도의 전문 큐레이터로서의 입지와 콘텐츠 자산화',
          cost: '지속적인 팩트 체크와 리서치에 투입되는 시간'
        },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 't3_3C',
        reactionText: '안개 같던 정보들이 한눈에 꿰뚫어 볼 수 있는 지도로 정돈되었다.'
      },
      {
        id: 'B',
        text: '"기술이 발전할수록 사람들은 진정성 있는 멘토와 인간적 유대를 갈망한다. AI 도구를 쥔 사람들을 모아 함께 레벨업하는 하이브리드 길드 커뮤니티를 만든다."',
        whisper: {
          gain: '대체 불가능한 강력한 인간적 신뢰와 끈끈한 네트워크',
          cost: '커뮤니티 내 다양한 유저들과의 적극적인 교류와 케어'
        },
        weights: { collaboration: 3, creativity: 2 },
        nextTrialId: 't3_3D',
        reactionText: '차가운 모니터 너머로 따스한 온기와 소속감이 피어오른다.'
      }
    ]
  },

  't3_3A': {
    id: 't3_3A',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 1인 아키텍트의 독립 선언',
    backgroundScene:
      '[시스템 : 최종 관문을 돌파하셨습니다.]\n\n나만의 기질과 취향, 그리고 AI 시대의 치트키가 하나로 맞물려 최종 항로를 비춘다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"나는 AI 에이전트 군단을 총괄하는 1인 시스템 아키텍트다. 불필요한 인력 낭비 없이 혼자서도 기업 수준의 자동화와 백엔드를 구축하는 워크플로우 마스터가 된다."',
        whisper: { gain: '1인 기업의 극대화된 레버리지와 고수익성', cost: '지속적인 최신 AI 툴 스택 학습' },
        weights: { strategic: 3, execution: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '나만의 AI 자동화 제국이 빈틈없이 가동되기 시작했다.'
      },
      {
        id: 'B',
        text: '"나는 실제 사람들의 일과 삶을 편하게 해주는 현실의 구원 투수다. 현장의 복잡한 요구사항을 경청하고 AI를 결합해 가장 실용적인 사이다 해답을 즉각 선물한다."',
        whisper: { gain: '확실한 고객 수요와 실전 컨설팅/해결력', cost: '다양한 실무 현장의 가변성 대응' },
        weights: { execution: 3, collaboration: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '고통받던 이들의 얼굴에 안도와 미소가 번졌다.'
      }
    ]
  },

  't3_3B': {
    id: 't3_3B',
    step: 3,
    stepTitle: 'STEP 3: AI 시대 적합 업무 영역 (AI-Era Work Domain)',
    trialNumber: 3,
    chapterTitle: '제3막: 솔로프리너의 도약',
    backgroundScene:
      '[시스템 : 서비스의 첫 번째 릴리즈 버전이 배포되었습니다.]\n\nAI 시대에 펼쳐질 나의 독자적인 무대를 확인한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"작지만 날카로운 마이크로 SaaS를 연속으로 뽑아내는 솔로프리너(Solopreneur). 실패를 두려워하지 않고 아이디어를 빠르게 시장에 던져 검증하는 메이커가 된다."',
        whisper: { gain: '독립적인 수익 파이프라인과 빠른 제품 반복 주기', cost: '초기 유저 획득을 위한 마케팅 시도' },
        weights: { execution: 3, creativity: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '하나의 서비스가 전 세계 웹 위로 힘차게 닻을 올렸다.'
      },
      {
        id: 'B',
        text: '"단순한 도구를 넘어 유저의 가슴을 뛰게 만드는 디지털 경험 디렉터. 기술과 예술, AI를 절묘하게 버무려 대체 불가능한 시각/체험형 프로덕트를 선보인다."',
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
      '[시스템 : 수많은 데이터가 하나의 체계로 벼려졌습니다.]\n\nAI 시대, 누구도 넘볼 수 없는 지식 전문가로서의 길을 걷는다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"AI 시대에 남들이 놓치기 쉬운 본질과 노하우를 발굴해 전자책, 뉴스레터, 전문 가이드로 자산화하는 버티컬 지식 디렉터가 된다. 내 지식 자체가 영구적인 자산이 된다."',
        whisper: { gain: '지속 가능한 디지털 지식 자산 구축', cost: '지속적인 깊이 있는 집필과 업데이트' },
        weights: { strategic: 3, resilience: 2 },
        nextTrialId: 'CHRONICLE',
        reactionText: '나만의 지식 서고가 견고한 디지털 자산으로 빛나기 시작했다.'
      },
      {
        id: 'B',
        text: '"복잡한 기술과 세상의 흐름을 대중의 언어로 번역해 주는 인텔리전스 스토리텔러. AI를 지휘해 매력적인 글, 영상, 인포그래픽을 쏟아내는 콘텐츠 파이프라인을 구축한다."',
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
      '[시스템 : 기술이 고도화될수록 인간의 온기가 가장 귀해집니다.]\n\nAI 시대를 관통하는 인간 중심의 독보적 포지션을 완성한다.',
    fx: 'pulse',
    options: [
      {
        id: 'A',
        text: '"AI 툴은 도구일 뿐, 핵심은 사람들의 막막함과 고립감을 풀어주는 것이다. 같은 목표를 가진 사람들을 엮어 서로를 이끌어주는 고밀도 멤버십 커뮤니티의 길드 마스터가 된다."',
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
