
<template>
  <div class="location">
    <h2 class="app-heading">
      {{ $t("location_header") }}
    </h2>
    <p class="app-subheading">
      {{ $t("location_text") }}
    </p>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1096.846910843435!2d30.5229549027019!3d50.397976807880056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf00301df9af%3A0xef81a7b96464c861!2sBuyflowers!5e0!3m2!1sru!2sua!4v1761686616684!5m2!1sru!2sua"
      class="location__map"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: 50.397965, lng: 30.523857 };
</script>

<style lang="scss" scoped>
.location {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__map {
    width: 80%;
    height: 500px;
    border: none;
    border-radius: $border-radius;
  }
}
</style>