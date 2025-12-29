"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const RightNavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed right-8 top-8 z-50 hidden lg:block">
      <div className="flex flex-col items-end space-y-8">
        {links.map((link) => {
          const isActive = pathname === link.href || 
            (link.href !== "/" && pathname?.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${inter.className} text-2xl text-[#212121] hover:opacity-70 transition-opacity ${
                isActive ? 'opacity-100 font-medium' : 'opacity-60'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default RightNavBar;

