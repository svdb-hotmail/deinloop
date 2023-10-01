// Dark and Light Mode Detection and Implementation
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const body = document.getElementById("body");
const html = document.getElementById("html");

if (prefersDarkScheme.matches) {
    body.classList.add("bg-black", "text-white");
    html.querySelectorAll(".title-color").forEach(el => {
        el.classList.replace("title-color", "text-orange-500");
    });
}

// Language Selection Button Logic
const langButton = document.getElementById("langButton");

const enText = {
    title: "Your Support, Their Future",
    subtitle: "Social Walk-In Center ‘DE INLOOP’ in Sint-Niklaas",
    // ... More content
};

const nlText = {
    title: "Jouw Steun, Hun Toekomst",
    subtitle: "Sociaal inloopcentrum 'DE INLOOP' in Sint-Niklaas",
    // ... More content
};

let currentLang = "en";

langButton.addEventListener("click", () => {
    if (currentLang === "en") {
        currentLang = "nl";
        langButton.textContent = "Nederlands";
    } else {
        currentLang = "en";
        langButton.textContent = "English";
    }

    Object.keys(enText).forEach(key => {
        const el = document.querySelector(`[data-lang="${key}"]`);
        el.textContent = currentLang === "en" ? enText[key] : nlText[key];
    });
});
