import {
  ChronicleResult,
  TemperamentDimension,
  TasteDomain,
  RoleJudgment,
  ProposedRole
} from '@/types/quest';
import { determineTemperamentProfile } from './step1_origin';
import { determineTasteProfile } from './step2_taste';

export function synthesizeChronicle(
  tempScores: Partial<Record<TemperamentDimension, number>>,
  tasteScores: Partial<Record<TasteDomain, number>>,
  judgedRoles: RoleJudgment[]
): ChronicleResult {
  const temperament = determineTemperamentProfile(tempScores);
  const taste = determineTasteProfile(tasteScores);

  const selectedBestRoles = judgedRoles
    .filter((j) => j.preference === 'like')
    .map((j) => j.role);

  const discardedRoles = judgedRoles
    .filter((j) => j.preference === 'dislike')
    .map((j) => j.role);

  // 종합 결론 (Grand Synthesis)
  let grandSynthesis = `Sir의 내면을 관통하는 본질은 **[${temperament.title}]**의 기질과 **[${taste.primaryDomain}]**에 대한 지적 열망입니다.\n\n`;

  grandSynthesis += `남들이 유행처럼 좇는 '1인 개발'이나 세속적 틀에 스스로를 가두지 않고, 본능적 기질(${temperament.deepEngine})과 영혼이 가슴 뛰는 취향(${taste.tasteSummary})을 명확히 규명하셨습니다.\n\n`;

  if (selectedBestRoles.length > 0) {
    const topRoleTitles = selectedBestRoles.map((r) => `**'${r.title}'**`).join(', ');
    grandSynthesis += `특히 3단계의 엄격한 자가 호불호 검증을 통해, ${topRoleTitles} 경로를 직접 승인하셨습니다. 이는 머리로 계산한 이상론이 아니라, 매일의 피로와 현실적 책임까지 기꺼이 감당하겠다는 Sir의 본능적 선택입니다.\n\n`;
  } else {
    grandSynthesis += `3단계에서 제안된 기성 역할들에 대해 모두 냉철한 거부감을 표명하셨습니다. 이는 기존의 정의된 직무 카테고리에 속하지 않고, Sir만의 독창적인 융합 방식을 직접 창조해야 함을 증명하는 강력한 자율성의 발현입니다.\n\n`;
  }

  if (discardedRoles.length > 0) {
    const discardedTitles = discardedRoles.map((r) => `'${r.title}'`).join(', ');
    grandSynthesis += `또한 ${discardedTitles}처럼 겉보기에 유망해 보이나 내 영혼을 갉아먹을 수 있는 영역을 사전에 명확히 쳐냄으로써, 불필요한 에너지 누수를 원천 차단하는 탁월한 자기 방어선을 확인했습니다.`;
  }

  // 레이더 데이터 구성
  const temperamentRadar = [
    {
      axis: '사유의 심도',
      label: '심층 사유 (vs 직관)',
      score: tempScores.cognitive_depth || 2,
      fullMark: 10
    },
    {
      axis: '직관적 기동',
      label: '직관/감각 (vs 체계)',
      score: tempScores.intuitive_flow || 2,
      fullMark: 10
    },
    {
      axis: '자율적 고독',
      label: '독립 몰입 (vs 관계)',
      score: tempScores.autonomous_focus || 2,
      fullMark: 10
    },
    {
      axis: '논리적 완결',
      label: '이성 무결점 (vs 정서)',
      score: tempScores.logical_rigor || 2,
      fullMark: 10
    },
    {
      axis: '결단적 돌파',
      label: '모험 돌파 (vs 신중)',
      score: tempScores.bold_breakthrough || 2,
      fullMark: 10
    }
  ];

  const tasteRadar = [
    {
      domain: '기술 시스템',
      label: '기술 & 자동화',
      score: tasteScores.tech_systems || 1,
      fullMark: 10
    },
    {
      domain: '인간 서사',
      label: '심리 & 철학',
      score: tasteScores.human_narrative || 1,
      fullMark: 10
    },
    {
      domain: '비즈니스',
      label: '자본 & 전략',
      score: tasteScores.business_capital || 1,
      fullMark: 10
    },
    {
      domain: '감각 미학',
      label: '예술 & 디테일',
      score: tasteScores.art_aesthetics || 1,
      fullMark: 10
    },
    {
      domain: '지식 정돈',
      label: '지식 큐레이션',
      score: tasteScores.knowledge_curation || 1,
      fullMark: 10
    }
  ];

  return {
    temperament,
    taste,
    judgedRoles,
    selectedBestRoles,
    discardedRoles,
    grandSynthesis,
    temperamentRadar,
    tasteRadar
  };
}
