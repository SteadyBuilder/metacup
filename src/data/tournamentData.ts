import { TournamentRound } from '@/types';

export const TOURNAMENT_ROUNDS: TournamentRound[] = [
  {
    id: 1,
    roundNumber: 1,
    theme: '출시 전략 및 완결성',
    jarvisPrompt: '보스, 제품의 첫 마일스톤에 도달했습니다. 어떤 방식으로 세상에 공개하시겠습니까?',
    optionA: {
      id: 'A',
      title: '빠른 시장 검증 (80% 완성도 출시)',
      subtitle: '핵심 가치만 담아 즉시 런칭하고 실사용자 피드백으로 기민하게 보완한다',
      badge: 'Speed & Agility',
      weights: { execution: 15, resilience: 10, strategic: 5 },
      jarvisReaction: '실전 피드백을 빠르게 흡수하는 린(Lean) 스타트업의 전형적인 접근법이군요.'
    },
    optionB: {
      id: 'B',
      title: '무결점 완성도 (100% 검증 후 출시)',
      subtitle: '철저한 QA와 에지 케이스 테스트를 거쳐 티끌 하나 없는 완성도로 공개한다',
      badge: 'Craft & Quality',
      weights: { strategic: 15, creativity: 5, collaboration: 10 },
      jarvisReaction: '브랜드의 신뢰도와 완성도에 타협하지 않는 장인정신이 돋보입니다.'
    }
  },
  {
    id: 2,
    roundNumber: 2,
    theme: '불확실성 및 도전 성향',
    jarvisPrompt: '신규 프로젝트를 선택할 기회가 주어졌습니다. 당신의 심장을 뛰게 하는 쪽은?',
    optionA: {
      id: 'A',
      title: '미개척 고위험 혁신 프로젝트',
      subtitle: '실패 확률이 높지만 성공 시 시장의 패러다임을 바꿀 파괴적 실험',
      badge: 'High Risk, High Return',
      weights: { creativity: 15, resilience: 15 },
      jarvisReaction: '새로운 궤도를 뚫어내는 탐험가의 모험심이 감지됩니다.'
    },
    optionB: {
      id: 'B',
      title: '검증된 영역의 확실한 스케일업',
      subtitle: '시장성이 입증된 모델을 고도화하여 확실하고 견고한 비즈니스 임팩트 창출',
      badge: 'High Impact, Stability',
      weights: { strategic: 15, execution: 15 },
      jarvisReaction: '승률이 높은 전장을 골라 압도적으로 승리하는 현실적 지략가의 수입니다.'
    }
  },
  {
    id: 3,
    roundNumber: 3,
    theme: '의사결정 데이터 원천',
    jarvisPrompt: '제품 방향성을 결정해야 할 때, 보스께서 가장 깊이 신뢰하는 지표는?',
    optionA: {
      id: 'A',
      title: '정량 데이터 & A/B 테스트 지표',
      subtitle: '수치로 증명되는 전환율, 잔존율, 통계적 유의미성 기반의 결정',
      badge: 'Data-Driven',
      weights: { strategic: 15, execution: 10 },
      jarvisReaction: '차가운 숫자는 거짓말을 하지 않죠. 논리적 인과관계가 확실합니다.'
    },
    optionB: {
      id: 'B',
      title: '정성 인터뷰 & 유저의 감정적 결핍',
      subtitle: '유저의 한숨, 표정, 맥락 속에서 발견하는 정성적 인사이트와 직관',
      badge: 'User Empathy',
      weights: { collaboration: 15, creativity: 10 },
      jarvisReaction: '스프레드시트에 잡히지 않는 인간 본연의 니즈를 꿰뚫어 보시는군요.'
    }
  },
  {
    id: 4,
    roundNumber: 4,
    theme: '업무 자율성 및 협업 방식',
    jarvisPrompt: '당신의 생산성과 에너지가 가장 폭발하는 업무 환경은 어느 쪽입니까?',
    optionA: {
      id: 'A',
      title: '완전한 자율성과 단독 오너십',
      subtitle: 'A부터 Z까지 내 의도대로 설계하고 독립적으로 전권을 행사하는 환경',
      badge: 'Autonomous Driver',
      weights: { execution: 15, resilience: 10 },
      jarvisReaction: '간섭 없는 솔로 오너십에서 진정한 속도와 창의성이 발휘되는 타입이시군요.'
    },
    optionB: {
      id: 'B',
      title: '뛰어난 동료들과의 유기적 합의',
      subtitle: '각 분야의 전문가들과 치열한 브레인스토밍을 통해 시너지를 극대화하는 환경',
      badge: 'Synergy Co-creator',
      weights: { collaboration: 15, strategic: 10 },
      jarvisReaction: '집단 지성의 힘으로 혼자서는 도달할 수 없는 높이를 목표로 하시는군요.'
    }
  },
  {
    id: 5,
    roundNumber: 5,
    theme: '기술적 리팩토링 vs 신규 기능',
    jarvisPrompt: '제한된 2주의 스프린트, 단 하나의 작업만 완수할 수 있다면?',
    optionA: {
      id: 'A',
      title: '내부 아키텍처 개선 & 기술부채 해소',
      subtitle: '눈에 보이지 않지만 향후 시스템 확장성과 개발 속도를 3배 높일 기반 공사',
      badge: 'Architecture & Foundation',
      weights: { strategic: 15, resilience: 10 },
      jarvisReaction: '보이지 않는 토대가 튼튼해야 고층 빌딩을 올릴 수 있다는 혜안입니다.'
    },
    optionB: {
      id: 'B',
      title: '유저가 열광할 킬러 피처 런칭',
      subtitle: '사용자가 즉각 체감하고 바이럴을 일으킬 수 있는 가시적 신규 기능',
      badge: 'User Value & Growth',
      weights: { execution: 15, creativity: 10 },
      jarvisReaction: '고객에게 즉각적인 도파민과 실질적 가치를 안겨주는 모멘텀 드리븐입니다.'
    }
  },
  {
    id: 6,
    roundNumber: 6,
    theme: '문제 해결 접근 방식',
    jarvisPrompt: '복잡하고 모호한 난제에 맞닥뜨렸을 때 보스의 첫 번째 행동 패턴은?',
    optionA: {
      id: 'A',
      title: '바텀업(Bottom-Up) 즉시 프로토타이핑',
      subtitle: '일단 최소 코드를 짜거나 손으로 직접 만들어보며 물리적 한계를 부딪혀 파악',
      badge: 'Hands-on Prototyping',
      weights: { execution: 15, resilience: 10 },
      jarvisReaction: '백 마디 토론보다 한 줄의 작동 코드가 진실을 말해준다는 실전파군요.'
    },
    optionB: {
      id: 'B',
      title: '탑다운(Top-Down) 개념 모델링 및 구조화',
      subtitle: '전체 시스템 다이어그램과 본질적 원인을 먼저 정의하고 로드맵 수립 후 착수',
      badge: 'Systems Thinking',
      weights: { strategic: 15, creativity: 10 },
      jarvisReaction: '지도를 완벽히 숙지한 후 전장에 진입하는 정밀한 군사의 태세입니다.'
    }
  },
  {
    id: 7,
    roundNumber: 7,
    theme: '갈등 해결 및 설득 스타일',
    jarvisPrompt: '방향성에 대해 동료나 이해관계자와 첨예하게 대립할 때 당신의 돌파구는?',
    optionA: {
      id: 'A',
      title: '압도적인 데모와 실체적 결과물로 증명',
      subtitle: '길고 지루한 논쟁을 끝내기 위해 주말 동안 프로토타입을 만들어 보여준다',
      badge: 'Result Speaks',
      weights: { execution: 15, creativity: 10 },
      jarvisReaction: '팩트와 시각적 실체 앞에서는 어떤 반론도 힘을 잃게 마련이죠.'
    },
    optionB: {
      id: 'B',
      title: '1:1 대화와 맥락 공유를 통한 공감 얼라인',
      subtitle: '상대의 숨겨진 불안과 의도를 경청하고 상호 윈-윈할 수 있는 합의점을 도출',
      badge: 'Empathic Consensus',
      weights: { collaboration: 15, strategic: 10 },
      jarvisReaction: '사람의 마음을 얻고 원팀을 유지하는 지속 가능한 정치적 감각입니다.'
    }
  },
  {
    id: 8,
    roundNumber: 8,
    theme: '전문성 커리어 지향점',
    jarvisPrompt: '10년 후 업계에서 당신이 불리고 싶은 이상적인 타이틀은?',
    optionA: {
      id: 'A',
      title: '대체 불가능한 단 하나의 버티컬 장인',
      subtitle: '특정 전문 기술/분야에서 전 세계 상위 0.1%의 깊이를 자랑하는 최고 권위자',
      badge: 'Deep Specialist',
      weights: { strategic: 10, execution: 15 },
      jarvisReaction: '깊은 우물을 파 바닥의 암반수까지 도달하는 스페셜리스트의 기상입니다.'
    },
    optionB: {
      id: 'B',
      title: '기술과 비즈니스를 융합하는 슈퍼 제너럴리스트',
      subtitle: '기획, 개발, 디자인, 사업을 유기적으로 엮어내는 전천후 올라운드 플레이어',
      badge: 'Versatile Orchestrator',
      weights: { creativity: 15, collaboration: 10 },
      jarvisReaction: '점들을 선으로 잇고 시스템 전체를 춤추게 만드는 메이커의 모습입니다.'
    }
  },
  {
    id: 9,
    roundNumber: 9,
    theme: '위기 대처 메커니즘',
    jarvisPrompt: '예상치 못한 시스템 다운 또는 런칭 실패! 패닉 상황에서 당신은?',
    optionA: {
      id: 'A',
      title: '순발력 넘치는 기지와 즉각적인 핫픽스',
      subtitle: '현장 감각과 직관으로 임시 우회로를 뚫고 빠르게 화재를 진압한다',
      badge: 'Crisis Commando',
      weights: { resilience: 15, execution: 10 },
      jarvisReaction: '위기 속에서도 심박수를 일정하게 유지하며 문제를 베어 넘기는 전투원입니다.'
    },
    optionB: {
      id: 'B',
      title: '근본 원인 규명(RCA) 및 재발 방지 파이프라인',
      subtitle: '침착하게 로그를 추적하여 구조적 원인을 도출하고 프로세스 자체를 영구 수정',
      badge: 'Systemic Healer',
      weights: { strategic: 15, resilience: 10 },
      jarvisReaction: '같은 돌부리에 두 번 넘어지지 않는 엔지니어링의 정석입니다.'
    }
  },
  {
    id: 10,
    roundNumber: 10,
    theme: '아이디어 발상 스타일',
    jarvisPrompt: '새로운 서비스나 전략을 구상할 때 당신의 뇌세포가 점화되는 계기는?',
    optionA: {
      id: 'A',
      title: '이종 산업의 낯선 개념을 교차 결합',
      subtitle: '게임의 도파민 구조를 금융에 접목하거나 생물학 원리를 네트워크에 적용',
      badge: 'Cross-Domain Innovator',
      weights: { creativity: 15, strategic: 10 },
      jarvisReaction: '서로 다른 차원의 지식을 충돌시켜 새로운 빅뱅을 일으키시는군요.'
    },
    optionB: {
      id: 'B',
      title: '기존의 비효율과 마찰을 극단적으로 단순화',
      subtitle: '5단계의 복잡한 절차를 1클릭으로 압축하는 등 군더더기를 도려내는 최적화',
      badge: 'Simplicity Optimizer',
      weights: { execution: 15, strategic: 10 },
      jarvisReaction: '완벽함이란 더할 것이 없을 때가 아니라 뺄 것이 없을 때 완성되죠.'
    }
  },
  {
    id: 11,
    roundNumber: 11,
    theme: '조직 문화 및 팀 운영관',
    jarvisPrompt: '보스가 꿈꾸는 가장 이상적인 팀의 분위기는 어느 쪽에 가깝습니까?',
    optionA: {
      id: 'A',
      title: '심리적 안정감과 상호 배려가 가득한 문화',
      subtitle: '실패해도 비난받지 않고 구성원 개개인의 심리적 웰빙과 성장이 보호받는 팀',
      badge: 'Psychological Safety',
      weights: { collaboration: 15, resilience: 10 },
      jarvisReaction: '신뢰의 온도가 높을 때 비로소 진정한 잠재력이 개화하는 법입니다.'
    },
    optionB: {
      id: 'B',
      title: '냉철한 솔직함과 최고 수준의 챔피언십 문화',
      subtitle: '감정 소모 없이 투명한 피드백을 주고받으며 오직 탁월한 결과로 보상받는 팀',
      badge: 'Radical Candor',
      weights: { execution: 15, strategic: 10 },
      jarvisReaction: '프로 스포츠 구단처럼 최고의 역량으로 우승 반지를 노리는 승부사 집단이군요.'
    }
  },
  {
    id: 12,
    roundNumber: 12,
    theme: '기술 수용 및 트렌드 태도',
    jarvisPrompt: '새로운 패러다임(생성형 AI, 신규 언어/프레임워크)이 폭발할 때 당신은?',
    optionA: {
      id: 'A',
      title: '얼리 어답터 (첫날부터 실무 적용 및 프로토타이핑)',
      subtitle: '아직 불안정하고 문서가 부족해도 가장 먼저 뛰어들어 우위를 선점한다',
      badge: 'Bleeding Edge',
      weights: { creativity: 15, resilience: 10 },
      jarvisReaction: '파도의 꼭대기에서 서핑을 즐기는 대담한 기술 선각자입니다.'
    },
    optionB: {
      id: 'B',
      title: '스마트 팔로워 (충분한 검증 후 최적의 시점에 도입)',
      subtitle: '보안, 비용, 성숙도가 안정화될 때까지 지켜보고 가장 효율적인 툴링만 취사선택',
      badge: 'Pragmatic Adopter',
      weights: { strategic: 15, execution: 10 },
      jarvisReaction: '불필요한 수업료를 치르지 않고 알짜 실익만 챙기는 현실주의자입니다.'
    }
  },
  {
    id: 13,
    roundNumber: 13,
    theme: '제품 가치관 (유용성 vs 감성)',
    jarvisPrompt: '전설적인 제품이 되기 위해 더 결정적인 요소는 무엇이라고 보십니까?',
    optionA: {
      id: 'A',
      title: '마음을 흔드는 감성적 매력과 브랜딩 스토리',
      subtitle: '사용자가 제품을 쓰는 순간 특별한 존재가 된 것처럼 느끼게 하는 팬덤 형성',
      badge: 'Emotional Hook',
      weights: { creativity: 15, collaboration: 10 },
      jarvisReaction: '인간은 논리로 결정을 합리화하지만, 행동은 감정으로 촉발되죠.'
    },
    optionB: {
      id: 'B',
      title: '압도적인 유용성과 대체 불가능한 편리함',
      subtitle: '설명서가 필요 없을 정도로 유저의 시간과 돈을 극단적으로 절약해주는 효용',
      badge: 'Pure Utility',
      weights: { execution: 15, strategic: 10 },
      jarvisReaction: '생활의 기본 인프라처럼 공기처럼 없어서는 안 될 도구를 지향하시는군요.'
    }
  },
  {
    id: 14,
    roundNumber: 14,
    theme: '에너지 충전 루틴',
    jarvisPrompt: '치열한 프로젝트가 끝난 후, 보스의 멘탈 배터리를 가장 빠르게 채우는 것은?',
    optionA: {
      id: 'A',
      title: '나만의 공간에서 고요히 즐기는 지적 몰입',
      subtitle: '홀로 책을 읽거나 흥미로운 토이 프로젝트를 만지며 머리를 정리하는 시간',
      badge: 'Introspective Solitude',
      weights: { strategic: 10, resilience: 15 },
      jarvisReaction: '내면의 주파수를 가다듬으며 자아 성찰을 통해 에너지를 재충전하는 방식입니다.'
    },
    optionB: {
      id: 'B',
      title: '영감을 주는 사람들과의 뜨거운 대화와 교류',
      subtitle: '새로운 자극을 주는 사람들과 맛있는 음식을 먹으며 아이디어를 나누는 시간',
      badge: 'Social Catalysis',
      weights: { collaboration: 15, creativity: 10 },
      jarvisReaction: '외부 세계와의 상호작용 속에서 활력을 되찾는 외향적 엔진이군요.'
    }
  },
  {
    id: 15,
    roundNumber: 15,
    theme: '비전 커뮤니케이션 스타일',
    jarvisPrompt: '팀원들에게 미래의 비전을 제시해야 합니다. 당신의 스피치 핵심은?',
    optionA: {
      id: 'A',
      title: '가슴을 울리는 거대한 북극성과 대의명분',
      subtitle: '"우리는 왜 이 일을 하는가? 세상이 어떻게 바뀔 것인가?"에 대한 영감',
      badge: 'Inspiring Vision',
      weights: { creativity: 15, strategic: 10 },
      jarvisReaction: '방향을 가리키는 깃발이 선명할수록 군대는 지치지 않고 진격하죠.'
    },
    optionB: {
      id: 'B',
      title: '명확한 실행 마일스톤과 단계별 수치 목표',
      subtitle: '"이번 분기에 도달할 구체적 숫자와 우리가 달성할 전술적 로드맵"의 명시',
      badge: 'Tactical Clarity',
      weights: { execution: 15, strategic: 10 },
      jarvisReaction: '손에 잡히는 이정표만큼 실무진에게 안도감을 주는 것은 없습니다.'
    }
  },
  {
    id: 16,
    roundNumber: 16,
    theme: '궁극의 성공 기준',
    jarvisPrompt: '마지막 라운드입니다, 보스. 은퇴의 날, 당신이 가장 자랑스러워할 유산은?',
    optionA: {
      id: 'A',
      title: '세상에 충격을 안겨준 대담한 창작물과 혁신',
      subtitle: '아무도 엄두 내지 못했던 것을 세상에 남겼다는 창작자의 흔적',
      badge: 'Legendary Innovation',
      weights: { creativity: 15, resilience: 15 },
      jarvisReaction: '역사의 흐름에 자신만의 뚜렷한 획을 그으려는 혁명가의 마지막 한 수입니다.'
    },
    optionB: {
      id: 'B',
      title: '나를 통해 성장한 뛰어난 사람들과 건강한 시스템',
      subtitle: '내가 떠나도 스스로 영속하며 발전하는 탄탄한 조직과 후배들의 성공',
      badge: 'Enduring Legacy',
      weights: { collaboration: 15, strategic: 15 },
      jarvisReaction: '한 세대를 넘어 이어지는 유산을 남기는 진정한 리더의 철학입니다.'
    }
  }
];
