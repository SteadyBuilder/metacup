'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  Target,
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { JarvisBubble } from '@/components/JarvisBubble';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
      {/* Top Banner / Hero */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-4 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Meta-cognition & Career Discovery Engine</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight"
        >
          내가 일할 때 가장 빛나는 순간, <br />
          <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">
            30초 토너먼트
          </span>
          로 증명합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
        >
          장황한 설문지는 잊으세요. 실전 업무 딜레마 16문항을 직관적으로 선택하면,
          JARVIS가 당신의 5대 메타인지 지표와 최적의 커리어 항로를 즉시 도출합니다.
        </motion.p>
      </div>

      {/* JARVIS Dialogue Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
        className="max-w-2xl mx-auto w-full mb-8 sm:mb-10"
      >
        <JarvisBubble
          context="System Ready"
          message="반갑습니다, 보스. 생각의 회로를 점검할 준비가 되셨습니까? 직관을 믿고 가볍게 선택해 주십시오. 나머지 데이터 분석과 숨은 잠재력 해독은 제게 맡기시면 됩니다."
        />
      </motion.div>

      {/* Bento Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
        {/* Bento Card 1: Tournament */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md mb-2 border border-blue-100/60">
              SPEED & INTUITION
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              16라운드 스피드 토너먼트
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              3초 타이머 바와 키보드(←/→) 단축키 지원. 고민 대신 직관적인 양자택일로 무의식적 의사결정 편향을 포착합니다.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            소요시간 단 30초 내외
          </div>
        </motion.div>

        {/* Bento Card 2: 5-D Radar Metacognition */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <div className="inline-block text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md mb-2 border border-indigo-100/60">
              5-DIMENSIONAL RADAR
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              5차원 메타인지 레이더
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              전략적 사고, 집중 실행력, 창의적 혁신, 협업 시너지, 회복 탄력성 5개 축으로 나의 일하는 스타일을 시각화합니다.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Recharts 실시간 벡터 렌더링
          </div>
        </motion.div>

        {/* Bento Card 3: AI Career Roadmap */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <div className="inline-block text-[11px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md mb-2 border border-sky-100/60">
              CAREER DISCOVERY
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1.5">
              Top 3 커리어 & 실천 태그
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              추상적인 성격 진단을 넘어, 지금 당장 실천할 수 있는 &apos;Next Action Item&apos;과 추천 스킬셋을 명확히 제시합니다.
            </p>
          </div>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            실행 중심 커리어 액션 플랜
          </div>
        </motion.div>
      </div>

      {/* Main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
      >
        <Link
          href="/tournament"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-base sm:text-lg shadow-sm hover:shadow-md transition-all group cursor-pointer"
        >
          <span>30초 만에 진단 시작하기</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}
