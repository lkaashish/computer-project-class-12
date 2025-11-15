
function searchSite() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Define available pages
    const pages = {
        'dictionary': 'dictionary.html',
        'clock': 'clock.html',
        'calculator': 'calculator.html',
        'calendar': 'calendar.html',
        'game': 'game.html',
        'home': 'index.html'
    };
    
    // Check if page exists and redirect
    if (pages[searchTerm]) {
        window.location.href = pages[searchTerm];
    } else {
        alert('Page not found. Try: Dictionary, Clock, Calculator, Calendar, or Game');
    }
}


document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchSite();
    }
});

// ========================================
// DARK MODE TOGGLE
// ========================================
const darkToggle = document.getElementById('darkToggle');

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
}

// Toggle dark mode on button click
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Update button icon and save preference
    if (document.body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ========================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ========================================
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

// ========================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all feature cards and stat items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// PREVENT DROPDOWN CLOSE ON MOBILE
// ========================================
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('touchstart', function(e) {
        // Toggle dropdown on mobile
        const content = this.querySelector('.dropdown-content');
        if (content) {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// ========================================
// NAVBAR SCROLL EFFECT (Optional)
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.25)';
    } else {
        navbar.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// CONSOLE MESSAGE (Easter Egg)
// ========================================
console.log('%c🚀 Tech Masters', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with passion by the Tech Masters team', 'font-size: 14px; color: #764ba2;');
console.log('%cInterested in joining? Check out our team page!', 'font-size: 12px; color: #999;');
