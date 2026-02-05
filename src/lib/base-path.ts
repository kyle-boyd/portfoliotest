/** Base path for GitHub Pages (e.g. /portfoliotest). Empty in dev. */
export const basePath =
  process.env.NODE_ENV === "production" ? "/portfoliotest" : "";

/** Use for img src and other asset URLs so they work on GitHub Pages. */
export function assetUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${basePath}${path}`;
}
