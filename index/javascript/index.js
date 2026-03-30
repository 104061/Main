document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Hero Slideshow
    initSlideshow();
});

function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    const indicators = document.querySelectorAll('.slide-indicators .indicator');

    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval = null;
    const intervalTime = 5000; // 5 seconden per slide

    function showSlide(index) {
        // Bereken correcte index
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        currentSlide = index;

        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'zoom-out');
            if (i === currentSlide) {
                slide.classList.add('active');
                // Start zoom na kleine delay
                setTimeout(() => {
                    slide.classList.add('zoom-out');
                }, 50);
            }
        });

        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startAutoPlay() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    // Initialiseer eerste slide
    showSlide(0);

    // Start autoplay
    startAutoPlay();

    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            startAutoPlay(); // Reset timer na klik
        });
    });

    // Pauzeer bij hover (optioneel - uitgeschakeld voor betere UX)
    // const hero = document.querySelector('.hero');
    // if (hero) {
    //     hero.addEventListener('mouseenter', stopAutoPlay);
    //     hero.addEventListener('mouseleave', startAutoPlay);
    // }
}

// Quiz pagina's voor random selectie
const quizPaginas = [
    'pages/sportenbeweging_info.html',
    'pages/quiz1.html',
    'pages/slaap_info.html'
];

function RandomQuiz() {
    const randomIndex = Math.floor(Math.random() * quizPaginas.length);
    window.location.href = quizPaginas[randomIndex];
}
