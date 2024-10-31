import { withFluid } from "@fluid-tailwind/tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Utility function to merge Tailwind class names, extended to support fluid-tailwind responsive values
export const twMerge = extendTailwindMerge(withFluid);

// Utility function to combine class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to format canonical URL
export function formatCanonicalURL(url: string | URL) {
  const path = url.toString();
  const hasQueryParams = path.includes("?");
  // If there are query params, make sure the URL has no trailing slash
  if (hasQueryParams) {
    path.replace(/\/?$/, "");
  }
  // otherwise, canonical URL always has a trailing slash
  return path.replace(/\/?$/, hasQueryParams ? "" : "/");
}
