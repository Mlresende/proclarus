/* =========================
   HEADER BLUR
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});

/* =========================
   DARK MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark =
    document.body.classList.contains("dark-mode");

    themeBtn.textContent =
    isDark ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});

/* =========================
   LANGUAGE
========================= */

const languageBtn =
document.getElementById("languageBtn");

const translations = {

    pt: {

        navServices:"Serviços",
        navExpertise:"Expertise",
        navAbout:"Sobre",
        navContact:"Contato",

        heroTitle:
        "Clareza para seus dados.<br>Confiança para suas decisões.",

        heroDescription:
        "Transformamos dados em ativos estratégicos através de engenharia, analytics, cloud e automação.",

        heroButtonPrimary:
        "Falar com Especialista",

        heroButtonSecondary:
        "Explorar Soluções",

        statementTitle:
        "Dados não geram valor.<br>Decisões geram.",

        statementDescription:
        "A Proclarus conecta engenharia, analytics e governança para transformar informação em vantagem competitiva.",

        service1Title:
        "Engenharia de Dados",

        service1Description:
        "Construção de pipelines escaláveis, Data Lakes, Data Warehouses e arquiteturas modernas.",

        service2Title:
        "Analytics & BI",

        service2Description:
        "Dashboards executivos, KPIs e visualizações estratégicas.",

        service3Title:
        "Automação Inteligente",

        service3Description:
        "Integrações, APIs e automação de processos.",

        aboutTitle:
        "Clarity Through Data",

        aboutDescription:
        "Transformamos complexidade em clareza através de tecnologia e dados.",

        ctaTitle:
        "Transforme seus dados em vantagem competitiva.",

        ctaButton:
        "Agendar Conversa",

        contactTitle:
        "Vamos conversar.",

        contactDescription:
        "Conte seu desafio e descubra como podemos ajudar."
    },

    en: {

        navServices:"Services",
        navExpertise:"Expertise",
        navAbout:"About",
        navContact:"Contact",

        heroTitle:
        "Clarity for your data.<br>Confidence for your decisions.",

        heroDescription:
        "We transform data into strategic assets through engineering, analytics, cloud and automation.",

        heroButtonPrimary:
        "Talk to an Expert",

        heroButtonSecondary:
        "Explore Solutions",

        statementTitle:
        "Data does not create value.<br>Decisions do.",

        statementDescription:
        "Proclarus connects engineering, analytics and governance to turn information into competitive advantage.",

        service1Title:
        "Data Engineering",

        service1Description:
        "Scalable pipelines, Data Lakes, Data Warehouses and modern architectures.",

        service2Title:
        "Analytics & BI",

        service2Description:
        "Executive dashboards, KPIs and strategic visualizations.",

        service3Title:
        "Intelligent Automation",

        service3Description:
        "Integrations, APIs and process automation.",

        aboutTitle:
        "Clarity Through Data",

        aboutDescription:
        "We transform complexity into clarity through technology and data.",

        ctaTitle:
        "Turn your data into a competitive advantage.",

        ctaButton:
        "Schedule a Meeting",

        contactTitle:
        "Let's talk.",

        contactDescription:
        "Tell us about your challenge and discover how we can help."
    }
};

let currentLang =
localStorage.getItem("language") || "pt";

function updateLanguage(lang){

    document
    .querySelectorAll("[data-translate]")
    .forEach(element => {

        const key =
        element.dataset.translate;

        if(translations[lang][key]){
            element.innerHTML =
            translations[lang][key];
        }

    });

    languageBtn.textContent =
    lang === "pt" ? "EN" : "PT";

    localStorage.setItem(
        "language",
        lang
    );
}

updateLanguage(currentLang);

languageBtn.addEventListener("click", () => {

    currentLang =
    currentLang === "pt"
    ? "en"
    : "pt";

    updateLanguage(currentLang);

});

/* =========================
   REVEAL ANIMATION
========================= */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity:0,
                    transform:'translateY(40px)'
                },
                {
                    opacity:1,
                    transform:'translateY(0)'
                }
            ],{
                duration:700,
                fill:'forwards'
            });

            observer.unobserve(entry.target);
        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
    ".service-block,.statement,.about,.contact,.cta"
).forEach(el => {

    el.style.opacity = 0;
    observer.observe(el);

});