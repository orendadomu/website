<template>
  <div class="main">
    <video
      class="main__video--blur"
      :src="`/video/hero.MP4`"
      autoplay
      muted
      loop
      playsinline
    />

    <video
      class="main__video"
      :src="`/video/hero.MP4`"
      autoplay
      muted
      loop
      playsinline
    />

    <div class="main__wrapper">
      <h1 class="main__heading">
        <span> Chill house </span>
        <br />
        {{ $t("main_heading") }}
      </h1>

      <button
        type="button"
        class="main__more"
        @click="navigateTo('availability__line')"
      >
        {{ $t("see_dates") }}
        <ArrowDown class="main__more-icon" />
      </button>

      <div class="main__social">
        <a
          class="main__social-link"
          href="https://instagram.com/chill.kyiv/"
          target="_blank"
        >
          <img src="/img/inst.svg" style="width: 26px" />
        </a>

        <a
          class="main__social-link"
          href="https://t.me/ChillHouseKyiv"
          target="_blank"
        >
          <img src="/img/tg.svg" style="width: 30px" />
        </a>

        <a class="main__social-link" href="tel:+380777987777">
          <img src="/img/phone.svg" style="width: 28px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "@/components/Icons/ArrowDown.vue";
const navigateTo = (link) => {
  document
    .querySelector(`.${link}`)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};
</script>

<style lang="scss">
// $font-border-color: rgba(136, 80, 233, 0.75);
$font-border-color: rgba(13, 13, 13, 0.75);

.main {
  overflow: hidden;
  // height: 70vh;
  height: 100vh;
  padding: 20px;
  position: relative;
  background-size: cover;
  //   background-position: center;
  background-repeat: no-repeat;
  // background-image: url("/img/bg.jpg");
  background-image: url("/11.MP4");
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;

  &::before {
    content: "";
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 0.1) 100%
    );
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  // @media screen and (min-width: 1200px) {
  //   height: 100vh;
  // }

  &__social {
    display: flex;
    align-items: center;

    &-link {
      transition: all 0.1s;
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      border: 1px solid $border-color;

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &__video {
    position: absolute;
    left: 75%;
    transform: translateX(-50%);
    width: auto;
    height: 100%;
    object-fit: contain;

    @media screen and (max-width: 1024px) {
      left: 0;
      transform: initial;
    }

    @media screen and (min-width: 481px) {
      width: 100%;
    }

    &--blur {
      filter: blur(30px) brightness(0.6);
      transform: scale(1.15);
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      @media screen and (max-width: 480px) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    // height: 100vh;
    background-position-x: center;
    align-items: center;
    text-align: center;
  }

  &__wrapper {
    // text-align: center;
    z-index: 1;
    // width: 72%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    width: 50%;
    padding: 40px;

    @media screen and (max-width: 1024px) {
      width: 100%;
      // padding: 0;
      align-items: center;
    }

    @media screen and (max-width: 480px) {
      width: auto;
      padding: 0;
    }
  }

  &__heading {
    // font-size: 52px;
    font-size: 44px;
    text-shadow: 0 2px 24px rgba(0, 0, 0, 0.6);

    @media screen and (max-width: 480px) {
      font-size: 40px;
    }

    @media screen and (max-width: 400px) {
      font-size: 36px;
    }

    span {
      // font-size: 72px;
      // text-shadow: -9px 0 $font-border-color, 0 2px $font-border-color,
      //   2px 0 $font-border-color, 0 -2px $font-border-color;
      font-size: 80px;

      // text-shadow: -9px 0 $font-border-color, 0 2px $font-border-color,
      //   2px 0 $font-border-color, 0 -2px $font-border-color;

      @media screen and (max-width: 1200px) {
        font-size: 72px;
      }

      @media screen and (max-width: 480px) {
        font-size: 64px;
      }

      @media screen and (max-width: 400px) {
        font-size: 58px;
      }

      @media screen and (max-width: 360px) {
        font-size: 56px;
      }
    }
  }

  &__more {
    border: 1px solid $border-color;
    border-radius: $button-border-radius;
    padding: $button-padding;
    // margin-right: 16px;
    display: flex;
    align-items: center;
    // justify-content: center;
    margin-top: $margin-big;
    /* background: none; */
    // margin-top: 24px;
    margin: 24px 0;
    height: 46px;
    // width: 212px;
    width: fit-content;
    /* color: white; */
    font-size: 16px;
    transition: all 0.1s;
    cursor: pointer;
    color: black;

    &:hover {
      background: none;
      color: white;
    }

    &-icon {
      width: 16px;
      height: 16px;
      // margin-left: 8px;
      margin-left: 20px;
      position: relative;
      transition: all 0.1s;

      .fill-part {
        fill: black;
      }
    }

    &:hover &-icon .fill-part {
      fill: white;
    }
  }
}
</style>
    
