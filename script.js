// Typed.js typing effect
document.addEventListener('DOMContentLoaded', function () {
  if (window.Typed) {
    new Typed('#typed', {
      strings: [
        'B.Tech Student at NIAT',
        'Web Developer',
        'AI/ML Learner',
        'Video Editor',
        'Gamer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });
  }

  // Init AOS (scroll animations)
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true
    });
  }
});
