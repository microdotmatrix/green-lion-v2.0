# Green Lion Innovations

[https://greenlioninnovations.com](https://greenlioninnovations.com)

Green Lion Innovations is a Denver, CO based business strategy firm focused on early stage development in the regulated cannabis industry.

## Technologies

This site is built with the following technologies:

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Fluid Tailwind](https://fluid-tailwind.vercel.app)
- [TypeScript](https://www.typescriptlang.org)

Green Lion Innovations is a static site created with [Astro](https://astro.build), deployed to [Vercel](https://vercel.com).

### Styling

Styling is handled by a combination of [Tailwind CSS](https://tailwindcss.com), with [Fluid Tailwind](https://fluid-tailwind.vercel.app) - which uses CSS clamp() values for fluid typography and spacing across screen sizes - and uses [PostCSS](https://postcss.org) tools such as [PostCSS Custom Media](https://github.com/) to efficiently manage media queries. Light and dark mode themes are built on [ShadCN](https://github.com/shadcn/ui) CSS custom properties, though the site does not utilize it's components. All icons are SVGs from the magnificent [Icones](https://icones.js.org) library.

### Scripts

Interative effects such as dark mode and scroll animations are enabled by lightweight vanilla JavaScript and typed with [TypeScript](https://www.typescriptlang.org).

### Media

Images are served locally and optimized with [Astro's](https://astro.build) native image component.
