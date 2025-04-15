/** Main Imports */
import React from "react";

/** Components */
import Navbar from "@/components/NavBar";
import SocialIconDeck from "@/components/SocialIconDeck";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${inter.className}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center">
            <h1 className={`text-6xl font-medium tracking-tight ${dmSans.className} leading-tight`}>
              Tanay Baswa
            </h1>
            <p className="mt-4 text-2xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
              AI Safety & Security Researcher
            </p>
          </div>

          {/* Bio Section */}
          <div className="prose dark:prose-invert mx-auto space-y-6 text-lg tracking-wide leading-relaxed">
            <p>
              I am an AI Safety and Security Researcher at Enkrypt AI, where I also serve as Director of Solutions, overseeing sales, system architecture, and engineering.
            </p>
            
            <p>
              AI systems present significant risks - from security vulnerabilities to harmful outputs. My mission is to research these threats and develop robust defenses against them.
            </p>

            <p>
              As AI capabilities continue to advance, this work becomes increasingly critical for ensuring these powerful technologies remain safe and beneficial for humanity.
            </p>

            <p>
              Let's build a safer and stronger future together.
            </p>
          </div>
          <SocialIconDeck />
        </div>
      </main>
    </div>
  );
}
