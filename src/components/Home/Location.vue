
<template>
  <div class="location">
    <div class="location__line app-line"></div>
    <h2 class="app-heading">
      {{ $t("location_header") }}
    </h2>
    <p class="app-subheading">
      {{ $t("location_text") }}
    </p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20223.714647186447!2d30.526986077489717!3d50.402639322584804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfe6e068f2f1%3A0x438bb83017c2c585!2zQ2hpbGwgSG91c2UgLSDQn9C-0LTQvtCx0L7QstCwINCe0YDQtdC90LTQsCDQkdGD0LTQuNC90LrRgw!5e0!3m2!1sen!2sua!4v1762357617412!5m2!1sen!2sua"
      class="location__map"
      allowfullscreen
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

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }

  &__map {
    width: 80%;
    height: 500px;
    border: none;
    border-radius: $border-radius;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
}
</style>