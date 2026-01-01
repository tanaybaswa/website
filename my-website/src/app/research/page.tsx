"use client";

/** Main Imports */
import React, { useState } from "react";

/** Components */
import RightNavBar from "@/components/RightNavBar";

/** Data */
import { researchPapers } from "@/data/research";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

function getMonthName(month?: number): string {
  if (!month) return '';
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month - 1] || '';
}

export default function Research() {
  const [expandedPapers, setExpandedPapers] = useState<Set<number>>(new Set());

  // Sort papers by citations (descending), then by year (descending) and month (descending)
  const sortedPapers = [...researchPapers].sort((a, b) => {
    const citationsA = a.citations ?? -1; // Papers without citations go to end
    const citationsB = b.citations ?? -1;
    
    // First sort by citations (descending)
    if (citationsB !== citationsA) {
      return citationsB - citationsA;
    }
    
    // If same citations, sort by year (descending)
    if (b.year !== a.year) {
      return b.year - a.year;
    }
    
    // If same year, sort by month (descending)
    const monthA = a.month || 0;
    const monthB = b.month || 0;
    return monthB - monthA;
  });

  const togglePaper = (index: number) => {
    setExpandedPapers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <RightNavBar />
      <main className="lg:ml-64 container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
              Research
            </h1>
            <p className={`text-base sm:text-lg text-[#212121]/70 font-light tracking-wide ${inter.className}`}>
              Published research papers and publications
            </p>
          </div>

          {/* Research Papers List */}
          <div className="space-y-6">
            {sortedPapers.length > 0 ? (
              sortedPapers.map((paper, index) => {
                const dateStr = paper.month 
                  ? `${getMonthName(paper.month)} ${paper.year}`
                  : `${paper.year}`;
                
                const isExpanded = expandedPapers.has(index);
                const hasBlurb = !!paper.blurb;

                return (
                  <article 
                    key={index} 
                    onClick={() => hasBlurb && togglePaper(index)}
                    className={`bg-white border border-[#212121]/10 rounded-lg p-6 hover:border-[#212121]/30 transition-colors ${hasBlurb ? 'cursor-pointer' : ''}`}
                  >
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <h2 className={`flex-1 text-lg font-light tracking-tight ${dmSans.className} text-[#212121] leading-snug`}>
                            <a 
                              href={paper.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:opacity-70 transition-opacity"
                            >
                              {paper.title}
                            </a>
                          </h2>
                          {hasBlurb && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePaper(index);
                              }}
                              className="flex-shrink-0 mt-1 p-1 hover:opacity-70 transition-opacity"
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? 'Hide abstract' : 'Show abstract'}
                            >
                              <svg
                                className={`w-5 h-5 text-[#212121]/60 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                        
                        <p className={`text-sm text-[#212121]/80 font-light leading-relaxed tracking-wide ${inter.className}`}>
                          {paper.authors.join(', ')}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          {paper.citations !== undefined && (
                            <span className={`text-[#212121] font-light ${inter.className}`}>
                              Citations: {paper.citations}
                            </span>
                          )}
                          <span className={`text-[#212121]/60 font-light ${inter.className}`}>
                            {dateStr}
                          </span>
                        </div>
                      </div>

                      {/* Expandable Blurb Section */}
                      {hasBlurb && isExpanded && (
                        <div className="pt-2">
                          <p className={`text-sm text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                            {paper.blurb}
                          </p>
                        </div>
                      )}
                      
                      <div className="pt-2">
                        <a 
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`inline-block text-[#212121] hover:opacity-70 font-light text-sm transition-opacity ${inter.className}`}
                        >
                          View paper →
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="space-y-4">
                <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                  No research papers available.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
