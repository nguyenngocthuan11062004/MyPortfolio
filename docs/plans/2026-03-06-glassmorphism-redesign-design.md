# Glassmorphism Portfolio Redesign - Design Document

**Goal:** Redesign portfolio from template-based dark/card layout to modern glassmorphism single-page scroll with teal-blue gradient, floating navbar, and smooth animations.

**Style:** Glassmorphism - frosted glass cards, gradient mesh background, cyan accents
**Layout:** Single page scroll with fullscreen hero + floating glass navbar on scroll
**Colors:** `#0d1b2a` (dark) -> `#1b4965` (teal) -> `#1a56db` (blue), accent `#5ce1e6` (cyan)
**Tech:** Pure HTML/CSS/JS + Typed.js CDN for typing effect

## Sections (scroll order)

1. **Hero (100vh)** - gradient bg, large avatar with cyan glow ring, name, typing subtitle, social icons, scroll indicator
2. **Glass Navbar (sticky)** - appears on scroll past hero, blur(20px), rgba white 10% bg
3. **About** - glass card bio + 2x2 service cards
4. **Experience** - vertical timeline with glass cards, company logos
5. **Skills** - animated progress bars + company logos row
6. **Portfolio** - glass filter pills + project grid with hover overlay
7. **Contact** - glass card form + map + contact info
8. **Footer** - minimal copyright + social links

## Effects
- Typed.js for hero subtitle
- IntersectionObserver fade-in on scroll
- Parallax background gradient shift
- Animated skill bars
- Smooth scroll between sections
- Hover glow on cards
