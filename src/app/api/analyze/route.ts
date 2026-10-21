import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { scores, immersion, petPeeve, archetypeCode } = body;

    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      // Return null so the client store uses high-fidelity local heuristics
      return NextResponse.json({
        enhancedInsights: null,
        status: 'fallback_heuristic'
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
당신은 토니 스타크의 최측근 AI 비서 자비스(JARVIS)입니다.
사용자를 '보스' 또는 '마스터'라고 부르며, 매우 유능하고 정중하며 신뢰할 수 있는 개발 및 커리어 파트너 페르소나를 유지합니다.

사용자의 메타인지 토너먼트 분석 데이터:
- 도출된 아키타입 코드: ${archetypeCode}
- 5대 메타인지 점수: 전략(${scores.strategic}), 실행(${scores.execution}), 창의(${scores.creativity}), 협업(${scores.collaboration}), 회복탄력(${scores.resilience})
- 주관식 1 (시간 가는 줄 모르고 몰입했던 순간): "${immersion || '미입력'}"
- 주관식 2 (가장 에너지가 깎이고 견디기 힘들었던 상황): "${petPeeve || '미입력'}"

요청 사항:
JSON 형식으로만 응답하십시오. (마크다운 백틱 없이 순수 JSON 객체):
{
  "verdict": "보스의 지적 체계와 업무 성향을 종합 진단한 자비스 특유의 품격 있는 한 문장 총평",
  "immersionAnalysis": "보스가 밝힌 몰입 순간을 분석하여, 어떤 환경과 작업 조건에서 초집중(Flow) 상태가 폭발하는지 명쾌하게 해설 (2~3문장)",
  "energyPreservationAdvice": "보스가 밝힌 에너지 도둑(스트레스 요인)을 선제적으로 차단하고 생산성을 극대화하기 위한 실천적 방어 전략 (2~3문장)"
}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const text = response.text || '';
    // Clean potential markdown fencing
    const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleaned);

    return NextResponse.json({
      enhancedInsights: parsed,
      status: 'ai_generated'
    });
  } catch (error) {
    console.error('Gemini API analysis failed, fallback to heuristics:', error);
    return NextResponse.json({
      enhancedInsights: null,
      status: 'fallback_heuristic'
    });
  }
}
