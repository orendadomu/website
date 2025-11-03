<template>
  <div class="main">
    <div class="main__wrapper">
      <h1 class="main__heading">
        <!-- <span> Chill house </span>
         -->
        <!-- <div class="sign">
          <span class="fast-flicker"></span>Chill<span class="flicker"></span
          >house
        </div> -->
        <span> Chill house </span>
        <br />
        {{ $t("main_heading") }}
      </h1>

      <button class="main__more" @click="navigateTo('about')">
        {{ $t("See more") }}
        <ArrowDown class="main__more-icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "@/components/Icons/ArrowDown.vue"
const navigateTo = (link) => {
  document
    .querySelector(`.${link}`)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};
</script>

<style lang="scss">
$font-border-color: rgba(136, 80, 233, 0.75);
// .text-gradient {
//   color: #4b0082;
//   background-image: linear-gradient(45deg, #4b0082 0%, #8a2be2 26%, #AD70DB 67%, #dda0dd 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
// }
.main {
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
  background-size: cover;
  //   background-position: center;
  background-repeat: no-repeat;
  background-image: url("img/bg.jpg");

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    height: 100vh;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0 0 0 / 0.35);
  }

  &__wrapper {
    text-align: center;
    z-index: 1;
    width: 72%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading {
    font-size: 52px;

    span {
      font-size: 72px;
      text-shadow: -9px 0 $font-border-color, 0 2px $font-border-color,
        2px 0 $font-border-color, 0 -2px $font-border-color;
    }
  }

  &__more {
    border: 1px solid $border-color;
    border-radius: $button-border-radius;
    padding: $button-padding;
    // margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: $margin-big;
    /* background: none; */
    margin-top: 24px;
    height: 46px;
    width: 212px;
    /* color: white; */
    font-size: 16px;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
      background: none;
      color: white;
    }

    &-icon {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      position: relative;
      transition: all 0.1s;
      // animation: move 1s infinite;

      .fill-part {
        fill: black;
      }
    }

    &:hover &-icon .fill-part {
      fill: white;
    }
  }
}

// .sign {
//   // position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 64px;

//   // width: 50%;
//   // height: 50%;
//   background-image: radial-gradient(
//     ellipse 50% 35% at 50% 50%,
//     #6b1839,
//     transparent
//   );
//   // transform: translate(-50%, -50%);
//   letter-spacing: 2;
//   // left: 50%;
//   // top: 50%;
//   font-family: "Clip";
//   text-transform: uppercase;
//   // font-size: 6em;
//   color: #ffe6ff;
//   text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
//     -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
//     0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
//   animation: shine 2s forwards, flicker 3s infinite;
// }

// .fast-flicker {
//   animation: shine 2s forwards, blink 10s 1s infinite;
// }

@keyframes move {
  0% {
    top: -2px;
  }
  100% {
    top: 2px;
  }
}

@keyframes blink {
  0%,
  22%,
  36%,
  75% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
  28%,
  33% {
    color: #ff65bd;
    text-shadow: none;
  }
  82%,
  97% {
    color: #ff2483;
    text-shadow: none;
  }
}

.flicker {
  animation: shine 2s forwards, blink 3s 2s infinite;
}

.fast-flicker {
  animation: shine 2s forwards, blink 10s 1s infinite;
}

@keyframes shine {
  0% {
    color: #6b1839;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
}

@keyframes flicker {
  from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }
}
</style>
    
