<template>
  <header class="app-header" :class="{ 'app-header--bg': isHeaderBg }">
    <ul class="app-header__nav">
      <!-- <router-link
        v-for="link in pagesList"
        :key="link"
        v-slot="{ navigate }"
        :to="{ name: link }"
        custom
      >
        <li
          role="link"
          class="app-header__nav-link"
          @click="navigate"
          @keypress.enter="navigate"
        >
          {{ link }}
        </li>
      </router-link> -->

      <li
        v-for="(item, i) in navigateButtons"
        :key="i"
        class="app-header__nav-link"
        @click="navigateTo(item)"
      >
        {{ `${t(item)}` }}
      </li>
    </ul>

    <div class="app-header__right">
      <div class="app-header__social">
        <a
          class="app-header__social-link app-header__social-link--circle"
          href="https://instagram.com/chill.kyiv/"
          target="_blank"
        >
          <img src="/img/inst.svg" style="width: 26px" />
        </a>

        <a
          class="app-header__social-link app-header__social-link--circle"
          href="https://telegram.me/arenda_dom_kiev"
          target="_blank"
        >
          <img src="/img/tg.svg" style="width: 30px" />
        </a>

        <a class="app-header__social-link" href="tel:+380777987777">
          <img src="/img/phone.svg" style="width: 28px" />
          <p>+ (38) 077-798-77-77</p>
        </a>
      </div>
      <multiselect
        v-model="selectedLanguage"
        :options="options"
        :searchable="false"
        :allow-empty="false"
        :show-labels="false"
        :is-open="true"
      ></multiselect>
    </div>

    <!-- <button class="app-button app-header__logout">Log out</button> -->
  </header>
</template>

<script setup>
// const pagesList = ["home"]; // "nfts", "chats"
const navigateButtons = [
  "about",
  // "special",
  "prices",
  "availability",
  "location",
];
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import Multiselect from "vue-multiselect";

const { locale, t } = useI18n(); // Get the locale ref and translation function

const selectedLanguage = ref(locale.value); // Initialize with current locale
const isHeaderBg = ref(false);

watch(
  () => selectedLanguage.value,
  (val) => {
    if (val) locale.value = val;
  }
);

const options = ["en", "ua"];

const navigateTo = (link) => {
  document
    .querySelector(`.${link}`)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;
    isHeaderBg.value = scroll > 0 ? true : false;
  });
});
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
.app-header {
  // padding: 0px 40px;
  padding: $padding;
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  // background: lavender;
  // margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $border-color;
  transition: background 0.1s;

  &--bg {
    background: $background-color;
  }

  &__nav {
    padding-left: 0;
    display: flex;

    &-link {
      // text-transform: capitalize;
      list-style: none;
      cursor: pointer;
      transition: all 0.1s;

      &:not(:first-child) {
        margin-left: 20px;
      }

      &:hover {
        transform: scale(1.05);
        // font-weight: 500;
      }
    }
  }

  &__social {
    display: flex;
    align-items: center;

    &-link {
      text-decoration: none;
      // border: 1px solid $border-color-light;
      border: 1px solid $border-color;
      border-radius: $button-border-radius;
      padding: $button-padding;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;

      &--circle {
        width: 46px;
        height: 46px;

        img {
          margin-right: 0 !important;
        }
      }

      &:hover {
        transition: all 0.1s;
        background: $background-select;
      }

      img {
        width: 28px;
        margin-right: 4px;
      }

      p {
        font-size: $font-size-small;
        color: white;
        min-width: 144px;
        width: 150px;
      }
    }
  }

  &__right {
    display: flex;
    align-items: center;
  }
}
</style>