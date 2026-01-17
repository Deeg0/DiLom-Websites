# DiLom Websites

A professional website showcasing web design services for businesses. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- 📱 Mobile-friendly
- ⚡ Fast loading with Next.js
- 🔍 SEO optimized
- ✨ Smooth animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/` - Next.js app directory
  - `page.tsx` - Homepage
  - `layout.tsx` - Root layout with metadata
  - `example-1/` - Example website showcase
  - `not-found.tsx` - 404 page
  - `sitemap.ts` - Sitemap generation
  - `globals.css` - Global styles
- `components/` - React components
  - `ThemeToggle.tsx` - Dark mode toggle
- `public/` - Static assets
  - `DiLomlogo.png` - Logo
  - `robots.txt` - SEO robots file

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Before Deploying

1. Update `app/sitemap.ts` with your actual domain
2. Update `public/robots.txt` with your actual domain
3. Test the build: `npm run build`
4. Test production: `npm start`

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms

- Use `npm run build` to create production build
- Deploy the `.next` folder (requires Node.js runtime)

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Contact

- Email: diegolomelin2@gmail.com
- Phone: 571-546-8795
