'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Scroll,
  Cpu
} from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';

export default function ProfileArchivePage() {
  const { chronicleResult, scores, resetQuest } = useQuestStore();
  const result = chronicleResult || synthesizeChronicle(scores);

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>내면의 나침반 프로필 아카이브</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight">
          {result.grandTitle}
        </h1>
        <p className="mt-3 text-sm text-cyan-300 font-serif italic max-w-xl mx-auto">
          &ldquo;{result.grandEpithet}&rdquo;
        </p>
      </div>

      <div className="space-y-8 mb-10">
        {/* STEP 1 Pillar: 근본 기질 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {result.step1.stepName}
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-300/80">
              {result.step1.englishTitle}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{result.step1.archetypeTitle}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {result.step1.summary}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              핵심 기질 특성 (Core Traits)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {result.step1.coreTraits.map((trait, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* STEP 2 Pillar: 몰입 취향 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-amber-400">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {result.step2.stepName}
              </span>
            </div>
            <span className="text-xs font-mono text-amber-300/80">
              {result.step2.englishTitle}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{result.step2.archetypeTitle}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {result.step2.summary}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              몰입 및 동기 특성 (Drive Traits)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {result.step2.coreTraits.map((trait, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* STEP 3 Pillar: AI 시대 적합 업무 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {result.step3.stepName}
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-300/80">
              {result.step3.englishTitle}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{result.step3.archetypeTitle}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {result.step3.summary}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              추천 업무 카테고리
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {result.aiWorkDomains?.map((domain, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                >
                  <span className="text-emerald-400 font-bold font-mono">#{idx + 1}</span>
                  <div>
                    <span className="font-semibold text-emerald-300">{domain.category}: </span>
                    <span className="text-slate-300">{domain.fitReason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/chronicle"
          className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 text-xs font-bold transition-all shadow-md"
        >
          <Compass className="w-4 h-4" />
          <span>전체 연대기 결과 보기</span>
        </Link>

        <Link
          href="/trials"
          onClick={() => resetQuest()}
          className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
        >
          <Scroll className="w-4 h-4 text-amber-400" />
          <span>시련 처음부터 다시 시작</span>
        </Link>
      </div>
    </div>
  );
}
