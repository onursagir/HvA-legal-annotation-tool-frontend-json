/**
 * Ensures that public URL doesn't have a trailing slash
 */
export function getPublicURL() {
  const publicURL = process.env.PUBLIC_URL || "";

  return publicURL.endsWith("/") ? publicURL.slice(0, -1) : publicURL;
}
