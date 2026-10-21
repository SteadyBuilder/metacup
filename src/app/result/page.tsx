'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Share2,
  RotateCcw,
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Flame,
  BatteryLow,
  ArrowUpRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { useMetaStore } from '@/store/useMetaStore';
import { JarvisBubble } from '@/components/JarvisBubble';
import { RadarScoreChart } from '@/components/RadarScoreChart';

export default function ResultPage() {
  const { result, computeResult, resetAll } = useMetaStore();
  const [copied, setCopied] = useState(false);
  const [activeResult, setActiveResult] = useState(result);

  useEffect(() => {
    // If no result in store, compute from available state or default
    if (!result) {
      const computed = computeResult();
      setActiveResult(computed);
    } else {
      setActiveResult(result);
    }

    // Trigger Canvas Confetti celebration
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 }
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55
      });
      fire(0.2, {
        spread: 60
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45
      });
    } catch (e) {
      console.error('Confetti error:', e);
    }
  }, [result, computeResult]);

  const handleShare = async () => {
    const shareData = {
      title: 'MetaCup 메타인지 진단 결과',
      text: `[MetaCup] 나의 메타인지 아키타입: ${activeResult?.name || '분석 완료'}\n30초 만에 나의 업무 스타일과 커리어 항로를 확인해보세요!`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    // Clipboard copy
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('URL 복사에 실패했습니다.');
    }
  };

  if (!activeResult) {
    return (
      <div className="flex-1 flex items-center justify-center py-20 text-slate-500 text-sm">
        분석 결과를 계산 중입니다...
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
      {/* Top Header & Share Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JARVIS Metacognition Analysis Complete</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            보스의 메타인지 아키타입 & 커리어 항로
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>링크 복사 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>결과 공유하기</span>
              </>
            )}
          </button>

          <Link
            href="/tournament"
            onClick={() => resetAll()}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-700 font-medium text-xs sm:text-sm shadow-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-slate-500" />
            <span>다시 진단</span>
          </Link>
        </div>
      </div>

      {/* JARVIS Dialogue Bubble */}
      <div className="mb-6">
        <JarvisBubble
          context="JARVIS Executive Verdict"
          message={activeResult.jarvisVerdict}
        />
      </div>

      {/* Bento Grid Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
        {/* Bento 1: Main Archetype Card (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Archetype Profile
              </span>
              <span className="text-xs font-mono font-medium text-slate-600">
                CODE: {activeResult.code}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              {activeResult.name}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-blue-600 mb-4 leading-relaxed">
              &ldquo;{activeResult.tagline}&rdquo;
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
              {activeResult.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {/* Strengths */}
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/60">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  핵심 시너지 역량
                </span>
                <ul className="space-y-1.5">
                  {activeResult.keyStrengths.map((str, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-snug flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Blindspots */}
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/60">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  주의할 사각지대
                </span>
                <ul className="space-y-1.5">
                  {activeResult.blindSpots.map((bld, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-snug flex items-start gap-1.5">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{bld}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento 2: Radar Chart (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-5 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                5차원 메타인지 레이더
              </h3>
              <span className="text-xs text-slate-600">Full 100 pt</span>
            </div>
            <p className="text-xs text-slate-600 mb-4">
              토너먼트 16문항을 정규화한 영역별 사고 선호도
            </p>

            <RadarScoreChart data={activeResult.radarData} />
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-5 gap-1 text-center">
            {activeResult.radarData.map((d, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[10px] text-slate-600 truncate">{d.dimension}</span>
                <span className="text-xs font-bold text-blue-600">{d.score}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Subjective Calibration Synthesis Card */}
      {activeResult.subjectiveInsights && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-xs mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">
              주관식 입력 기반 심층 튜닝 리포트
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-1.5">
                <Flame className="w-4 h-4 text-amber-600" />
                몰입(Flow) 가속 조건 분석
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {activeResult.subjectiveInsights.immersionAnalysis}
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-800 mb-1.5">
                <BatteryLow className="w-4 h-4 text-rose-600" />
                에너지 방전 차단 & 환경 세팅
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {activeResult.subjectiveInsights.energyPreservationAdvice}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Top 3 Career Pathways */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">
              JARVIS 추천 Top 3 커리어 항로
            </h2>
          </div>
          <span className="text-xs font-medium text-slate-600">
            적합도 가중치 기준
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {activeResult.careerPathways.map((pathway, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    {pathway.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    <span>{pathway.matchScore}% 일치</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {pathway.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {pathway.reason}
                </p>

                {/* Next Action Item Pill */}
                <div className="mb-4 p-3 bg-blue-50/70 border border-blue-200/60 rounded-xl">
                  <div className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    Next Action Item
                  </div>
                  <p className="text-xs text-slate-800 font-medium leading-snug">
                    {pathway.nextAction}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-600 block mb-2">
                  추천 기술 및 역량 태그:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pathway.recommendedSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retake CTA Footer */}
      <div className="p-6 bg-slate-100/70 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-900 mb-0.5">
            다른 상황의 의사결정도 테스트해보고 싶으신가요?
          </h4>
          <p className="text-xs text-slate-600">
            언제든지 토너먼트를 재도전하여 다양한 관점의 메타인지를 탐색할 수 있습니다.
          </p>
        </div>

        <Link
          href="/tournament"
          onClick={() => resetAll()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-colors shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>토너먼트 새로 시작하기</span>
        </Link>
      </div>
    </div>
  );
}
