/** Main Imports */
import React from "react";

/** Components */
import RightNavBar from "@/components/RightNavBar";

/** Data */
import { resources, resourceCategories } from "@/data/resources";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Resources() {
  const sections = resourceCategories
    .map((category) => ({
      category,
      items: resources.filter((resource) => resource.category === category),
    }))
    .filter((section) => section.items.length > 0);

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
              Recent coverage, writing, and work in AI security
            </p>
          </div>

          {/* Grouped Resources */}
          <div className="space-y-14">
            {sections.length > 0 ? (
              sections.map((section) => (
                <section key={section.category} className="space-y-8">
                  <h2 className={`text-xs uppercase tracking-[0.2em] text-[#212121]/40 font-light border-b border-[#212121]/10 pb-3 ${inter.className}`}>
                    {section.category}
                  </h2>

                  <div className="space-y-10">
                    {section.items.map((resource) => (
                      <article key={resource.url} className="space-y-2">
                        <h3 className={`text-lg font-light tracking-tight ${dmSans.className} text-[#212121] leading-snug`}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-70 transition-opacity"
                          >
                            {resource.title}
                          </a>
                        </h3>
                        <div className={`flex items-center gap-3 text-sm text-[#212121]/60 font-light ${inter.className}`}>
                          <span>{resource.source}</span>
                          {resource.date && (
                            <>
                              <span>·</span>
                              <span>{resource.date}</span>
                            </>
                          )}
                        </div>
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
                    ))}
                  </div>
                </section>
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
