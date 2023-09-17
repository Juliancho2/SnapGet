'use client';
import { useEffect } from 'react';
import Features from '@/components/organisms/Features';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';


export default function Home() {

  return (
    <>
      <Header />
      <main className='min-h-screen mt-5'>
        <Hero />
        <Features/>
      </main>
      <Footer />
    </>
  );
}
