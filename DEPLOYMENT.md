# Deployment Guide

## Quick Deploy to Vercel (Recommended - 2 minutes)

Vercel is the easiest option and is made by the same team that created Vite.

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Navigate to project**:
   ```bash
   cd ~/Desktop/growthx-portfolio
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Login to Vercel (it will open your browser)
   - Confirm the project settings
   - Your site will be live in ~30 seconds

5. **Get your URL**: Vercel will give you a live URL like `https://growthx-portfolio-username.vercel.app`

6. **For production deployment**:
   ```bash
   vercel --prod
   ```

## Alternative: Deploy to Netlify

### Option 1: Drag and Drop (Easiest)

1. **Build the project**:
   ```bash
   cd ~/Desktop/growthx-portfolio
   npm run build
   ```

2. **Deploy**:
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder onto the page
   - Your site is live!

### Option 2: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd ~/Desktop/growthx-portfolio
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Custom Domain (Optional)

Once deployed, you can add a custom domain like `misakifunada.com`:

### On Vercel:
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update your DNS records as instructed

### On Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

## Update Email Address

Before deploying, update your email in `src/App.jsx` line 480:

```jsx
<a href="mailto:your-actual-email@example.com">
```

## Testing Before Deploy

Make sure everything looks good locally:

```bash
npm run dev
```

Visit http://localhost:5173/ and check:
- All sections render correctly
- Links work (especially LinkedIn and email)
- Mobile responsiveness (resize your browser)
- Smooth scrolling navigation

## Build for Production

To test the production build locally:

```bash
npm run build
npm run preview
```

This will show you exactly what visitors will see.

---

Need help? The portfolio is already configured and ready to deploy!
