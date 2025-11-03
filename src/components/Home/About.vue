<template>
  <div class="about">
    <tabs @update="activeFloor = $event"/>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Tabs from "@/components/Base/Tabs.vue";

const activeFloor = ref(1)
</script>

<style lang="scss" scoped>
.about {
  // background: $background-color;
  padding: $padding;
}
</style>