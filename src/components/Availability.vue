<template>
  <div class="availability">
    <div class="availability__line app-line"></div>
    <h2 class="app-heading mb-max">
      {{ $t("availability_header") }}
    </h2>
    <div class="availability__wrap">
      <div class="availability__info"></div>
      <div class="availability__content">
        <Calendar
          v-model="date"
          :disabled-dates="disabledRanges"
          :attributes="attributes"
          expanded
          :locale="{ id: locale === 'ua' ? 'ukr' : 'en', firstDayOfWeek: 2 }"
        />
        <!-- :columns="2"  -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar } from "v-calendar";
import "v-calendar/style.css";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();

import { useScreens } from "vue-screen-utils";
// const columns = mapCurrent({ lg: 2 }, 1);

const props = defineProps({
  dates: {
    type: Object,
    // required: true,
  },
});

const date = ref(new Date());

const attributes = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);

const disabledRanges = computed(() =>
  props.dates?.map((e) => ({
    start: new Date(new Date(e.start).getTime()),
    end: new Date((new Date(e.end).setHours(new Date(e.end).getHours() - 3))),
    // end: new Date(new Date(e.end).getTime() - 1), // DTEND (excl) -> включительно
  }))
);
</script>

<style lang="scss">
.availability {
  padding: $padding;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: $padding-mobile;
  }

  &__wrap {
    display: grid;
    // grid-template-columns: 40% 60%;
    // grid-template-columns: 40% 60%;
  }

  &__info {
  }

  &__content {
    // min-width: 400px;
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  .vc {
    &-bordered {
      border-radius: $border-radius;
      border: 1px solid $active-color;
    }

    &-arrow,
    &-arrow:hover,
    &-bordered,
    &-title {
      background: none;
      color: $font-color;
    }

    &-arrow:hover {
      transition: 0.1s transform;
      transform: scale(1.25);
    }

    &-popover-content {
      background: $background-color-light;
      border-radius: $border-radius;
    }

    &-nav-item {
      background: $background-color;
      color: $font-color;
      font-weight: 400;
    }

    &-week {
      padding-bottom: 4px;
    }

    &-weekday,
    &-day-content,
    &-highlight,
    &-title {
      font-size: $font-size;
    }

    &-weekday {
      padding-top: 8px;
    }

    &-weeks {
      padding: 8px;
    }

    &-day-content,
    &-highlight {
      width: 40px;
      height: 40px;
    }

    &-day-content.vc-disabled {
      // background: lightsalmon;
      background: $active-color;
      // color: black;
      cursor: default;
      position: relative;

      // &::before {
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   content: url("/img/close.svg");
      //   width: 40px;
      //   height: 40px;
      //   top: -6px;
      //   left: -6px;
      // }
    }

    &-highlight-content-solid {
      background: $background-color-light;
      color: $font-color-dark;
    }
  }
}
</style>