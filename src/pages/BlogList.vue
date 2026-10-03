<template>
  <div class="blog">
    <div class="blog__inner">
      <RouterLink to="/" class="blog__back">← На головну</RouterLink>
      <h1 class="app-heading">Блог Chill House</h1>
      <p class="app-subheading">
        Ідеї для вечірок, днів народження та відпочинку з друзями у Києві
      </p>

      <ul v-if="publishedPosts.length" class="blog__list">
        <li v-for="post in publishedPosts" :key="post.slug" class="blog__card">
          <RouterLink :to="`/blog/${post.slug}/`" class="blog__card-link">
            <img
              v-if="post.cover"
              :src="post.cover"
              :alt="post.title"
              class="blog__card-cover"
              loading="lazy"
            />
            <div class="blog__card-body">
              <time :datetime="post.date" class="blog__card-date">{{
                formatDate(post.date)
              }}</time>
              <h2 class="blog__card-title">{{ post.title }}</h2>
              <p class="blog__card-text">{{ post.description }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>

      <p v-else class="app-subheading">Статті скоро з'являться.</p>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";
import AppFooter from "@/components/Base/Footer.vue";
import { publishedPosts } from "@/blog/posts.js";

const url = "https://chillhouse.kiev.ua/blog/";
const title = "Блог — ідеї для вечірок і відпочинку у Києві";
const description =
  "Ідеї для вечірок, днів народження, дівич-вечорів і корпоративів у Києві. Поради від Chill House — будинку для вечірок до 30 гостей.";
console.log("publishedPosts", publishedPosts);
useHead({
  title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    // поки статей немає — не індексувати порожню сторінку
    ...(publishedPosts.length ? [] : [{ name: "robots", content: "noindex" }]),
  ],
  link: [{ rel: "canonical", href: url }],
});

const formatDate = (date) =>
  new Date(date).toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
</script>

<style lang="scss">
.blog {
  padding-top: 130px; // шапка fixed, 90px
  min-height: 100vh;

  .app-heading {
    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }
  }

  &__back {
    color: inherit;
    opacity: 0.7;
    text-decoration: none;
    font-size: $font-size-small;
    position: relative;
    top: -20px;
    opacity: 0;
    &:hover {
      opacity: 1;
    }

    @media screen and (max-width: 768px) {
      opacity: 1;
    }
  }

  &__inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 $padding;
    @media screen and (max-width: 768px) {
      padding: 0 $padding_mobile;
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 40px 0 80px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  &__card {
    border: 1px solid $active-color;
    border-radius: $border-radius;
    overflow: hidden;
    transition: transform 0.15s;
    &:hover {
      transform: translateY(-4px);
    }

    &-link {
      color: inherit;
      text-decoration: none;
      display: block;
      height: 100%;
    }
    &-cover {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      display: block;
    }
    &-body {
      padding: 20px;
    }
    &-date {
      font-size: 13px;
      opacity: 0.6;
    }
    &-title {
      font-size: 20px;
      line-height: 1.3;
      margin: 8px 0 10px;
    }
    &-text {
      font-size: $font-size-small;
      opacity: 0.8;
      line-height: 1.5;
      margin: 0;
    }
  }
}
</style>