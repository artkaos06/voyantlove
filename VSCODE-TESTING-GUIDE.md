# 🧪 VoyantLove.fr - VS Code Testing Guide

## ✅ YOU NOW HAVE: 20 PAGES COMPLETE!

All pages built and ready for testing in VS Code.

---

## 📋 PRE-REQUISITES

Make sure you have installed:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **VS Code** ([Download](https://code.visualstudio.com/))
- **Git** (optional but recommended)

Verify installations:
```bash
node --version  # Should show v18+ or v20+
npm --version   # Should show v9+ or v10+
```

---

## 🚀 STEP-BY-STEP SETUP

### **Step 1: Download the Project**

Download the `voyantlove` folder from the outputs to your local machine.

Place it somewhere like:
- Windows: `C:\Users\YourName\Projects\voyantlove`
- Mac/Linux: `~/Projects/voyantlove`

---

### **Step 2: Open in VS Code**

1. Open VS Code
2. File → Open Folder
3. Select the `voyantlove` folder
4. Click "Open" / "Select Folder"

You should see this structure:
```
voyantlove/
├── app/
├── data/
├── lib/
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

### **Step 3: Open Terminal in VS Code**

In VS Code:
- **Mac/Linux**: `Ctrl + ` ` (backtick)
- **Windows**: `Ctrl + ` ` (backtick)
- **Or**: View → Terminal

You should see a terminal at the bottom of VS Code.

---

### **Step 4: Install Dependencies**

In the VS Code terminal, run:

```bash
npm install
```

This will install Next.js, React, Tailwind, and all dependencies.

**Wait 2-3 minutes** for installation to complete.

You should see:
```
added 350+ packages
```

---

### **Step 5: Start Development Server**

In the terminal, run:

```bash
npm run dev
```

You should see:
```
▲ Next.js 15.1.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

---

### **Step 6: Open in Browser**

1. Open your browser (Chrome, Firefox, Safari, Edge)
2. Go to: **http://localhost:3000**

You should see the **VoyantLove homepage** with:
- Purple header "💜 VoyantLove"
- Trust bar with 4 metrics
- 6 situation cards
- Full responsive design

---

## 🧪 TESTING ALL 20 PAGES

### **Test Each Page URL**

Open these URLs in your browser to verify all pages work:

#### **Core 8 Pages (First Batch)**
1. http://localhost:3000/reconquerir-son-ex
2. http://localhost:3000/oublier-son-ex
3. http://localhost:3000/va-t-il-elle-revenir
4. http://localhost:3000/maime-t-il-elle
5. http://localhost:3000/quand-rencontre-amour
6. http://localhost:3000/rupture-amoureuse
7. http://localhost:3000/retour-de-lex
8. http://localhost:3000/chagrin-damour

#### **New 12 Pages (Second Batch)**
9. http://localhost:3000/ex-qui-revient
10. http://localhost:3000/seconde-chance-amour
11. http://localhost:3000/se-remettre-ensemble
12. http://localhost:3000/trouver-ame-soeur
13. http://localhost:3000/signes-ame-soeur
14. http://localhost:3000/nouvelle-relation-amoureuse
15. http://localhost:3000/infidelite-couple
16. http://localhost:3000/jalousie-excessive
17. http://localhost:3000/problemes-communication-couple
18. http://localhost:3000/signes-il-elle-maime
19. http://localhost:3000/avenir-amoureux
20. http://localhost:3000/ex-revient-silence-radio

---

## ✅ WHAT TO CHECK ON EACH PAGE

### **Visual Checks**
- [ ] Header displays correctly with gradient background
- [ ] Trust metrics show (4 boxes with stats)
- [ ] Main content is readable
- [ ] Sections have proper spacing
- [ ] CTAs (buttons) are visible
- [ ] Footer links work
- [ ] Internal links work

### **Responsive Checks**
Test on different screen sizes:

1. **Desktop** (default view)
2. **Tablet** (resize browser to ~768px width)
3. **Mobile** (resize browser to ~375px width)

Or use browser DevTools:
- **Chrome**: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
- **Firefox**: F12 → Responsive Design Mode (Ctrl+Shift+M)

### **Navigation Checks**
- [ ] Click "← Retour" → Goes to homepage
- [ ] Click internal links → Goes to related pages
- [ ] Click CTAs → Scrolls or goes to correct section

---

## 🐛 COMMON ISSUES & FIXES

### **Issue 1: "npm: command not found"**
**Fix**: Install Node.js from https://nodejs.org/

### **Issue 2: "Port 3000 already in use"**
**Fix**: 
```bash
# Kill the process using port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use a different port:
npm run dev -- -p 3001
```

### **Issue 3: "Module not found"**
**Fix**: 
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### **Issue 4: Page shows 404**
**Fix**: 
1. Check the URL spelling (all lowercase, hyphens not underscores)
2. Restart dev server: `Ctrl+C` then `npm run dev`
3. Check that page.tsx exists in the folder

### **Issue 5: Styles not loading**
**Fix**:
```bash
# Restart dev server
Ctrl+C
npm run dev
```

---

## 📱 MOBILE TESTING

### **Option 1: Browser DevTools**
1. F12 to open DevTools
2. Click device toggle icon (top-left)
3. Select "iPhone 12 Pro" or "Pixel 5"
4. Reload page

### **Option 2: Real Device (Same Network)**
1. Find your computer's IP:
   - Mac/Linux: `ifconfig` → look for 192.168.x.x
   - Windows: `ipconfig` → look for IPv4 Address
2. On your phone's browser: `http://192.168.x.x:3000`

---

## 🎨 EDITING PAGES (Live Reload)

VS Code has **hot reload** - changes appear instantly!

### **Try It:**
1. Open `app/page.tsx` in VS Code
2. Find line with "VoyantLove"
3. Change to "VoyantLove Test"
4. Save file (Ctrl+S)
5. Browser auto-refreshes - you'll see "VoyantLove Test"!

### **Edit a Page:**
1. Open `app/reconquerir-son-ex/page.tsx`
2. Find the H1: `<h1>💜 Voyance Amoureuse`
3. Add "Test" to it
4. Save
5. Refresh http://localhost:3000/reconquerir-son-ex
6. See your change!

---

## 🚀 BUILD FOR PRODUCTION

Once testing is complete, build the production version:

```bash
npm run build
```

This creates an optimized production build in `.next/` folder.

Output should show:
```
✓ Generating static pages (20/20)
✓ Collecting page data
✓ Finalizing page optimization

Route (app)                            Size     First Load JS
┌ ○ /                                  5.2 kB         92 kB
├ ○ /reconquerir-son-ex                3.8 kB         91 kB
├ ○ /oublier-son-ex                    3.5 kB         91 kB
... (all 20 pages)
```

Then test production build:
```bash
npm run start
```

---

## 📊 PERFORMANCE TESTING

### **Check Load Speed**
1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Click "Generate report"
4. Check scores for:
   - Performance (target: 90+)
   - Accessibility (target: 95+)
   - SEO (target: 100)

### **Check Mobile Performance**
1. Set device to "Mobile"
2. Run Lighthouse again
3. Scores should still be high

---

## 🔍 SEO TESTING

### **Check Meta Tags**
1. Right-click page → View Source
2. Look for:
   ```html
   <title>Reconquérir son Ex | VoyantLove</title>
   <meta name="description" content="...">
   <link rel="canonical" href="https://voyantlove.fr/...">
   ```

### **Check Semantic HTML**
1. F12 → Elements tab
2. Verify proper hierarchy:
   - One `<h1>` per page
   - `<h2>` for main sections
   - `<h3>` for subsections

---

## ✅ TESTING CHECKLIST

Before deploying, verify:

### **Functionality**
- [ ] All 20 pages load without errors
- [ ] Homepage navigation works
- [ ] Internal links work correctly
- [ ] Back buttons return to homepage
- [ ] CTAs are clickable

### **Visual**
- [ ] All gradients display correctly
- [ ] Trust metrics visible on all pages
- [ ] Spacing looks good on all screen sizes
- [ ] No layout breaking on mobile
- [ ] Fonts load correctly

### **Performance**
- [ ] Pages load in < 2 seconds
- [ ] No console errors (F12 → Console)
- [ ] Images/icons load properly
- [ ] Smooth scrolling works

### **SEO**
- [ ] Each page has unique title
- [ ] Each page has meta description
- [ ] H1-H3 hierarchy is correct
- [ ] Canonical URLs are set

---

## 🎯 NEXT STEPS AFTER TESTING

Once everything works locally:

### **Option 1: Deploy to Vercel (Recommended)**
1. Push to GitHub
2. Import to Vercel
3. Connect voyantlove.fr domain
4. Deploy in 5 minutes

### **Option 2: Deploy to Netlify**
1. Drag & drop `.next` folder
2. Configure domain
3. Deploy instantly

### **Option 3: Traditional Hosting**
1. Run `npm run build`
2. Upload `out/` folder to server
3. Point voyantlove.fr to server

---

## 🆘 NEED HELP?

### **VS Code Terminal Commands**

**See what's running:**
```bash
# Show all npm scripts available
npm run
```

**Stop the server:**
```
Ctrl + C
```

**Restart server:**
```bash
npm run dev
```

**Clear cache and restart:**
```bash
rm -rf .next
npm run dev
```

### **Check for Errors**
Look at the VS Code terminal output:
- ✓ Green text = Good
- ⚠ Yellow text = Warning (usually okay)
- ✗ Red text = Error (needs fixing)

---

## 📈 PERFORMANCE BENCHMARKS

**Expected Results on Localhost:**

| Metric | Target | Typical |
|--------|--------|---------|
| Page Load | < 2s | ~0.5-1s |
| First Paint | < 1s | ~0.2-0.4s |
| Interactive | < 2.5s | ~1-1.5s |
| Lighthouse Performance | 90+ | 95-100 |
| Lighthouse SEO | 95+ | 100 |

---

## ✅ READY TO TEST!

**Quick Start Commands:**
```bash
cd voyantlove       # Navigate to project
npm install         # Install dependencies (once)
npm run dev         # Start server
```

**Then open:** http://localhost:3000

**Test all 20 pages** and verify everything works!

---

**Last Updated**: February 8, 2025
