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
  Lock,
  Unlock,
  Cpu,
  BrainCircuit,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';

export default function HomePage() {
  const { resetQuest } = useQuestStore();

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
          <span>MUD 소설형 기질·취향·AI 적무 진단 엔진</span>
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
          진부한 객관식 설문지는 잊으십시오. 1인칭 소설의 갈림길에서 내리는 본능적인 결단으로
          나의 근본 기질과 몰입 취향을 찾고, <br className="hidden sm:inline" />
          <strong className="text-cyan-300 font-semibold">AI 시대에 내가 어떤 영역의 일에서 가장 빛날지</strong> 확인하십시오.
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
            onClick={() => resetQuest()}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-400 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
          >
            <Scroll className="w-4 h-4 text-slate-950" />
            <span>내면의 나침반 시련 시작하기 (STEP 1)</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>

          <Link
            href="/chronicle"
            className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-semibold transition-all"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            <span>최근 연대기 결과 확인</span>
          </Link>
        </motion.div>
      </div>

      {/* 3-Step Core Engine Showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35 }}
        className="mb-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-cyan-400">
            <BrainCircuit className="w-4 h-4" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              Core Engine Architecture
            </span>
          </div>
          <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>스텝 통과 시 카테고리 자물쇠 잠금 해제</span>
          </span>
        </div>

        {/* 3 Pillars Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Engine 1 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-cyan-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800/80">
                  STEP 01
                </span>
                <span className="text-xs text-slate-400 font-mono">기질 진단</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
                근본 기질 & 성향 규명
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                세상과 문제를 대하는 인지 방식, 에너지 충전의 원천, 의사결정의 잣대, 위기 반응을 해체하여 나만의 날것의 내면 엔진을 발견합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-cyan-300/80 font-mono">
              ⚓ 내면의 진북 설정
            </div>
          </div>

          {/* Engine 2 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800/80">
                  STEP 02 (🔒 언락)
                </span>
                <span className="text-xs text-slate-400 font-mono">취향 분석</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
                취향 & 관심 주제 탐색
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                어떤 지적 테마(기술 시스템, 인간 심리, 비즈니스 자본, 감각 미학)에 가슴이 뛰고, 어떤 활동 양식을 사랑하는지 스펙트럼을 파악합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-amber-300/80 font-mono flex items-center gap-1">
              <Unlock className="w-3 h-3 text-amber-400" />
              <span>자물쇠 찰칵 해제 연출</span>
            </div>
          </div>

          {/* Engine 3 */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                  STEP 03 (🔒 언락)
                </span>
                <span className="text-xs text-slate-400 font-mono">자가 검증</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
                추천 분야 호불호 검증
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                기질과 취향의 교차 알고리즘으로 도출된 현실의 역할들을 직접 마주하고, 본능의 호불호(좋다/싫다)를 통해 최적의 길을 최종 확정합니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-emerald-300/80 font-mono flex items-center gap-1">
              <Cpu className="w-3 h-3 text-emerald-400" />
              <span>본능적 승인 및 필터링</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
