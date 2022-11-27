<template>
  <NuxtLink
    :to="{
      name: 'insights-slug',
      params: { slug: BlogDetail.slug, id: BlogDetail.id },
    }"
    class="blog-card"
  >
    <img :src="BlogDetail.fimg_url" alt="blog image" />
    <p class="date">
      {{ new Date(BlogDetail.date).toDateString() }}
    </p>
    <h3>
      {{ BlogDetail.title.rendered }}
    </h3>
  </NuxtLink>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    BlogDetail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card {
  color: black;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  p.date {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  h3 {
    font-family: "Gilroy-Medium";
    font-weight: normal;
    font-size: 18px;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .blog-card {
    img {
      height: auto;
    }
    p.date {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>