# Testing Checklist

## ✅ Automated Checks
- [x] HTML validates (no errors)
- [x] CSS validates (no errors)
- [x] JavaScript has no syntax errors
- [x] All files created successfully

## 🧪 Manual Testing Steps

### 1. Local Testing
To test the site locally, you can use any of these methods:

**Option A: VS Code Live Server**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://localhost:5500`

**Option B: Python Simple Server**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

**Option C: PHP Built-in Server**
```bash
php -S localhost:8000

# Then open: http://localhost:8000
```

### 2. Visual & Interaction Tests

#### Desktop (1920x1080)
- [ ] All sections load and display correctly
- [ ] Navigation links work and highlight active section
- [ ] Smooth scrolling from nav links
- [ ] Focus states visible when tabbing through links
- [ ] External links open in new tabs
- [ ] All content is readable

#### Tablet (768px)
- [ ] Layout adjusts appropriately
- [ ] Text remains readable
- [ ] Images scale correctly
- [ ] Cards/grids reflow properly

#### Mobile (375px)
- [ ] Hamburger menu appears
- [ ] Menu toggles on click
- [ ] Menu closes when clicking a link
- [ ] Menu closes when pressing Escape
- [ ] Menu closes when clicking outside
- [ ] All content fits without horizontal scroll
- [ ] Touch targets are large enough (min 44x44px)

### 3. Accessibility Tests

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] "Skip to content" appears on first Tab
- [ ] Focus indicators are visible
- [ ] Enter activates links/buttons
- [ ] Escape closes mobile menu

#### Screen Reader (Optional)
- [ ] Headings structure is logical (h1 → h2 → h3)
- [ ] Images have alt text
- [ ] Links have descriptive text
- [ ] ARIA labels are present where needed

### 4. Content Review
- [ ] All dates are accurate
- [ ] All job titles are correct
- [ ] Publication links work
- [ ] GitHub/LinkedIn links work
- [ ] Email is updated to your real email
- [ ] CV link points to actual PDF
- [ ] Project links are updated (currently placeholder)
- [ ] Profile photo displays correctly
- [ ] No typos or awkward phrasing

### 5. Performance
- [ ] Page loads quickly (< 2 seconds)
- [ ] No console errors
- [ ] Images are optimized
- [ ] No layout shift on load

### 6. Cross-Browser (Optional but recommended)
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (Mac/iOS)

## 🚀 Deployment

Once local testing is complete:

1. Commit all changes:
```bash
git add .
git commit -m "Redesign: minimal + playful personal site"
git push origin main
```

2. GitHub Pages will automatically deploy (2-3 minutes)

3. Visit: https://richardsd.github.io

4. Verify live site works as expected

## 🐛 Common Issues & Fixes

### Images not loading
- Check file paths are correct (case-sensitive on Linux/Mac)
- Ensure images exist in `assets/images/`

### Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for 404 errors

### Mobile menu not working
- Check JavaScript console for errors
- Ensure `main.js` is loaded

### Layout broken
- Validate HTML at https://validator.w3.org/
- Check for unclosed tags

## 📋 Pre-Deployment Checklist

Before pushing to production:
- [ ] Replace placeholder email with real email
- [ ] Upload your CV PDF to `assets/cv.pdf`
- [ ] Update project GitHub links
- [ ] Add or update profile photo if needed
- [ ] Review all content one final time
- [ ] Test on mobile device (not just browser DevTools)
- [ ] Get a second pair of eyes to review

## 🎉 Post-Deployment

After site is live:
- Share on LinkedIn/Twitter
- Update your LinkedIn "Website" link
- Update GitHub profile README with link
- Monitor GitHub Pages build status
- Check Google Search Console (optional)
