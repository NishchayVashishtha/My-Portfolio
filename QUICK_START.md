# ⚡ Quick Start Guide

Get your portfolio running in 3 minutes!

## 🚀 Step 1: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Step 2: Essential Customizations

### 1. Add Your Resume (2 minutes)
- Place your resume PDF in `public/resume.pdf`
- That's it! The download button will work automatically.

### 2. Update Project Links (5 minutes)
Open `components/Projects.tsx` and replace `#` with your actual links:

```typescript
github: "https://github.com/yourusername/project-name",
demo: "https://your-demo-url.com",
```

### 3. Verify Contact Info (1 minute)
Check `components/Contact.tsx` - your email and phone are already there!

---

## 🎨 Step 3: Optional Customizations

### Change Colors
Edit `tailwind.config.ts` - change the gradient colors in the `extend` section.

### Add Your Photo
1. Add image to `public/images/profile.jpg`
2. Update `components/About.tsx` to use it

### Modify Content
- **About**: Edit `components/About.tsx`
- **Projects**: Edit `components/Projects.tsx`
- **Skills**: Edit `components/Skills.tsx`
- **Experience**: Edit `components/Experience.tsx`

---

## 🚀 Step 4: Deploy (5 minutes)

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/NishchayVashishtha/portfolio.git
git push -u origin main
```

### Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Done!** Your portfolio is live! 🎉

---

## 📱 Test Your Portfolio

- ✅ Click all navigation links
- ✅ Test on mobile (Chrome DevTools)
- ✅ Download resume button
- ✅ Check all social links
- ✅ Verify project links

---

## 🆘 Common Issues

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
npm install
npm run build
```

### Need to restart?
```bash
# Stop server: Ctrl+C
npm run dev
```

---

## 📚 Full Documentation

- **Setup**: See `SETUP.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Customization**: See `CUSTOMIZATION.md`
- **Overview**: See `PROJECT_SUMMARY.md`

---

## 🎯 Priority Tasks

**Must Do:**
1. ✅ Add resume PDF
2. ✅ Update project links
3. ✅ Deploy to Vercel

**Should Do:**
4. ⭐ Add profile photo
5. ⭐ Customize colors
6. ⭐ Update project descriptions

**Nice to Have:**
7. 💡 Add contact form backend
8. 💡 Set up analytics
9. 💡 Add custom domain

---

## 💬 Need Help?

Email: nishchayvashishtha@outlook.com

---

**You're all set! Start customizing and deploy! 🚀**
