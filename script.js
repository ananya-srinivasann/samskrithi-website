document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Keep hamburger active state for animation
        });

        // Close menu when a navigation link is clicked (useful for single-page sites)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only close if it's currently in mobile view (important for desktop navigation)
                if (window.innerWidth < 768) { // Matches your media query breakpoint
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (event) => {
            // Check if the click target is NOT the hamburger and NOT inside the navLinks menu
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                // If the menu is currently active, close it
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active'); // Also reset hamburger state
                }
            }
        });

        // Optional: Close menu on escape key press
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });

        // Optional: Close menu if window is resized above mobile breakpoint
        // This handles cases where user opens menu on mobile, then resizes to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

    } else {
        console.error("Hamburger or navLinks element not found!");
    }
});
