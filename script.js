// Passe diese vier Adressen an, sobald du die Links zu deinen Profilen hast.
// Leer lassen, wenn der jeweilige Link noch nicht bekannt ist.
const SOCIAL_LINKS = {
  youtube: "",
  instagram: "",
  ok: "",
  facebook: ""
};

const translations = {
  de: {
    brand: "Rezepte von Lyana",
    tagline: "Mit Liebe gekocht",
    navHome: "Startseite",
    navFirst: "Erste Gerichte",
    navMain: "Hauptgerichte",
    navSalads: "Salate",
    navBaking: "Gebäck",
    navAbout: "Über mich",
    welcome: "Willkommen in meiner Küche",
    heroTitle: "Rezepte von Lyana",
    heroText: "Lieblingsgerichte, gesammelt an einem Ort.",
    browse: "Kategorien ansehen",
    collection: "Die Rezeptsammlung",
    categoriesTitle: "Was möchten wir kochen?",
    categoriesIntro: "Wähle einen Bereich. Neue Rezepte kommen später dazu.",
    comingSoon: "Rezepte folgen",
    note: "Hier entsteht Lyana’s persönliche Rezeptsammlung.",
    aboutEyebrow: "Die Gastgeberin",
    aboutTitle: "Über mich",
    aboutText: "Hier erzählt Lyana ihre Geschichte und stellt sich als Gastgeberin dieser Website vor.",
    aboutHint: "Foto und persönliche Geschichte werden hier ergänzt.",
    photoPlaceholder: "Foto von Lyana"
  },
  ru: {
    brand: "Рецепты от Ляны!",
    tagline: "Готовим с любовью",
    navHome: "Главная",
    navFirst: "Первые блюда",
    navMain: "Вторые блюда",
    navSalads: "Салаты",
    navBaking: "Выпечка",
    navAbout: "Обо мне",
    welcome: "Добро пожаловать на мою кухню",
    heroTitle: "Рецепты от Ляны!",
    heroText: "Любимые блюда — в одном месте.",
    browse: "Смотреть разделы",
    collection: "Коллекция рецептов",
    categoriesTitle: "Что будем готовить?",
    categoriesIntro: "Выберите раздел. Рецепты появятся здесь позже.",
    comingSoon: "Рецепты скоро появятся",
    note: "Здесь собирается личная коллекция рецептов Ляны.",
    aboutEyebrow: "Хозяйка сайта",
    aboutTitle: "Обо мне",
    aboutText: "Здесь Ляна расскажет свою историю и представится как хозяйка этого сайта.",
    aboutHint: "Здесь появятся фотография и личная история.",
    photoPlaceholder: "Фотография Ляны"
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.de;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    const selected = button.dataset.language === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  try {
    localStorage.setItem("lyana-site-language", language);
  } catch {
    // Die Seite funktioniert auch, wenn der Browser localStorage blockiert.
  }
}

function addSocialLinks() {
  document.querySelectorAll("[data-social]").forEach((link) => {
    const url = SOCIAL_LINKS[link.dataset.social]?.trim();
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
      link.addEventListener("click", (event) => {
        if (link.href === "#") event.preventDefault();
      });
    } else {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let savedLanguage = "de";
try {
  savedLanguage = localStorage.getItem("lyana-site-language") || "de";
} catch {
  // Standardsprache bleibt Deutsch.
}
setLanguage(savedLanguage);
addSocialLinks();
