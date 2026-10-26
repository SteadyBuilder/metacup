'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Compass, RotateCcw, Map, Award, BookOpen } from 'lucide-react';
import { useQuestStore } from '@/store/useQuestStore';
import { JourneyMapModal } from '@/components/quest/JourneyMapModal';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { resetQuest } = useQuestStore();
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleReset = () => {
    if (confirm('시련의 모든 진행 상황을 초기화하고 처음으로 돌아가시겠습니까?')) {
      resetQuest();
      window.location.href = '/trials';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/85 border-b border-slate-800/80 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-tight text-base sm:text-lg leading-none font-serif">
                마인드 퀘스트
              </span>
              <span className="text-[10px] text-cyan-400 font-semibold tracking-wider uppercase mt-1">
                내면의 나침반 (Inner Compass)
              </span>
            </div>
          </Link>

          {/* Quick Actions */}
          <div className="flex items-center gap-2.5">
            {/* Sir's Profile link */}
            <Link
              href="/chronicle/profile"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all ${
                pathname === '/chronicle/profile'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900 text-slate-300 hover:text-white border-slate-700/80 hover:border-slate-600'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Sir의 기 분석 프로필</span>
              <span className="sm:hidden">프로필</span>
            </Link>

            {/* Journey Map (여정의 지도) */}
            <button
              onClick={() => setIsMapOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 hover:text-white bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 rounded-xl transition-all shadow-xs"
              title="여정의 지도 열기"
            >
              <Map className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">여정의 지도</span>
            </button>

            {/* Reset button inside trials */}
            {pathname === '/trials' && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-xl transition-colors"
                title="시련 처음부터 다시 시작"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Global Journey Map Modal */}
      <JourneyMapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
};
