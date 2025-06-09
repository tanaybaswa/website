/** Main Imports */
import React from "react";
import Link from "next/link";

/** Components */
import Navbar from "@/components/NavBar";

/** Blog utilities */
import { getAllPosts, getFeaturedPosts, getRecentPosts } from "@/lib/blog";

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

export default async function Blog() {
  // Get real data from your MDX files
  const [featuredPosts, recentPosts] = await Promise.all([
    getFeaturedPosts(),
    getRecentPosts(6)
  ]);

  // Calculate categories from your actual posts
  const allPosts = await getAllPosts();
  const categoryCount: Record<string, number> = {};
  allPosts.forEach(post => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
  });
  const categories = Object.entries(categoryCount).map(([name, count]) => ({ name, count }));

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${inter.className}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="text-center pt-8">
            <h1 className={`text-4xl font-medium tracking-tight ${dmSans.className}`}>
              Blog
            </h1>
          </div>

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <section>
              <h2 className={`text-3xl font-medium mb-8 ${dmSans.className}`}>Featured Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="h-48 bg-gradient-to-r from-[#00521d] to-[#007a2b] relative">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 text-[#00521d] px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`text-xl font-medium mb-3 ${dmSans.className}`}>
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#00521d] transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className={`text-3xl font-medium mb-8 ${dmSans.className}`}>
                {recentPosts.length > 0 ? 'Recent Posts' : 'All Posts'}
              </h2>
              
              {recentPosts.length > 0 || allPosts.length > 0 ? (
                <div className="space-y-6">
                  {(recentPosts.length > 0 ? recentPosts : allPosts).map((post) => (
                    <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className={`text-xl font-medium mb-3 ${dmSans.className}`}>
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#00521d] transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-[#00521d] hover:text-[#003d15] font-medium text-sm transition-colors"
                        >
                          Read more →
                        </Link>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    No blog posts yet
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              {categories.length > 0 && (
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className={`text-xl font-medium mb-4 ${dmSans.className}`}>Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category.name}
                        className="flex items-center justify-between py-2 px-3 rounded-lg"
                      >
                        <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[#00521d] to-[#007a2b] rounded-xl p-6 text-white">
                <h3 className={`text-xl font-medium mb-3 ${dmSans.className}`}>Stay Updated</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Get the latest posts delivered right to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className={`w-full px-4 py-2 bg-white text-[#00521d] rounded-lg font-medium hover:bg-gray-100 transition-colors ${dmSans.className}`}
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className={`text-xl font-medium mb-4 ${dmSans.className}`}>Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['personal', 'AI', 'research', 'technology'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
