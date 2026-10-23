/**
 * Universal Asset URL resolver for local dev and GitHub Pages subpath hosting.
 * Handles both relative and subpath deployments seamlessly.
 */
export const getAssetUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.replace(/^\/+/, '');
  const baseUrl = import.meta.env.BASE_URL || './';
  // Ensure exactly one trailing slash on baseUrl and no leading slash on cleanPath
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
};
