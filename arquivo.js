document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation
  const headerToggle = document.querySelector('.header__toggle');
  const headerNav = document.querySelector('.header__nav');

  if (headerToggle && headerNav) {
    headerToggle.addEventListener('click', () => {
      headerNav.classList.toggle('active');
    });
  }

  // Smooth scrolling for anchor links
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

  // Carousel functionality
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  if (carouselContainer && carouselItems.length > 0) {
    let currentIndex = 0;

    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  }
});
