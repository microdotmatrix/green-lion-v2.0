export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

// Global site metadata
export const SITE: Site = {
  website: import.meta.env.SITE_URL,
  author: "John Polinski",
  profile: "https://github.com/microdotmatrix",
  desc: "Green Lion Innovations is a Denver, CO based business strategy firm focused on product development and manufacturing.",
  title: "Green Lion Innovations",
  ogImage: "green-lion.jpg",
  lightAndDarkMode: true,
};

export type NavLinks = {
  link: string;
  title: string;
};

// Navigation menu links
export const NAV_LINKS: NavLinks[] = [
  { link: "about", title: "About" },
  { link: "mission", title: "Mission" },
  { link: "products", title: "Products" },
  { link: "team", title: "Team" },
  { link: "contact", title: "Contact" },
];
