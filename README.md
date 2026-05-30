# ComplexIOTA | Personal Portfolio

> A professional portfolio website showcasing expertise in **Artificial Intelligence**, **Machine Learning**, **Quantitative Finance**, and **Data Science**.

![HTML](https://img.shields.io/badge/HTML5-40.8%25-orange?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-30.3%25-yellow?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-28.9%25-blue?style=flat-square)

## Overview

A modern, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. No external dependencies—pure, performant web technologies for a fast and accessible browsing experience.

**Live Demo**: [complexiota.github.io](https://complexiota.github.io)

---

## ✨ Key Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **High Performance**: Zero dependencies, lightweight and fast-loading
- **Smooth Interactions**: Fade-in animations, hover effects, and smooth scrolling
- **Professional Aesthetic**: Clean, modern design with polished color scheme
- **Accessibility**: Semantic HTML and WCAG-compliant structure
- **SEO Optimized**: Proper meta tags and semantic markup

---

## 🏗️ Architecture

### Page Sections

| Section | Purpose |
|---------|---------|
| **Navigation** | Sticky header with smooth scroll navigation |
| **Hero** | Compelling introduction and call-to-action |
| **About** | Professional biography and background |
| **Skills** | Technical expertise areas (AI/ML, Quant, Data Science) |
| **Projects** | Featured portfolio projects with descriptions |
| **Contact** | Contact form and social media links |
| **Footer** | Copyright and attribution |

---

## 🛠️ Technical Stack

| Technology | Usage | Version |
|-----------|-------|---------|
| **HTML5** | Semantic markup and structure | - |
| **CSS3** | Flexbox, Grid, animations | - |
| **JavaScript** | Vanilla JS (no frameworks) | ES6+ |
| **Font Awesome** | Icon library | v6 |
| **GitHub Pages** | Hosting | - |

---

## 📝 Customization Guide

### 1. Update Personal Information

Edit `index.html`:

```html
<!-- Update name and tagline -->
<h1>Your Name</h1>
<p class="tagline">AI • ML • Quant • Data Science</p>

<!-- Update social links -->
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourusername">LinkedIn</a>
<a href="https://twitter.com/yourusername">Twitter</a>

<!-- Update contact email -->
<a href="mailto:your.email@example.com">Contact</a>
```

### 2. Customize Brand Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #14b8a6;       /* Alternative accent */
    --text-color: #1f2937;         /* Text color */
    --bg-light: #f9fafb;           /* Light background */
    --bg-dark: #111827;            /* Dark background */
}
```

### 3. Add Projects

Duplicate a `.project-card` block in `index.html`:

```html
<div class="project-card">
    <h3>Project Title</h3>
    <p>Brief project description</p>
    <div class="tech-stack">
        <span class="tech">Python</span>
        <span class="tech">TensorFlow</span>
    </div>
    <a href="#" class="project-link">View Project →</a>
</div>
```

### 4. Update Skills

Modify the skills grid section to reflect your expertise areas.

---

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

Since this repository is named `username.github.io`, GitHub Pages automatically deploys your site:

```
https://complexiota.github.io
```

**Zero configuration required** — push to main branch and your site is live.

---

## 📊 Repository Statistics

- **Total Size**: Minimal footprint with no dependencies
- **Load Time**: < 2 seconds (typical)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Lighthouse score 90+

---

## 🔄 Development Workflow

1. **Clone repository**:
   ```bash
   git clone https://github.com/complexiota/complexiota.github.io.git
   cd complexiota.github.io
   ```

2. **Edit files locally**:
   - `index.html` — Content and structure
   - `styles.css` — Styling and animations
   - `script.js` — Interactivity

3. **Test locally** (optional):
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

4. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

---

## 📋 Roadmap

- [ ] Dark mode toggle with local storage persistence
- [ ] Blog section with markdown support
- [ ] Project filtering and search functionality
- [ ] Testimonials/recommendations section
- [ ] Newsletter signup integration
- [ ] Analytics dashboard
- [ ] Resume PDF download
- [ ] Multi-language support

---

## 📄 License

This template is available for personal use. Feel free to use it as a foundation for your own portfolio website.

---

## 🤝 Support

For questions or issues, please open a GitHub issue or contact via email.

**Last Updated**: May 30, 2026
