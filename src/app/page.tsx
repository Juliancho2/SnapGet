'use client';
import Features from '@/components/organisms/Features';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import Result from '@/components/organisms/Result';
import {  DataInfoProvider } from '@/context/infoVideoContext';


export default function Home() {

  return (
    <>
      <DataInfoProvider>
        <Header />
        <main className='min-h-screen mt-5'>
          <Hero />
          <Result/>
          <Features  />

        </main>
        <Footer />
      </DataInfoProvider>
    </>
  );
}
