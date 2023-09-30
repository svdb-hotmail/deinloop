document.addEventListener('DOMContentLoaded', function () {
  const langSwitch = document.getElementById('language-switch');
  let isEnglish = true;
  
  const enText = {
    'main-title': 'Your Support, Their Future',
    'sub-title': 'Social Walk-In Center ‘DE INLOOP’ in Sint-Niklaas',
    // ...rest of English content
  };

  const nlText = {
    'main-title': 'Jouw Steun, Hun Toekomst',
    'sub-title': 'Sociaal Inloopcentrum ‘DE INLOOP’ in Sint-Niklaas',
    // ...rest of Dutch content
  };

  langSwitch.addEventListener('click', () => {
    isEnglish = !isEnglish;
    langSwitch.textContent = isEnglish ? 'EN' : 'NL';

    const contentToUse = isEnglish ? enText : nlText;
    
    for (const [key, value] of Object.entries(contentToUse)) {
      document.getElementById(key).textContent = value;
    }
  });
});
