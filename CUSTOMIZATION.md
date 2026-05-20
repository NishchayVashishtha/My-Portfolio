# Customization Guide

This guide will help you personalize your portfolio to match your style and preferences.

## 🎨 Color Scheme

### Primary Colors
Edit `tailwind.config.ts` to change the gradient colors:

```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors
      primary: '#3b82f6',    // Blue
      secondary: '#8b5cf6',  // Purple
      accent: '#ec4899',     // Pink
    },
  },
}
```

### Background Colors
Edit `app/globals.css`:

```css
:root {
  --background: #0a0a0a;  /* Main background */
  --foreground: #ededed;  /* Text color */
}
```

### Gradient Text
The gradient effect is defined in `globals.css`:

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}
```

Change the colors to match your brand!

---

## 📝 Content Updates

### 1. Personal Information

**Hero Section** (`components/Hero.tsx`):
- Update name, tagline, and description
- Modify social links
- Change CTA button text

**About Section** (`components/About.tsx`):
- Edit your bio and story
- Update CGPA and stats
- Modify highlight cards

### 2. Projects

**Edit** `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    period: "Jan 2026 - Feb 2026",
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
    ],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo.com",
  },
  // Add more projects...
];
```

### 3. Skills

**Edit** `components/Skills.tsx`:

Add new skills:
```typescript
{ name: "Your Skill", icon: YourIcon, color: "#hexcolor" }
```

Add new concepts:
```typescript
const concepts = [
  "Your Concept",
  "Another Skill",
  // ...
];
```

### 4. Experience

**Edit** `components/Experience.tsx`:

```typescript
{
  type: "internship", // or "education"
  title: "Your Position",
  organization: "Company Name",
  period: "Month Year - Month Year",
  description: "What you did...",
  icon: Briefcase, // or GraduationCap
},
```

---

## 🖼️ Adding Images

### Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. Update `components/About.tsx`:

```typescript
import Image from 'next/image';

// Replace the stats div with:
<div className="relative">
  <Image
    src="/images/profile.jpg"
    alt="Nishchay Vashishtha"
    width={400}
    height={400}
    className="rounded-2xl"
  />
</div>
```

### Project Screenshots

1. Add images to `public/images/projects/`
2. Update project cards in `components/Projects.tsx`

---

## 🎭 Animations

### Adjust Animation Speed

In `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out', // Change 0.6s
  'float': 'float 3s ease-in-out infinite', // Change 3s
},
```

### Disable Animations

Remove `motion` components and replace with regular divs:

```typescript
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// After
<div>
```

---

## 📱 Contact Form

### Add Backend (Optional)

**Option 1: Formspree**
```typescript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 3: API Route**
Create `app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email logic
  return Response.json({ success: true });
}
```

---

## 🔗 Social Links

Update all social links in:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Achievements.tsx`

```typescript
const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/YOUR_USERNAME",
    label: "GitHub"
  },
  // ...
];
```

---

## 📄 Resume

1. Add your resume PDF to `public/resume.pdf`
2. Or update the link in `components/Navbar.tsx`:

```typescript
<a href="/path-to-your-resume.pdf" download>
  Resume
</a>
```

---

## 🎯 SEO Optimization

### Update Metadata

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description...",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Your Name",
    description: "Your description",
    images: ['/og-image.jpg'],
  },
};
```

### Add Open Graph Image

1. Create a 1200x630px image
2. Save as `public/og-image.jpg`
3. Update metadata above

---

## 🌐 Multi-Language Support (Advanced)

Use Next.js i18n:

1. Install: `npm install next-intl`
2. Create language files in `messages/`
3. Update `next.config.ts` with i18n config

---

## 🎨 Typography

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] 
});

// Use in body:
<body className={inter.className}>
```

---

## 📊 Analytics

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Create `app/components/Analytics.tsx`:

```typescript
export default function Analytics() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_ID');
        `,
      }} />
    </>
  );
}
```

3. Add to `app/layout.tsx`

---

## 🎪 Additional Sections

### Add Blog Section

Create `components/Blog.tsx` and add to `app/page.tsx`

### Add Testimonials

Create `components/Testimonials.tsx` with client feedback

### Add Certifications

Create `components/Certifications.tsx` to showcase certificates

---

## 💡 Tips

1. **Keep it Simple**: Don't overcomplicate the design
2. **Mobile First**: Always test on mobile devices
3. **Fast Loading**: Optimize images and minimize dependencies
4. **Accessibility**: Use semantic HTML and ARIA labels
5. **Regular Updates**: Keep your projects and skills current

---

## 🆘 Need Help?

- Check component files for inline comments
- Review Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

---

Happy customizing! 🎨
