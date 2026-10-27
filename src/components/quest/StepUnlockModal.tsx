'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface StepUnlockModalProps {
  isOpen: boolean;
  unlockedStep: 2 | 3;
  onProceed: () => void;
}

// Web Audio API를 활용한 가벼운 메탈릭 찰칵(Click/Snap) 사운드 합성
function playMechanicalClickSound() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    // 1. 단단한 찰칵 소리 (금속성 어택)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1200, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);

    gain1.gain.setValueAtTime(0.5, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

    osc1.connect(gain1);
    gain1.connect(ctx.destination);

    // 2. 맑은 여운 핑(Ting) 사운드 (해제 후광)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1800, ctx.currentTime + 0.04);
    osc2.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.25);

    gain2.gain.setValueAtTime(0.001, ctx.currentTime);
    gain2.gain.setValueAtTime(0.3, ctx.currentTime + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);

    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.09);
    osc2.start(ctx.currentTime + 0.04);
    osc2.stop(ctx.currentTime + 0.26);
  } catch (e) {
    console.debug('AudioContext not allowed or supported', e);
  }
}

export const StepUnlockModal: React.FC<StepUnlockModalProps> = ({
  isOpen,
  unlockedStep,
  onProceed
}) => {
  // Animation Phase:
  // 0: Initial
  // 1: Shaking (자물쇠 떨림)
  // 2: Floating Up (떠오름 + 에너지 집중)
  // 3: Unlocked (찰칵! 열림 + 빛 방출)
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    if (!isOpen) {
      setPhase(0);
      return;
    }

    // Phase 1: 0.1s 후 자물쇠 부르르 떨림 시작
    const t1 = setTimeout(() => setPhase(1), 150);

    // Phase 2: 0.7s 후 살짝 떠오름
    const t2 = setTimeout(() => setPhase(2), 750);

    // Phase 3: 1.3s 후 찰칵! 소리와 함께 열림
    const t3 = setTimeout(() => {
      setPhase(3);
      playMechanicalClickSound();
    }, 1350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const stepMeta =
    unlockedStep === 2
      ? {
          stepNum: 'STEP 2',
          title: '취향 & 몰입 동기 (Taste & Energy Drivers)',
          sub: '근본 기질의 탐색이 완료되었습니다. 이제 당신의 심장을 뛰게 만드는 몰입의 취향과 작업 환경이 언락됩니다.',
          accentColor: 'from-amber-500 to-yellow-400',
          borderColor: 'border-amber-500/60',
          glowColor: 'rgba(245, 158, 11, 0.4)'
        }
      : {
          stepNum: 'STEP 3',
          title: 'AI 시대 적합 업무 영역 (AI-Era Work Domain)',
          sub: '몰입의 취향이 확인되었습니다. 마침내 당신이라는 고유한 엔진이 AI 시대에 어떤 영역의 일에서 가장 빛날지 찾는 최종 관문이 열립니다.',
          accentColor: 'from-emerald-400 to-teal-300',
          borderColor: 'border-emerald-500/60',
          glowColor: 'rgba(16, 185, 129, 0.4)'
        };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg">
        {/* Glow Background Aura */}
        <motion.div
          animate={{
            scale: phase === 3 ? [1, 1.4, 1.2] : phase === 2 ? 1.1 : 0.9,
            opacity: phase === 3 ? 0.7 : phase === 2 ? 0.4 : 0.2
          }}
          transition={{ duration: 0.6 }}
          className="absolute w-96 h-96 rounded-full pointer-events-none blur-3xl bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-center overflow-hidden"
        >
          {/* Animated Lock Container */}
          <div className="relative flex items-center justify-center my-6 h-28">
            {/* Shockwave Rings upon Unlock */}
            {phase === 3 && (
              <>
                <motion.div
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 2.2, opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute w-24 h-24 rounded-full border-2 border-amber-400/80"
                />
                <motion.div
                  initial={{ scale: 0.4, opacity: 0.9 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                  className="absolute w-24 h-24 rounded-full border border-cyan-400/60"
                />
              </>
            )}

            {/* Lock Device */}
            <motion.div
              animate={
                phase === 1
                  ? {
                      // 떨림 (Shake)
                      x: [-4, 4, -4, 4, -2, 2, 0],
                      rotate: [-2, 2, -2, 2, 0],
                      transition: { duration: 0.5, repeat: Infinity }
                    }
                  : phase === 2
                  ? {
                      // 떠오름 (Float up) + 에너지 집중
                      y: -14,
                      scale: 1.15,
                      boxShadow: '0 0 35px rgba(245, 158, 11, 0.5)',
                      transition: { duration: 0.5, ease: 'easeOut' }
                    }
                  : phase === 3
                  ? {
                      // 찰칵 열림 (Unlocked!)
                      y: -8,
                      scale: [1.2, 1.05],
                      boxShadow: `0 0 45px ${stepMeta.glowColor}`,
                      transition: { duration: 0.35, ease: 'backOut' }
                    }
                  : { y: 0, scale: 1 }
              }
              className={`w-24 h-24 rounded-3xl border-2 flex items-center justify-center transition-colors duration-300 relative ${
                phase === 3
                  ? 'bg-slate-900 border-amber-400 text-amber-300'
                  : phase === 2
                  ? 'bg-slate-900 border-amber-500/80 text-amber-400'
                  : 'bg-slate-950 border-slate-700 text-slate-400'
              }`}
            >
              {phase === 3 ? (
                <motion.div
                  initial={{ scale: 0.5, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <Unlock className="w-12 h-12 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
                </motion.div>
              ) : (
                <Lock className="w-11 h-11" />
              )}
            </motion.div>
          </div>

          {/* Phase 3: Unlocked Information */}
          <AnimatePresence>
            {phase === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>카테고리 잠금 해제 (CATEGORY UNLOCKED)</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 font-serif mt-1 mb-2">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stepMeta.accentColor}`}>
                    [{stepMeta.stepNum}]
                  </span>{' '}
                  {stepMeta.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6 font-light">
                  {stepMeta.sub}
                </p>

                <button
                  onClick={onProceed}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all hover:scale-105 active:scale-95"
                >
                  <span>다음 시련으로 나아가기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shaking State Hint Text */}
          {phase < 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-slate-400 font-mono tracking-widest uppercase animate-pulse"
            >
              내면의 나침반 룬 잠금 해제 중...
            </motion.p>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
