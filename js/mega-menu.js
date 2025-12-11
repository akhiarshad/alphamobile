document.addEventListener('DOMContentLoaded', function() {
    // Mega dropdown functionality
    const megaDropdownTrigger = document.querySelector('.mega-dropdown-trigger');
    const megaDropdownMenu = document.querySelector('.mega-dropdown-menu');
    
    if (megaDropdownTrigger && megaDropdownMenu) {
        // Show/hide on hover for desktop
        megaDropdownTrigger.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) { // Desktop only
                megaDropdownMenu.style.display = 'block';
            }
        });

        megaDropdownTrigger.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) { // Desktop only
                megaDropdownMenu.style.display = 'none';
            }
        });

        // Toggle on click for mobile
        megaDropdownTrigger.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) { // Mobile only
                e.preventDefault();
                const isOpen = megaDropdownMenu.style.display === 'block';
                megaDropdownMenu.style.display = isOpen ? 'none' : 'block';
            }
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!megaDropdownTrigger.contains(e.target) && !megaDropdownMenu.contains(e.target)) {
                megaDropdownMenu.style.display = 'none';
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 992) {
                megaDropdownMenu.style.display = 'none';
            }
        });
    }

    // Make mega menu items clickable
    const megaMenuLinks = document.querySelectorAll('.mega-menu-link');
    megaMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's a mobile device, close the menu after clicking
            if (window.innerWidth <= 992) {
                megaDropdownMenu.style.display = 'none';
            }
            // The link's default behavior will handle the navigation
        });
    });
});
