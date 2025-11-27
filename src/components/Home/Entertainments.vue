<template>
  <div class="entertainments">
    <div class="entertainments__line app-line"></div>
    <h2 class="app-heading mb-max">
      {{ $t("entertainments_header") }}
    </h2>
    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
      class="entertainments__carousel"
    >
      <template #item="slotProps">
        <div class="entertainments__slide">
          <div
            class="entertainments__slide-image"
            :style="{
              backgroundImage: `url(img/photo/${slotProps.data}.jpg)`,
            }"
          ></div>

          <div class="entertainments__slide-name">
            {{ $t(`entertainments.${slotProps.data}`) }}
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Carousel from "primevue/carousel";

const products = ref([
  "basketball",
  "billiards",
  "drums",
  "ping_pong",
  "hockey",
  "table_football",
  "power_training",
  "catch_toys",
  "synthesizer",
  "mini_games",
]);

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style lang="scss" scoped>
.entertainments {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }

  &__carousel {
    width: 100%;
  }

  &__slide {
    border-radius: 4px;
    border: 1px solid rgba(136, 91, 212, 0.5);
    text-align: center;
    margin: 10px;

    &-image {
      height: 525px;
      margin: 10px 0;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    &-name {
      margin-bottom: 10px;
    }
  }

  // &__map {
  //   width: 80%;
  //   height: 500px;
  //   border: none;
  //   border-radius: $border-radius;

  //   @media screen and (max-width: 480px) {
  //     width: 100%;
  //   }
  // }
}
</style>