import Link from "next/link";
import React from "react";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-white border border-[#212121]/20 rounded-xl max-w-5xl w-full">
            <div className="flex items-center justify-between h-14 px-8">
              <div className="flex-shrink-0">
                <Link href="/" className={`text-xl text-[#212121] ${dmSans.className}`}>
                  Tanay Baswa
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link href="/" className={`${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}>
                    Home
                  </Link>
                  <Link href="/" className={`${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}>
                    About
                  </Link>
                  <Link href="/blog" className={`${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}>
                    Blog
                  </Link>
                  <Link href="/resources" className={`${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}>
                    Resources
                  </Link>
                  <Link href="/contact" className={`${dmSans.className} text-[#212121] hover:opacity-70 transition-opacity`}>
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