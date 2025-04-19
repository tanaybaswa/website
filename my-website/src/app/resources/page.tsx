"use client";

/** Main Imports */
import React, { useState, useEffect } from "react";

/** Components */
import Navbar from "@/components/NavBar";

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
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${inter.className}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className={`text-4xl font-medium tracking-tight ${dmSans.className}`}>
              Resources
            </h1>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
              Useful links and materials for AI safety and security research
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
                className={`w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#00521d] 
                  focus:ring-1 focus:ring-[#00521d] focus:outline-none transition-colors
                  bg-white/90 dark:bg-gray-800 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400
                  ${dmSans.className}`}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
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
                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="md:w-1/3">
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-xl font-medium ${dmSans.className} text-[#00521d] hover:text-[#003d15] transition-colors`}
                      >
                        {resource.title}
                      </a>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 dark:text-gray-300 text-base">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className={`text-lg text-gray-500 dark:text-gray-400 ${dmSans.className}`}>
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