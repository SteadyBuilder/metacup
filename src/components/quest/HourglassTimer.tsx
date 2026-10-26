'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hourglass, Heart } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';

export const HourglassTimer: React.FC = () => {
  const { timerSeconds, isTimerRunning, decrementTimer } = useQuestStore();

  useEffect(() => {
    if (!isTimerRunning || timerSeconds <= 0) return;

    const interval = setInterval(() => {
      decrementTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds, decrementTimer]);

  const percentage = Math.max(0, (timerSeconds / 10) * 100);
  const isUrgent = timerSeconds <= 3;

  return (
    <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 shadow-lg text-slate-200">
      {/* Hourglass Icon with rotation */}
      <motion.div
        animate={isTimerRunning ? { rotate: [0, 180] } : {}}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="text-amber-400"
      >
        <Hourglass className="w-4 h-4" />
      </motion.div>

      {/* Progress Bar & Label */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
          {timerSeconds}s
        </span>

        <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <motion.div
            className={`h-full rounded-full transition-all duration-300 ${
              isUrgent ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-amber-400'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Subtle Heartbeat Indicator for Intuitive Decision */}
      <motion.div
        animate={
          isUrgent
            ? { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }
            : { scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }
        }
        transition={{
          duration: isUrgent ? 0.6 : 1.2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={isUrgent ? 'text-red-400' : 'text-slate-400'}
        title="무의식적 직관을 따르십시오"
      >
        <Heart className="w-3.5 h-3.5 fill-current" />
      </motion.div>
    </div>
  );
};
