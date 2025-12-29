/** Main Imports */
import React from "react";

/** Components */
// import RightNavBar from "@/components/RightNavBar";
import SocialIconDeck from "@/components/SocialIconDeck";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <main className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="space-y-10">
          {/* Hero Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
              Tanay Baswa
            </h1>
            <p className="text-base sm:text-lg text-[#212121]/70 font-light tracking-wide">
              AI Security Researcher
            </p>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              I am an AI Security Researcher at Enkrypt AI, where I also serve as Director of Solutions, overseeing sales, system architecture, and engineering.
            </p>
            
            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              AI systems present significant risks - from security vulnerabilities to harmful outputs. My mission is to research these threats and develop robust defenses against them.
            </p>

            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              Winning the AI race isn&apos;t just about building the most advanced models—it&apos;s about deploying them securely and reliably in production. Organizations that prioritize security, robust testing, and production-ready infrastructure will outpace competitors who rush to market with vulnerable systems.
            </p>

            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              As AI capabilities continue to advance, this work becomes increasingly critical for ensuring these powerful technologies remain secure and beneficial for humanity.
            </p>

            <p className="text-base text-[#212121] font-light leading-relaxed tracking-wide">
              Let&apos;s build a stronger and more secure future together.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <SocialIconDeck />
          </div>
        </div>
      </main>
    </div>
  );
}
