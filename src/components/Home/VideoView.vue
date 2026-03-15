<template>
  <div class="video_view">
    <div class="video_view__line app-line"></div>
    <h2 class="app-heading mb-max">
      {{ $t("video_view_heading") }}
    </h2>
    <iframe
      src="https://www.youtube.com/embed/zZMJ9dV3a6I?si=pFXy-Cx3HwzdlYr0"
      title="Chill house view video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      class="video_view__view"
    />
  </div>
</template>


<style lang="scss" scoped>
.video_view {
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