import { getPublicURL } from "./getPublicURL";

export function relativePath(path: string) {
  const publicURL = getPublicURL();

  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  return `${publicURL}/${cleanPath}`;
}
