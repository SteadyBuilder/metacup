'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, RotateCcw, Activity } from 'lucide-react';
import { useMetaStore } from '@/store/useMetaStore';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { resetAll } = useMetaStore();

  const handleReset = () => {
    if (confirm('모든 진행 상황과 테스트 기록을 초기화하시겠습니까?')) {
      resetAll();
      window.location.href = '/';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-50/80 border-b border-slate-200/60 transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-tight text-lg leading-none">
              MetaCup
            </span>
            <span className="text-[10px] text-slate-600 font-semibold tracking-wider uppercase">
              JARVIS Career Engine
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
            <Activity className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-semibold text-slate-600">
              JARVIS System
            </span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          {pathname !== '/' && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200/80 rounded-xl transition-colors shadow-xs"
              title="처음부터 다시하기"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">다시 시작</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
