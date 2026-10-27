'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Shield,
  Heart,
  Target,
  CheckCircle2,
  XCircle,
  Compass,
  Scroll
} from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';

export default function ProfileArchivePage() {
  const {
    chronicleResult,
    temperamentScores,
    tasteScores,
    judgedRoles,
    resetQuest
  } = useQuestStore();

  const result =
    chronicleResult ||
    synthesizeChronicle(temperamentScores, tasteScores, judgedRoles);

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>기질 & 취향 종합 프로필 아카이브</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight">
          {result.temperament.title}
        </h1>
        <p className="mt-3 text-sm text-cyan-300 font-serif italic max-w-xl mx-auto">
          &ldquo;{result.temperament.epithet}&rdquo;
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
                STEP 1. 근본 기질 & 성향
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-300/80">
              Origin Temperament
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{result.temperament.title}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {result.temperament.deepEngine}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              핵심 기질 특성 (Core Traits)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {result.temperament.coreTraits.map((trait, idx) => (
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

        {/* STEP 2 Pillar: 관심 취향 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                STEP 2. 관심 취향 & 테마
              </span>
            </div>
            <span className="text-xs font-mono text-amber-300/80">
              Taste & Domain
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{result.taste.primaryDomain}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {result.taste.tasteSummary}
          </p>

          <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs">
            <div>
              <span className="text-amber-400 font-bold">선호 활동 양식:</span>{' '}
              <span className="text-slate-300">{result.taste.preferredActivityStyle}</span>
            </div>
            <div>
              <span className="text-amber-400 font-bold">지적 몰입 촉매:</span>{' '}
              <span className="text-slate-300">{result.taste.intellectualCatalyst}</span>
            </div>
          </div>
        </motion.div>

        {/* STEP 3 Pillar: 자가 검증 경로 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl bg-slate-900 border border-emerald-500/40 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400">
              <Target className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                STEP 3. 자가 검증 최적 경로
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-300/80">
              Verified Path
            </span>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Sir가 직접 승인한 경로 ({result.selectedBestRoles.length}개)
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {result.selectedBestRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs text-slate-200"
                >
                  <div className="font-bold text-emerald-300 mb-1">{role.title}</div>
                  <div className="text-slate-300 mb-2">{role.description}</div>
                  <div className="text-[11px] text-cyan-300">
                    <span className="font-semibold">첫 실행 액션:</span> {role.requiredAction}
                  </div>
                </div>
              ))}
            </div>

            {result.discardedRoles.length > 0 && (
              <div className="pt-3 border-t border-slate-800">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                  사전에 배제한 비선호 영역 ({result.discardedRoles.length}개)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.discardedRoles.map((role) => (
                    <span
                      key={role.id}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-rose-900/40 text-[11px] text-slate-400"
                    >
                      {role.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
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
