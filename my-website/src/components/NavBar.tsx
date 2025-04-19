import Link from "next/link";
import React from "react";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm max-w-5xl w-full">
            <div className="flex items-center justify-between h-14 px-8">
              <div className="flex-shrink-0">
                <Link href="/" className={`text-xl ${dmSans.className}`}>
                  Tanay Baswa
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link href="/" className={`${dmSans.className} hover:text-gray-600 transition-colors`}>
                    Home
                  </Link>
                  <Link href="/" className={`${dmSans.className} hover:text-gray-600 transition-colors`}>
                    About
                  </Link>
                  <Link href="/" className={`${dmSans.className} hover:text-gray-600 transition-colors`}>
                    Work
                  </Link>
                  <Link href="/resources" className={`${dmSans.className} hover:text-gray-600 transition-colors`}>
                    Resources
                  </Link>
                  <Link href="/contact" className={`${dmSans.className} hover:text-gray-600 transition-colors`}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 