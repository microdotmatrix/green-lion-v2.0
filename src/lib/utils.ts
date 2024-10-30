import { withFluid } from "@fluid-tailwind/tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge(withFluid);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const isInView = (elem: HTMLElement) => {
  var bounding = elem.getBoundingClientRect();
  return (
    ((bounding.bottom >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
      (bounding.top >= 0 &&
        bounding.top <=
          (window.innerHeight || document.documentElement.clientHeight))) &&
    ((bounding.right >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)) ||
      (bounding.left >= 0 &&
        bounding.left <=
          (window.innerWidth || document.documentElement.clientWidth)))
  );
};
