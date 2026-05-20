# 📝 Useful Commands Reference

Quick reference for all commands you'll need.

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
Opens at: http://localhost:3000

### Start on Different Port
```bash
npm run dev -- -p 3001
```

### Stop Server
Press `Ctrl + C` in terminal

---

## 🏗️ Build & Production

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Build and Start
```bash
npm run build && npm start
```

---

## 🧹 Maintenance

### Install Dependencies
```bash
npm install
```

### Update Dependencies
```bash
npm update
```

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

---

## 🔍 Code Quality

### Run Linter
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

### Type Check
```bash
npx tsc --noEmit
```

---

## 📦 Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit: Premium portfolio"
```

### Connect to GitHub
```bash
git remote add origin https://github.com/NishchayVashishtha/portfolio.git
git branch -M main
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Update: description of changes"
git push
```

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

---

## 🚀 Deployment

### Deploy to Vercel (via CLI)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify (via CLI)
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart
npm run dev
```

### Module Not Found
```bash
npm install
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Permission Errors (Windows)
Run terminal as Administrator

---

## 📊 Analysis

### Check Bundle Size
```bash
npm run build
# Look for "First Load JS" in output
```

### Analyze Dependencies
```bash
npm list --depth=0
```

### Check for Updates
```bash
npm outdated
```

### Security Audit
```bash
npm audit
npm audit fix
```

---

## 🎨 Development Tools

### Open in VS Code
```bash
code .
```

### Format Code (if Prettier installed)
```bash
npx prettier --write .
```

---

## 📱 Testing

### Test Build Locally
```bash
npm run build
npm start
# Open http://localhost:3000
```

### Test on Network
```bash
npm run dev
# Access via your local IP: http://192.168.x.x:3000
```

---

## 🔄 Updates

### Update Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

### Update All Dependencies
```bash
npm update
```

### Check Outdated Packages
```bash
npm outdated
```

---

## 📦 Package Management

### Add New Package
```bash
npm install package-name
```

### Add Dev Dependency
```bash
npm install -D package-name
```

### Remove Package
```bash
npm uninstall package-name
```

### List Installed Packages
```bash
npm list
```

---

## 🌐 Environment Variables

### Create .env.local
```bash
# Create file
touch .env.local

# Add variables
echo "NEXT_PUBLIC_API_KEY=your_key" >> .env.local
```

---

## 📸 Screenshots (Optional)

### Install Screenshot Tool
```bash
npm install -D playwright
npx playwright install
```

---

## 🎯 Quick Commands Cheat Sheet

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install dependencies
npm install

# Clear cache
rm -rf .next

# Git commit
git add . && git commit -m "message" && git push

# Deploy to Vercel
vercel
```

---

## 💡 Pro Tips

1. **Keep terminal open** while developing
2. **Save files** to see hot-reload in action
3. **Check console** for errors (F12 in browser)
4. **Use Git** to track changes
5. **Test mobile** using Chrome DevTools (F12 → Toggle Device)

---

## 🆘 Emergency Commands

### Something Broke?
```bash
# Nuclear option - fresh start
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

### Git Messed Up?
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all changes (CAREFUL!)
git reset --hard HEAD
```

---

## 📚 Learn More

- Next.js CLI: https://nextjs.org/docs/api-reference/cli
- npm Commands: https://docs.npmjs.com/cli/v8/commands
- Git Commands: https://git-scm.com/docs

---

**Save this file for quick reference!** 📌
