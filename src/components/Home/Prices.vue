<template>
  <div class="prices">
    <div class="prices__line app-line"></div>
    <!-- <h2 class="app-heading">
      {{ $t("prices_heading") }}
    </h2> -->
    <h2 class="app-heading">
      {{ $t("prices_heading_july") }}
    </h2>

    <div class="prices__items">
      <div class="prices__item" v-for="(val, key, i) in prices_july" :key="key">
        <div class="prices__item-icon">
          <img :src="`/img/prices_${i + 1}.svg`" />
        </div>
        <div class="prices__item-head">
          <span>{{ $t(key) }}</span>
        </div>
        <div class="prices__item-body">
          <span> {{ val ? val : $t('busy')}} </span>
        </div>
      </div>
    </div>

    <br>

    <h2 class="app-heading" style="padding-top: 24px">
      {{ $t("prices_heading_next") }}
    </h2>

    <div class="prices__items">
      <div class="prices__item" v-for="(val, key, i) in prices" :key="key">
        <div class="prices__item-icon">
          <img :src="`/img/prices_${i + 1}.svg`" />
        </div>
        <div class="prices__item-head">
          <span>{{ $t(key) }}</span>
        </div>
        <div class="prices__item-body">
          <span> {{ val }}$ </span>
        </div>
      </div>
    </div>

    <p class="app-subheading">
      {{ $t("prices_info") }} <br />
      {{ $t("deposit") }} 500$ ({{ $t("deposit_info") }})
      <br />
      {{ $t("rules") }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const prices_july = {
  weekdays: "400$",
  friday: "500$ (24.07)",
  saturday_sunday: 0
};

const prices = {
  weekdays: "450",
  friday_sunday: "800",
  saturday: "1200",
};
</script>

<style lang="scss" scoped>
.color-red {
  color: red;
}

.prices {
  padding: $padding;

  @media screen and (max-width: 768px) {
    padding: $padding_mobile;
  }

  &__items {
    margin-top: $margin-big;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-gap: $margin-small;
    grid-gap: $margin-big;

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      width: 80%;
      margin: $padding-mobile auto;
    }
  }

  &__items-max {
    margin: $margin-big 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // grid-gap: $margin-small;
    grid-gap: $margin-big;

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      width: 80%;
      margin: $padding-mobile auto;
    }
  }

  &__item {
    border-radius: 4px;
    border: 1px solid $active-color;
    position: relative;
    text-align: center;

    &-head,
    &-body {
      padding: 12px;
    }

    &-head {
      background: $active-color;
    }

    &-icon {
      position: absolute;
      right: -20px;
      top: -24px;

      img {
        width: 48px;
      }
    }

    &:nth-child(3) &-icon {
      right: -26px;
      top: -26px;

      img {
        width: 54px;
      }
    }
  }
}
</style>