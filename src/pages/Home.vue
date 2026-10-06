<template>
  <div class="home" ref="home">
    <MainPart />
    <About />
    <Prices />
    <Availability :dates="dates" />
    <VideoView />
    <Videos />
    <Location />
    <BlogPreview v-if="locale === 'uk'" />
    <div class="home__gradient">
      <Faq />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

import { useUsers } from "@/store/users.js";

import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import { SITE, LOCALES, DEFAULT_LOCALE } from "@/i18n/locales.js";

import MainPart from "@/components/Home/MainPart.vue";
import About from "@/components/Home/About.vue";
import Prices from "@/components/Home/Prices.vue";
import Availability from "@/components/Availability.vue";
import Location from "@/components/Home/Location.vue";
import Faq from "@/components/Home/Faq.vue";
import VideoView from "@/components/Home/VideoView.vue";
import Videos from "@/components/Home/Videos.vue";
import BlogPreview from "@/components/Home/BlogPreview.vue";

import AppFooter from "@/components/Base/Footer.vue";

const usersStore = useUsers();

import { onMounted } from "vue";

const route = useRoute();
const locale = computed(() => route.meta.locale || DEFAULT_LOCALE);

const dates = ref(null);
// const home = ref(null)

useHead(
  computed(() => {
    const seo = LOCALES[locale.value];
    const url = `${SITE}${seo.path}`;

    return {
      title: seo.title,
      titleTemplate: "%s", // без суфікса з App.vue
      meta: [
        { name: "description", content: seo.description },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: seo.ogLocale },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: url },
      ],
      link: [
        { rel: "canonical", href: url },
        ...Object.entries(LOCALES).map(([code, { path }]) => ({
          rel: "alternate",
          hreflang: code,
          href: `${SITE}${path}`,
          key: `hreflang-${code}`,
        })),
        {
          rel: "alternate",
          hreflang: "x-default",
          href: `${SITE}/`,
          key: "hreflang-x-default",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          key: "lodging-business",
          innerHTML: JSON.stringify({
            // ← ваш объект LodgingBusiness из App.vue, с двумя заменами:
            //   url: url,
            //   description: seo.description,
          }),
        },
      ],
    };
  })
);

onMounted(async () => {
  // await usersStore.testData({});
  const res = await usersStore.getCalendarEvents({});
  dates.value = res.data;

  // setTimeout(async() => {
  //   const res = await usersStore.getCalendarEvents({});
  //   dates.value = res.data
  // }, 1000)
});
</script>

<style lang="scss">
.home {
  overflow: hidden;

  &__gradient {
    background: linear-gradient(
      to bottom,
      $background-color 66%,
      $active-color 100%
    );
  }
}
</style>