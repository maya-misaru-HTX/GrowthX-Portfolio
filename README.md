# Misaki Funada - Customer Success Operations Portfolio

A modern, professional portfolio website built for the GrowthX AI Customer Success Operations role application.

## Design Philosophy

This portfolio matches GrowthX's design aesthetic:
- **Colors**: Warm beige/cream background (#F1EEE9) with clean white cards
- **Typography**: Inter font family for readability
- **Layout**: Generous spacing, maximum content width for readability
- **Style**: Minimalist, sophisticated, content-focused

## Content Structure

1. **Hero Section**: Professional introduction and quick navigation
2. **Why GrowthX AI?**: Alignment with company values and vision
3. **Measuring Customer Health**: CX systems and health tracking experience
4. **Data-Driven Planning**: Analytics dashboards and forecasting work
5. **Training & Enablement**: Workshop facilitation and documentation
6. **Featured Work Sample**: Detailed case study with measurable impact
7. **Contact Section**: Clear call-to-action for next steps

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173/

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd ~/Desktop/growthx-portfolio
vercel
```

3. Follow the prompts to deploy

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
- Drag and drop the `dist` folder to https://app.netlify.com/drop
- Or use Netlify CLI: `netlify deploy --prod --dir=dist`

## Customization

### Update Contact Information

Edit `src/App.jsx` line 480 to update your email:
```jsx
href="mailto:your-email@example.com"
```

### Modify Content

All content is in `src/App.jsx`. Each section is clearly commented.

### Adjust Colors

Modify `tailwind.config.js` to change the color scheme.

## Built With

- React 18
- Vite 7
- Tailwind CSS 3
- Inter Font (Google Fonts)

## Performance Features

- Smooth scrolling navigation
- Responsive design (mobile-first)
- Optimized font loading
- Fast page loads with Vite

---

Built with Claude Code for GrowthX AI Application
