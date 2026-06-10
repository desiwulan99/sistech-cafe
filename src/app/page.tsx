'use client';

import Link from 'next/link';
import AboutSection from '../components/AboutSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section
        className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/hero.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 px-6 animate-fade-in">
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}
          >
            SISTECH CAFE
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg mx-auto font-light">
            Local Coffe brewed by Extraordinary Women in Indonesia
          </p>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center bg-pink-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-pink-600 transition-all shadow-lg"
          >
            See Our Menu
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent"></div>
      </section>

      <AboutSection />
    </main>
  );
}