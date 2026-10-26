'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  Scroll,
  Shield,
  Zap,
  Sparkles,
  Eye,
  Hourglass,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { STEP1_PROFILE } from '@/data/story/step1_origin';
import { STEP2_PROFILE } from '@/data/story/step2_tactics';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full">
      {/* Prologue Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-5 shadow-sm"
        >
          <Compass className="w-3.5 h-3.5 animate-[spin_10s_linear_infinite]" />
          <span>MUD 텍스트 RPG 소설형 기질 & 적성 분석 엔진</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 font-serif tracking-tight leading-tight sm:leading-tight"
        >
          마인드 퀘스트 : <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
            내면의 나침반
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-light"
        >
          진부한 객관식 설문지는 잊으십시오. 거친 모래 폭풍이 몰아치는 소설의 한복판에서,
          오직 당신의 1인칭 독백과 본능적인 결단으로 나만의 항로를 증명합니다.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/trials"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
          >
            <Scroll className="w-4 h-4 text-slate-950" />
            <span>시련의 장 입장하기 (STEP 3)</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>

          <Link
            href="/chronicle/profile"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-semibold transition-all"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Sir의 기 분석 프로필 열람</span>
          </Link>
        </motion.div>
      </div>

      {/* Sir's Analysis Snapshot Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              기 분석 완료 프로필 아카이브
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            STEP 1 & STEP 2 동기화됨
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* STEP 1 Card */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] font-mono text-cyan-400 font-bold mb-1">
              {STEP1_PROFILE.stepName}
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-serif mb-2">
              [{STEP1_PROFILE.archetypeTitle}]
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
              {STEP1_PROFILE.summary}
            </p>
          </div>

          {/* STEP 2 Card */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[11px] font-mono text-amber-400 font-bold mb-1">
              {STEP2_PROFILE.stepName}
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-serif mb-2">
              [{STEP2_PROFILE.archetypeTitle}]
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
              {STEP2_PROFILE.summary}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3대 결정 장애 해소 인터랙션 소개 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {/* Interaction 1: 🔍 속삭임 */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-100 font-serif mb-1">
              🔍 [속삭임]
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              선택지 탭 시 결단이 불러올 [얻는 가치 vs 치를 대가]를 1줄 팝업으로 명확히 제시하여 결정 피로를 해소합니다.
            </p>
          </div>
          <span className="mt-4 text-[11px] font-mono text-amber-400 font-semibold">
            기회비용 즉시 통찰
          </span>
        </div>

        {/* Interaction 2: ⏳ 모래시계 */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Hourglass className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-100 font-serif mb-1">
              ⏳ [모래시계]
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              10초 카운트다운 게이지와 은은한 심장박동 애니메이션으로 머뭇거림 없는 무의식적 직관을 깨웁니다.
            </p>
          </div>
          <span className="mt-4 text-[11px] font-mono text-cyan-400 font-semibold">
            직관적 결단 유도
          </span>
        </div>

        {/* Interaction 3: ⏪ 되감기 */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-100 font-serif mb-1">
              ⏪ [여정의 지도 & 되감기]
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              언제든 상단의 여정 지도를 열어 지나온 갈림길을 확인하고, 원하는 직전 시련으로 복귀하여 재도전할 수 있습니다.
            </p>
          </div>
          <span className="mt-4 text-[11px] font-mono text-emerald-400 font-semibold">
            언제든 롤백 가능
          </span>
        </div>
      </div>
    </div>
  );
}
