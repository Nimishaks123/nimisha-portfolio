# Nimisha K S — Developer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and custom CSS.

## Included sections
- Hero and contact actions
- About and education
- MediConnect, Shopiz, and Imvera project cards
- Skills and technologies
- Problem-solving section
- Resume download
- Responsive navigation and mobile layout

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### Vercel
1. Push this project to a new GitHub repository.
2. Import that repository into Vercel.
3. Use `npm run build` as the build command and `dist` as the output directory.

### Existing GitHub Pages portfolio URL
The Vite config uses `base: './'` so assets can resolve when hosted at a subpath. Build with `npm run build`, then publish the contents of `dist/` to the GitHub Pages source for your portfolio repository. Keep `Nimisha_KS_Resume.pdf` in `public/` so it is copied to the production output.

## Before publishing
- Verify all project links and contact details.
- The Shopiz repository link is currently set to `https://github.com/Nimishaks123/E-Commerce`.
- Imvera is labelled as in development and does not include a demo/repository link.
- The LeetCode link goes to the general LeetCode website because a personal profile URL was not supplied.
