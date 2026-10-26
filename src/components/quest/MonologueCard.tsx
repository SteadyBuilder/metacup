'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { MonologueOption } from '@/types/quest';
import { useQuestStore } from '@/store/useQuestStore';

interface MonologueCardProps {
  option: MonologueOption;
  index: number;
  onSelect: (option: MonologueOption) => void;
}

export const MonologueCard: React.FC<MonologueCardProps> = ({ option, index, onSelect }) => {
  const { openWhisper } = useQuestStore();

  const handleWhisperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    openWhisper(option.whisper);
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.1 }}
      onClick={() => onSelect(option)}
      className="group relative cursor-pointer rounded-2xl bg-slate-900/90 border border-slate-700/80 hover:border-amber-500/60 p-6 shadow-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all flex flex-col justify-between"
    >
      {/* Top Bar: Choice Badge & Whisper Button */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-amber-400 border border-slate-700 group-hover:border-amber-500/40 transition-colors">
          선택지 {option.id}
        </span>

        {/* 🔍 [속삭임] Button */}
        <button
          onClick={handleWhisperClick}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-medium transition-all"
          title="이 선택의 기회비용(얻는 가치 vs 치를 대가) 확인"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>속삭임</span>
        </button>
      </div>

      {/* 1st Person Inner Monologue Text ("...") */}
      <div className="flex-1 my-2">
        <blockquote className="text-base sm:text-lg text-slate-100 font-serif leading-relaxed italic group-hover:text-amber-100 transition-colors">
          {option.text}
        </blockquote>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-amber-400 transition-colors">
        <span className="font-sans">이 독백을 결단으로 확정하기</span>
        <div className="w-7 h-7 rounded-full bg-slate-800 group-hover:bg-amber-500/20 flex items-center justify-center transition-all group-hover:translate-x-1">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};
