import { ChronicleResult, CompassDimension, AiWorkDomain } from '@/types/quest';
import { determineStep1Profile } from './step1_origin';
import { determineStep2Profile } from './step2_tactics';
import { determineStep3Profile } from './step3_conflict';

export function synthesizeChronicle(scores: Record<CompassDimension, number>): ChronicleResult {
  const step1 = determineStep1Profile(scores);
  const step2 = determineStep2Profile(scores);
  const step3 = determineStep3Profile(scores);

  // Determine Grand Title & Epithet based on primary score
  let grandTitle = '';
  let grandEpithet = '';
  let corePhilosophy = '';
  let decisionPattern = '';
  let aiCollaborationGuide = '';
  let aiWorkDomains: AiWorkDomain[] = [];
  let synergyRoles: string[] = [];
  let blindSpots: string[] = [];

  const maxDim = (Object.keys(scores) as CompassDimension[]).reduce((a, b) =>
    scores[a] >= scores[b] ? a : b
  );

  switch (maxDim) {
    case 'strategic':
      grandTitle = '본질을 꿰뚫고 시스템을 엮는 지능형 아키텍트';
      grandEpithet =
        '복잡한 소음 속에서 변하지 않는 뼈대를 세우고, AI라는 레버리지로 군더더기 없는 자동화 생태계를 완성하는 설계자';
      corePhilosophy =
        '겉핥기식 유행이나 임기응변에 기대지 않습니다. 문제가 일어나는 근본 인과관계를 집요하게 추적하여, 단 한 번의 깔끔한 시스템과 파이프라인으로 해결하는 구조적 완전성을 지향합니다. AI 시대에 나 혼자서도 기업 수준의 탄탄한 프로세스를 구축할 수 있는 지적 엔진을 품고 있습니다.';
      decisionPattern =
        '현상 이면의 인과관계 분석 ➔ 불필요한 수작업 요소 분리 ➔ AI 기반 자동화 파이프라인 설계 ➔ 최소 자원 최대 레버리지 가동';
      aiCollaborationGuide =
        'AI를 단순한 질의응답 챗봇으로 쓰지 마십시오. AI에게 전체 아키텍처의 논리적 맹점을 짚어보게 하는 \'레드팀 파트너\'이자, 반복적인 코드/데이터 파이프라인을 대신 짜주는 \'수석 빌더 에이전트\'로 부릴 때 폭발적인 시너지가 납니다.';
      aiWorkDomains = [
        {
          category: '⚡ AI 워크플로우 & 업무 자동화 아키텍트',
          fitReason: '반복적인 수작업을 질색하고, 프로세스가 물 흐르듯 자동으로 끝나는 시스템을 구축할 때 희열을 느끼는 기질과 완벽히 부합합니다.',
          recommendedTools: ['n8n', 'Make', 'Claude 3.7 Sonnet', 'OpenAI API', 'Supabase'],
          actionItem: '내가 일상이나 업무에서 매주 반복하는 번거로운 일 1가지를 정해, AI API와 자동화 툴로 원클릭 처리 파이프라인을 만들어보세요.'
        },
        {
          category: '🛠️ 1인 AI 마이크로 SaaS / 서비스 메이커',
          fitReason: '복잡한 인력 채용 없이도, AI 개발 어시스턴트를 활용해 현실의 뾰족한 문제를 해결하는 독립형 소프트웨어를 혼자 완성할 수 있습니다.',
          recommendedTools: ['Cursor', 'Next.js', 'v0.dev', 'Vercel', 'Stripe'],
          actionItem: '특정 분야의 가려운 곳을 긁어주는 1페이지짜리 유틸리티 웹서비스 아이디어를 Cursor로 2일 안에 빌드해보세요.'
        },
        {
          category: '📚 버티컬 지식 아카이브 & 심층 큐레이터',
          fitReason: '방대한 정보 속에서 핵심 원리를 꿰뚫고 체계적인 지식 지도로 정돈하는 탁월한 분석적 혜안을 디지털 자산으로 치환할 수 있습니다.',
          recommendedTools: ['Notion', 'NotebookLM', 'Perplexity Pro', 'Substack'],
          actionItem: '내가 가장 잘 아는 전문 영역의 노하우를 초보자도 10분 만에 이해할 수 있는 치트시트(가이드)로 제작해 배포해보세요.'
        }
      ];
      synergyRoles = [
        '1인 비즈니스 시스템 아키텍트',
        'AI 워크플로우 컨설턴트',
        '마이크로 서비스 솔로프리너'
      ];
      blindSpots = [
        '시스템의 완벽함에 지나치게 몰두하여 실제 사용자 배포 타이밍을 놓치지 않도록 주의',
        '사람들이 논리적 설명보다 직관적인 사용성을 원할 때 발생하는 간극 조율 필요',
        '80% 수준에서 일단 런칭하고 피드백을 받아 개선하는 기동성 의식적 훈련'
      ];
      break;

    case 'execution':
      grandTitle = '생각을 즉각 현실의 실체로 빚는 솔로 메이커';
      grandEpithet =
        '탁상공론을 거부하고, 가장 날카롭고 단순한 도구로 현실의 고통을 시원하게 해결하는 실전형 해결사';
      corePhilosophy =
        '아무리 거창한 아이디어도 작동하는 실체로 구현되지 않으면 의미가 없다고 믿습니다. 80%의 군더더기 없는 완결성과 빠른 실행력으로 가려운 곳을 즉각 긁어주며, 복잡함을 걷어내고 누구나 직관적으로 쓸 수 있는 솔루션을 만들어내는 것이 진정한 힘입니다.';
      decisionPattern =
        '핵심 결핍 포착 ➔ 군더더기 기능 80% 과감히 쳐내기 ➔ AI 도구로 초고속 프로토타이핑 ➔ 시장에 즉시 던져 검증';
      aiCollaborationGuide =
        'AI에게 긴 기획서를 쓰게 하지 마십시오. Cursor나 v0 같은 도구에 "지금 당장 작동하는 인터페이스 화면과 코드를 짜줘"라고 직진 명령을 내리며, 10분 단위로 작동하는 프로토타입을 손에 쥐는 속도전의 조력자로 활용하세요.';
      aiWorkDomains = [
        {
          category: '🚀 1인 AI 마이크로 프로덕트 메이커',
          fitReason: '복잡한 기획보다 손에 잡히는 결과물을 빠르게 뽑아내는 실행 돌파력이 AI 개발 도구와 결합할 때 가장 큰 위력을 발휘합니다.',
          recommendedTools: ['Cursor', 'v0.dev', 'Bolt.new', 'Supabase', 'Tailwind CSS'],
          actionItem: '이번 주말, 평소 불편했던 점을 해결해주는 미니 웹 도구를 AI와 함께 단 하루 만에 완성해 SNS에 공개해보세요.'
        },
        {
          category: '💼 AI 기반 실전 비즈니스 솔루셔니스트',
          fitReason: '소상공인이나 실무자들의 가려운 반복 업무를 AI 툴로 즉각 해결해주는 사이다 같은 실전형 컨설팅/해결사 역할에 최적입니다.',
          recommendedTools: ['ChatGPT Plus', 'Claude Artifacts', 'Google Sheets + AI', 'Make'],
          actionItem: '지인이나 동료의 가장 귀찮은 엑셀/문서 작업 1개를 AI 프롬프트와 템플릿으로 3분 만에 해결해주고 피드백을 받아보세요.'
        },
        {
          category: '📱 버티컬 툴킷 & 템플릿 크리에이터',
          fitReason: '누구나 바로 다운받아 쓸 수 있는 직관적이고 쓸모 있는 템플릿과 실전 프롬프트 묶음을 상품화하여 디지털 수익을 창출할 수 있습니다.',
          recommendedTools: ['Notion Templates', 'Gumroad', 'Framer', 'Midjourney'],
          actionItem: '실전에서 즉시 써먹을 수 있는 업무별 핵심 프롬프트 20종 템플릿을 만들어 노션에 패키징해보세요.'
        }
      ];
      synergyRoles = [
        '솔로 프로덕트 빌더 (Solopreneur)',
        '실전 AI 솔루션 프로바이더',
        '린(Lean) 프로토타이퍼'
      ];
      blindSpots = [
        '빠른 실행에 치중하다가 장기적인 유지보수나 데이터 안정성을 소홀히 할 위험 주의',
        '사용자의 피드백을 충분히 청취하기 전에 다음 프로젝트로 너무 빨리 건너뛰는 경향 조절',
        '한 가지 검증된 제품을 깊이 파고들어 스케일업하는 끈기 보완'
      ];
      break;

    case 'creativity':
      grandTitle = '새로운 세계관을 빚어내는 감각적 크리에이티브 디렉터';
      grandEpithet =
        '남들이 지나간 뻔한 길을 거부하고, AI라는 지능의 붓으로 독보적인 이야기와 아름다움을 빚어내는 창작자';
      corePhilosophy =
        '클리셰와 양산형 콘텐츠로는 영혼을 채울 수 없습니다. 직관적인 감각과 기발한 상상력으로 흩어진 파편들을 새롭게 조합하여, 세상에 없던 독창적인 세계관과 사람들의 마음을 흔드는 감동적 경험을 창조하는 데서 가장 깊은 생명력을 얻습니다.';
      decisionPattern =
        '고정관념 비틀기 ➔ 감각적 콘셉트 및 스토리텔링 정립 ➔ 멀티모달 AI로 시각/청각 실체화 ➔ 독창적 팬덤 형성';
      aiCollaborationGuide =
        'AI를 단순히 정답을 묻는 용도로 가두지 마십시오. "전혀 다른 두 개의 개념을 은유적으로 엮어줘", "기존의 클리셰를 완전히 뒤집는 낯선 장면을 묘사해줘"처럼 AI의 발산적 상상력을 한계까지 밀어붙이는 영감의 증폭기로 쓰세요.';
      aiWorkDomains = [
        {
          category: '🎨 버티컬 AI 비주얼 & 콘텐츠 디렉터',
          fitReason: '독창적인 미학적 안목과 스토리를 결합해, AI 이미지·영상·글 생성 도구를 지휘하며 독보적인 비주얼 자산을 창출할 수 있습니다.',
          recommendedTools: ['Midjourney', 'Kling / Runway', 'Claude 3.7', 'ElevenLabs', 'Framer'],
          actionItem: '나만의 독특한 세계관이나 콘셉트를 정해, AI 이미지와 스토리로 3부작 비주얼 카드뉴스를 제작해보세요.'
        },
        {
          category: '✍️ 인터랙티브 스토리 & 지식 미디어 크리에이터',
          fitReason: '독자의 참여와 선택을 이끌어내는 MUD형 인터랙티브 픽션, 인터랙티브 교육 콘텐츠 등 새로운 형태의 디지털 미디어를 개척할 수 있습니다.',
          recommendedTools: ['Next.js', 'Tailwind', 'Claude Artifacts', 'Substack'],
          actionItem: '사용자의 선택에 따라 결과가 달라지는 3단계 미니 심리/상황 테스트 웹페이지를 기획해보세요.'
        },
        {
          category: '🌟 독창적 1인 브랜드 빌더',
          fitReason: '대체 불가능한 나만의 취향과 철학을 뾰족한 퍼스널 브랜드로 구축하여 팬덤을 모으고 독점적 가치를 형성할 수 있습니다.',
          recommendedTools: ['Threads', 'YouTube Shorts + AI', 'Notion Portfolio'],
          actionItem: '내가 추구하는 일의 미학과 생각을 1분 숏폼이나 1편의 밀도 높은 글로 브랜딩해보세요.'
        }
      ];
      synergyRoles = [
        'AI 크리에이티브 디렉터',
        '인터랙티브 미디어 메이커',
        '오리지널 브랜드 파운더'
      ];
      blindSpots = [
        '영감이 떠오를 때만 몰입하고 정형화된 루틴 관리를 건너뛰는 번아웃 리스크',
        '완성도에 대한 지나친 완벽주의로 미완성작이 서랍 속에 갇히지 않도록 주의',
        '독창성과 더불어 대중이 편안하게 다가올 수 있는 친절한 접점 마련'
      ];
      break;

    default: // collaboration & resilience
      grandTitle = '사람의 온기와 연결을 엮는 하이브리드 커넥터';
      grandEpithet =
        '차가운 기술의 홍수 속에서 인간의 존엄과 마음의 결핍을 밝히고, 건강한 커뮤니티의 불씨를 지피는 동반자';
      corePhilosophy =
        'AI가 아무리 고도화되어도 대체할 수 없는 것은 한 사람의 마음을 깊이 이해하고 신뢰를 쌓는 온기입니다. 기술을 도구로 삼아 사람들의 막막한 두려움을 걷어내고, 서로를 지지하며 함께 성장할 수 있는 지속 가능한 연대의 장을 일구어냅니다.';
      decisionPattern =
        '보이지 않는 결핍과 마음의 신호 포착 ➔ 안전하고 공감할 수 있는 판(공간) 마련 ➔ AI를 통한 맞춤형 서포트 ➔ 지속 가능한 신뢰 공동체 완성';
      aiCollaborationGuide =
        'AI에게 사람들과의 대화 분석, 개인별 맞춤 피드백 초안 작성, 커뮤니티 공지 자동화 같은 지원 업무를 전담시키십시오. 절약된 시간으로 당신은 오직 사람들의 눈을 바라보며 깊은 인간적 신뢰를 쌓는 데 집중할 수 있습니다.';
      aiWorkDomains = [
        {
          category: '🤝 AI-휴먼 하이브리드 커뮤니티 파운더',
          fitReason: '기술이 고도화될수록 인간적 유대와 멘토를 갈망하는 사람들을 모아, 함께 배우고 실천하는 고밀도 버티컬 커뮤니티를 이끌 수 있습니다.',
          recommendedTools: ['Discord', 'Discourse', 'Notion', 'n8n Community Bot', 'Stripe'],
          actionItem: '특정 고민(예: AI 도구 활용이 막막한 초보자)을 가진 소규모 스터디 그룹(5~10명)을 모집해 2주간 함께 운영해보세요.'
        },
        {
          category: '💡 1:1 라이프 & 비즈니스 AI 코치',
          fitReason: '개개인의 고유한 맥락과 잠재력을 경청하고, AI 도구를 그 사람의 상황에 맞게 1:1로 쥐여주는 온기 있는 멘토십 비즈니스에 탁월합니다.',
          recommendedTools: ['Calendly', 'Zoom', 'Claude', 'Figma Jam'],
          actionItem: '주변 지인 1명에게 그 사람의 업무를 돕는 AI 활용법을 30분 동안 1:1로 친절히 코칭해주고 변화를 확인해보세요.'
        },
        {
          category: '🌱 소셜 임팩트 & 에듀테크 큐레이터',
          fitReason: '기술 격차로 소외되는 사람들을 돕거나, 복잡한 지식을 사람 중심의 따뜻한 교육 콘텐츠로 풀어내는 영역에서 깊은 보람을 찾을 수 있습니다.',
          recommendedTools: ['Canva + AI', 'Loom', 'Substack', 'OpenAI Custom GPTs'],
          actionItem: '초보자를 위한 친절한 AI 실무 입문 카드뉴스를 한 장 만들어 SNS나 커뮤니티에 공유해보세요.'
        }
      ];
      synergyRoles = [
        '버티컬 커뮤니티 오퍼레이터 / 호스트',
        'AI 휴먼 인터페이스 코치',
        '소셜 임팩트 파트너'
      ];
      blindSpots = [
        '타인의 고민과 문제를 지나치게 내 것처럼 짊어져 발생하는 감정적 에너지 소진 경계',
        '좋은 관계를 유지하려다 단호한 피드백이나 비즈니스적 결단을 망설이는 점 보완',
        '나 자신의 독립적인 창작 시간과 휴식 마지노선 철저히 수호'
      ];
      break;
  }

  const jarvisChronicleEpilogue =
    `Sir, 3단계의 심층 탐색이 성공적으로 종결되었습니다.
Sir의 나침반은 복잡한 군사 사령관이나 비현실적인 대기업 임원 타이틀이 아닌,
"나라는 고유한 엔진이 AI 시대의 거대한 도구를 쥐었을 때 어디에서 가장 빛나는가"를 명확하게 증명해 보였습니다.

근본 기질의 뼈대 위에, 심장을 뛰게 만드는 몰입의 취향을 얹고,
마침내 AI 시대에 혼자서도 압도적인 영향력을 발휘할 수 있는 최적의 업무 카테고리를 찾아내셨습니다.
이제 손에 쥐어진 나침반을 믿고, 오늘 당장 작은 첫 실체를 세상에 던져보시기 바랍니다.`;

  const radarData = [
    { dimension: 'strategic', label: '분석적 탐구 / 구조화', score: Math.min(100, 70 + (scores.strategic || 0) * 4), fullMark: 100 },
    { dimension: 'execution', label: '실용적 완결 / 실행력', score: Math.min(100, 72 + (scores.execution || 0) * 4), fullMark: 100 },
    { dimension: 'creativity', label: '직관적 창작 / 감각', score: Math.min(100, 68 + (scores.creativity || 0) * 4), fullMark: 100 },
    { dimension: 'collaboration', label: '인간적 공감 / 연대', score: Math.min(100, 65 + (scores.collaboration || 0) * 4), fullMark: 100 },
    { dimension: 'resilience', label: '자율 몰입 / 끈기', score: Math.min(100, 75 + (scores.resilience || 0) * 4), fullMark: 100 }
  ];

  return {
    step1,
    step2,
    step3,
    grandTitle,
    grandEpithet,
    corePhilosophy,
    decisionPattern,
    aiWorkDomains,
    synergyRoles,
    blindSpots,
    aiCollaborationGuide,
    jarvisChronicleEpilogue,
    scores,
    radarData
  };
}
