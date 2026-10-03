<template>
  <div class="not-found">
    <h1 class="app-heading">Сторінку не знайдено</h1>
    <p class="app-subheading">Можливо, її перенесли або адресу введено з помилкою.</p>
    <RouterLink to="/" class="not-found__link">На головну</RouterLink>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Сторінку не знайдено",
  meta: [{ name: "robots", content: "noindex" }],
});
</script>

<style lang="scss">
.not-found {
//   min-height: 100vh;
  padding: 160px $padding_mobile 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__link {
    margin-top: 12px;
    padding: 12px 24px;
    border-radius: $button-border-radius;
    background: $background-color-light;
    color: $font-color-dark;
    text-decoration: none;
  }
}
</style>