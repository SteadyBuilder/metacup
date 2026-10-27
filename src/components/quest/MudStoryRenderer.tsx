'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
      className="relative w-full rounded-2xl bg-slate-900/90 border border-slate-700/80 p-4 sm:p-5 lg:p-6 shadow-xl backdrop-blur-md overflow-hidden text-slate-100"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Pure Novel Scene Background Description */}
      <div className="relative pl-4 sm:pl-5 border-l-2 border-cyan-500/60 py-0.5">
        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif whitespace-pre-line tracking-wide">
          {trial.backgroundScene}
        </p>
      </div>
    </motion.div>
  );
};
