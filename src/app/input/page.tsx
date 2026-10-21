'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Flame, BatteryLow, Lightbulb, Check } from 'lucide-react';
import { useMetaStore } from '@/store/useMetaStore';
import { JarvisBubble } from '@/components/JarvisBubble';

const IMMERSION_SUGGESTIONS = [
  '새로운 기술을 배워서 48시간 만에 실체 있는 프로토타입을 완성했을 때',
  '복잡하게 얽힌 버그나 시스템 병목의 근본 원인을 끝까지 추적해 해결했을 때',
  '팀원들과 치열하게 아이디어를 주고받으며 하나의 완벽한 기획으로 합의했을 때',
  '사용자가 내가 만든 기능에 열광하며 남긴 감사 피드백을 직접 확인했을 때'
];

const PET_PEEVE_SUGGESTIONS = [
  '결정권자 없는 무의미한 회의와 끝없는 승인 결재 라인',
  '방향성이 매주 손바닥 뒤집히듯 바뀌고 목적이 불분명한 일',
  '서로 책임을 회피하고 성과만 가로채려는 정치적이고 비협조적인 팀 분위기',
  '완성도와 사용성에 대한 고민 없이 단지 숫자 채우기식으로 찍어내는 프로젝트'
];

export default function InputPage() {
  const router = useRouter();
  const { subjectiveInputs, setSubjectiveInput, computeResult, setIsAnalyzing } = useMetaStore();

  const [immersion, setImmersion] = useState(subjectiveInputs.immersion || '');
  const [petPeeve, setPetPeeve] = useState(subjectiveInputs.petPeeve || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsAnalyzing(true);

    // Update store
    setSubjectiveInput('immersion', immersion);
    setSubjectiveInput('petPeeve', petPeeve);

    // Compute basic archetype result
    const localResult = computeResult();

    // Call AI analyze API optionally for enhanced personalization
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scores: localResult.scores,
          immersion,
          petPeeve,
          archetypeCode: localResult.code
        })
      });

      if (response.ok) {
        const aiData = await response.json();
        if (aiData.enhancedInsights) {
          useMetaStore.getState().setResult({
            ...localResult,
            jarvisVerdict: aiData.enhancedInsights.verdict || localResult.jarvisVerdict,
            subjectiveInsights: {
              immersionAnalysis: aiData.enhancedInsights.immersionAnalysis || localResult.subjectiveInsights?.immersionAnalysis || '',
              energyPreservationAdvice: aiData.enhancedInsights.energyPreservationAdvice || localResult.subjectiveInsights?.energyPreservationAdvice || ''
            }
          });
        }
      }
    } catch {
      // Fallback seamlessly to local heuristics
    } finally {
      setIsAnalyzing(false);
      router.push('/result');
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
      <div className="mb-6">
        <JarvisBubble
          context="Step 2: Subjective Calibration"
          message="16라운드 토너먼트 데이터를 성공적으로 수신했습니다, 보스. 마지막으로 보스의 '심장을 뛰게 하는 몰입'과 '에너지를 갉아먹는 마찰'을 1~2문장으로 남겨주시면 오차 없는 맞춤형 커리어 분석을 완성하겠습니다."
        />
      </div>

      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Card 1: Immersion */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center text-amber-600">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                1. 시간 가는 줄 모르고 완전히 몰입했던 순간은?
              </h3>
              <p className="text-xs text-slate-600">
                어떤 종류의 문제를 풀 때 순수한 희열과 무아지경을 느끼시나요?
              </p>
            </div>
          </div>

          <textarea
            value={immersion}
            onChange={(e) => setImmersion(e.target.value)}
            rows={3}
            placeholder="예: 아무도 못 풀던 문제를 끈질기게 추적해 마침내 해결했을 때, 백지 상태에서 내 아이디어를 실제로 배포해 작동하는 것을 보았을 때"
            className="w-full mt-3 p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-800 placeholder:text-slate-400 font-normal leading-relaxed"
          />

          {/* Quick Suggestion Chips */}
          <div className="mt-3">
            <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 mb-1.5">
              <Lightbulb className="w-3 h-3 text-amber-500" />
              추천 키워드 (클릭하여 입력):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {IMMERSION_SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImmersion(sug)}
                  className="text-[11px] text-slate-600 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200/60 hover:border-blue-200 px-2.5 py-1 rounded-lg transition-colors text-left"
                >
                  {sug}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Pet Peeve */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200/70 flex items-center justify-center text-rose-600">
              <BatteryLow className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                2. 일할 때 가장 에너지가 깎이고 견디기 힘든 상황은?
              </h3>
              <p className="text-xs text-slate-600">
                당신의 창의성과 생산성을 가로막는 최악의 환경이나 요소는 무엇인가요?
              </p>
            </div>
          </div>

          <textarea
            value={petPeeve}
            onChange={(e) => setPetPeeve(e.target.value)}
            rows={3}
            placeholder="예: 목적 없는 길고 비효율적인 회의, 오너십 없이 시키는 대로만 해야 하는 수동적인 관료주의 환경"
            className="w-full mt-3 p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-slate-800 placeholder:text-slate-400 font-normal leading-relaxed"
          />

          {/* Quick Suggestion Chips */}
          <div className="mt-3">
            <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 mb-1.5">
              <Lightbulb className="w-3 h-3 text-rose-500" />
              추천 키워드 (클릭하여 입력):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PET_PEEVE_SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPetPeeve(sug)}
                  className="text-[11px] text-slate-600 hover:text-rose-700 bg-slate-100 hover:bg-rose-50 border border-slate-200/60 hover:border-rose-200 px-2.5 py-1 rounded-lg transition-colors text-left"
                >
                  {sug}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 disabled:opacity-50 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>JARVIS 신경망 연산 및 결과 생성 중...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>최종 메타인지 & 커리어 대시보드 해독하기</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
