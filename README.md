# Nishchay Vashishtha - Portfolio Website

A modern, premium developer portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme**: Professional startup/AI aesthetic with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for premium user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Type-Safe**: Written in TypeScript for better code quality

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/NishchayVashishtha/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Skills.tsx           # Skills showcase
│   ├── Projects.tsx         # Projects showcase
│   ├── Achievements.tsx     # Achievements & coding profiles
│   ├── Contact.tsx          # Contact form & info
│   └── Footer.tsx           # Footer component
├── public/
│   └── resume.pdf           # Resume file (add your resume here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `components/Contact.tsx`
2. **Social Links**: Update URLs in `components/Hero.tsx` and `components/Contact.tsx`
3. **Projects**: Modify project data in `components/Projects.tsx`
4. **Skills**: Update skills in `components/Skills.tsx`
5. **Experience**: Edit timeline in `components/Experience.tsx`

### Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf`, or update the link in `components/Navbar.tsx`.

### Customize Colors

Edit the gradient colors and theme in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global CSS variables

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📱 Sections

1. **Hero**: Introduction with CTA buttons and social links
2. **About**: Personal introduction and highlights
3. **Experience**: Education and work timeline
4. **Skills**: Technologies and tools showcase
5. **Projects**: Featured projects with descriptions
6. **Achievements**: Hackathons, coding profiles, GitHub stats
7. **Contact**: Contact form and information

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

- **Email**: nishchayvashishtha@outlook.com
- **LinkedIn**: [Nishchay Vashishtha](https://www.linkedin.com/in/nishchayvashishtha/)
- **GitHub**: [NishchayVashishtha](https://github.com/NishchayVashishtha)
- **LeetCode**: [NishchayVashishtha](https://leetcode.com/u/NishchayVashishtha/)

---

Built with ❤️ by Nishchay Vashishtha
