# Adding Your Headshot

## Quick Instructions

1. **Find your headshot image** (one of the cherry blossom photos you shared)

2. **Rename it to `headshot.jpg`**

3. **Move it to the `public` folder**:
   ```bash
   cd ~/Desktop/growthx-portfolio
   # Copy your image here - it should be at:
   # public/headshot.jpg
   ```

4. **Alternative: Use Finder**:
   - Open Finder
   - Navigate to `Desktop/growthx-portfolio/public`
   - Drag and drop your headshot image into this folder
   - Rename it to `headshot.jpg`

## Supported Image Formats

The portfolio supports:
- `.jpg` or `.jpeg` (recommended)
- `.png`
- `.webp`

If you use a different format, update `src/App.jsx` line 51:
```jsx
src="/headshot.png"  // Change .jpg to .png or .webp
```

## Image Optimization Tips

For best performance:
- **Size**: Resize to 512x512 pixels (or at least square/circular crop)
- **File size**: Keep under 500KB (use tools like TinyPNG.com to compress)
- **Format**: JPG is best for photos

## If You Need a Placeholder

The site will show a broken image icon until you add your headshot.
This is normal and won't affect the rest of the portfolio.

## Quick Test

After adding your headshot:
```bash
cd ~/Desktop/growthx-portfolio
npm run dev
```

Visit http://localhost:5173/ - your photo should appear in the About section!

---

**Where to get your photo**:
Based on the cherry blossom photo you shared, that would be perfect!
Just crop it to be square/circular and save as `headshot.jpg`.
