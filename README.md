# Brajy Portfolio

Personal portfolio for Jeremy Brajon — _Operations × Data × Code_.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **framer-motion** for animation, **lucide-react** for icons
- **Resend** for contact-form email delivery
- Self-hosted fonts (PP Mori, Geist Mono) preloaded in [`app/layout.tsx`](app/layout.tsx)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint                 |

## Environment

The contact form ([`app/api/contact/route.ts`](app/api/contact/route.ts)) sends email via Resend.

```bash
cp .env.example .env.local
# then set RESEND_API_KEY in .env.local
```

`.env.local` is git-ignored — never commit it.

## Structure

```
app/         routes (App Router) + SEO/metadata files (sitemap, robots, OG images, manifest)
components/  layout/ (header, footer, nav), section/ (page sections), ui/ (reusable primitives)
data/        projects.ts — project content
hooks/       custom React hooks
lib/         shared utilities (cn, isActivePath, site constants)
public/      fonts, images, CV
```
