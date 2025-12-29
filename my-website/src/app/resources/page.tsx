"use client";

/** Main Imports */
import React, { useState, useEffect } from "react";

/** Components */
// import RightNavBar from "@/components/RightNavBar";

/** Data */
import { resources, Resource } from "@/data/resources";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  
  // Filter resources based on search query
  useEffect(() => {
    const query = searchQuery.toLowerCase();
    
    if (!query.trim()) {
      setFilteredResources(resources);
      return;
    }
    
    const filtered = resources.filter(
      resource => 
        resource.title.toLowerCase().includes(query) || 
        resource.description.toLowerCase().includes(query) || 
        resource.url.toLowerCase().includes(query)
    );
    
    setFilteredResources(filtered);
  }, [searchQuery]);

  // Initialize with all resources on component mount only
  useEffect(() => {
    setFilteredResources(resources);
  }, []);

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className={`text-4xl font-medium tracking-tight text-[#212121] ${dmSans.className}`}>
              Resources
            </h1>
            <p className={`mt-4 text-xl text-[#212121] font-light tracking-wide ${inter.className}`}>
              Useful links and materials for AI security research
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search resources"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 rounded-xl border border-[#212121]/20 focus:border-[#212121] 
                  focus:ring-1 focus:ring-[#212121] focus:outline-none transition-colors
                  bg-white placeholder-[#212121]/50 text-[#212121]
                  ${inter.className}`}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#212121]/60">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Resources List */}
          <div className="space-y-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-[#212121]/20 transition-all hover:border-[#212121]/40">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="md:w-1/3">
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-xl font-medium ${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}
                      >
                        {resource.title}
                      </a>
                    </div>
                    <div className="md:w-2/3">
                      <p className={`text-[#212121] text-base ${inter.className}`}>
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className={`text-lg text-[#212121]/60 ${inter.className}`}>
                  No matching resources found. Try a different search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 