import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Prompt({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'SnapGet',
  description: 'Your Source for TikTok Videos without Watermark',
  icons: 'logo.svg'
};

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className='absolute bg-gradient bg-cuadricula bg-opacity-5 w-full h-full top-0 left-0 rounded-xl'>
        </div>
        <div className='z-20 relative'>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
