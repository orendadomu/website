<template>
  <div class="about">
    <div class="about__line app-line"></div>
    <tabs @update="activeFloor = $event" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import Tabs from "@/components/Base/Tabs.vue";

const activeFloor = ref(1);
</script>

<style lang="scss" scoped>
.about {
  // background: $background-color;
  padding: $padding;
  padding-bottom: 0;

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }
}
</style>