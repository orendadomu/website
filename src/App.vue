
<template>
  <div class="app">
    <app-header />

    <main>
      <router-view />
    </main>

    <!-- <div class="app__inner"> -->
    <!-- <h1>{{ $t('message') }}</h1> -->
    <!-- <div v-if="baseStore.loading">Loading</div> -->
    <!-- <router-view /> -->
    <!-- v-if="!loading" -->
    <!-- </div> -->

    <!-- <app-footer /> -->

    <!-- 
      <ClientOnly>
        <ModalsContainer />
      </ClientOnly>
    -->
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useHead } from "@unhead/vue";
import { useI18n } from "vue-i18n";
import AppHeader from "./components/Base/Header.vue";

const { locale } = useI18n();

useHead({
  htmlAttrs: { lang: computed(() => locale.value) },
  titleTemplate: (title) =>
    title ? `${title} | Chill House Київ` : "Chill House Kyiv",
  meta: [
    { property: "og:site_name", content: "Chill House Kyiv" },
    { property: "og:image", content: "https://chillhouse.kiev.ua/preview.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>

<!--<script setup>
import { useHead } from "@unhead/vue";
// import { ModalsContainer } from "vue-final-modal";
// import "vue-final-modal/style.css";

import AppHeader from "./components/Base/Header.vue";
// import AppFooter from "./components/Base/Footer.vue";

const description =
  "Подобова оренда будинку для вечірок і відпочинку у центрі Києва: 5 спалень, кінотеатр, караоке, більярд, PS5 Pro. До 30 гостей. Будні від $400.";

useHead({
  htmlAttrs: { lang: "uk" },
  titleTemplate: (title) =>
    title
      ? `${title} | Chill House Київ`
      : "Будинок для вечірок у Києві — подобова оренда до 30 гостей | Chill House",
  meta: [
    { name: "description", content: description },
    {
      property: "og:title",
      content:
        "Будинок для вечірок у Києві — подобова оренда до 30 гостей | Chill House",
    },
    { property: "og:description", content: description },
    { property: "og:url", content: "https://chillhouse.kiev.ua/" },
    { property: "og:site_name", content: "Chill House Kyiv" },
    { property: "og:image", content: "https://chillhouse.kiev.ua/preview.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [{ rel: "canonical", href: "https://chillhouse.kiev.ua/" }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: "Chill House Kyiv",
        url: "https://chillhouse.kiev.ua/",
        image: "https://chillhouse.kiev.ua/preview.jpg",
        telephone: "+380777987777",
        priceRange: "$400–$1100",
        checkinTime: "15:00",
        checkoutTime: "11:00",
        numberOfRooms: 5,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Цимбалів Яр, 23б",
          addressLocality: "Київ",
          addressCountry: "UA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.39804719734793,
          longitude: 30.52374384047866,
        },
        sameAs: [
          "https://instagram.com/chill.kyiv/",
          "https://t.me/ChillHouseKyiv",
        ],
        amenityFeature: [
          "Кінотеатр",
          "Караоке",
          "PlayStation 5 Pro",
          "Більярд",
          "Пінг-понг",
          "Камін",
          "Гараж на 4 авто",
          "Автономне живлення: інвертор, генератор, сонячні панелі"
        ].map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
      }),
    },
  ],
});
</script> -->
