/** Main Imports */
import React from "react";

/** Components */
import RightNavBar from "@/components/RightNavBar";
import SocialIconDeck from "@/components/SocialIconDeck";
// import YinYangParticles from "@/components/YinYangParticles";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <RightNavBar />
      <main className="lg:ml-64 container mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-24 max-w-4xl">
        <div className="max-w-2xl">
          <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
            Tanay Baswa
          </h1>

          <div className="mt-24 space-y-8">
            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              Interests: Longevity, Neurotech, AI
            </p>
            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              Previously, I was the first hire at Enkrypt AI.
            </p>
          </div>

          <div className="mt-32">
            <SocialIconDeck />
          </div>
        </div>
      </main>
      
      {/* Particle Animation - Right Side (Fixed Overlay) - Currently Hidden */}
      {/* <div className="hidden lg:block fixed right-8 top-0 w-96 h-screen pointer-events-none z-10">
        <div className="w-full h-full relative pointer-events-auto">
          <YinYangParticles 
            particleCount={6000}
            interactionRadius={120}
            className="w-full h-full"
          />
        </div>
      </div> */}
    </div>
  );
}
