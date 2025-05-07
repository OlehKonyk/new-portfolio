document.addEventListener("DOMContentLoaded", function () {

    const langToggleBtn = document.getElementById("language-switch");

    let currentLang = localStorage.getItem("lang") || "en";

    const translations = {
        "manu-link-home": {
            en: "Home",
            uk: "Домашня"
        },
        "manu-link-projects": {
            en: "Projects",
            uk: "Проекти"
        },
        "manu-link-info": {
            en:"About Me",
            uk:"Про мене"
        },
        "manu-link-contact": {
            en:"Contact",
            uk:"Контакти"
        },
        "language-switch": {
            en: "UA",
            uk: "ENG"
        },
        "my-name": {
            en: "Oleh Konyk",
            uk: "Олег Коник"
        },
        "my-prof": {
            en: "Frontend developer",
            uk: "Фронтенд розробник"
        },
        "projects-tittle": {
            en: "My projects",
            uk: "Мої роботи"
        },
        "gus-tittle": {
            en: "Banderogus",
            uk: "Бандерогусь"
        },
        "gus-description": {
            en: "A small website taken from the GO IT marathon, to which I made stylistic changes and adjusted the form's functionality",
            uk: "Невеликий вебсайт, створений на марафоні GO IT, до якого я вніс стилістичні зміни та налаштував функціональність форми"
        },
        "burger-description": {
            en: "Small animated food delivery website",
            uk: "Невеликий анімований сайт доставки їжі"
        },
        "burger-tittle": {
            en: "BestBurger",
            uk: "BestBurger"
        },
        "info-tittle": {
            en: "Info",
            uk: "Про мене"
        },
        "about-me-tittle": {
            en: "Who am I?",
            uk: "Хто я?"
        },
        "about-me-descriptoin": {
            en: "I'm quietly confident, naturally curious, and perpetually working young developer. Wish to begin my journey in a new, but at the same time interesting profession.",
            uk: "Я спокійно впевнений, природно допитливий і невпинно працюючий молодий розробник. Бажаю розпочати свій шлях у новій, але водночас цікавій професії."
        },
        "cv-btn": {
            en: "Download CV",
            uk: "Завантажити CV"
        },
        "skills-tittle":{
            en: "Skills",
            uk: "Навички"
        },
        "form-tittle": {
            en: "Contact me",
            uk: "Звязатись зі мною"
        },
        "form-btn": {
            en: "Send Message",
            uk: "Надіслати повідомлення"
        }
    };

    function updateText() {
        for (let id in translations) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = translations[id][currentLang];
            }
        }
    }

    langToggleBtn.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "uk" : "en";
        localStorage.setItem("lang", currentLang);
        updateText();
    });

    updateText(); 
});
