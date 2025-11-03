<template>
  <div class="home" ref="home">
    <MainPart />
    <About />
    <Prices />
    <Availability :dates="dates" />
    <div class="home__gradient">
      <Location />
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

import { useUsers } from "@/store/users.js";

import MainPart from "@/components/Home/MainPart.vue";
import About from "@/components/Home/About.vue";
import Prices from "@/components/Home/Prices.vue";
import Availability from "@/components/Availability.vue";
import Location from "@/components/Home/Location.vue";

import AppFooter from "@/components/Base/Footer.vue";

const usersStore = useUsers();

import { onMounted } from "vue";

const dates = ref(null);
// const home = ref(null)

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