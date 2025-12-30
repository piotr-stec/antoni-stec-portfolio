# Antoni Stec - Portfolio Website

Portfolio website for professional photography and video services in Kraków.

## Features

- 🎨 Modern, responsive design
- 📸 Portfolio gallery with filtering
- 📧 Working contact form with Gmail integration
- 🚀 Optimized for performance and SEO
- 📱 Mobile-friendly
- 🎬 Video showcase section

## Setup

### 1. Install dependencies

```sh
npm install
```

### 2. Configure email (for contact form)

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

Quick setup:
1. Create `.env` file in project root
2. Add your Gmail credentials:

```env
GOOGLE_EMAIL=your.email@gmail.com
GOOGLE_APP_PASSWORD=your_app_password_here
RECIPIENT_EMAIL=kontakt@antek-foto.pl
```

**Important:** Use Gmail App Password, not your regular password!

## Developing

Start development server:

```sh
npm run dev

# or open in browser automatically
npm run dev -- --open
```

## Building

Create production build:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

## Deployment

### Vercel/Netlify

1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Add environment variables in project settings:
   - `GOOGLE_EMAIL`
   - `GOOGLE_APP_PASSWORD`
   - `RECIPIENT_EMAIL`

## Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   │   ├── Hero.svelte
│   │   ├── Services.svelte
│   │   ├── Portfolio.svelte
│   │   ├── Backstage.svelte
│   │   ├── Contact.svelte
│   │   └── ...
│   └── data/          # Static data
├── routes/
│   ├── +layout.svelte # Main layout
│   ├── +page.svelte   # Homepage
│   └── api/
│       └── contact/   # Contact form API endpoint
└── static/            # Static assets (images, videos)
```

## Tech Stack

- **Framework:** SvelteKit
- **Styling:** CSS (custom)
- **Email:** Nodemailer with Gmail
- **Deployment:** Vercel/Netlify ready

## SEO Optimizations

- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (Schema.org JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Optimized images (lazy loading)
- ✅ Preload critical assets

## Performance Optimizations

- ✅ Image lazy loading
- ✅ Video intersection observer
- ✅ Font preloading
- ✅ CSS optimization
- ✅ Server-side rendering (SSR)
- ✅ Static generation where possible

See [OPTIMIZATIONS.md](./OPTIMIZATIONS.md) for full details.

## License

Private project - All rights reserved

## Contact

For questions about this project, contact: kontakt@antek-foto.pl

