# Portfolio Visual Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refresh the portfolio from a generic yellow/gold template into a modern blue-themed personal brand aligned with Osprey Technology.

**Architecture:** Pure CSS variable overrides for color scheme, CSS animations for effects, HTML edits for content updates. No new dependencies needed.

**Tech Stack:** HTML, CSS (custom properties), vanilla JS

---

## Task 1: Color Scheme - CSS Variables (Yellow -> Blue)

**Files:**
- Modify: `docs/assets/css/style.css:18-70` (`:root` custom properties)

**Step 1: Replace all yellow/gold color variables with blue palette**

Change these CSS variables in `:root`:

```css
/* gradient - OLD yellow values -> NEW blue values */
--bg-gradient-yellow-1: linear-gradient(
  to bottom right,
  hsl(210, 100%, 55%) 0%,
  hsla(210, 100%, 45%, 0) 50%
);
--bg-gradient-yellow-2: linear-gradient(
  135deg,
  hsla(210, 100%, 55%, 0.251) 0%,
  hsla(210, 100%, 45%, 0) 59.86%
), hsl(240, 2%, 13%);
--text-gradient-yellow: linear-gradient(
  to right,
  hsl(210, 100%, 60%),
  hsl(210, 100%, 45%)
);

/* solid - OLD yellow values -> NEW blue values */
--orange-yellow-crayola: hsl(210, 100%, 55%);
--vegas-gold: hsl(210, 60%, 50%);
```

**Step 2: Verify in browser**

Reload page. All accent colors (navbar active, timeline dots, skill bars, buttons, scrollbar, article title underline, icon boxes) should now be blue instead of yellow/gold.

**Step 3: Commit**

```bash
git add docs/assets/css/style.css
git commit -m "style: change color scheme from yellow/gold to blue"
```

---

## Task 2: Avatar Glow Effect

**Files:**
- Modify: `docs/assets/css/style.css` (add after `.avatar-box` rules around line 334-337)

**Step 1: Add a subtle blue glow to avatar**

Add this CSS after the existing `.avatar-box` rule:

```css
.avatar-box {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
  box-shadow: 0 0 20px hsla(210, 100%, 55%, 0.3);
  transition: box-shadow 0.3s ease;
}

.avatar-box:hover {
  box-shadow: 0 0 30px hsla(210, 100%, 55%, 0.5);
}
```

**Step 2: Verify in browser**

Avatar should have a subtle blue glow, intensifying on hover.

**Step 3: Commit**

```bash
git add docs/assets/css/style.css
git commit -m "style: add blue glow effect to avatar"
```

---

## Task 3: Smooth Fade-In Animations on Scroll

**Files:**
- Modify: `docs/assets/css/style.css` (add at end, before responsive section)
- Modify: `docs/assets/js/script.js` (add IntersectionObserver at end)

**Step 1: Add CSS animation classes**

Add before the `#RESPONSIVE` section in style.css:

```css
/*-----------------------------------*\
  #SCROLL ANIMATIONS
\*-----------------------------------*/

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Step 2: Add IntersectionObserver JS**

Append to the end of `docs/assets/js/script.js`:

```javascript
// Scroll fade-in animation
const fadeElements = document.querySelectorAll('.timeline-item, .service-item, .project-item, .skills-item, .clients-item');

fadeElements.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));
```

**Step 3: Verify in browser**

Scroll through pages - elements should fade in smoothly as they enter viewport.

**Step 4: Commit**

```bash
git add docs/assets/css/style.css docs/assets/js/script.js
git commit -m "feat: add scroll fade-in animations"
```

---

## Task 4: Card Hover Effects

**Files:**
- Modify: `docs/assets/css/style.css` (update `.service-item` and `.content-card` rules)

**Step 1: Add modern hover lift effect to cards**

Add/update these rules in style.css:

```css
.service-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px hsla(210, 100%, 55%, 0.15);
}

.project-item > a {
  transition: transform 0.3s ease;
}

.project-item > a:hover {
  transform: translateY(-5px);
}
```

**Step 2: Verify in browser**

Service cards and project cards should lift up slightly with a blue shadow on hover.

**Step 3: Commit**

```bash
git add docs/assets/css/style.css
git commit -m "style: add hover lift effects to cards"
```

---

## Task 5: Skill Progress Bar Animation

**Files:**
- Modify: `docs/assets/css/style.css` (update `.skill-progress-fill`)
- Modify: `docs/assets/js/script.js` (add animation trigger)

**Step 1: Add CSS for animated skill bars**

Update `.skill-progress-fill` in style.css:

```css
.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
  width: 0;
  transition: width 1s ease-in-out;
}
```

**Step 2: Add JS to animate on visibility**

Append to `docs/assets/js/script.js`:

```javascript
// Skill bar animation
const skillBars = document.querySelectorAll('.skill-progress-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          entry.target.style.width = width;
        });
      });
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));
```

**Step 3: Verify in browser**

Go to Resume tab - skill bars should animate from 0 to their value when scrolled into view.

**Step 4: Commit**

```bash
git add docs/assets/css/style.css docs/assets/js/script.js
git commit -m "feat: animate skill progress bars on scroll"
```

---

## Task 6: Update Social Links (Facebook/Twitter/Instagram -> GitHub/LinkedIn/Email)

**Files:**
- Modify: `docs/index.html:128-148` (social links section)

**Step 1: Replace social links HTML**

Replace the entire `<ul class="social-list">` with:

```html
<ul class="social-list">
  <li class="social-item">
    <a href="https://github.com/thuannguyen" class="social-link" target="_blank">
      <ion-icon name="logo-github"></ion-icon>
    </a>
  </li>

  <li class="social-item">
    <a href="https://linkedin.com/in/thuannguyen" class="social-link" target="_blank">
      <ion-icon name="logo-linkedin"></ion-icon>
    </a>
  </li>

  <li class="social-item">
    <a href="mailto:thuan.nn225413@sis.hust.edu.vn" class="social-link" target="_blank">
      <ion-icon name="mail-outline"></ion-icon>
    </a>
  </li>
</ul>
```

> **Note:** User needs to provide actual GitHub/LinkedIn URLs. Using placeholder paths for now.

**Step 2: Verify in browser**

Click "Show Contacts" - icons should show GitHub, LinkedIn, Mail instead of Facebook, Twitter, Instagram.

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "feat: update social links to GitHub, LinkedIn, Email"
```

---

## Task 7: Rename "Clients" -> "Experience" or "Companies I've Worked With"

**Files:**
- Modify: `docs/index.html:453-456` (clients section title)

**Step 1: Update section title**

Change:
```html
<h3 class="h3 clients-title">Clients</h3>
```
To:
```html
<h3 class="h3 clients-title">Companies I've Worked With</h3>
```

**Step 2: Verify in browser**

Section title on About page should now read "Companies I've Worked With".

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "content: rename Clients section to Companies I've Worked With"
```

---

## Task 8: Subtle Background Gradient Animation

**Files:**
- Modify: `docs/assets/css/style.css` (update `body` and add keyframes)

**Step 1: Add animated gradient to body background**

Replace the `body` rule and add keyframes:

```css
body {
  background: linear-gradient(135deg, hsl(0, 0%, 7%) 0%, hsl(220, 15%, 10%) 50%, hsl(0, 0%, 7%) 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Step 2: Verify in browser**

Background should have a very subtle, slow-moving gradient shift (dark, barely noticeable but adds depth).

**Step 3: Commit**

```bash
git add docs/assets/css/style.css
git commit -m "style: add subtle animated background gradient"
```

---

## Task 9: Navbar Active Indicator Enhancement

**Files:**
- Modify: `docs/assets/css/style.css` (update `.navbar-link.active`)

**Step 1: Add bottom border indicator to active nav item**

Add/update rule:

```css
.navbar-link.active {
  color: var(--orange-yellow-crayola);
  position: relative;
}

.navbar-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 3px;
  background: var(--text-gradient-yellow);
  border-radius: 3px;
}
```

**Step 2: Verify in browser**

Active navbar item should have a blue underline indicator.

**Step 3: Commit**

```bash
git add docs/assets/css/style.css
git commit -m "style: enhance navbar active indicator with underline"
```

---

## Task 10: Final Review & Polish

**Step 1: Full visual review**

Open browser and check all 5 tabs:
- [ ] About: blue accents, avatar glow, service card hover, companies section
- [ ] Resume: timeline blue dots, animated skill bars
- [ ] Portfolio: project card hover, Osprey Smart Ring visible
- [ ] Blog: "Coming Soon" still looks fine
- [ ] Contact: form button blue, map looks good

**Step 2: Check mobile responsive**

Open DevTools (Cmd+Option+I) -> toggle device toolbar -> check iPhone/iPad sizes.

**Step 3: Final commit**

```bash
git add -A
git commit -m "style: final polish and review of portfolio visual refresh"
```
