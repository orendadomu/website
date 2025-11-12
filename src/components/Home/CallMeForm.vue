<template>
  <div class="call-me">
    <div class="call-me__line app-line"></div>
    <div class="call-me__form">
      <h2 class="app-heading">
        {{ $t("call_me_header") }}
      </h2>

      <MaskInput v-model="phone" mask="+(380) ##-###-##-##" placeholder="+(380) XX-XXX-XX-XX" />

      <button @click="send">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskInput } from "vue-3-mask";

import { useUsers } from "@/store/users.js";
const usersStore = useUsers();

const phone = ref("");

async function send() {
  const normalized = phone.value.replace(/[^\d+]/g, "");
  if (!/^\+?\d{10,15}$/.test(normalized)) {
    // error.value = "Введите телефон в международном формате (например, +380...)";
    console.log('error')
    return;
  }

  console.log("send", normalized);

  const res = await usersStore.sendPhone({ phone: normalized });
  console.log('res' , res)
}
</script>

<style lang="scss" scoped>
.call-me {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }

  &__form {
    width: 80%;
    // height: 500px;
    // border: 1px solid $active-color;
    // border-radius: $border-radius;
    padding: $padding;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
}
</style>