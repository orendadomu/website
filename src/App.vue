
<template>
  <div id="app" class="app">
    <app-header />

    <router-view />

    <!-- <div class="app__inner"> -->
    <!-- <h1>{{ $t('message') }}</h1> -->
    <!-- <div v-if="baseStore.loading">Loading</div> -->
    <!-- <router-view /> -->
    <!-- v-if="!loading" -->
    <!-- </div> -->

    <!-- <app-footer /> -->

    <!-- <ModalsContainer /> -->
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";

import AppHeader from "@/components/Base/Header.vue";
// import AppFooter from "@/components/Base/Footer.vue";

import { useRoute, useRouter } from "vue-router";
import { useBase } from "@/store/base.js";
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
</script>
