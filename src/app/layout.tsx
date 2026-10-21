import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'MetaCup | 초고속 메타인지 & 커리어 항로 발견',
  description: '16라운드 토너먼트와 AI 자비스 분석으로 밝혀내는 나만의 메타인지 아키타입과 최적의 커리어 로드맵',
  openGraph: {
    title: 'MetaCup | 초고속 메타인지 & 커리어 항로 발견',
    description: '30초 만에 끝내는 토스 & 리니어 스타일 메타인지 진단',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="py-6 border-t border-slate-200/60 bg-white/50 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} MetaCup. Powered by Google Gemini & JARVIS Persona Engine.</p>
        </footer>
      </body>
    </html>
  );
}
