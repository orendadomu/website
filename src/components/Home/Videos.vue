<template>
  <div class="videos">
    <div class="videos__modal" v-if="isModal" @click="clickOverlay">
      <button class="videos__modal-close">
        <img src="/img/close.svg" />
      </button>
      <div class="videos__modal-inner">
        <Carousel v-bind="carouselConfigModal" v-model="activeSlide">
          <Slide v-for="slide1 in 9" :key="slide1">
            <div class="carousel__item">
              <video controls class="videos__item" :id="`slide-${slide1}`">
                <source :src="`/video/${slide1}.mov`" type="video/mp4" />
              </video>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>

    <div class="videos__preview">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="slide in 9" :key="slide">
          <div class="carousel__item">
            <div class="videos__preview-item" @click="openModal(slide)">
              <button class="videos__preview-button">
                <img src="/img/play.svg" />
              </button>
              <img
                :src="`/video/previews/${slide}.jpg`"
                class="videos__preview-image"
              />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 1.5,
  wrapAround: true,
  gap: 20,
  breakpoints: {
    481: {
      itemsToShow: 2.5,
      snapAlign: "center",
    },
    700: {
      itemsToShow: 3.5,
      snapAlign: "center",
    },
    1024: {
      itemsToShow: 4,
      snapAlign: "start",
    },
    1200: {
      itemsToShow: 4.5,
      snapAlign: "start",
    },
  },
};

const carouselConfigModal = {
  itemsToShow: 1,
  wrapAround: true,
};

const isModal = ref(false);
const activeSlide = ref(null);

const openModal = (value) => {
  isModal.value = true;
  activeSlide.value = value - 1;

  document.body.style.overflow = "hidden";
};

const clickOverlay = (el) => {
  let target = el.target;
  if (target.nodeName === "path") return;
  if (target.nodeName === "svg") return;
  if (target.nodeName === "VIDEO") return;

  isModal.value = false;
  activeSlide.value = null;
  document.body.style.overflow = "";
};

const updateVideo = (val, prev) => {
  // console.log("activeslide", val, prev);
  const activeVideo = document.getElementById(`slide-${val + 1}`);
  const prevVideo = document.getElementById(`slide-${prev + 1}`);

  // console.log("active video ", activeVideo);
  // console.log("prev video ", prevVideo);

  if (activeVideo && val != 8) {
    activeVideo.play();
  } else {
    setTimeout(() => {
      document.getElementById(`slide-${val + 1}`)?.play();
    });
  }

  if (prevVideo) prevVideo.pause();
};

watch(() => activeSlide.value, updateVideo);

const content = ref([
  "cinema",
  "garage",
  "gameroom_1",
  "gameroom_2",
  "bathroom_1",
]);
</script>

<style lang="scss">
.videos {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: $padding_mobile;
  }

  &__modal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;

    &-inner {
      width: 80%;
      // margin-top: 90px;

      @media screen and (max-width: 480px) {
        width: 90%;
        margin-top: 0;
      }
    }

    &-close {
      position: absolute;
      top: 40px;
      right: 40px;
      background: none;
      border: none;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.1s;
      z-index: 5;

      &:hover {
        opacity: 0.5;
      }

      img {
        width: 100%;
      }
    }
  }

  &__item {
    width: 100%;
    cursor: pointer;
    height: 87vh;
    // height: 600px;
    // border-radius: $border-radius;

    @media screen and (max-width: 768px) {
      padding: $padding_mobile;
    }
  }

  &__preview {
    &-item {
      position: relative;
      cursor: pointer;
    }

    &-image {
      width: 100%;
      border-radius: $border-radius;
    }

    &-button {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      padding: 8px 16px;
      padding-left: 20px;
      width: 46px;
      height: 46px;
      border: none;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      transition: 0.1s;

      &:hover {
        opacity: 0.8;
      }

      img {
        width: 28px;
      }
    }
  }

  //   &__view {
  //     width: 80%;
  //     height: 500px;
  //     border-radius: $border-radius;

  //     @media screen and (max-width: 1024px) {
  //       height: 400px;
  //     }

  //     @media screen and (max-width: 480px) {
  //       width: 100%;
  //     }
  //   }
}
</style>