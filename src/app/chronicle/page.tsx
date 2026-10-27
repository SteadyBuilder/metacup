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
  XCircle,
  BrainCircuit,
  Share2,
  ArrowRight,
  Flame,
  Check,
  Shield,
  Heart,
  Target
} from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { CompassRadar } from '@/components/chronicle/CompassRadar';
import { synthesizeChronicle } from '@/data/story/archetypesMaster';
import { ChronicleResult } from '@/types/quest';

export default function ChroniclePage() {
  const {
    chronicleResult,
    temperamentScores,
    tasteScores,
    judgedRoles,
    resetQuest
  } = useQuestStore();
  const [copied, setCopied] = useState(false);

  // Fallback if accessed without completing
  const result: ChronicleResult =
    chronicleResult ||
    synthesizeChronicle(temperamentScores, tasteScores, judgedRoles);

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
          <span>자기 탐색 최종 연대기 (Self-Discovery Chronicle)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight"
        >
          {result.temperament.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-cyan-300 font-serif italic max-w-2xl mx-auto"
        >
          &ldquo;{result.temperament.epithet}&rdquo;
        </motion.p>
      </div>

      {/* 3대 핵심 발견: STEP 1 (기질) / STEP 2 (취향) / STEP 3 (자가 검증) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {/* Step 1: 근본 기질 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-cyan-400">
                STEP 1. 근본 기질
              </span>
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
              {result.temperament.title}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
              {result.temperament.deepEngine}
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800 text-[11px] text-cyan-300/90 font-mono">
            🔋 충전: {result.temperament.energyRecharge}
          </div>
        </div>

        {/* Step 2: 관심 취향 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-amber-400">
                STEP 2. 관심 취향
              </span>
              <Heart className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
              {result.taste.primaryDomain}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
              {result.taste.tasteSummary}
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-300/90 font-mono">
            ⚡ 촉매: {result.taste.intellectualCatalyst}
          </div>
        </div>

        {/* Step 3: 추천 & 검증 */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono font-bold text-emerald-400">
                STEP 3. 자가 검증 경로
              </span>
              <Target className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-slate-100 font-serif mb-2">
              {result.selectedBestRoles.length}개의 승인된 활로
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-3">
              이론적 권유에 기대지 않고, 매일 마주할 현실의 고단함까지 감당하겠다고 직접 승인한 경로
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800 text-[11px] text-emerald-300/90 font-mono">
            🛡️ 배제된 비선호: {result.discardedRoles.length}개
          </div>
        </div>
      </div>

      {/* 종합 해설 (Grand Synthesis) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 mb-10 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <BrainCircuit className="w-5 h-5 text-cyan-400" />
          <h2 className="text-lg font-bold text-slate-100 font-serif">
            자비스의 종합 연대기 판정
          </h2>
        </div>
        <div className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line font-light">
          {result.grandSynthesis}
        </div>
      </div>

      {/* 3단계 상세: Sir가 "좋다"고 직접 승인한 최적의 경로 */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-100 font-serif">
            Sir가 본능적으로 승인한 최적의 역할 & 분야
          </h2>
        </div>

        {result.selectedBestRoles.length === 0 ? (
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-400 text-sm text-center">
            기성 카테고리에 속한 역할을 모두 배제하셨습니다. 기존의 정형화된 틀을 벗어나 Sir만의 고유한 복합 영역을 스스로 개척하실 때 가장 큰 에너지가 발현됩니다.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.selectedBestRoles.map((role) => (
              <div
                key={role.id}
                className="p-5 rounded-2xl bg-slate-900/95 border border-emerald-500/40 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-mono font-semibold">
                      승인된 최적 경로
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 font-serif mb-1">
                    {role.title}
                  </h3>
                  <p className="text-xs text-emerald-300/90 italic font-serif mb-3">
                    &ldquo;{role.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {role.description}
                  </p>

                  <div className="space-y-2 py-2 border-t border-slate-800/80 text-xs">
                    <div>
                      <span className="font-semibold text-slate-400">매칭 이유:</span>{' '}
                      <span className="text-slate-300 font-light">{role.fitReason}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-400">일상의 현실:</span>{' '}
                      <span className="text-slate-300 font-light">{role.dailyReality}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-cyan-300 bg-cyan-950/30 p-2.5 rounded-xl border border-cyan-800/30">
                  <span className="font-bold">오늘의 첫걸음:</span> {role.requiredAction}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3단계 상세: Sir가 "싫다"고 사전에 걸러낸 경로 */}
      {result.discardedRoles.length > 0 && (
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <XCircle className="w-4 h-4 text-rose-400" />
            <h3 className="text-sm font-bold text-slate-300 font-serif">
              사전에 과감히 걸러낸 비선호 / 에너지 고갈 영역
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.discardedRoles.map((role) => (
              <div
                key={role.id}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-rose-900/30 text-xs text-slate-400"
              >
                <div className="font-bold text-rose-300/90 mb-1">{role.title}</div>
                <div className="font-light text-slate-400">{role.tagline}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 양대 레이더 시각화 (기질 밸런스 & 취향 스펙트럼) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center">
          <h3 className="text-sm font-bold text-cyan-300 font-mono mb-2">
            1단계 기질 밸런스 레이더
          </h3>
          <CompassRadar data={result.temperamentRadar} color="#06b6d4" />
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col items-center">
          <h3 className="text-sm font-bold text-amber-400 font-mono mb-2">
            2단계 취향 스펙트럼 레이더
          </h3>
          <CompassRadar data={result.tasteRadar} color="#f59e0b" fillOpacity={0.4} />
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <button
          onClick={resetQuest}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          <span>시련 처음부터 다시 시작</span>
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleShare}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-700 text-cyan-200 text-xs sm:text-sm font-semibold transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>링크 복사 완료!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>결과 공유 링크</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
