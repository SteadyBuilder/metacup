import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: '마인드 퀘스트: 내면의 나침반 (MindQuest: Inner Compass)',
  description:
    '머드(MUD) 텍스트 RPG 소설형 기질 및 적성 분석 인터랙티브 웹 서비스. 한 편의 서사 속에서 밝혀내는 나만의 내면 나침반.',
  openGraph: {
    title: '마인드 퀘스트: 내면의 나침반',
    description: '1인칭 독백과 분기형 서사로 만나는 내면의 나침반',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="py-3 sm:py-4 border-t border-slate-900 bg-slate-950/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 마인드 퀘스트: 내면의 나침반. Developed with JARVIS Persona Engine.</p>
        </footer>
      </body>
    </html>
  );
}
