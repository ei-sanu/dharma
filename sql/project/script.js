// Initialize Lucide icons
lucide.createIcons();

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
let isMenuOpen = false;

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    
    // Update menu icon
    menuIcon.innerHTML = isMenuOpen 
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';
    lucide.createIcons();
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        isMenuOpen = false;
        menuIcon.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scroll for anchor links
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

// Add scroll event listener for navbar background
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
});