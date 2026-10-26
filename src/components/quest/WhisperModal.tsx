'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShieldAlert, Sparkles, X } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';

export const WhisperModal: React.FC = () => {
  const { activeWhisper, closeWhisper } = useQuestStore();

  return (
    <AnimatePresence>
      {activeWhisper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl text-slate-100 overflow-hidden"
          >
            {/* Ambient Accent Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300">
                    내면의 속삭임 (기회비용 통찰)
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    이 결단이 불러올 빛과 그림자의 무게입니다
                  </p>
                </div>
              </div>
              <button
                onClick={closeWhisper}
                className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="mt-4 space-y-3.5">
              {/* Gain */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>얻는 가치 (Gain)</span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed pl-5 font-normal">
                  {activeWhisper.gain}
                </p>
              </div>

              {/* Cost */}
              <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>치를 대가 (Cost)</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed pl-5 font-normal">
                  {activeWhisper.cost}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="mt-5 pt-3 border-t border-slate-800 text-center">
              <button
                onClick={closeWhisper}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wide transition-colors"
              >
                내면의 결단으로 돌아가기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
