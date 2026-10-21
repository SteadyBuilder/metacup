'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { TOURNAMENT_ROUNDS } from '@/data/tournamentData';
import { useMetaStore } from '@/store/useMetaStore';

export default function TournamentPage() {
  const router = useRouter();
  const { currentRound, selectOption } = useMetaStore();

  const [activeRoundIndex, setActiveRoundIndex] = useState(0);
  const [selectedSide, setSelectedSide] = useState<'A' | 'B' | null>(null);

  // Sync with store
  useEffect(() => {
    setActiveRoundIndex(currentRound);
  }, [currentRound]);

  const roundData = TOURNAMENT_ROUNDS[activeRoundIndex] || TOURNAMENT_ROUNDS[0];

  const handleChoose = useCallback(
    (optionKey: 'A' | 'B') => {
      if (selectedSide) return; // Prevent double click
      const option = optionKey === 'A' ? roundData.optionA : roundData.optionB;
      setSelectedSide(optionKey);

      selectOption(activeRoundIndex, optionKey, option.weights);

      setTimeout(() => {
        setSelectedSide(null);
        if (activeRoundIndex < TOURNAMENT_ROUNDS.length - 1) {
          setActiveRoundIndex((prev) => prev + 1);
        } else {
          router.push('/input');
        }
      }, 220);
    },
    [activeRoundIndex, roundData, selectOption, router, selectedSide]
  );

  // Keyboard shortcut support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleChoose('A');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleChoose('B');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleChoose]);

  const progressPercent = Math.round(
    ((activeRoundIndex + 1) / TOURNAMENT_ROUNDS.length) * 100
  );

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full justify-between min-h-[calc(100vh-4rem)]">
      {/* 1. 상단 미니멀 프로그레스 바 */}
      <div className="w-full mb-6 sm:mb-8">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-full">
            질문 {activeRoundIndex + 1} / {TOURNAMENT_ROUNDS.length}
          </span>
          <span className="text-xs font-semibold text-slate-600">
            {roundData.theme}
          </span>
        </div>

        {/* 단일 깔끔 프로그레스 바 */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <motion.div
            className="bg-blue-600 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* 2. 직관적인 질문 & 안내 (설명 최소화, 핵심만 팍 꽂히게) */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 bg-blue-50/80 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>더 끌리는 쪽을 하나 골라주세요</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug break-keep tracking-tight">
          {roundData.jarvisPrompt}
        </h2>
      </div>

      {/* 3. 직관적인 버튼 2개 (A vs B) */}
      <div className="flex-1 flex items-center justify-center my-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoundIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full relative"
          >
            {/* VS 뱃지 (가운데 직관적 표시) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-slate-900 text-white items-center justify-center text-xs font-black shadow-md border-2 border-white pointer-events-none">
              VS
            </div>

            {/* 버튼 A (Left) */}
            <button
              type="button"
              onClick={() => handleChoose('A')}
              className={`group text-left relative bg-white border-2 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-150 flex flex-col justify-between select-none shadow-xs hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
                selectedSide === 'A'
                  ? 'border-blue-600 bg-blue-50/50 ring-4 ring-blue-500/20'
                  : 'border-slate-200/90 hover:border-blue-500 hover:bg-slate-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    A
                  </span>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    ← 키보드 [←]
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug break-keep">
                  {roundData.optionA.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal break-keep">
                  {roundData.optionA.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  이 항목 선택하기
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </button>

            {/* 버튼 B (Right) */}
            <button
              type="button"
              onClick={() => handleChoose('B')}
              className={`group text-left relative bg-white border-2 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-150 flex flex-col justify-between select-none shadow-xs hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
                selectedSide === 'B'
                  ? 'border-blue-600 bg-blue-50/50 ring-4 ring-blue-500/20'
                  : 'border-slate-200/90 hover:border-blue-500 hover:bg-slate-50/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    B
                  </span>
                  <span className="text-xs font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    키보드 [→] →
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug break-keep">
                  {roundData.optionB.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal break-keep">
                  {roundData.optionB.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  이 항목 선택하기
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                </div>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. 하단 미니멀 힌트 */}
      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-xs text-slate-600 inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
          <span>키보드 방향키</span>
          <kbd className="px-1.5 py-0.5 text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-300 rounded">←</kbd>
          <kbd className="px-1.5 py-0.5 text-[11px] font-bold text-slate-700 bg-slate-100 border border-slate-300 rounded">→</kbd>
          <span>로도 바로 선택할 수 있습니다.</span>
        </p>
      </div>
    </div>
  );
}
