import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  show?: boolean;
}

export interface BlogPostWithContent extends BlogPost {
  mdxSource: any;
}

// Ensure the posts directory exists
function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  ensurePostsDirectory();
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Calculate reading time
      const readTimeResult = readingTime(content);

      return {
        slug,
        content,
        readTime: readTimeResult.text,
        ...data,
      } as BlogPost;
    })
    .filter(post => post.show !== false); // Filter out posts where show is false

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  ensurePostsDirectory();
  
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Check if post should be shown
  if (data.show === false) {
    return null;
  }
  
  // Import serialize dynamically to avoid SSR issues
  const { serialize } = await import('next-mdx-remote/serialize');
  const mdxSource = await serialize(content);
  
  const readTimeResult = readingTime(content);

  return {
    slug,
    content,
    mdxSource,
    readTime: readTimeResult.text,
    ...data,
  } as BlogPostWithContent;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

export async function getRecentPosts(limit: number = 6): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured).slice(0, limit);
}
