'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, RotateCcw, Map, Sparkles, CheckCircle2 } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { ALL_TRIALS, getResolvedTrial } from '@/data/story/allTrials';
import { FxOverlay } from '@/components/quest/FxOverlay';
import { MudStoryRenderer } from '@/components/quest/MudStoryRenderer';
import { MonologueCard } from '@/components/quest/MonologueCard';
import { HourglassTimer } from '@/components/quest/HourglassTimer';
import { WhisperModal } from '@/components/quest/WhisperModal';
import { JourneyMapModal } from '@/components/quest/JourneyMapModal';
import { StepUnlockModal } from '@/components/quest/StepUnlockModal';
import { MonologueOption } from '@/types/quest';

export default function TrialsPage() {
  const router = useRouter();
  const {
    currentTrialId,
    decisions,
    activeFx,
    selectOption,
    isCompleted,
    history,
    rewindToPrevious,
    unlockModal,
    proceedFromUnlock
  } = useQuestStore();

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [lastReaction, setLastReaction] = useState<string | null>(null);

  const trial = getResolvedTrial(currentTrialId, decisions);

  // When quest completes, navigate to chronicle
  useEffect(() => {
    if (isCompleted) {
      const timer = setTimeout(() => {
        router.push('/chronicle');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isCompleted, router]);

  const handleSelect = (option: MonologueOption) => {
    setLastReaction(option.reactionText);
    selectOption(option);
  };

  // 새로고침 또는 시련 전환 시 누락 없는 FX 연출 보장
  const effectiveFx = activeFx !== 'none' ? activeFx : (trial?.fx || 'none');

  return (
    <FxOverlay fx={effectiveFx}>
      <div className="flex-1 flex flex-col justify-start max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-5 w-full">
        {/* Top Control Bar: Step Info & 3 Helper UIs */}
        <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
          {/* Journey Map & Rewind Controls & Chapter Tag */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-700/80 text-cyan-300 text-xs font-mono font-medium">
              STEP {trial.step} · {trial.chapterTitle}
            </span>

            <button
              onClick={() => setIsMapOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-cyan-500/50 text-cyan-300 text-xs font-semibold shadow-sm transition-all"
            >
              <Map className="w-3.5 h-3.5" />
              <span>여정의 지도</span>
            </button>

            {history.length > 0 && (
              <button
                onClick={rewindToPrevious}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-slate-600 text-slate-300 text-xs font-medium transition-all"
                title="직전 시련으로 되감기"
              >
                <RotateCcw className="w-3 h-3" />
                <span className="hidden sm:inline">직전 분기로</span>
              </button>
            )}
          </div>

          {/* ⏳ [모래시계] 10초 카운트다운 타이머 */}
          <HourglassTimer />
        </div>

        {/* Reaction Briefing (선택 직후 씬 전환 호흡 텍스트) */}
        <AnimatePresence mode="wait">
          {lastReaction && (
            <motion.div
              key={lastReaction}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-2.5 sm:mb-3 px-3 py-1.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-200 text-xs sm:text-sm font-serif italic text-center"
            >
              &ldquo;{lastReaction}&rdquo;
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main MUD Novel Background Situation */}
        <div className="mb-3 sm:mb-4">
          <MudStoryRenderer trial={trial} />
        </div>

        {/* 1st Person Inner Monologue Choice Cards */}
        <div className="space-y-2 sm:space-y-3">
          <div className="text-center text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">
            당신의 본능적인 결단을 선택하십시오
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-stretch">
            {trial.options.map((opt, idx) => (
              <MonologueCard
                key={opt.id}
                option={opt}
                index={idx}
                onSelect={() => handleSelect(opt)}
              />
            ))}
          </div>
        </div>

        {/* Whisper Modal */}
        <WhisperModal />

        {/* Journey Map Modal */}
        <JourneyMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />

        {/* Category Unlock Modal (자물쇠가 떨리며 떠오른 뒤 찰칵 해제) */}
        <StepUnlockModal
          isOpen={!!unlockModal?.isOpen}
          unlockedStep={unlockModal?.unlockedStep || 2}
          onProceed={proceedFromUnlock}
        />
      </div>
    </FxOverlay>
  );
}
