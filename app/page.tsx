import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import VideoBackground from '@/components/video-background';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="relative bg-transparent text-white overflow-hidden">
      <Suspense fallback={<div className="fixed inset-0 bg-[#050816]" />}>
        <VideoBackground videoSrc="/Snow falling effect overlay free footage black screen.mp4" />
      </Suspense>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
} 