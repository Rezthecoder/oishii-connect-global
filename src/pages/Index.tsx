import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Staff from '@/components/Staff';
import Location from '@/components/Location';
import News from '@/components/News';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LiquidGlass from '@/components/LiquidGlass';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Absolutely centered LiquidGlass outside the main flow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <LiquidGlass width={300} height={200} />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Staff />
        <Location />
        <News />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
