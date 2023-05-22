import './globals.css';
import { Inter } from 'next/font/google';
// import Navbar from '@/components/Navbar';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home 입니다',
  description: 'Homepage 설명입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="inter.className bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
