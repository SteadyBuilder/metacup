import { Trial } from '@/types/quest';
import { STEP1_TRIALS } from './step1_origin';
import { STEP2_TRIALS } from './step2_tactics';
import { STEP3_TRIALS } from './step3_conflict';

export const ALL_TRIALS: Record<string, Trial> = {
  ...STEP1_TRIALS,
  ...STEP2_TRIALS,
  ...STEP3_TRIALS
};

/**
 * 사용자가 이전 시련들에서 내린 선택(decisions)을 바탕으로,
 * 선택한 아이템이나 행동에 부합하도록 시련 지문 및 선택지를 동적으로 조율하여 반환합니다.
 */
export function getResolvedTrial(
  trialId: string,
  decisions?: Record<string, { optionId: 'A' | 'B'; text?: string; reaction?: string }>
): Trial {
  const base = ALL_TRIALS[trialId] || ALL_TRIALS['t1_1'];
  if (!decisions) return base;

  // 1. 제6막: 무너지는 천장과 톱니 함정 (제5막 선택: A 고대 기록 vs B 특수 도구함)
  if (trialId === 't1_6') {
    const t5Decision = decisions['t1_5']?.optionId;
    if (t5Decision === 'A') {
      return {
        ...base,
        backgroundScene:
          '제단에서 고대 기록을 품에 챙겨 넣자마자 쿵 하는 굉음과 함께 동굴 천장이 흔들리며 입구가 무너지기 시작합니다! 탈출할 수 있는 시간은 단 수십 초. 바닥에는 복잡한 톱니 함정이 작동하기 시작했습니다.',
        options: [
          {
            ...base.options[0],
            text: '"서두르면 끝장이다. 호흡을 가다듬고 방금 얻은 고대 기록의 원리를 떠올려 톱니 함정의 핵심 부품을 순서대로 멈춰 세워 안전한 탈출로를 확보하자."',
            reactionText: '심호흡과 함께 기록에 적힌 취약점을 노려 핵심 부품을 단단히 멈춰 세웠다.'
          },
          base.options[1]
        ]
      };
    }
    if (t5Decision === 'B') {
      return {
        ...base,
        backgroundScene:
          '제단에서 도구함을 챙겨 들자마자 쿵 하는 굉음과 함께 동굴 천장이 흔들리며 입구가 무너지기 시작합니다! 탈출할 수 있는 시간은 단 수십 초. 바닥에는 복잡한 톱니 함정이 작동하기 시작했습니다.',
        options: [
          {
            ...base.options[0],
            text: '"서두르면 끝장이다. 호흡을 가다듬고 방금 얻은 도구로 톱니 함정의 핵심 부품을 순서대로 멈춰 세워 안전한 탈출로를 확보하자."',
            reactionText: '심호흡과 함께 도구를 찔러 넣어 핵심 부품을 단단히 멈춰 세웠다.'
          },
          base.options[1]
        ]
      };
    }
  }

  // 2. 제8막: 녹슨 수문과 도르래 (제5막 고대기록/도구함 & 제7막 호숫가/뗏목 반영)
  if (trialId === 't1_8') {
    const t5Decision = decisions['t1_5']?.optionId;
    const t7Decision = decisions['t1_7']?.optionId;

    let scene = base.backgroundScene;
    if (t7Decision === 'B') {
      scene =
        '즉석 뗏목을 타고 안개 낀 수면을 가로지르던 중, 탑으로 향하는 물길을 막아서고 있는 거대한 수문과 도르래 장치에 가로막혔습니다. 이 수문만 열어 물을 빼낸다면 바닥이 드러나 걸어서 호수 건너편 탑으로 갈 수 있습니다. 하지만 도르래 장치는 세월의 무게로 뻑뻑하게 녹슬어 굳어 있습니다.';
    }

    let optA = base.options[0];
    if (t5Decision === 'A') {
      optA = {
        ...base.options[0],
        text: '"앞서 익힌 고대 기록의 기계 구조를 떠올리자. 녹슨 부품들의 결합 원리를 살피고 주변 부품과 지렛대를 맞춰, 원래 설계된 순서대로 부드럽게 수문을 들어 올리자."',
        reactionText: '기록의 설계 원리대로 지렛대를 맞추자 굳었던 도르래가 스르륵 풀려 돌았다.'
      };
    } else if (t5Decision === 'B') {
      optA = {
        ...base.options[0],
        text: '"품에 챙겨온 도구함을 꺼내자. 녹슨 부품들의 결합 구조를 하나씩 살피고 기름칠을 해서, 원래 만들어진 방식대로 부드럽게 돌려 수문을 들어 올리자."',
        reactionText: '부품 하나하나에 기름을 먹이자 굳었던 도르래가 스르륵 풀려 돌았다.'
      };
    }

    return {
      ...base,
      backgroundScene: scene,
      options: [optA, base.options[1]]
    };
  }

  // 3. 제10막: 꼭대기로 향하는 두 가지 길 (제9막 여행자 구호 방식 반영)
  if (trialId === 't1_10') {
    const t9Decision = decisions['t1_9']?.optionId;
    if (t9Decision === 'B') {
      return {
        ...base,
        backgroundScene:
          '열쇠를 건네받아 탑의 거대한 철문을 열고 지친 여행자를 안으로 데려왔습니다. 숨을 고른 여행자가 고개를 끄덕이며 깊은 감사의 눈빛을 보냅니다. 안으로 들어서자 끝이 보이지 않는 높은 천장 아래, 탑의 꼭대기로 향하는 두 가지 방법이 보입니다. 하나는 벽을 따라 튼튼하게 놓인 \'돌계단\'이고, 다른 하나는 굵은 쇠줄에 매달린 채 위아래로 움직이는 \'고대 도르래 승강기\'입니다.'
      };
    }
  }

  return base;
}
