/** Main Imports */
import React from "react";
import Link from "next/link";

/** Components */
import RightNavBar from "@/components/RightNavBar";

/** Blog utilities */
import { getAllPosts } from "@/lib/blog";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function Blog() {
  const allPosts = await getAllPosts();

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <RightNavBar />
      <main className="lg:ml-64 container mx-auto px-6 sm:px-8 lg:px-12 py-16 max-w-4xl">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl sm:text-5xl font-light tracking-tight ${dmSans.className} leading-tight text-[#212121]`}>
              Blog
            </h1>
            <p className={`text-base sm:text-lg text-[#212121]/70 font-light tracking-wide ${inter.className}`}>
              Thoughts on AI security, research, and technology
            </p>
          </div>

          {/* Blog Posts List */}
          <div className="space-y-12">
            {allPosts.length > 0 ? (
              allPosts.map((post) => (
                <article key={post.slug} className="space-y-4">
                  <div className="space-y-2">
                    <h2 className={`text-2xl font-light tracking-tight ${dmSans.className} text-[#212121]`}>
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="hover:opacity-70 transition-opacity"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <div className={`flex items-center gap-4 text-sm text-[#212121]/60 ${inter.className}`}>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      {post.readTime && (
                        <>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className={`inline-block text-[#212121] hover:opacity-70 font-light text-sm transition-opacity ${inter.className}`}
                  >
                    Read more →
                  </Link>
                </article>
              ))
            ) : (
              <div className="space-y-4">
                <p className={`text-base text-[#212121] font-light leading-relaxed tracking-wide ${inter.className}`}>
                  No blog posts yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
