'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot } from 'lucide-react';

interface JarvisBubbleProps {
  message: string;
  context?: string;
  className?: string;
}

export const JarvisBubble: React.FC<JarvisBubbleProps> = ({
  message,
  context,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-white border border-blue-100/90 shadow-sm rounded-2xl p-4 sm:p-5 relative overflow-hidden ${className}`}
    >
      <div className="flex items-start gap-3.5">
        <div className="relative shrink-0 mt-0.5">
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600">
            <Bot className="w-5 h-5" />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-500" />
              JARVIS Metacognition Core
            </span>
            {context && (
              <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                {context}
              </span>
            )}
          </div>
          <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
