import { notFound } from 'next/navigation';
import Link from 'next/link';

/** Components */
// import RightNavBar from "@/components/RightNavBar";

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
    <div className={`min-h-screen bg-white ${inter.className}`}>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-xl p-8 border border-[#212121]/20">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Link 
                href="/blog"
                className={`text-[#212121] hover:opacity-70 text-sm font-medium transition-opacity ${inter.className}`}
              >
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="bg-[#212121] text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className={`text-[#212121]/60 text-sm ${inter.className}`}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className={`text-[#212121]/60 text-sm ${inter.className}`}>{post.readTime}</span>
            </div>
            
            <h1 className={`text-4xl font-bold mb-4 text-[#212121] ${dmSans.className} leading-tight`}>
              {post.title}
            </h1>
            
            <p className={`text-xl text-[#212121] leading-relaxed ${inter.className}`}>
              {post.excerpt}
            </p>
          </header>

          {/* Simple Content - Just the raw markdown as text for now */}
          <div className="prose max-w-none">
            <pre className={`whitespace-pre-wrap text-[#212121] leading-relaxed ${inter.className}`}>
              {post.content}
            </pre>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <footer className="mt-12 pt-8 border-t border-[#212121]/20">
              <h3 className={`text-lg font-medium mb-4 text-[#212121] ${dmSans.className}`}>Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#212121]/10 text-[#212121] rounded-full text-sm"
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