// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle) {
      menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          document.querySelectorAll('.bar').forEach(bar => {
              bar.classList.toggle('active');
          });
      });
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              document.querySelectorAll('.bar').forEach(bar => {
                  bar.classList.remove('active');
              });
          }
      });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.style.padding = '15px 20px';
          navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      } else {
          navbar.style.padding = '20px';
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach(testimonial => {
          testimonial.classList.remove('active');
      });
      dots.forEach(dot => {
          dot.classList.remove('active');
      });

      testimonials[index].classList.add('active');
      dots[index].classList.add('active');
  }

  if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', function() {
          currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
          showTestimonial(currentIndex);
      });

      nextBtn.addEventListener('click', function() {
          currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
          showTestimonial(currentIndex);
      });
  }

  // Dot navigation
  dots.forEach(dot => {
      dot.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          currentIndex = index;
          showTestimonial(currentIndex);
      });
  });

  // Auto-rotate testimonials
  setInterval(function() {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
  }, 5000);

  // Scroll Animation
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('[data-aos]');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.classList.add('animated');
              
              // Add delay if specified
              const delay = element.getAttribute('data-aos-delay');
              if (delay) {
                  element.style.animationDelay = `${delay}ms`;
              }
          }
      });
  };

  // Add animated class to elements in viewport on load
  animateOnScroll();
  
  // Add animated class to elements when they enter viewport on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Add CSS for the animation
  const style = document.createElement('style');
  style.textContent = `
      [data-aos] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      [data-aos].animated {
          opacity: 1;
          transform: translateY(0);
      }
  `;
  document.head.appendChild(style);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Add hover effect to product cards
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px)';
          this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = '';
          this.style.boxShadow = '';
      });
  });

  // Add parallax effect to hero section
  const hero = document.querySelector('.hero');
  window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (hero) {
          hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
  });

  
});

const imageElement = document.getElementById('carousel-image');
    const images = [
      'images/12.jpeg',
      'images/13.jpeg',
      'images/14.jpeg',
      'images/15.jpeg',
      'images/16.jpeg',
      'images/17.jpeg'
    ];

    let currentIndex = 0;

    setInterval(() => {
      imageElement.style.opacity = 0.8; // Geçiş için önce opaklığı düşür

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 0.9; // Sonra tekrar görünür yap
      }, 500); // Geçiş süresiyle uyumlu (CSS'de 0.8s, burada yarısını kullandık)
    }, 1500);