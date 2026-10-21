import { ArchetypeResult, DimensionScores, CareerPathway, SubjectiveInputs } from '@/types';

interface ArchetypeDefinition {
  code: string;
  name: string;
  tagline: string;
  summary: string;
  primaryDimensions: (keyof DimensionScores)[];
  keyStrengths: string[];
  blindSpots: string[];
  jarvisVerdict: string;
  pathways: CareerPathway[];
}

export const ARCHETYPES: ArchetypeDefinition[] = [
  {
    code: 'STRATEGIC_ARCHITECT',
    name: '전략적 시스템 설계자 (Strategic Architect)',
    tagline: '보이지 않는 복잡성을 구조화하고 거대한 북극성을 설계하는 지략가',
    summary: '단기적인 불끄기보다 전체 시스템의 확장성과 구조적 완전성을 우선시합니다. 복잡한 문제를 단순한 원리로 환원하고, 팀이 나아갈 명확한 로드맵을 구축할 때 최고의 역량을 발휘합니다.',
    primaryDimensions: ['strategic', 'execution'],
    keyStrengths: [
      '고차원적인 추상화 및 시스템 모델링 능력',
      '기술 부채와 구조적 병목에 대한 선제적 혜안',
      '데이터와 논리에 기반한 확고한 우선순위 설정'
    ],
    blindSpots: [
      '완벽한 청사진을 그리느라 초기 린(Lean) 검증 타이밍을 놓칠 위험',
      '구조를 이해하지 못하는 이해관계자와의 커뮤니케이션 피로도'
    ],
    jarvisVerdict: '보스의 지적 체계는 고성능 프레임워크와 같습니다. 토대가 견고할수록 당신의 시스템은 수백 배의 트래픽을 견뎌낼 것입니다.',
    pathways: [
      {
        role: '테크 리드 / 시스템 아키텍트 (Tech Lead & Architect)',
        matchScore: 97,
        category: 'Engineering & Architecture',
        reason: '대규모 분산 시스템 설계와 모듈화된 아키텍처 구축에서 독보적인 기여를 합니다.',
        nextAction: '핵심 서비스의 도메인 주도 설계(DDD) 및 마이크로서비스 리팩토링 로드맵 작성',
        recommendedSkills: ['Domain-Driven Design', 'Cloud Architecture', 'System Scalability', 'API Design']
      },
      {
        role: '프로덕트 오퍼레이션 / CPO (Chief Product Officer)',
        matchScore: 92,
        category: 'Product Strategy',
        reason: '제품의 장기 비전과 개발팀의 리소스를 전략적으로 정렬하고 우선순위를 통제합니다.',
        nextAction: '분기별 OKR 프레임워크와 데이터 드리븐 제품 성과 측정 파이프라인 수립',
        recommendedSkills: ['Product Roadmap', 'Metrics Design', 'Stakeholder Alignment', 'Unit Economics']
      },
      {
        role: 'AI 에이전트 인프라 엔지니어 (AI Systems Engineer)',
        matchScore: 89,
        category: 'Emerging Tech',
        reason: '복잡한 멀티 에이전트 오케스트레이션과 LLM 컨텍스트 파이프라인을 체계적으로 구조화합니다.',
        nextAction: 'LangChain/LlamaIndex 기반 에이전틱 워크플로우 최적화 PoC 구축',
        recommendedSkills: ['Agentic Workflows', 'Vector DB', 'MCP Protocol', 'Prompt Chaining']
      }
    ]
  },
  {
    code: 'HYPER_BUILDER',
    name: '초고속 실행 빌더 (Hyper Builder)',
    tagline: '아이디어가 떠오른 순간 이미 배포 링크를 보내는 실행의 화신',
    summary: '끝없는 회의와 서류 작업에 질식하며, 작동하는 실체(Working Prototype)로 모든 것을 증명합니다. 80%의 완성도로 빠르게 시장에 던져 피드백 루프를 극도로 압축하는 린(Lean)의 정점입니다.',
    primaryDimensions: ['execution', 'resilience'],
    keyStrengths: [
      '압도적인 속도의 아이디어 프로토타이핑 및 출시 감각',
      '새로운 기술과 스택을 주저 없이 실전에 적용하는 기동성',
      '실패와 롤백을 두려워하지 않는 높은 심리적 회복탄력성'
    ],
    blindSpots: [
      '속도에 치중해 기술 부채나 문서화를 사후에 몰아서 겪는 병목',
      '속도가 느린 조직 환경에서 느끼는 심한 무력감과 답답함'
    ],
    jarvisVerdict: '보스의 추진력은 로켓 부스터와 같습니다. 실행하지 않고 머무는 시간이야말로 당신에게 가장 치명적인 손실입니다.',
    pathways: [
      {
        role: '풀스택 파운딩 엔지니어 (Founding Engineer)',
        matchScore: 98,
        category: 'Startup & Venture',
        reason: '초기 스타트업에서 0 to 1의 핵심 제품을 단 며칠 만에 구현하고 시장 적합성(PMF)을 검증합니다.',
        nextAction: 'Next.js + Supabase 기반 1인 풀스택 MVP 48시간 해커톤 진행',
        recommendedSkills: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Serverless Backend']
      },
      {
        role: '그로스 엔지니어 (Growth Engineer)',
        matchScore: 93,
        category: 'Growth & Business',
        reason: 'A/B 테스트와 전환율 최적화 실험을 매주 수십 개씩 기민하게 배포하여 숫자를 견인합니다.',
        nextAction: '온보딩 퍼널 전환율 측정을 위한 퍼널 분석 도구 및 피처 플래그 연동',
        recommendedSkills: ['Conversion Rate Optimization', 'A/B Testing', 'Event Analytics', 'Viral Loops']
      },
      {
        role: '솔로프리너 / 마이크로 SaaS 빌더 (Solopreneur)',
        matchScore: 90,
        category: 'Independent Maker',
        reason: '기획부터 배포, 마케팅 자동화까지 1인이 전 과정을 주도하여 지속 가능한 현금 흐름을 창출합니다.',
        nextAction: '자신만의 버티컬 문제를 해결하는 B2B 마이크로 SaaS 프로토타입 런칭',
        recommendedSkills: ['Stripe Integration', 'SEO Optimization', 'No-code Automation', 'Indie Hacking']
      }
    ]
  },
  {
    code: 'PIONEER_INNOVATOR',
    name: '불확실성을 뚫는 개척자 (Pioneer Innovator)',
    tagline: '아무도 가지 않은 미지의 영토에서 새로운 규칙을 만드는 혁신가',
    summary: '남들이 불가능하다고 하거나 상상조치 못한 영역에 매료됩니다. 생성형 AI, 웹3, 신규 인터페이스 등 새로운 기술 패러다임이 열릴 때 가장 앞장서서 실험하고 새로운 사용자 경험을 창조합니다.',
    primaryDimensions: ['creativity', 'resilience'],
    keyStrengths: [
      '이종 도메인 간의 창의적 융합과 독창적인 컨셉 도출',
      '정답과 레퍼런스가 없는 모호한 환경에 대한 높은 내성',
      '새로운 패러다임에 대한 폭발적인 호기심과 흡수력'
    ],
    blindSpots: [
      '새로운 자극에 매료되어 기존 프로젝트의 마무리 루틴이 지루해질 수 있음',
      '시장의 준비 상태보다 너무 앞서간 솔루션을 제시할 위험'
    ],
    jarvisVerdict: '보스는 항상 지평선 너머를 보고 계십니다. 새로운 지도를 그리는 자만이 다음 세대의 영토를 차지할 수 있습니다.',
    pathways: [
      {
        role: '생성형 AI 프로덕트 디자이너 / 엔지니어 (AI Product Specialist)',
        matchScore: 96,
        category: 'AI & Frontier Tech',
        reason: '단순한 래퍼를 넘어선 새로운 인간-AI 인터랙션(Generative UI, 자율 에이전트)을 개척합니다.',
        nextAction: 'Gemini / Claude API 기반 실시간 멀티모달 인터랙션 프로토타입 설계',
        recommendedSkills: ['Generative UI', 'LLM Agent Frameworks', 'Prompt Engineering', 'Vector Embeddings']
      },
      {
        role: '신사업 전략 / R&D 랩 리드 (R&D Venture Lead)',
        matchScore: 91,
        category: 'Innovation Strategy',
        reason: '미래 기술 트렌드를 비즈니스 기회로 전환하는 파괴적 신사업 모델을 발굴합니다.',
        nextAction: '향후 3개년 테크 트렌드 분석 및 킬러 비즈니스 시나리오 백서 작성',
        recommendedSkills: ['Trend Forecasting', 'Venture Prototyping', 'Blue Ocean Strategy', 'Tech IP']
      },
      {
        role: '크리에이티브 테크놀로지스트 (Creative Technologist)',
        matchScore: 88,
        category: 'Design & Engineering',
        reason: '예술적 감성과 첨단 기술의 경계에서 사람들의 감각을 자극하는 인터랙티브 경험을 설계합니다.',
        nextAction: 'WebGL / Three.js / Framer Motion을 활용한 감각적인 인터랙티브 캔버스 구축',
        recommendedSkills: ['Three.js', 'Framer Motion', 'Interactive Audio/Visuals', 'Canvas API']
      }
    ]
  },
  {
    code: 'SYNERGY_ORCHESTRATOR',
    name: '조율과 시너지의 마에스트로 (Synergy Orchestrator)',
    tagline: '사람과 기술의 점들을 이어 곱절의 임팩트를 만들어내는 지휘자',
    summary: '아무리 뛰어난 개인도 조화로운 팀을 이길 수 없음을 잘 압니다. 서로 다른 언어를 쓰는 기획, 개발, 디자인, 비즈니스 직군 사이의 간극을 메우고, 동료들이 최상의 퍼포먼스를 낼 수 있도록 윤활유가 되어줍니다.',
    primaryDimensions: ['collaboration', 'strategic'],
    keyStrengths: [
      '탁월한 대인 감수성과 갈등 조정 및 합의 도출 능력',
      '복잡한 기술적 맥락을 쉬운 비즈니스 언어로 번역하는 소통력',
      '심리적 안전감 속에서 팀의 사기를 북돋우는 서번트 리더십'
    ],
    blindSpots: [
      '모두의 의견을 만족시키려다 의사결정이 지연될 수 있음',
      '자신의 직접적인 기술적 결과물보다 조율 업무에 에너지가 소진되는 현상'
    ],
    jarvisVerdict: '보스의 커뮤니케이션 능력은 오케스트라의 지휘봉과 같습니다. 불협화음을 명곡으로 바꾸는 조율의 힘입니다.',
    pathways: [
      {
        role: '테크니컬 프로덕트 매니저 (Technical PM)',
        matchScore: 97,
        category: 'Product & Leadership',
        reason: '엔지니어링의 현실과 비즈니스 목표를 완벽히 통역하며 최적의 스프린트를 이끕니다.',
        nextAction: '엔지니어링 팀과 비즈니스 팀 간의 주간 싱크 아젠다 템플릿 정립',
        recommendedSkills: ['Agile / Scrum', 'Technical Writing', 'Data Analysis', 'User Stories']
      },
      {
        role: '엔지니어링 매니저 (Engineering Manager / VP of Eng)',
        matchScore: 93,
        category: 'People & Engineering',
        reason: '개발자들의 커리어 성장과 팀의 기술적 산출물을 동시에 극대화하는 매니지먼트를 펼칩니다.',
        nextAction: '팀원별 1:1 커리어 코칭 프레임워크 및 온보딩 위키 고도화',
        recommendedSkills: ['Team Topologies', '1:1 Coaching', 'Hiring & Culture', 'Performance Reviews']
      },
      {
        role: '개발자 관계 / 생태계 리드 (DevRel / Ecosystem Lead)',
        matchScore: 89,
        category: 'Community & DevRel',
        reason: '개발자 커뮤니티와 제품을 연결하고 외부 기여자를 끌어모으는 건강한 오픈소스 생태계를 조성합니다.',
        nextAction: '기술 블로그 시리즈 및 개발자 밋업/워크숍 기획안 실행',
        recommendedSkills: ['Developer Relations', 'Technical Evangelism', 'Open Source', 'Community Building']
      }
    ]
  },
  {
    code: 'DEEP_DIVER',
    name: '본질 탐구 분석가 (Deep Diver)',
    tagline: '표면 아래 숨겨진 데이터와 수학적 원리를 집요하게 파고드는 탐구자',
    summary: '겉핥기식 솔루션에 만족하지 않으며, "왜 그런가?"에 대한 근본적인 인과관계를 밝혀낼 때 카타르시스를 느낍니다. 방대한 로그 데이터나 복잡한 알고리즘 속에서 아무도 보지 못한 패턴을 발견합니다.',
    primaryDimensions: ['strategic', 'creativity'],
    keyStrengths: [
      '방대한 복잡계 속에서 숨겨진 핵심 원인과 패턴을 밝히는 분석력',
      '수치적 엄밀함과 비판적 사고를 통한 가설 검증',
      '집중 상태에서 발휘되는 지치지 않는 연구력과 집중도'
    ],
    blindSpots: [
      '충분한 데이터가 모일 때까지 결정을 미루는 분석 마비(Analysis Paralysis)',
      '실용적인 80% 타협점보다 100% 진실 규명에 집착할 가능성'
    ],
    jarvisVerdict: '보스의 시선은 수면 아래 1,000미터의 해저를 비춥니다. 세상의 진짜 진실은 언제나 깊은 곳에 숨어 있습니다.',
    pathways: [
      {
        role: 'AI / 데이터 사이언티스트 (AI & Data Scientist)',
        matchScore: 96,
        category: 'Data & Intelligence',
        reason: '예측 모델링과 통계적 추론을 통해 제품의 지능을 고도화하고 비즈니스 숨은 가치를 발굴합니다.',
        nextAction: '유저 행동 로그 데이터 군집 분석(Clustering) 및 이탈 예측 모델 실험',
        recommendedSkills: ['Python', 'SQL', 'Predictive Modeling', 'Machine Learning', 'Data Storytelling']
      },
      {
        role: '퍼포먼스 & 딥 알고리즘 엔지니어 (Performance Engineer)',
        matchScore: 92,
        category: 'Core Engineering',
        reason: '쿼리 최적화, 메모리 누수 해결, 병목 제거 등 시스템 극한의 효율을 뽑아냅니다.',
        nextAction: '애플리케이션 프로파일링(CPU/Memory)을 통한 응답 레이턴시 50% 감축 프로젝트',
        recommendedSkills: ['Profiling Tools', 'Database Indexing', 'Concurrency', 'Low-level Optimization']
      },
      {
        role: '비즈니스 인텔리전스 분석가 (BI / Strategy Analyst)',
        matchScore: 88,
        category: 'Business Analytics',
        reason: '경영진의 중대한 의사결정을 뒷받침하는 정밀한 재무 및 지표 대시보드를 설계합니다.',
        nextAction: '전사 핵심 코호트 잔존율 및 LTV/CAC 코호트 모델링',
        recommendedSkills: ['Tableau / Metabase', 'Financial Modeling', 'Cohort Analysis', 'Attribution Modeling']
      }
    ]
  },
  {
    code: 'MASTER_CRAFTSMAN',
    name: '디테일의 완벽주의 장인 (Master Craftsman)',
    tagline: '1픽셀의 오차와 0.1초의 레이턴시도 용납하지 않는 완성도의 화신',
    summary: '제품을 단순한 기능의 묶음이 아니라 하나의 예술적 공예품으로 여깁니다. 유저가 미처 의식하지 못하는 부드러운 인터랙션, 완벽한 타이포그래피, 우아한 코드 구조에서 진정한 자부심을 느낍니다.',
    primaryDimensions: ['execution', 'strategic'],
    keyStrengths: [
      '타의 추종을 불허하는 심미적 완성도와 사용자 경험(UX) 디테일',
      '유지보수하기 쉽고 읽기 아름다운 클린 코드 지향',
      '품질에 대한 타협 없는 장인 정신과 브랜드 격상'
    ],
    blindSpots: [
      '사소한 디테일을 다듬느라 마감 일정과 충돌할 수 있음',
      '완성도가 떨어지는 타인의 작업물에 대한 관용 부족'
    ],
    jarvisVerdict: '보스의 손길이 닿은 제품은 보석처럼 빛납니다. 명품과 범작을 가르는 차이는 언제나 마지막 1%의 디테일입니다.',
    pathways: [
      {
        role: '디자인 시스템 리드 / 프론트엔드 장인 (Design Systems Engineer)',
        matchScore: 98,
        category: 'Design & Frontend',
        reason: '토스(Toss)나 리니어(Linear)처럼 전 세계가 찬사하는 수준의 UI 컴포넌트 시스템을 구축합니다.',
        nextAction: '접근성(A11y)과 키보드 네비게이션이 완벽 지원되는 프리미엄 디자인 시스템 구축',
        recommendedSkills: ['Tailwind CSS', 'Framer Motion', 'Radix UI', 'Design Tokens', 'Accessibility']
      },
      {
        role: '프로덕트 디자이너 (Product Designer / UI/UX)',
        matchScore: 92,
        category: 'Product Design',
        reason: '사용자의 무의식적 인터랙션을 유도하는 마이크로 애니메이션과 매끄러운 플로우를 창작합니다.',
        nextAction: '핵심 퍼널의 마이크로 인터랙션 인터뷰 및 프로토타입 디자인 완성',
        recommendedSkills: ['Figma', 'Prototyping', 'User Research', 'Micro-interactions']
      },
      {
        role: '코드 퀄리티 & 인프라 엔지니어 (Software Quality Engineer)',
        matchScore: 89,
        category: 'Engineering Standard',
        reason: '테스트 자동화, CI/CD 파이프라인 무결성, 코드 리뷰 문화를 구축하여 버그 제로에 도전합니다.',
        nextAction: 'E2E 테스트(Playwright) 및 자동 린트/타입 체커 파이프라인 고도화',
        recommendedSkills: ['Playwright / Cypress', 'CI/CD Pipelines', 'Clean Code', 'Test Driven Dev']
      }
    ]
  },
  {
    code: 'IMPACT_DRIVER',
    name: '비즈니스 임팩트 승부사 (Impact Driver)',
    tagline: '모든 노력을 실질적인 매출과 비즈니스 지표의 숫자로 환산하는 승부사',
    summary: '아름다운 코드나 기발한 아이디어도 고객의 지갑을 열거나 실질적 가치를 증명하지 못하면 무의미하다고 봅니다. 비즈니스의 사활이 걸린 순간 과감한 베팅과 결단력으로 결과를 쟁취합니다.',
    primaryDimensions: ['execution', 'collaboration'],
    keyStrengths: [
      '사업적 기회 포착과 투자 대비 수익률(ROI)에 대한 냉철한 감각',
      '결과를 위해 무엇을 포기하고 무엇에 집중할지 아는 결단력',
      '이해관계자와 고객을 설득해 실질적인 계약을 성사시키는 세일즈 마인드'
    ],
    blindSpots: [
      '단기 지표 개선에 매몰되어 장기적 기술 부채를 소홀히 할 위험',
      '정량적 보상이 보이지 않는 작업에 대한 급격한 동기 저하'
    ],
    jarvisVerdict: '보스의 레이더는 항상 승리의 깃발을 향해 있습니다. 결국 시장에서 살아남아 증명하는 자가 모든 것을 갖습니다.',
    pathways: [
      {
        role: '비즈니스 파운더 / CEO (Tech Founder / CEO)',
        matchScore: 97,
        category: 'Executive & Venture',
        reason: '자본과 기술, 인재를 결합하여 실질적인 시장 가치를 만들어내는 스타트업을 이끕니다.',
        nextAction: '사업계획서의 단위 경제학(Unit Economics) 점검 및 엔젤/시드 투자 피칭덱 완성',
        recommendedSkills: ['Venture Capital', 'Business Strategy', 'Executive Leadership', 'Sales']
      },
      {
        role: '그로스 총괄 (Head of Growth)',
        matchScore: 94,
        category: 'Growth & Marketing',
        reason: '마케팅, 프로덕트, 세일즈를 연결해 사용자 획득(Acquisition)부터 수익화(Monetization)를 지휘합니다.',
        nextAction: 'CAC 절감 및 바이럴 루프 설계를 통한 마케팅 퍼널 최적화',
        recommendedSkills: ['Growth Hacking', 'Performance Marketing', 'Monetization Strategy', 'Analytics']
      },
      {
        role: 'B2B 솔루션 아키텍트 / 테크 세일즈 (Solutions Architect)',
        matchScore: 90,
        category: 'Enterprise Sales',
        reason: '엔터프라이즈 고객의 기술적 요구사항을 풀어내어 대규모 계약을 이끌어냅니다.',
        nextAction: '타겟 고객사 맞춤형 기술 데모 및 RFP 제안서 템플릿 개발',
        recommendedSkills: ['Enterprise Tech', 'Solution Selling', 'Client Consulting', 'Cloud Platforms']
      }
    ]
  },
  {
    code: 'HUMAN_CATALYST',
    name: '잠재력을 폭발시키는 인간 촉매 (Human Catalyst)',
    tagline: '사람의 마음을 읽고 조직의 잠재된 에너지를 한계 이상으로 이끌어내는 리더',
    summary: '최고의 시스템도 결국 사람이 만듭니다. 유저의 깊은 결핍에 공감하여 눈물짓게 만드는 제품을 기획하고, 지친 동료의 어깨를 두드리며 다시 달릴 용기를 불어넣는 조직의 따뜻한 심장입니다.',
    primaryDimensions: ['collaboration', 'resilience'],
    keyStrengths: [
      '경청과 공감을 통해 상대방의 진짜 니즈와 잠재력을 이끌어내는 힘',
      '팀 내 신뢰 자산을 쌓고 심리적 안정감을 극대화하는 촉진제',
      '사용자의 정서적 유대감을 이끌어내는 스토리텔링과 브랜딩'
    ],
    blindSpots: [
      '타인의 감정과 문제에 지나치게 감응하여 본인의 에너지가 방전될 위험',
      '차가운 냉정함과 단호한 정리 해고/피벗 결정에 대한 심리적 저항'
    ],
    jarvisVerdict: '보스의 온기는 메마른 기술 조직에 생명수를 붓는 것과 같습니다. 사람의 마음을 얻는 자가 결국 세상을 얻습니다.',
    pathways: [
      {
        role: '사용자 경험 리서처 (UX Researcher)',
        matchScore: 96,
        category: 'Research & Psychology',
        reason: '사용자 심층 인터뷰와 필드 스터디를 통해 제품의 근본적인 사용성 문제를 규명합니다.',
        nextAction: '타겟 고객 10명 심층 유저 인터뷰(IDI) 가이드라인 설계 및 인사이트 도출',
        recommendedSkills: ['User Interviews', 'Qualitative Research', 'Psychology', 'Journey Mapping']
      },
      {
        role: '피플 앤 컬처 리드 / CPO (Head of People & Culture)',
        matchScore: 92,
        category: 'People & Operations',
        reason: '조직의 성장통을 치유하고 뛰어난 인재들이 몰려드는 건강한 조직 문화를 설계합니다.',
        nextAction: '분기별 조직 건강도 진단 설문 및 피드백 회고 세션 기획',
        recommendedSkills: ['Organizational Psychology', 'Culture Building', 'Conflict Resolution', 'Talent Dev']
      },
      {
        role: '브랜드 스토리텔러 / 마케팅 디렉터 (Brand Director)',
        matchScore: 89,
        category: 'Brand & Community',
        reason: '제품의 가치를 하나의 감동적인 내러티브로 풀어내어 열성적인 브랜드 팬덤을 만듭니다.',
        nextAction: '진정성 있는 창업 스토리 및 브랜드 매니페스토 영상/아티클 제작',
        recommendedSkills: ['Brand Narrative', 'Copywriting', 'Content Strategy', 'Community Cultivation']
      }
    ]
  }
];

export function determineArchetype(scores: DimensionScores, subjectiveInputs: SubjectiveInputs): ArchetypeResult {
  // Normalize scores to 0-100 scale based on 16 rounds
  // Each round distributes ~30-40 points across selected dimensions
  const maxPossible = 120;
  const normalized: DimensionScores = {
    strategic: Math.min(100, Math.round((scores.strategic / maxPossible) * 100)),
    execution: Math.min(100, Math.round((scores.execution / maxPossible) * 100)),
    creativity: Math.min(100, Math.round((scores.creativity / maxPossible) * 100)),
    collaboration: Math.min(100, Math.round((scores.collaboration / maxPossible) * 100)),
    resilience: Math.min(100, Math.round((scores.resilience / maxPossible) * 100))
  };

  // Find top 2 dimensions
  const sortedDims = (Object.keys(normalized) as (keyof DimensionScores)[]).sort(
    (a, b) => normalized[b] - normalized[a]
  );
  const primaryDim = sortedDims[0];
  const secondaryDim = sortedDims[1];

  // Match archetype with highest affinity
  let bestMatch = ARCHETYPES[0];
  let highestScore = -1;

  for (const arch of ARCHETYPES) {
    let score = 0;
    if (arch.primaryDimensions.includes(primaryDim)) score += 50;
    if (arch.primaryDimensions.includes(secondaryDim)) score += 30;
    score += (normalized[arch.primaryDimensions[0]] || 0) * 0.4;
    score += (normalized[arch.primaryDimensions[1]] || 0) * 0.3;

    if (score > highestScore) {
      highestScore = score;
      bestMatch = arch;
    }
  }

  const radarData = [
    { dimension: '전략적 사고', score: Math.max(30, normalized.strategic), fullMark: 100 },
    { dimension: '집중 실행력', score: Math.max(30, normalized.execution), fullMark: 100 },
    { dimension: '창의적 혁신', score: Math.max(30, normalized.creativity), fullMark: 100 },
    { dimension: '협업 시너지', score: Math.max(30, normalized.collaboration), fullMark: 100 },
    { dimension: '회복 탄력성', score: Math.max(30, normalized.resilience), fullMark: 100 }
  ];

  // Synthesize subjective inputs
  const immersionText = subjectiveInputs.immersion.trim();
  const petPeeveText = subjectiveInputs.petPeeve.trim();

  const subjectiveInsights = {
    immersionAnalysis: immersionText
      ? `보스께서 시간 가는 줄 몰랐던 순간("${immersionText.slice(0, 40)}...")은 '${bestMatch.name}'의 핵심 기제인 자율성과 즉각적인 창작 루프가 완벽히 결합되었을 때 발생하는 전형적인 플로우 상태입니다.`
      : `${bestMatch.name} 성향은 복잡한 퍼즐을 풀거나 손에 잡히는 결과물을 만들어낼 때 가장 순도 높은 몰입을 경험합니다.`,
    energyPreservationAdvice: petPeeveText
      ? `가장 에너지를 소모시키는 상황("${petPeeveText.slice(0, 40)}...")을 방지하려면, 회의 시간을 주 2회 이하로 블록화하고 혼자서 온전히 딥워크할 수 있는 골든 타임을 사수하십시오.`
      : `불필요한 서류 절차와 마찰을 최소화하고, 자율적인 의사결정 권한을 확보할 수 있는 업무 환경을 세팅하는 것이 급선무입니다.`
  };

  return {
    code: bestMatch.code,
    name: bestMatch.name,
    tagline: bestMatch.tagline,
    summary: bestMatch.summary,
    keyStrengths: bestMatch.keyStrengths,
    blindSpots: bestMatch.blindSpots,
    jarvisVerdict: bestMatch.jarvisVerdict,
    scores: normalized,
    radarData,
    careerPathways: bestMatch.pathways,
    subjectiveInsights
  };
}
