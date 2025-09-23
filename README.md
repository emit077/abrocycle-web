# ABRO Cycles - India's First Cruiser Cycle Website

A modern, SEO-optimized Next.js website for ABRO Cycles, featuring an engineering-focused design with customizable themes and interactive components.

## 🚀 Features

- **Modern Design**: Grayscale and blueprint themes with engineering-focused aesthetics
- **Interactive Components**: Animated cycle outline display with hover effects
- **SEO Optimized**: Complete meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Performance**: Optimized with Next.js image optimization and code splitting
- **Responsive**: Mobile-first design that works on all devices
- **Theme System**: Customizable color schemes with persistent storage

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Custom theme system with context

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd abro-cycle
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

## 🎨 Theme Customization

The website features two built-in themes:

### Grayscale Theme (Default)

- Primary: Gray-800 (#1f2937)
- Secondary: Gray-700 (#374151)
- Accent: Blue-500 (#3b82f6)
- Background: White (#ffffff)

### Blueprint Theme

- Primary: Blue-800 (#1e40af)
- Secondary: Blue-900 (#1e3a8a)
- Accent: Blue-500 (#3b82f6)
- Background: Slate-50 (#f8fafc)

### Customizing Themes

Edit the theme configuration in `src/theme/theme.ts`:

```typescript
export const customTheme: Theme = {
  colors: {
    primary: "#your-color",
    secondary: "#your-color",
    accent: "#your-color",
    // ... other colors
  },
  // ... other theme properties
};
```

## 🧩 Components

### Core Components

- **CycleOutlineDisplay**: Interactive SVG cycle with hover effects
- **ProductFeatureBox**: Feature showcase with outline design
- **HeroBanner**: Main landing section with animations
- **TestimonialCard**: Customer testimonials with ratings
- **ThemeToggle**: Switch between grayscale and blueprint themes

### Layout Components

- **Header**: Navigation with mobile menu
- **Footer**: Company information and links
- **SEO**: Meta tags and structured data

### Sections

- **AboutSection**: Company history and milestones
- **FeaturesSection**: Product features grid
- **EngineeringSection**: Interactive cycle breakdown
- **TestimonialsSection**: Customer reviews
- **ContactSection**: Contact form and information

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for organization information
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG AA compliant design

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Components load as needed
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: Optimized caching strategies

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Optimized for touch interactions
- **Cross Browser**: Compatible with all modern browsers

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # Reusable components
│   ├── ui/             # Basic UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page sections
├── theme/              # Theme system
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Main brand color
- **Secondary**: Supporting color
- **Accent**: Highlight color
- **Background**: Page background
- **Surface**: Card/component background
- **Text**: Primary text color
- **Text Secondary**: Secondary text color
- **Border**: Component borders
- **Outline**: Engineering outline color

### Typography

- **Font Family**: Inter (sans-serif)
- **Font Weights**: 300-800
- **Font Sizes**: xs (0.75rem) to 6xl (3.75rem)

### Spacing

- **Scale**: 0.25rem to 4rem
- **Consistent**: 8px base unit
- **Responsive**: Mobile-first approach

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email info@abro-cycles.com or visit our website.

---

**ABRO Cycles** - Engineering Excellence Since 1947
# abrocycle-web
