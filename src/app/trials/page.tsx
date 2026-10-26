'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, RotateCcw, Map, Sparkles, CheckCircle2 } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { STEP3_TRIALS } from '@/data/story/step3_conflict';
import { FxOverlay } from '@/components/quest/FxOverlay';
import { MudStoryRenderer } from '@/components/quest/MudStoryRenderer';
import { MonologueCard } from '@/components/quest/MonologueCard';
import { HourglassTimer } from '@/components/quest/HourglassTimer';
import { WhisperModal } from '@/components/quest/WhisperModal';
import { JourneyMapModal } from '@/components/quest/JourneyMapModal';
import { MonologueOption } from '@/types/quest';

export default function TrialsPage() {
  const router = useRouter();
  const {
    currentTrialId,
    activeFx,
    selectOption,
    isCompleted,
    history,
    rewindToPrevious
  } = useQuestStore();

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [lastReaction, setLastReaction] = useState<string | null>(null);

  const trial = STEP3_TRIALS[currentTrialId] || STEP3_TRIALS['t3_1'];

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

  return (
    <FxOverlay fx={activeFx}>
      <div className="flex-1 flex flex-col justify-between max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full">
        {/* Top Control Bar: Step Info & 3 Helper UIs */}
        <div className="flex items-center justify-between gap-4 mb-6">
          {/* Journey Map & Rewind Controls */}
          <div className="flex items-center gap-2">
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
              className="mb-4 px-4 py-2 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-200 text-xs sm:text-sm font-serif italic text-center"
            >
              &ldquo;{lastReaction}&rdquo;
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main MUD Novel Background Situation */}
        <div className="mb-6">
          <MudStoryRenderer trial={trial} />
        </div>

        {/* 1st Person Inner Monologue Choice Cards */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              내면의 결단 (1인칭 독백 선택지)
            </span>
            <span className="text-[11px] text-amber-400/90 font-mono">
              💡 돋보기를 누르면 기회비용 [속삭임]이 들립니다
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MonologueCard
              option={trial.options[0]}
              index={0}
              onSelect={handleSelect}
            />
            <MonologueCard
              option={trial.options[1]}
              index={1}
              onSelect={handleSelect}
            />
          </div>
        </div>

        {/* Modals */}
        <WhisperModal />
        <JourneyMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      </div>
    </FxOverlay>
  );
}
