/**
 * Flags for sections that are hidden from the site without removing the code
 * that powers them. Everything behind a disabled flag stays in the repo, so
 * flipping a flag back to `true` restores the section as it was.
 */
export const features = {
  /**
   * Blog: hidden for now. Gates the nav link and the /blog routes.
   * The pages, MDX content, and lib/blog.ts are untouched.
   */
  blog: false,
} as const;
