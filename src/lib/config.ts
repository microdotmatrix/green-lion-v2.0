export type Site = {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage?: string;
  lightAndDarkMode: boolean;
};

export const SITE: Site = {
  website: import.meta.env.SITE_URL, // replace this with your deployed domain
  author: "John Polinski",
  profile: "https://github.com/microdotmatrix",
  desc: "Green Lion Partners is a Denver, CO based business strategy firm focused on early stage development in the regulated cannabis industry",
  title: "Green Lion Innovations",
  ogImage: "green-lion.jpg",
  lightAndDarkMode: true,
};

export type NavLinks = {
  link: string;
  title: string;
};

export const NAV_LINKS: NavLinks[] = [
  { link: "about", title: "About" },
  { link: "mission", title: "Mission" },
  { link: "products", title: "Products" },
  { link: "team", title: "Team" },
  { link: "affiliates", title: "Affiliates" },
  { link: "contact", title: "Contact" },
];
