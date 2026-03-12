<template>
  <div class="videos">
    <div class="videos__line app-line"></div>
    <h2 class="app-heading mb-max">
      {{ $t("videos_heading") }}
    </h2>
    <iframe
      src="https://www.youtube.com/embed/zZMJ9dV3a6I?si=pFXy-Cx3HwzdlYr0"
      title="Chill house view video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="videos__view"
    ></iframe>
  </div>
</template>


<style lang="scss" scoped>
.videos {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }

  &__view {
    width: 80%;
    height: 500px;
    border-radius: $border-radius;

    @media screen and (max-width: 1024px) {
      height: 400px;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
}
</style>