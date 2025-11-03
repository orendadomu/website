<template>
  <div class="card">
    <div class="card__preview">
      <img :src="`/img/photo/${props.content}.jpg`" />
    </div>
    <p class="card__info">
      {{ $t(`rooms.${props.content}`) }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const emit = defineEmits(['update'])

const props = defineProps({
  content: {
    type: String,
    // required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  //   width: 30%;
  text-align: center;
  border: 1px solid $active-color;
  height: fit-content;
  border-radius: $border-radius;

  &__preview img {
    width: 100%;
  }

  &__info {
    padding: $padding-small;
  }
}
</style>