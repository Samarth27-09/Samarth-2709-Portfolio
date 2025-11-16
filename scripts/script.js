document.addEventListener('DOMContentLoaded', () => {
  const typedElement = document.getElementById('hero-typed-text');
  const phrases = [
    'I speed up your <>',
    "I improve your product's <>",
    'I make your <painpoint> Better',
    'I ensure your <painpoint> has a <solution>',
  ];

  if (window.startCipherAnimation && typedElement) {
    window.startCipherAnimation(typedElement, phrases, {
      typingSpeed: 100,
      deletingSpeed: 60,
      pauseAtEnd: 1500,
      pauseAtStart: 400,
    });
  }

  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = storedTheme === 'dark';

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      htmlEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  };

  applyTheme(prefersDark ? 'dark' : 'light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
