# Bell Chem - Chemical Solutions & Industrial Dyes Website

A modern, SEO-optimized website for Bell Chem, a leading manufacturer of high-quality chemicals and industrial dyes in India. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Performance Optimized**: Lazy loading, image optimization, code splitting, and build optimizations
- **Mobile Responsive**: Fully responsive design with mobile-first approach
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern UI**: Beautiful design with Tailwind CSS and shadcn/ui components
- **Form Validation**: Contact form with React Hook Form and Zod validation
- **Analytics Ready**: Google Analytics integration with event tracking
- **PWA Ready**: Web manifest and service worker support

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Forms**: React Hook Form, Zod validation
- **SEO**: React Helmet Async, structured data
- **Analytics**: Google Analytics 4
- **Build**: Vite with Terser minification
- **Deployment**: Vercel, Netlify ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thrive-brand-nexus
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Other Platforms

The built files in the `dist/` directory can be deployed to any static hosting service.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_CONTACT_FORM_ENDPOINT=https://your-api.com/contact
VITE_SITE_URL=https://bellchem.com
```

### SEO Configuration

Update the SEO settings in `src/components/SEO.tsx`:

- Site title and description
- Keywords
- Open Graph images
- Structured data
- Canonical URLs

### Analytics

Update the Google Analytics ID in `src/components/Analytics.tsx`:

```typescript
const Analytics = ({ measurementId = 'YOUR_GA_ID' }: AnalyticsProps) => {
  // ...
};
```

## 📱 Features Overview

### SEO Features
- Meta tags optimization
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- XML sitemap
- Robots.txt
- Canonical URLs

### Performance Features
- Image lazy loading
- Code splitting
- Bundle optimization
- Gzip compression
- Browser caching

### Accessibility Features
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance

## 🎨 Customization

### Colors and Branding
Update the color scheme in `src/index.css`:

```css
:root {
  --primary: 220 95% 25%; /* Your brand color */
  /* ... other colors */
}
```

### Content
- Update company information in components
- Replace placeholder images with actual photos
- Modify testimonials and case studies
- Update contact information

## 📊 Analytics and Tracking

The website includes comprehensive analytics tracking:

- Page views
- Form submissions
- Button clicks
- Phone number clicks
- Email clicks
- Custom events

## 🔒 Security

- Content Security Policy headers
- XSS protection
- Clickjacking protection
- Secure headers configuration

## 📈 Performance

- Lighthouse score: 95+
- Core Web Vitals optimized
- Image optimization
- Lazy loading
- Code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@bellchem.com
- Phone: +91-XXXXXXXXXX

## 🔄 Updates

- v1.0.0 - Initial release with core features
- v1.1.0 - Added testimonials and enhanced SEO
- v1.2.0 - Performance optimizations and analytics