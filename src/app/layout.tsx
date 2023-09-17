import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'],weight:['100','200','300','400','500','600','700'] });

export const metadata: Metadata = {
  title: 'TokGo',
  description: 'Your Source for TikTok Videos without Watermark',
  icons:'logo.svg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
