/** Main Imports */
import React from "react";

/** Components */
import RightNavBar from "@/components/RightNavBar";

/** Data */
import { resources } from "@/data/resources";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Resources() {
  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <RightNavBar />
      <main className="lg:ml-64 container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
              Resources
            </h1>
            <p className={`text-base sm:text-lg text-[#212121]/70 font-light tracking-wide ${inter.className}`}>
              Useful links and materials for AI security research
            </p>
          </div>

          {/* Resources List */}
          <div className="space-y-6">
            {resources.length > 0 ? (
              resources.map((resource, index) => (
                <article key={index} className="space-y-2">
                  <h2 className={`text-base font-light tracking-tight ${dmSans.className} text-[#212121]`}>
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-70 transition-opacity"
                    >
                      {resource.title}
                    </a>
                  </h2>
                  <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                    {resource.description}
                  </p>
                  <a 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-[#212121] hover:opacity-70 font-light text-sm transition-opacity ${inter.className}`}
                  >
                    Visit resource →
                  </a>
                </article>
              ))
            ) : (
              <div className="space-y-4">
                <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                  No resources available.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
