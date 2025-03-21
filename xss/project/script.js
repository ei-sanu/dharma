// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuIcon = document.querySelector('.menu-icon');

menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    menuIcon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
    lucide.createIcons();
});

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });
});