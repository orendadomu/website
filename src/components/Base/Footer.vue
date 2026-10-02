<template>
  <footer class="app-footer">
    <h2>
      {{ $t("contact_us") }}
    </h2>

    <div class="app-footer__social">
      <a
        class="app-footer__social-link"
        href="https://instagram.com/chill.kyiv/"
        aria-label="Instagram Chill House"
        target="_blank"
      >
        <img src="/img/inst.svg" style="width: 26px" />
      </a>

      <a
        class="app-footer__social-link"
        href="https://t.me/ChillHouseKyiv"
        aria-label="Написати в Telegram"
        target="_blank"
      >
        <img src="/img/tg.svg" style="width: 30px" />
      </a>

      <a
        class="app-footer__social-link"
        href="tel:+380777987777"
        aria-label="Зателефонувати: +38 077 798 77 77"
      >
        <img src="/img/phone.svg" style="width: 28px" />
      </a>
    </div>

    <address class="app-footer__contacts">
      <a
        href="https://maps.app.goo.gl/e1p2faRhu3eoTff69?g_st=ic"
        target="_blank"
        rel="noopener"
      >
        Цимбалів Яр, 23б, Київ · м. Деміївська
      </a>
      <a href="tel:+380777987777">+38 077 798 77 77</a>
    </address>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }

  @media screen and (max-width: 480px) {
    padding: $padding_mobile;
  }

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

  &__contacts {
    font-style: normal; // <address> по умолчанию курсивный
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    font-size: 15px;

    a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>