document.addEventListener('DOMContentLoaded', function() {
    // 1. Current Date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-uma' };
        const today = new Date();
        dateElement.innerText = today.toLocaleDateString('ar-SA', options);
    }

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    }

    // 3. Sticky Navbar & Scroll to Top Visibility
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (scrollToTopBtn) {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('hidden');
            } else {
                scrollToTopBtn.classList.add('hidden');
            }
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 4. Dark Mode Toggle (Simple implementation)
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('bg-gray-900');
        document.body.classList.toggle('text-white');
        const isDark = document.body.classList.contains('bg-gray-900');
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        // Update other elements if needed
        const headers = document.querySelectorAll('header, nav, main, footer');
        headers.forEach(el => {
            if (isDark) {
                if (el.classList.contains('bg-white')) el.classList.replace('bg-white', 'bg-gray-800');
                if (el.classList.contains('text-gray-800')) el.classList.replace('text-gray-800', 'text-gray-200');
            } else {
                if (el.classList.contains('bg-gray-800')) el.classList.replace('bg-gray-800', 'bg-white');
                if (el.classList.contains('text-gray-200')) el.classList.replace('text-gray-200', 'text-gray-800');
            }
        });
    });

    // 5. Image Lazy Loading
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    // In a real app, we would use data-src
                    // image.src = image.dataset.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }

    // 6. News Ticker Pause on Hover
    const ticker = document.querySelector('.ticker-content');
    if (ticker) {
        ticker.addEventListener('mouseenter', () => {
            ticker.style.animationPlayState = 'paused';
        });
        ticker.addEventListener('mouseleave', () => {
            ticker.style.animationPlayState = 'running';
        });
    }

    // 7. Simple Search Simulation
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert('جاري البحث عن: ' + searchInput.value);
            }
        });
    }
});
