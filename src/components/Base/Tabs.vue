<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="(tab, i) in tabs"
        :key="i"
        class="tabs__header-item"
        :class="{ active: activeTab == tab.id }"
        @click="selectTab(tab.id)"
      >
        {{ tab.id }} {{ $t("floor") }}
      </li>
    </ul>

    <div class="tabs__container">
      <ul ref="tabsList" class="tabs__list" style="right: 0">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="tabs__list-tab"
          :class="{ active: activeTab == tab.id }"
        >
          <Card v-for="item in tab.content" :key="item" :content="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Card from "@/components/Base/Card.vue";
const emit = defineEmits(["update"]);

const tabs = [
  {
    id: 1,
    content: ["cinema", "garage", "gameroom_1", "bathroom_1"],
  },
  {
    id: 2,
    content: [
      "living_room",
      "kitchen",
      "kitchen_2",
      "gameroom_2",
      "bedroom_1",
      "bathroom_2",
    ],
  },
  {
    id: 3,
    content: [
      "bedroom_2",
      "bathroom_3",
      "bedroom_3",
      "bathroom_4",
      "bedroom_4",
    ],
  },
];

const activeTab = ref(1);
const offsetRight = ref(0);
const tabsList = ref(null);

const selectTab = (id) => {
  offsetRight.value = tabsList.value.clientWidth * (id - 1);
  tabsList.value.style.right = offsetRight.value + "px";
  activeTab.value = id;
  emit("update", id);
};
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;

  &__header {
    $color-accent: rgba(136, 91, 212, 0.65);
    $border-radius: 5px;

    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    // background: #fff;
    border-radius: $border-radius $border-radius 0 0;
    border-bottom: 1px solid fade-out(#000, 0.9);
    //
    display: flex;
    flex-direction: row;
    align-items: center;

    // Кнопка одного таба
    &-item {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      cursor: pointer;
      transition: background 0.3s ease;
      border-right: 1px solid fade-out(#000, 0.9);
      position: relative;

      &:first-child {
        border-radius: $border-radius 0 0 0;
      }

      &:last-child {
        border-radius: 0 $border-radius 0 0;
        border-right: 0;
      }

      &:hover {
        background: fade-out($color-accent, 0.5);
      }

      &:before {
        content: "";
        width: 8px;
        height: 8px;
        display: inline-block;
        background: #fff;
        border: 1px solid $color-accent;
        margin-right: 10px;
        border-radius: 50%;
        position: relative;
        top: 0px;
        transition: background 0.3s ease;
      }

      &:after {
        content: "";
        width: 0%;
        height: 1.25px;
        bottom: 0;
        left: 50%;
        position: absolute;
        transform: translate(-50%, 0%);
        background: $color-accent;
        transition: width 0.3s ease;
      }

      &.active {
        &:after {
          width: 100%;
        }

        &:before {
          background: $color-accent;
        }
      }
    }
  }

  &__container {
    position: relative;
    overflow: hidden;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    transition: all 0.3s linear;

    &-tab {
      min-width: 100%;
      // padding: $padding-small 0;
      box-sizing: border-box;
      position: relative;
      transition: opacity 0.5s ease;
      opacity: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      padding: 16px 0;

      @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
      }

      &.active {
        opacity: 1;
      }
    }
  }
}
</style>