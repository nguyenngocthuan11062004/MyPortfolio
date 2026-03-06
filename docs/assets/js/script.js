'use strict';

// ===== NAVBAR SHOW ON SCROLL =====
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');

if (hero && navbar) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
    });
  }, { threshold: 0 });

  heroObserver.observe(hero);
}

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });

sections.forEach(section => sectionObserver.observe(section));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== TYPED.JS INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const checkTyped = setInterval(() => {
    if (typeof Typed !== 'undefined') {
      clearInterval(checkTyped);
      new Typed('#typed-output', {
        strings: [
          'Mobile Developer',
          'iOS & Android',
          'IoT Enthusiast',
          'Building Osprey Smart Ring'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }, 100);
});

// ===== SCROLL FADE-IN =====
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== SKILL BAR ANIMATION =====
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.width = width + '%';
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.classList.remove('visible');
        card.style.display = 'none';
      }
    });
  });
});

// ===== CONTACT FORM VALIDATION =====
const formInputs = document.querySelectorAll('.contact-form .form-input');
const formBtn = document.querySelector('.form-btn');

if (formBtn && formInputs.length) {
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      const allFilled = [...formInputs].every(i => i.value.trim() !== '');
      formBtn.disabled = !allFilled;
    });
  });
}
