import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              Tanay Baswa
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="/work" className="hover:text-gray-600 transition-colors">
                Work
              </Link>
              <Link href="/contact" className="hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 