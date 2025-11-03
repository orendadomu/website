<template>
  <footer class="app-footer">
    <p>
      {{ $t("contact_us") }}
    </p>

    <div class="app-footer__social">
      <a
        class="app-footer__social-link"
        href="https://instagram.com/chill.kyiv/"
        target="_blank"
      >
        <img src="/img/inst.svg" style="width: 26px" />
      </a>

      <a
        class="app-footer__social-link"
        href="https://telegram.me/arenda_dom_kiev"
        target="_blank"
      >
        <img src="/img/tg.svg" style="width: 30px" />
      </a>

      <a class="app-footer__social-link" href="tel:+380777987777">
        <img src="/img/phone.svg" style="width: 28px" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__social {
    display: flex;
    align-items: center;
    margin-top: $margin-small;

    &-link {
      transition: all 0.1s;

      &:not(:last-child) {
        margin-right: 16px;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>