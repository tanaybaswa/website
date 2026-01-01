"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ subsets: ['latin'] });

const RightNavBar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/research", label: "Research" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-64 z-50 hidden lg:block bg-white">
      <div className="flex flex-col items-start space-y-8 p-8 pt-24">
        {links.map((link) => {
          const isActive = pathname === link.href || 
            (link.href !== "/" && pathname?.startsWith(link.href));
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${dmSans.className} text-2xl text-[#212121] hover:opacity-70 transition-opacity font-light ${
                isActive ? 'opacity-100' : 'opacity-60'
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

