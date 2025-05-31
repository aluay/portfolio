# Ultra Minimal Portfolio

A clean, modern, and ultra-minimal portfolio built with Astro, featuring advanced typography techniques and responsive design.

## ✨ Features

- **Ultra Minimal Design**: Clean, distraction-free layout focusing on content
- **Advanced Typography**: Professional font pairing with Inter and JetBrains Mono
- **Responsive Design**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Astro for fast loading times
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Smooth Animations**: Subtle fade-in effects and micro-interactions
- **Modern CSS**: CSS Custom Properties, Grid, and Flexbox
- **SEO Ready**: Proper meta tags and semantic structure

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design Philosophy

This portfolio follows strict ultra-minimal design principles:

- **Typography First**: Content is king, with carefully chosen fonts and spacing
- **Minimal Color Palette**: Black, white, and subtle grays only
- **Purposeful Whitespace**: Every element has breathing room
- **Subtle Interactions**: Gentle hover effects and animations
- **Clean Layout**: Grid-based design with consistent spacing
- **No Visual Clutter**: Every element serves a purpose

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.astro          # Fixed navigation header
│   ├── Hero.astro            # Hero section with intro
│   ├── Work.astro            # Projects showcase
│   ├── About.astro           # About section with skills
│   ├── Contact.astro         # Contact information
│   ├── Footer.astro          # Site footer
│   ├── ScrollProgress.astro  # Scroll progress indicator
│   └── BackToTop.astro       # Back to top button
├── layouts/
│   └── Layout.astro          # Base layout component
├── pages/
│   └── index.astro           # Main portfolio page
└── styles/
    └── global.css            # Global styles and utilities
```

## 🎯 Typography

The portfolio uses a carefully selected font stack:

- **Primary Font**: Inter (Google Fonts)
  - Ultra-light (100) for display headlines
  - Light (200-300) for headings
  - Regular (400) for body text
- **Monospace Font**: JetBrains Mono
  - Used for technical content, metadata, and code

## 🔧 Customization

### Colors

All colors are defined as CSS custom properties in `global.css`:

```css
:root {
	--primary: #000000;
	--secondary: #666666;
	--accent: #999999;
	--background: #ffffff;
	/* ... */
}
```

### Typography Scale

Responsive typography using clamp() for fluid scaling:

```css
.text-display {
	font-size: clamp(2.5rem, 8vw, 6rem);
	font-weight: 100;
	line-height: 0.9;
}
```

### Spacing System

Consistent spacing scale using CSS custom properties:

```css
:root {
	--spacing-xs: 0.25rem;
	--spacing-sm: 0.5rem;
	--spacing-md: 1rem;
	/* ... */
}
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Fluid Typography**: Text scales smoothly across devices
- **Flexible Grid**: CSS Grid with auto-fit columns
- **Touch Friendly**: Proper touch targets on mobile devices

## ⚡ Performance

- **Static Generation**: Pre-rendered HTML for fast loading
- **Optimized Fonts**: Preloaded Google Fonts with font-display: swap
- **Minimal JavaScript**: Only essential interactive features
- **Efficient CSS**: Utility-first approach with no unused styles

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using [Astro](https://astro.build)
