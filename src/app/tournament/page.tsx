'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap,
  Timer,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { TOURNAMENT_ROUNDS } from '@/data/tournamentData';
import { useMetaStore } from '@/store/useMetaStore';
import { JarvisBubble } from '@/components/JarvisBubble';

export default function TournamentPage() {
  const router = useRouter();
  const { currentRound, answers, selectOption, goToRound } = useMetaStore();

  const [activeRoundIndex, setActiveRoundIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [selectedSide, setSelectedSide] = useState<'A' | 'B' | null>(null);
  const [timerProgress, setTimerProgress] = useState(100);

  // Sync with store
  useEffect(() => {
    setActiveRoundIndex(currentRound);
  }, [currentRound]);

  const roundData = TOURNAMENT_ROUNDS[activeRoundIndex] || TOURNAMENT_ROUNDS[0];

  // 3-second gentle intuitive timer
  useEffect(() => {
    setTimerProgress(100);
    const interval = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev <= 0) return 0;
        return prev - 2; // 50 ticks = ~2.5 to 3 seconds
      });
    }, 60);

    return () => clearInterval(interval);
  }, [activeRoundIndex]);

  const handleChoose = useCallback(
    (optionKey: 'A' | 'B') => {
      const option = optionKey === 'A' ? roundData.optionA : roundData.optionB;
      setSelectedSide(optionKey);
      setDirection(optionKey === 'A' ? 'left' : 'right');

      selectOption(activeRoundIndex, optionKey, option.weights);

      setTimeout(() => {
        setSelectedSide(null);
        setDirection(null);

        if (activeRoundIndex < TOURNAMENT_ROUNDS.length - 1) {
          setActiveRoundIndex((prev) => prev + 1);
        } else {
          router.push('/input');
        }
      }, 240);
    },
    [activeRoundIndex, roundData, selectOption, router]
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
    <div className="flex-1 flex flex-col max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full justify-between">
      {/* Top Header / Progress Bar */}
      <div className="w-full mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/80 px-2.5 py-1 rounded-full">
              Round {activeRoundIndex + 1} / {TOURNAMENT_ROUNDS.length}
            </span>
            <span className="text-xs font-semibold text-slate-600">
              {roundData.theme}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
            <Timer className="w-3.5 h-3.5 text-blue-500" />
            <span>직관 지수</span>
            <span className="font-bold text-slate-800">{Math.round(timerProgress)}%</span>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="w-full bg-slate-200/80 h-1.5 rounded-full overflow-hidden mb-1.5">
          <motion.div
            className="bg-blue-600 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* 3-Second Intuition Decay Bar */}
        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
          <div
            className="bg-sky-400 h-full transition-all duration-75 ease-linear"
            style={{ width: `${timerProgress}%` }}
          />
        </div>
      </div>

      {/* JARVIS Dialogue Bubble */}
      <div className="mb-6">
        <JarvisBubble
          context={`Dilemma ${activeRoundIndex + 1}`}
          message={roundData.jarvisPrompt}
        />
      </div>

      {/* Tournament Cards Container */}
      <div className="flex-1 flex items-center justify-center my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoundIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full"
          >
            {/* Option A (Left) */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleChoose('A')}
              className={`group relative bg-white border cursor-pointer rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between select-none ${
                selectedSide === 'A'
                  ? 'border-blue-600 ring-2 ring-blue-500/30'
                  : 'border-slate-200/80 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {roundData.optionA.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    <span className="border border-slate-200 bg-slate-50 px-1.5 py-0.5 rounded text-[10px]">
                      ←
                    </span>
                    <span>선택 A</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                  {roundData.optionA.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {roundData.optionA.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">
                  {roundData.optionA.jarvisReaction}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Option B (Right) */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => handleChoose('B')}
              className={`group relative bg-white border cursor-pointer rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between select-none ${
                selectedSide === 'B'
                  ? 'border-blue-600 ring-2 ring-blue-500/30'
                  : 'border-slate-200/80 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    {roundData.optionB.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
                    <span>선택 B</span>
                    <span className="border border-slate-200 bg-slate-50 px-1.5 py-0.5 rounded text-[10px]">
                      →
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                  {roundData.optionB.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {roundData.optionB.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">
                  {roundData.optionB.jarvisReaction}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Hint */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-600 inline-flex items-center gap-1.5 bg-white/70 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-2xs">
          <Zap className="w-3.5 h-3.5 text-blue-500" />
          <span>키보드 방향키</span>
          <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-300 rounded">←</kbd>
          <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-300 rounded">→</kbd>
          <span>를 눌러 즉시 선택할 수 있습니다.</span>
        </p>
      </div>
    </div>
  );
}
