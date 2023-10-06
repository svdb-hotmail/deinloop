// Detect user's preferred theme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (userPrefersDark) {
    document.getElementById('html').classList.add('dark');
    document.getElementById('body').classList.add('dark');
}



// Function to change language
function changeLanguage(lang) {
    const textElements = document.querySelectorAll('[data-lang]');
    textElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

