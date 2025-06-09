import { notFound } from 'next/navigation';
import Link from 'next/link';

/** Components */
import Navbar from "@/components/NavBar";

/** Blog utilities */
import { getPostBySlug, getAllPosts } from '@/lib/blog';

/** Fonts */
import { Inter, DM_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ subsets: ['latin'] });

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${inter.className}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Link 
                href="/blog"
                className="text-[#00521d] hover:text-[#003d15] text-sm font-medium transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="bg-[#00521d] text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            
            <h1 className={`text-4xl font-bold mb-4 ${dmSans.className} leading-tight`}>
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Simple Content - Just the raw markdown as text for now */}
          <div className="prose dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
              {post.content}
            </pre>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className={`text-lg font-medium mb-4 ${dmSans.className}`}>Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </footer>
          )}
        </article>
      </main>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each post (for SEO)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Tanay Baswa`,
    description: post.excerpt,
  };
}