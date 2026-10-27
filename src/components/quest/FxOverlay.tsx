'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FxType } from '@/types/quest';

interface FxOverlayProps {
  fx: FxType;
  children: React.ReactNode;
}

export const FxOverlay: React.FC<FxOverlayProps> = ({ fx, children }) => {
  // Shake animation configuration (지진 및 천장 붕괴의 역동적 진동)
  const shakeVariants = {
    shake: {
      x: [0, -12, 12, -8, 8, -5, 5, -2, 2, 0],
      y: [0, 5, -5, 4, -4, 2, -2, 0],
      transition: {
        duration: 0.65,
        ease: 'easeInOut' as const,
        repeat: 2,
        repeatDelay: 0.12
      }
    },
    none: { x: 0, y: 0 }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Shake (Collapse & Tremor) Dust Atmosphere Overlay */}
      <AnimatePresence>
        {fx === 'shake' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.45, 0.2, 0.35, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="pointer-events-none fixed inset-0 z-30 shadow-[inset_0_0_100px_rgba(245,158,11,0.22)] border border-amber-500/25"
          />
        )}
      </AnimatePresence>

      {/* Warning Vignette Overlay */}
      <AnimatePresence>
        {fx === 'warning' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none fixed inset-0 z-30 shadow-[inset_0_0_90px_rgba(239,68,68,0.25)] border border-red-500/20"
          />
        )}
      </AnimatePresence>

      {/* Pulse Atmosphere Overlay */}
      <AnimatePresence>
        {fx === 'pulse' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none fixed inset-0 z-30 shadow-[inset_0_0_80px_rgba(59,130,246,0.18)]"
          />
        )}
      </AnimatePresence>

      {/* Main Content with conditional screen shake */}
      <motion.div
        key={fx}
        variants={shakeVariants}
        animate={fx === 'shake' ? 'shake' : 'none'}
        className="relative z-10 w-full min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
};
