export const SITE = "https://chillhouse.kiev.ua";
export const DEFAULT_LOCALE = "uk";

export const LOCALES = {
  uk: {
    path: "/",
    ogLocale: "uk_UA",
    title: "Будинок для вечірок у Києві — подобова оренда до 30 гостей | Chill House",
    description:
      "Подобова оренда будинку для вечірок і відпочинку у центрі Києва: 5 спалень, кінотеатр, караоке, більярд, PS5 Pro. До 30 гостей. Будні від $400.",
  },
  ru: {
    path: "/ru/",
    ogLocale: "ru_UA",
    title: "Дом для вечеринок в Киеве — посуточная аренда до 30 гостей | Chill House",
    description:
      "Посуточная аренда дома для вечеринок и отдыха в центре Киева: 5 спален, кинотеатр, караоке, бильярд, PS5 Pro. До 30 гостей. Будни от $400.",
  },
  en: {
    path: "/en/",
    ogLocale: "en_US",
    title: "Party House for Rent in Kyiv — Up to 30 Guests | Chill House",
    description:
      "Daily rental of a party house in central Kyiv: 5 bedrooms, home cinema, karaoke, billiards, PS5 Pro. Up to 30 guests. Weekdays from $400.",
  },
};

export const localeCodes = Object.keys(LOCALES);
export const homePath = (locale) => (LOCALES[locale] || LOCALES[DEFAULT_LOCALE]).path;