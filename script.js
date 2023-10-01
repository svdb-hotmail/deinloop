document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const langBtn = document.getElementById('langBtn');
  const title = document.getElementById('title');
  const welcome = document.getElementById('welcome');
  const copyright = document.getElementById('copyright');
  const privacy = document.getElementById('privacy');

  // Detect user's preferred theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    app.classList.add('dark-theme');
  }

  // Language switcher
  let lang = 'en';
  const translations = {
    en: {
      title: 'DE INLOOP',
      welcome: 'Welcome to DE INLOOP in Sint-Niklaas.',
      copyright: 'Copyright © De Inloop',
      privacy: 'Privacy Policy'
    },
    nl: {
      title: 'DE INLOOP',
      welcome: 'Welkom bij DE INLOOP in Sint-Niklaas.',
      copyright: 'Auteursrecht © De Inloop',
      privacy: 'Privacybeleid'
    }
  };

  langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'nl' : 'en';
    title.textContent = translations[lang].title;
    welcome.textContent = translations[lang].welcome;
    copyright.textContent = translations[lang].copyright;
    privacy.textContent = translations[lang].privacy;
  });
});
