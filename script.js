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

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.stat-card, .vision-card, .zone-card, .week-card, .tier-card, .mechanic-card, .daily-item');
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
  });
});

// Button click handlers
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function() {
    // You can add modal or redirect here
    alert('سيتم توجيهك إلى نموذج التسجيل قريباً');
  });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats-section');
let countersAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      countersAnimated = true;
      // Add counter animation logic here if needed
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

console.log('🌴 مهرجان الأحساء للتسوق - الموقع جاهز!');
