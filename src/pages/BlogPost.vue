<template>
  <div class="post">
    <article v-if="post" class="post__inner">
      <RouterLink to="/blog/" class="post__back">← Усі статті</RouterLink>

      <h1 class="post__title">{{ post.title }}</h1>
      <time :datetime="post.date" class="post__date">{{ formatDate(post.date) }}</time>

      <img v-if="post.cover" :src="post.cover" :alt="post.title" class="post__cover" />

      <div class="post__content" v-html="post.content" />

      <aside class="post__cta">
        <p class="post__cta-title">Шукаєте будинок для свята?</p>
        <p>
          Chill House — будинок для вечірок і відпочинку у Києві біля м. Деміївська:
          до 30 гостей, кінотеатр, караоке, більярд, 5 спалень.
        </p>
        <div class="post__cta-buttons">
          <RouterLink to="/" class="post__cta-button">Вільні дати та ціни</RouterLink>
          <a href="tel:+380777987777" class="post__cta-button post__cta-button--ghost">+38 077 798 77 77</a>
        </div>
      </aside>
    </article>

    <NotFound v-else />

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@unhead/vue";
import AppFooter from "@/components/Base/Footer.vue";
import NotFound from "@/pages/NotFound.vue";
import { findPost } from "@/blog/posts.js";

const SITE = "https://chillhouse.kiev.ua";

const route = useRoute();
const post = computed(() => findPost(route.params.slug));
console.log('route.params.slug',route.params.slug)

useHead(computed(() => {
    console.log('post.value', post)
  if (!post.value) return {};

  const p = post.value;
  const url = `${SITE}/blog/${p.slug}/`;
  console.log('url', url)
  const image = p.cover ? `${SITE}${p.cover}` : `${SITE}/preview.jpg`;

  return {
    title: p.title,
    meta: [
      { name: "description", content: p.description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "article:published_time", content: p.date },
    ],
    link: [{ rel: "canonical", href: url }],
    script: [{
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: p.title,
        description: p.description,
        image,
        datePublished: p.date,
        url,
        inLanguage: "uk",
        author: { "@type": "Organization", name: "Chill House Kyiv", url: `${SITE}/` },
        publisher: { "@type": "Organization", name: "Chill House Kyiv", url: `${SITE}/` },
      }),
    }],
  };
}));

const formatDate = (date) =>
  new Date(date).toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" });
</script>

<style lang="scss">
.post {
  padding-top: 130px;

  &__inner {
    max-width: 760px;
    margin: 0 auto 80px;
    padding: 0 $padding;
    @media screen and (max-width: 768px) { padding: 0 $padding_mobile; }
  }

  &__back {
    color: inherit;
    opacity: 0.7;
    text-decoration: none;
    font-size: $font-size-small;
    &:hover { opacity: 1; }
  }

  &__title {
    font-size: 36px;
    line-height: 1.2;
    margin: 24px 0 12px;
    @media screen and (max-width: 480px) { font-size: 28px; }
  }

  &__date { font-size: 14px; opacity: 0.6; }
  &__cover { width: 100%; border-radius: 16px; margin: 28px 0; display: block; }

  &__content {
    line-height: 1.7;
    h2 { font-size: 26px; line-height: 1.3; margin: 40px 0 16px; }
    h3 { font-size: 20px; margin: 28px 0 12px; }
    p, ul, ol { margin: 0 0 18px; }
    li { margin-bottom: 8px; }
    a { color: inherit; text-decoration: underline; }
    img { width: 100%; border-radius: 12px; margin: 12px 0 24px; display: block; }
  }

  &__cta {
    margin-top: 48px;
    padding: 28px;
    border: 1px solid $border-color;
    border-radius: 16px;
    background: $active-color;

    p { margin: 0 0 12px; line-height: 1.6; }
    &-title { font-size: 22px; font-weight: 600; }
    &-buttons { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px; }

    &-button {
      padding: 12px 22px;
      border-radius: $button-border-radius;
      background: $background-color-light;
      color: $font-color-dark;
      text-decoration: none;

      &--ghost {
        background: transparent;
        color: $font-color;
        border: 1px solid $border-color-light;
      }
    }
  }
}
</style>