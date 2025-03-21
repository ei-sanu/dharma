/* filepath: /home/sanu/cyber/script.js */
document.addEventListener('DOMContentLoaded', () => {
    const pageLoader = document.getElementById('pageLoader');

    // Hide loader when everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.style.opacity = '0';
            pageLoader.style.transition = 'opacity 0.5s ease-out';

            setTimeout(() => {
                pageLoader.style.display = 'none';
                // Trigger page content animation
                document.body.classList.add('content-loaded');
            }, 500);
        }, 1000); // Show loader for at least 1 second
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const startBtn = document.getElementById('start-animation');
    const resetBtn = document.getElementById('reset-animation');
    const steps = document.querySelectorAll('.step');

    let currentStep = 1;
    let animationInProgress = false;

    const animations = {
        1: async () => {
            // SQL Injection Animation
            const packet1 = document.getElementById('packet1');
            packet1.style.opacity = '1';
            packet1.style.left = '250px';
            await sleep(1000);
            packet1.classList.add('malicious');
            await sleep(500);
            packet1.style.top = '140px';
        },
        2: async () => {
            // XSS Animation
            const packet2 = document.getElementById('packet2');
            packet2.style.opacity = '1';
            packet2.classList.add('malicious');
            packet2.style.left = '450px';
            document.querySelector('.hacker').style.opacity = '1';
        },
        3: async () => {
            // CSRF Animation
            const packet1 = document.getElementById('packet1');
            const packet2 = document.getElementById('packet2');
            packet1.style.opacity = '0';
            packet2.style.opacity = '0';
            await sleep(500);
            packet1.style.left = '50px';
            packet1.style.top = '80px';
            packet2.style.left = '250px';
            document.querySelector('.hacker').style.opacity = '0';
        }
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function startAnimation() {
        if (animationInProgress) return;
        animationInProgress = true;

        for (let i = 1; i <= 3; i++) {
            steps.forEach(step => step.classList.remove('active'));
            steps[currentStep - 1].classList.add('active');
            await animations[currentStep]();
            await sleep(2000);
            currentStep = currentStep === 3 ? 1 : currentStep + 1;
        }

        animationInProgress = false;
    }

    function resetAnimation() {
        const packets = document.querySelectorAll('.packet');
        packets.forEach(packet => {
            packet.style.opacity = '0';
            packet.style.left = '50px';
            packet.style.top = '80px';
            packet.classList.remove('malicious');
        });
        document.querySelector('.hacker').style.opacity = '0';
        currentStep = 1;
        steps.forEach(step => step.classList.remove('active'));
        steps[0].classList.add('active');
    }

    startBtn.addEventListener('click', startAnimation);
    resetBtn.addEventListener('click', resetAnimation);
});

// Chatbot popup functionality
document.addEventListener('DOMContentLoaded', function () {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotPopup = document.getElementById('chatbot-popup');

    chatbotIcon.addEventListener('click', function () {
        chatbotPopup.classList.toggle('active');
    });

    // Close popup when clicking outside
    document.addEventListener('click', function (event) {
        if (!chatbotPopup.contains(event.target) &&
            !chatbotIcon.contains(event.target) &&
            chatbotPopup.classList.contains('active')) {
            chatbotPopup.classList.remove('active');
        }
    });
});

// Page load animation
document.addEventListener('DOMContentLoaded', () => {
    // Remove preloader after page loads
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Add animation classes to elements as they appear in viewport
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .footer-section');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Resize animation
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});
