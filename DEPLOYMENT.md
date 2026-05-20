# Deployment Guide

## Deploy to Vercel (Recommended - Free)

Vercel is the easiest way to deploy your Next.js portfolio. It's free for personal projects!

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Premium portfolio website"
git branch -M main
git remote add origin https://github.com/NishchayVashishtha/portfolio.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your portfolio repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your portfolio will be live in ~2 minutes! 🚀

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., nishchayvashishtha.com)
4. Follow the DNS configuration instructions

---

## Deploy to Netlify (Alternative)

### Step 1: Build Settings

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Deploy!

---

## Deploy to GitHub Pages (Static Export)

### Step 1: Update next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

### Step 2: Build and Deploy

```bash
npm run build
# The static files will be in the 'out' folder
```

Then push the `out` folder to your `gh-pages` branch.

---

## Environment Variables

If you add any API keys or secrets:

1. Create `.env.local` file (already in .gitignore)
2. Add your variables:
   ```
   NEXT_PUBLIC_API_KEY=your_key_here
   ```
3. In Vercel/Netlify, add the same variables in project settings

---

## Performance Optimization Tips

### 1. Image Optimization
- Add your profile photo to `public/images/`
- Use Next.js Image component for automatic optimization

### 2. Analytics (Optional)
Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. SEO Enhancements
- Add `robots.txt` in public folder
- Create `sitemap.xml`
- Add Open Graph images

---

## Post-Deployment Checklist

✅ Test on mobile devices
✅ Check all links work
✅ Verify resume download
✅ Test contact form (if you add backend)
✅ Check loading speed (use PageSpeed Insights)
✅ Verify social media links
✅ Test on different browsers
✅ Add Google Analytics (optional)
✅ Submit to Google Search Console

---

## Continuous Deployment

Once connected to Vercel/Netlify:
- Every push to `main` branch auto-deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public` folder
- Verify `next.config.ts` image domains

### Slow Loading
- Enable Vercel Analytics to identify bottlenecks
- Optimize images
- Check bundle size: `npm run build` shows size info

---

## Support

Need help deploying?
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Email: nishchayvashishtha@outlook.com

Happy deploying! 🎉
