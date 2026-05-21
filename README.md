# ComplexIOTA Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and hover interactions
- **Modern Aesthetics**: Clean design with a professional color scheme
- **Fully Customizable**: Easy to update content, colors, and styling
- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Sections

1. **Navigation**: Sticky header with smooth scrolling
2. **Hero Section**: Eye-catching introduction
3. **About**: Brief biography and introduction
4. **Skills**: Grid display of expertise areas
5. **Projects**: Showcase of featured projects
6. **Contact**: Contact form and social links
7. **Footer**: Copyright and attribution

## Customization Guide

### Update Personal Information

1. **Edit index.html**:
   - Change "ComplexIOTA" to your name
   - Update the subtitle and tagline
   - Modify social media links
   - Update project information

2. **Update Email**:
   - Search for `your.email@example.com` and replace with your actual email

3. **Update Social Links**:
   - GitHub: `https://github.com/complexiota`
   - LinkedIn: Add your LinkedIn URL
   - Twitter: Add your Twitter URL

### Customize Colors

Edit the CSS variables in `styles.css` (lines 1-10):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #14b8a6;       /* Alternative accent */
    /* ... more colors ... */
}
```

### Add More Projects

In `index.html`, duplicate a `.project-card` block and fill in your project details.

## Deployment

Since this repository is named `username.github.io`, it's automatically deployed to GitHub Pages:
- Visit: `https://complexiota.github.io`

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: Smooth scrolling, form handling, scroll animations
- **Font Awesome 6**: Icon library

## Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement email form backend
- [ ] Add blog section
- [ ] Create projects filter/search
- [ ] Add testimonials section
- [ ] Implement analytics

## License

Feel free to use this template for your personal portfolio!
