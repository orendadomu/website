
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
import { useHead } from "@unhead/vue";
import { ModalsContainer } from "vue-final-modal";
import "vue-final-modal/style.css";

import AppHeader from "./components/Base/Header.vue";
import AppFooter from "./components/Base/Footer.vue";

useHead({
  htmlAttrs: { lang: "uk" },
  titleTemplate: (title) =>
    title
      ? `${title} | Chill House Київ`
      : "Chill House — будинок для вечірок у Києві",
  meta: [
    { property: "og:site_name", content: "Chill House Kyiv" },
    { property: "og:image", content: "https://chillhouse.kiev.ua/preview.jpg" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
</script>


<!--
<script setup>
// import { ref, onMounted } from "vue";

import AppHeader from "./components/Base/Header.vue";
// import AppFooter from "@/components/Base/Footer.vue";

import { useRoute, useRouter } from "vue-router";
import { useBase } from "./store/base.js";
import { ModalsContainer } from "vue-final-modal";
import "vue-final-modal/style.css";

const route = useRoute();
const router = useRouter();

const baseStore = useBase();

// const loading = ref(token.value ? true : false);

// onMounted(() => {
//   //   if (token.value) {
//   //     await authStore.getMe();
//   //     // setTimeout(() => {
//   //     //   loading.value = false;
//   //     // }, 1000);
//   //   }
// });
</script> -->
