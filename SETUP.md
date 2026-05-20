# Portfolio Setup Guide

## Quick Start

Your portfolio is ready! Follow these steps to get it running:

### 1. Dependencies are already installed ✅

The project dependencies have been installed. If you need to reinstall:
```bash
npm install
```

### 2. Start the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Add Your Resume

Place your resume PDF file in the `public` folder and name it `resume.pdf`. This will enable the resume download button in the navbar.

### 4. Customize Your Portfolio

#### Update Project Links
In `components/Projects.tsx`, replace the `#` placeholders with your actual GitHub repo and demo links:
```typescript
github: "https://github.com/yourusername/project-name",
demo: "https://your-demo-url.com",
```

#### Add Your Photo (Optional)
You can add your profile photo to the About section by:
1. Adding your image to the `public` folder
2. Updating `components/About.tsx` to use the image

#### Customize Colors
Edit `tailwind.config.ts` and `app/globals.css` to change the color scheme.

### 5. Build for Production

When you're ready to deploy:
```bash
npm run build
npm start
```

### 6. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Vercel will automatically detect Next.js and configure everything for you!

## Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark theme with gradient accents
✅ Smooth animations with Framer Motion
✅ SEO optimized
✅ GitHub stats integration
✅ LeetCode & GeeksForGeeks profile links
✅ Contact form UI
✅ Downloadable resume
✅ Social media links
✅ Projects showcase
✅ Skills & tech stack display
✅ Experience timeline
✅ Achievements section

## Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
npm run dev -- -p 3001
```

### Clear Cache
If you encounter issues:
```bash
rm -rf .next
npm run dev
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ⭐ Star the repository if you found it helpful
2. 📝 Customize the content with your information
3. 🎨 Adjust colors and styling to match your brand
4. 🚀 Deploy to Vercel or your preferred hosting
5. 📱 Share your portfolio with the world!

## Support

If you need help or have questions:
- Check the README.md for detailed documentation
- Review the component files for customization options
- Reach out via email: nishchayvashishtha@outlook.com

---

Happy coding! 🚀
