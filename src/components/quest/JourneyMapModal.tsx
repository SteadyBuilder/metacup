'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, RotateCcw, CheckCircle2, ChevronRight, X, Compass } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { ALL_TRIALS, getResolvedTrial } from '@/data/story/allTrials';

interface JourneyMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JourneyMapModal: React.FC<JourneyMapModalProps> = ({ isOpen, onClose }) => {
  const { currentTrialId, history, decisions, rewindTo, dynamicStep3Trials } = useQuestStore();

  const handleRewind = (trialId: string) => {
    if (confirm('이 시련의 분기점으로 여정을 되감으시겠습니까? 이후의 결정은 새롭게 재구성됩니다.')) {
      rewindTo(trialId);
      onClose();
    }
  };

  // List of all trials involved so far
  const allEncountered = [...history, currentTrialId];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl text-slate-100 max-h-[85vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-cyan-300">
                    여정의 지도 (Journey Map)
                  </h3>
                  <p className="text-xs text-slate-400">
                    지금까지 밟아온 시련의 궤적과 내면의 분기점
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Trial Path Timeline */}
            <div className="mt-4 flex-1 overflow-y-auto space-y-3 pr-1">
              {allEncountered.map((tId, idx) => {
                const trial = getResolvedTrial(tId, dynamicStep3Trials);
                if (!trial) return null;
                const isCurrent = tId === currentTrialId;
                const decision = decisions[tId];

                return (
                  <div
                    key={tId}
                    className={`p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-cyan-950/40 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                        : 'bg-slate-800/60 border-slate-700/60 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                          STEP {trial.step} - 시련 {trial.trialNumber}
                        </span>
                        <h4 className="text-sm font-semibold text-slate-200">
                          {trial.chapterTitle}
                        </h4>
                      </div>

                      {/* Rewind Button for past trials */}
                      {!isCurrent && (
                        <button
                          onClick={() => handleRewind(tId)}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-cyan-900/40 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-xs font-medium transition-all"
                          title="이 분기점으로 되감기"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>되감기</span>
                        </button>
                      )}

                      {isCurrent && (
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>현재 머무는 곳</span>
                        </span>
                      )}
                    </div>

                    {decision && (
                      <div className="mt-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300 flex items-start gap-1.5">
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="italic text-slate-300 font-serif">
                          선택: &ldquo;{decision.text}&rdquo;
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer Summary */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>통과한 관문: {history.length}개</span>
              <span className="text-cyan-400 font-mono">
                코어 엔진: 기질 ➔ 취향 ➔ 추천 & 호불호 검증
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
