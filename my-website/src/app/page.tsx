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
          <div className="prose dark:prose-invert mx-auto space-y-6">
            <p className="text-lg leading-relaxed tracking-wide">
              I am an AI Safety and Security researcher on a critical mission to protect humanity from the potential dangers of artificial intelligence systems. Having witnessed firsthand the harmful and toxic effects of uncontrolled AI, I understand the urgent need for robust safety measures in this rapidly evolving field.
            </p>
            
            <p className="text-lg leading-relaxed tracking-wide">
              The reality is stark: unconstrained AI systems can perpetuate bias, spread misinformation, and cause real harm to individuals and communities. These aren&apos;t just theoretical concerns – they&apos;re challenges I&apos;ve encountered directly in my work. From privacy violations to algorithmic bias, the potential for damage is real and immediate.
            </p>

            <p className="text-lg leading-relaxed tracking-wide">
              My personal and professional mission is clear: to prevent these harmful scenarios from becoming widespread. Working at the intersection of technology and ethics, I&apos;m dedicated to developing and implementing comprehensive safety protocols that ensure AI systems remain beneficial and trustworthy for all of humanity.
            </p>

            <p className="text-lg leading-relaxed tracking-wide">
              This is a deeply personal mission born from witnessing the darkest outputs AI can produce. I&apos;ve seen firsthand the disturbing, violent, and traumatic content that uncontrolled AI systems can generate – from graphic imagery to harmful misinformation that targets vulnerable communities. These experiences have strengthened my resolve to ensure no one else has to encounter such content, and to prevent malicious actors from weaponizing these technologies. Every safety mechanism I develop is driven by the urgent need to protect people from these very real harms while preserving AI&apos;s potential for good.
            </p>

            <p className="text-lg leading-relaxed tracking-wide"> 
              Let&apos;s build a safer and stronger future together.
            </p>
          </div>
          <SocialIconDeck />
        </div>
      </main>
    </div>
  );
}
