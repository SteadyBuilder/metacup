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
  Scroll
} from 'lucide-react';
import { STEP1_PROFILE } from '@/data/story/step1_origin';
import { STEP2_PROFILE } from '@/data/story/step2_tactics';

export default function ProfileArchivePage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Sir의 기 분석 완료 프로필 아카이브</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight">
          내면의 나침반 : 기질 & 지략 마스터 프로필
        </h1>
        <p className="mt-3 text-sm text-slate-400 font-light max-w-xl mx-auto">
          STEP 1의 근본 기질과 STEP 2의 문제해결 패턴이 확정되어 안전하게 동기화되어 있습니다.
        </p>
      </div>

      <div className="space-y-8 mb-10">
        {/* STEP 1 Pillar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-slate-900 border border-cyan-500/30 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {STEP1_PROFILE.stepName}
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-300/80">
              {STEP1_PROFILE.englishTitle}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{STEP1_PROFILE.archetypeTitle}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {STEP1_PROFILE.summary}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              핵심 기질 특성 (Core Traits)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STEP1_PROFILE.coreTraits.map((trait, idx) => (
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

        {/* STEP 2 Pillar */}
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
                {STEP2_PROFILE.stepName}
              </span>
            </div>
            <span className="text-xs font-mono text-amber-300/80">
              {STEP2_PROFILE.englishTitle}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif mb-3">
            [{STEP2_PROFILE.archetypeTitle}]
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light mb-6">
            {STEP2_PROFILE.summary}
          </p>

          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
              핵심 전술 특성 (Tactical Traits)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STEP2_PROFILE.coreTraits.map((trait, idx) => (
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
      </div>

      {/* Enter STEP 3 CTA */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/40 text-center">
        <h3 className="text-lg font-bold text-slate-100 font-serif mb-2">
          마지막 퍼즐 : [STEP 3 조직 내 갈등 해결 및 소통 패턴]
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 font-light mb-5 max-w-xl mx-auto">
          두 개의 단단한 축 위에, 조직과 사람을 살리는 연대의 법칙을 더해 최종 [여정의 연대기]를 완성하십시오.
        </p>

        <Link
          href="/trials"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
        >
          <Scroll className="w-4 h-4" />
          <span>시련의 장 (STEP 3) 입장하기</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
