'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Compass } from 'lucide-react';
import { Trial } from '@/types/quest';

interface MudStoryRendererProps {
  trial: Trial;
}

export const MudStoryRenderer: React.FC<MudStoryRendererProps> = ({ trial }) => {
  return (
    <motion.div
      key={trial.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative w-full rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md overflow-hidden text-slate-100"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Tag Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2 text-cyan-400">
          <Scroll className="w-4 h-4" />
          <span className="text-xs font-mono font-semibold tracking-wider uppercase">
            {trial.stepTitle}
          </span>
        </div>
        <div className="text-xs font-mono text-slate-400">
          시련 #{trial.trialNumber}
        </div>
      </div>

      {/* Chapter Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-serif tracking-tight mb-4">
        {trial.chapterTitle}
      </h2>

      {/* Pure Novel Scene Background Description */}
      <div className="relative pl-4 border-l-2 border-cyan-500/50">
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-serif whitespace-pre-line">
          {trial.backgroundScene}
        </p>
      </div>
    </motion.div>
  );
};
