<template>
  <div class="prices">
    <h2 class="app-heading">
      {{ $t("prices") }}
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
      {{ $t("deposit") }} {{ prices.weekdays }}$ ({{ $t("deposit_info") }})
      <br />
      {{ $t("rules") }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const prices = {
  weekdays: "400",
  friday_sunday: "600",
  saturday: "800",
};
</script>

<style lang="scss" scoped>
.prices {
  padding: $padding;

  &__items {
    margin-top: $margin-big;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-gap: $margin-small;
    grid-gap: $margin-big;
  }

  &__item {
    border-radius: 4px;
    border: 1px solid $active-color;
    position: relative;

    &-head,
    &-body {
      padding: 12px;
    }

    &-head {
      //   background: $background-select;
      background: $active-color;
    }

    &-body {
    }

    &-icon {
      position: absolute;
      right: -20px;
      top: -24px;

      img {
        width: 48px;
      }
    }

    &:last-child &-icon {
      right: -26px;
      top: -26px;

      img {
        width: 54px;
      }
    }
  }
}
</style>