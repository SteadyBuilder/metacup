'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  Award,
  Zap,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  BrainCircuit,
  Share2,
  ArrowRight,
  Cpu,
  Layers,
  Wrench,
  Flame,
  Check
} from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { CompassRadar } from '@/components/chronicle/CompassRadar';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';
import { ChronicleResult } from '@/types/quest';

export default function ChroniclePage() {
  const { chronicleResult, scores, resetQuest } = useQuestStore();
  const [copied, setCopied] = useState(false);

  // Fallback if directly accessed without completing
  const result: ChronicleResult = chronicleResult || synthesizeChronicle(scores);

  const handleShare = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
      {/* Top Banner */}
      <div className="text-center mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4"
        >
          <Compass className="w-3.5 h-3.5 animate-[spin_10s_linear_infinite]" />
          <span>여정의 연대기 (Chronicle of Journey)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight"
        >
          {result.grandTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-cyan-300 font-serif italic max-w-2xl mx-auto"
        >
          &ldquo;{result.grandEpithet}&rdquo;
        </motion.p>
      </div>

      {/* 3 Pillars: STEP 1 (기질), STEP 2 (취향), STEP 3 (AI 시대 업무 영역) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* Step 1: 근본 기질 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-[11px] font-mono font-bold text-cyan-400">
              {result.step1.stepName}
            </span>
            <h3 className="text-base font-bold text-slate-100 font-serif mt-1 mb-2">
              [{result.step1.archetypeTitle}]
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {result.step1.summary}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-300/90 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>내면의 고유한 사고 엔진</span>
          </div>
        </div>

        {/* Step 2: 몰입 취향 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-[11px] font-mono font-bold text-amber-400">
              {result.step2.stepName}
            </span>
            <h3 className="text-base font-bold text-slate-100 font-serif mt-1 mb-2">
              [{result.step2.archetypeTitle}]
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {result.step2.summary}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300/90 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>시간 가는 줄 모르는 몰입 조건</span>
          </div>
        </div>

        {/* Step 3: 적합 업무 영역 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono font-bold text-emerald-400">
              {result.step3.stepName}
            </span>
            <h3 className="text-base font-bold text-slate-100 font-serif mt-1 mb-2">
              [{result.step3.archetypeTitle}]
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {result.step3.summary}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300/90 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>AI 시대 최적의 현실적 포지션</span>
          </div>
        </div>
      </div>

      {/* 🎯 CORE HIGHLIGHT: AI 시대 최적의 업무 카테고리 3선 */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-emerald-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-slate-800 gap-2">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Cpu className="w-5 h-5" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                AI-Era Best Fit Work Domains
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-serif">
              당신의 기질과 취향이 폭발하는 AI 시대 업무 카테고리
            </h3>
          </div>
          <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
            10년 경력직이 아닌 지금 당장 시작할 수 있는 현실적 영역
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {result.aiWorkDomains?.map((domain, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-emerald-300 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-950 border border-emerald-700/60 text-xs font-mono font-bold flex items-center justify-center text-emerald-400">
                      0{idx + 1}
                    </span>
                    <span>{domain.category}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {domain.recommendedTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                  <strong className="text-slate-200 font-semibold">왜 나에게 맞는가: </strong>
                  {domain.fitReason}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 flex items-start gap-2 text-xs text-emerald-300/90 bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-900/40">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-emerald-200">오늘의 첫걸음: </strong>
                  {domain.actionItem}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Collaboration Guide & Core Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* AI Collaboration Recipe */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400">
              <Wrench className="w-4 h-4" />
              <h4 className="text-sm font-bold text-slate-200">
                내 기질 맞춤 AI 협업 가이드 (AI Recipe)
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {result.aiCollaborationGuide}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-400 font-mono">
            💡 AI를 부하가 아닌 강력한 레버리지로 부리는 법
          </div>
        </div>

        {/* Core Philosophy & Decision Pattern */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <h4 className="text-sm font-bold text-slate-200">핵심 기질 철학</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
              {result.corePhilosophy}
            </p>

            <div className="flex items-center gap-2 mb-2 text-cyan-400">
              <Zap className="w-4 h-4" />
              <h4 className="text-sm font-bold text-slate-200">의사결정 시퀀스</h4>
            </div>
            <p className="text-xs text-cyan-200/90 font-mono bg-slate-950 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
              {result.decisionPattern}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-400 font-mono">
            ⚖️ 흔들리지 않는 내면의 판단 기준선
          </div>
        </div>
      </div>

      {/* 5-D Radar & Blind Spots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Radar Chart */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-lg">
          <div className="flex items-center gap-2 mb-2 text-cyan-400">
            <BrainCircuit className="w-4 h-4" />
            <h4 className="text-sm font-bold text-slate-200">
              내면 나침반 5차원 방위도
            </h4>
          </div>
          <CompassRadar data={result.radarData} />
          <div className="mt-2 text-center text-xs text-slate-400">
            시련의 선택이 축적된 5대 고유 나침반 지표
          </div>
        </div>

        {/* Blind Spots */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center gap-2 mb-3 text-rose-400">
              <AlertTriangle className="w-4 h-4" />
              <h4 className="text-sm font-bold text-slate-200">
                내면의 나침반 사각지대 (주의점)
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {result.blindSpots?.map((spot, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800/60 leading-relaxed"
                >
                  <span className="text-rose-400 font-bold">•</span>
                  <span>{spot}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-rose-400 font-mono">
            ⚠️ 번아웃과 방향 상실을 막아주는 안전판
          </div>
        </div>
      </div>

      {/* JARVIS Chronicle Epilogue */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-xl">
        <div className="flex items-center gap-2 text-cyan-400 mb-3">
          <Compass className="w-4 h-4" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            JARVIS Chronicle Epilogue
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif whitespace-pre-line">
          {result.jarvisChronicleEpilogue}
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
        >
          <Share2 className="w-4 h-4" />
          <span>{copied ? '연대기 링크 복사 완료!' : '연대기 결과 공유'}</span>
        </button>

        <Link
          href="/trials"
          onClick={() => resetQuest()}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold transition-all shadow-md"
        >
          <RotateCcw className="w-4 h-4" />
          <span>시련의 나침반 다시 작동하기 (처음부터)</span>
        </Link>
      </div>
    </div>
  );
}
