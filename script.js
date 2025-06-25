     // Menu toggle functionality
        const hamburger = document.getElementById('hamburger');
        const sideMenu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');
        const menuItems = document.querySelectorAll('.menu-item[data-section]');
        const sections = document.querySelectorAll('.section');
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;

        // Toggle menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            sideMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Menu navigation
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const targetSection = item.getAttribute('data-section');
                
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show target section
                document.getElementById(targetSection).classList.add('active');
                
                // Close menu
                hamburger.classList.remove('active');
                sideMenu.classList.remove('active');
                overlay.classList.remove('active');
            });
        });

        // Theme toggle
        themeToggle.addEventListener('click', () => {
            themeToggle.classList.toggle('active');
            body.classList.toggle('light-mode');
        });

        // Close menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                sideMenu.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Add touch feedback for mobile
        const cards = document.querySelectorAll('.pricing-card, .feature-card');
        cards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', () => {
                card.style.transform = '';
            });
        });

        // Smooth scroll effect for better UX
        document.addEventListener('DOMContentLoaded', () => {
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

            // Observe feature cards for animation
            document.querySelectorAll('.feature-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
