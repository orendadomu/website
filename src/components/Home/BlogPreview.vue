<template>
  <section v-if="latest.length" class="blog-preview">
    <div class="blog-preview__line app-line"></div>
    <h2 class="app-heading">Ідеї для вашого свята</h2>

    <div class="blog-preview__list">
      <RouterLink
        v-for="post in latest"
        :key="post.slug"
        :to="`/blog/${post.slug}/`"
        class="blog-preview__card"
      >
        <img :src="post.cover" :alt="post.title" loading="lazy" />
        <h3>{{ post.title }}</h3>
      </RouterLink>
    </div>

    <RouterLink to="/blog/" class="blog-preview__all">Усі статті →</RouterLink>
  </section>
</template>

<script setup>
import { publishedPosts } from "@/blog/posts.js";

const latest = publishedPosts.slice(0, 3);
</script>

<style lang="scss">
.blog-preview {
  padding: 60px $padding;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 40px $padding_mobile;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    max-width: 1100px;
    margin: 32px auto 24px;
    text-align: left;
  }

  &__card {
    display: block;
    color: inherit;
    text-decoration: none;
    border: 1px solid $active-color;
    border-radius: $border-radius;
    overflow: hidden;

    img {
      width: 100%;
      aspect-ratio: 16 / 10;
      object-fit: cover;
      display: block;
    }

    h3 {
      font-size: 18px;
      line-height: 1.3;
      padding: 16px 20px 20px;
      margin: 0;
    }
  }

  &__all {
    display: inline-block;
    padding: 12px 24px;
    border: 1px solid $border-color-light;
    border-radius: $button-border-radius;
    color: inherit;
    text-decoration: none;
  }
}
</style>