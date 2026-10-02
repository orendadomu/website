<template>
  <div class="faq">
    <div class="faq__line app-line"></div>
    <h2 class="app-heading mb-max">
      {{ $t("faq_header") }}
    </h2>

    <div
      class="faq__item"
      v-for="item in 5"
      :key="item"
      @click="toggleAccordion(item)"
    >
      <button class="faq__item-head" aria-expanded="false">
        <h3>{{ $t(`faq_questions.faq_${item}_title`) }}</h3>
        <span class="icon" aria-hidden="true"></span>
      </button>
      <div class="faq__item-text">
        <p>
          {{ $t(`faq_questions.faq_${item}_text`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const toggleAccordion = (el) => {
  const items = document.querySelectorAll(".faq__item-head");
  const activeEl = items[el - 1].getAttribute("aria-expanded");
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  items[el - 1].setAttribute(
    "aria-expanded",
    activeEl === "true" ? "false" : "true"
  );
};
</script>

<style lang="scss" scoped>
$blue: white;

.faq {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: $padding_mobile;
  }

  &__item {
    border-bottom: 1px solid $border-color;
    width: 100%;

    &-head {
      color: white;
      position: relative;
      display: block;
      text-align: left;
      width: 100%;
      padding: 1em 0;
      font-size: 1.15rem;
      font-weight: 400;
      border: none;
      background: none;
      outline: none;

      h3 {
        font-size: 22px;
        max-width: calc(100% - 32px);
      }

      &:hover,
      &:focus {
        cursor: pointer;
        //   color: $blue;
        &::after {
          cursor: pointer;
          // color: $blue;
          border: 1px solid $blue;
        }
      }
      // .accordion-title {
      //   padding: 1em 1.5em 1em 0;
      // }

      .icon {
        display: inline-block;
        position: absolute;
        top: 18px;
        right: 0;
        width: 22px;
        height: 22px;
        border: 1px solid;
        border-radius: 22px;
        &::before {
          display: block;
          position: absolute;
          content: "";
          top: 9px;
          left: 5px;
          width: 10px;
          height: 2px;
          background: currentColor;
        }
        &::after {
          display: block;
          position: absolute;
          content: "";
          top: 5px;
          left: 9px;
          width: 2px;
          height: 10px;
          background: currentColor;
        }
      }

      &[aria-expanded="true"] {
        // color: $blue;
        .icon {
          &::after {
            width: 0;
          }
        }
        + .faq__item-text {
          opacity: 1;
          max-height: 20em;
          transition: all 200ms linear;
          will-change: opacity, max-height;
        }
      }
    }

    &-text {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
      transition: opacity 200ms linear, max-height 200ms linear;
      will-change: opacity, max-height;
      color: rgba(255, 255, 255, 0.8);
      //   padding-bottom: 20px;§

      p {
        padding-bottom: 20px;
      }
    }
  }
}
</style>