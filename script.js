// Language Toggle Functionality
let currentLang = 'ar';

const langBtn = document.getElementById('langBtn');
const html = document.documentElement;

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  updateLanguage();
});

function updateLanguage() {
  // Update HTML attributes
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  
  // Update button text
  langBtn.textContent = currentLang === 'ar' ? 'English' : 'عربي';
  
  // Update all elements with data-ar and data-en attributes
  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
  
  // Update font family
  if (currentLang === 'en') {
    document.body.style.fontFamily = "'Inter', sans-serif";
  } else {
    document.body.style.fontFamily = "'Tajawal', sans-serif";
  }
  
  // Save preference
  localStorage.setItem('festivalLang', currentLang);
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('festivalLang');
  if (savedLang) {
    currentLang = savedLang;
    updateLanguage();
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.stat-card, .vision-card, .zone-card, .tier-card');
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

console.log('🌴 Festival Website Loaded');