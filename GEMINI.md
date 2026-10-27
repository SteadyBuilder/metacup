# Project Rules & Architecture Reference

## 1. 사내 네트워크망 GitHub 푸시 제한 정책 (GitHub Push Restriction)
- 현재 사내 네트워크망에서는 GitHub(`github.com`) 연결이 제한되어 있습니다.
- 따라서 작업 완료 시 `git push`는 시도하지 않으며, **로컬 코드 검증 및 `git commit`까지만 완결**합니다.
- Vercel 실서비스 배포를 위한 `git push origin main` 명령어는 사용자가 외부망 또는 적절한 네트워크 환경에서 직접 실행할 수 있도록 정갈하게 안내합니다.

---

## 2. 프로젝트 코드 구조 및 페이지 경로 퀵 레퍼런스 (Code Map)

### 2.1 페이지 라우트 (Pages & Routes)
| URL 경로 | 파일 경로 | 주요 역할 | 포함 요소 및 세부 기능 |
| :--- | :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | 메인 랜딩 & 인트로 | 서비스 정체성 소개, 탐색 시작 CTA 버튼, 에피소드 프롤로그 |
| `/trials` | `src/app/trials/page.tsx` | 시련(Quest) 메인 플레이 | MUD 소설 배경, 1인칭 독백 A/B 2열 카드, 10초 타이머, 되감기, 여정의 지도/속삭임/해금 모달 연동 |
| `/chronicle` | `src/app/chronicle/page.tsx` | 최종 연대기 결과 보고서 | 5차원 나침반 레이더 차트, 코어 아이덴티티 타이틀, 3단계 프로필 분석, AI 시대 최적 업무 3선 추천, 결과 공유 |
| `/chronicle/profile` | `src/app/chronicle/profile/page.tsx` | 사용자 맞춤 기질 프로필 | Sir의 기 분석 종합 리포트, 누적 아키타입 성향 뷰어 |
| `/api/analyze` | `src/app/api/analyze/route.ts` | 분석 API 엔드포인트 | 선택 데이터 처리 및 동적 분석 백엔드 라우트 |

### 2.2 핵심 UI 컴포넌트 (Components)
| 컴포넌트명 | 파일 경로 | 역할 및 특징 |
| :--- | :--- | :--- |
| `Navbar` | `src/components/Navbar.tsx` | 최상단 고정 헤더, 로고(나침반 회전 애니메이션), 프로필 바로가기, 여정의 지도 토글, 시련 초기화(Reset) |
| `MudStoryRenderer` | `src/components/quest/MudStoryRenderer.tsx` | MUD 텍스트 소설 현장 상황 묘사 렌더러 (좌측 시안 컬러 라인, 앰비언트 블러 글로우) |
| `MonologueCard` | `src/components/quest/MonologueCard.tsx` | 1인칭 내면 독백 선택지 카드 (선택지 A/B 배지, 🔍속삭임 버튼, 독백 지문, 결단 확정 화살표 액션) |
| `HourglassTimer` | `src/components/quest/HourglassTimer.tsx` | 10초 무의식 직관 카운트다운 타이머 (회전 모래시계, 심장박동 펄스 애니메이션) |
| `WhisperModal` | `src/components/quest/WhisperModal.tsx` | [속삭임] 기회비용 모달 (선택 시 얻는 가치 Gain vs 치를 대가 Cost 비교 통찰) |
| `JourneyMapModal` | `src/components/quest/JourneyMapModal.tsx` | [여정의 지도] 모달 (12개 시련 분기 노드 트리 맵, 현재 위치, 완료된 루트 하이라이트) |
| `StepUnlockModal` | `src/components/quest/StepUnlockModal.tsx` | [단계 해금] 모달 (1/2/3단계 완료 시 황금 자물쇠 해제 연출 및 다음 단계 오픈) |
| `FxOverlay` | `src/components/quest/FxOverlay.tsx` | 시련 긴장감 연출 오버레이 (화면 떨림 shake, 적색 경고 warning, 펄스 pulse) |
| `CompassRadar` | `src/components/chronicle/CompassRadar.tsx` | 5차원 나침반 방사형 레이더 차트 (전략·실행·창의·연대·회복 탄력성) |

### 2.3 데이터 & 스토리 엔진 (Data & Engine)
| 파일명 | 파일 경로 | 역할 및 데이터 내용 |
| :--- | :--- | :--- |
| `allTrials.ts` | `src/data/story/allTrials.ts` | 전체 시련 통합 딕셔너리 마스터 테이블 (`t1_1` ~ `t3_x`) |
| `step1_origin.ts` | `src/data/story/step1_origin.ts` | 1단계: 오리진 (본능적 직관 및 기질 탐색 시련 4개) |
| `step2_tactics.ts` | `src/data/story/step2_tactics.ts` | 2단계: 전술 (문제 해결 및 몰입 동기 탐색 시련 4개) |
| `step3_conflict.ts` | `src/data/story/step3_conflict.ts` | 3단계: 갈등 (가치관 대립 및 적합 업무 탐색 시련 4개) |
| `archetypesMaster.ts`| `src/data/story/archetypesMaster.ts` | 5차원 스코어 누적 기반 최종 아키타입 합성 알고리즘 & AI 업무 도메인 3선 매칭 엔진 |

### 2.4 상태 관리 및 타입 (State & Types)
| 파일명 | 파일 경로 | 관리 항목 및 주요 상태 |
| :--- | :--- | :--- |
| `useQuestStore.ts` | `src/store/useQuestStore.ts` | Zustand 글로벌 스토어: `currentTrialId`, `scores`(5차원 점수 누적), `history`(되감기 스택), `activeWhisper`, `unlockModal`, `timerSeconds` |
| `quest.ts` | `src/types/quest.ts` | `Trial`, `MonologueOption`, `WhisperCost`, `CompassDimension`, `ChronicleResult`, `AiWorkDomain` 타입 정의 |

