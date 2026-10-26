'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  Award,
  Shield,
  Zap,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Users,
  BrainCircuit,
  Share2
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
    if (navigator.clipboard) {
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

      {/* 3 Pillars: STEP 1, STEP 2, STEP 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Step 1 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
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
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-cyan-300/80 font-mono">
            ⚓ 요새의 초석 구축
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
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
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-amber-300/80 font-mono">
            🛡️ 냉철한 마지노선 수호
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex flex-col justify-between">
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
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-emerald-300/80 font-mono">
            🤝 연대의 완성 (Playable)
          </div>
        </div>
      </div>

      {/* 5-D Radar & Core Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Radar Chart */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2 text-cyan-400">
            <BrainCircuit className="w-4 h-4" />
            <h4 className="text-sm font-bold text-slate-200">
              내면 나침반 5차원 방위도
            </h4>
          </div>
          <CompassRadar data={result.radarData} />
          <div className="mt-2 text-center text-xs text-slate-400">
            시련의 결단이 새겨진 5대 고유 나침반 지표
          </div>
        </div>

        {/* Core Philosophy & Decision Pattern */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>핵심 기질 철학</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-5">
              {result.corePhilosophy}
            </p>

            <h4 className="text-sm font-bold text-slate-200 mb-2 flex items-center gap-2 text-cyan-400">
              <Zap className="w-4 h-4" />
              <span>의사결정 시퀀스 패턴</span>
            </h4>
            <p className="text-xs text-cyan-200/90 font-mono bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed">
              {result.decisionPattern}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>임계점 돌파 및 실용 완결 최적화 아키텍트</span>
          </div>
        </div>
      </div>

      {/* Synergy Roles & Blind Spots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Synergy Roles */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2 text-cyan-400">
            <Users className="w-4 h-4" />
            <span>최적의 시너지 역할군</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {result.synergyRoles.map((role, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                <span className="text-cyan-400 font-bold">#{idx + 1}</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Blind Spots */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <h4 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <span>내면의 나침반 사각지대 (주의점)</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            {result.blindSpots.map((spot, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-950 p-2.5 rounded-xl border border-slate-800/60">
                <span className="text-rose-400 font-bold">•</span>
                <span>{spot}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* JARVIS Dialogue Epilogue */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-xl">
        <div className="flex items-center gap-2 text-cyan-400 mb-2">
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
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold transition-all shadow-md"
        >
          <RotateCcw className="w-4 h-4" />
          <span>새로운 시련 도전하기</span>
        </Link>
      </div>
    </div>
  );
}
