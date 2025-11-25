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

  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      const whatsappNumber = '551632422243'; // Replace with your WhatsApp number

      const whatsappMessage = `Olá, meu nome é ${name}. Meu telefone é ${phone}. Gostaria de dizer que: ${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // Product card click to WhatsApp
  const productCards = document.querySelectorAll('.product-card');
  if (productCards.length > 0) {
    productCards.forEach(card => {
      card.addEventListener('click', () => {
        const productName = card.querySelector('h3').innerText;
        const whatsappNumber = '551632422243'; // Replace with your WhatsApp number
        const message = `Olá, gostaria de saber mais sobre o produto: ${productName}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      });
    });
  }

  // Initialize Splide carousel
  const splideList = document.querySelector('.splide__list');

  if (splideList) {
    const carouselImages = [
      'capa.png',
      'WhatsApp Image 2025-09-18 at 13.41.51.jpeg',
      'WhatsApp Image 2025-09-18 at 13.40.45.jpeg',
      'WhatsApp Image 2025-09-18 at 09.18.38.jpeg',
      'WhatsApp Image 2025-09-18 at 09.19.40.jpeg',
      'WhatsApp Image 2025-09-18 at 09.20.09.jpeg',
      'WhatsApp Image 2025-09-18 at 09.48.05.jpeg',
      'WhatsApp Image 2025-09-18 at 10.16.21.jpeg',
      'WhatsApp Image 2025-09-18 at 13.41.08.jpeg',
      'WhatsApp Image 2025-09-18 at 13.49.18.jpeg',
      'WhatsApp Image 2025-09-18 at 13.49.53.jpeg'
    ];

    carouselImages.forEach(src => {
      const li = document.createElement('li');
      li.classList.add('splide__slide');
      const img = document.createElement('img');
      img.src = encodeURI(src);
      img.alt = '';
      li.appendChild(img);
      splideList.appendChild(li);
    });

    const splide = new Splide( '.splide', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    } );

    splide.mount( window.splide.Extensions );
  }
});
