<template>
  <NuxtLink
    :to="{
      name: 'insights-slug',
      params: { slug: BlogDetail.slug, id: BlogDetail.id },
    }"
    class="blog-card-horizontal"
  >
    <div class="image">
      <img :src="BlogDetail.fimg_url" alt="blog image" />
    </div>
    <div class="text">
      <p class="date">{{ new Date(BlogDetail.date).toDateString() }}</p>
      <h3 class="blog-title">
        {{ BlogDetail.title.rendered }}
      </h3>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "CardHorizontal",
  props: {
    BlogDetail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-horizontal {
  color: black;
  margin-bottom: 20px;
  display: flex;
  gap: 30px;
  .image {
    flex-basis: 45%;
    width: 45%;
    img {
      width: 100%;
      height: 190px;
      object-fit: cover;
      object-position: center;
    }
  }
  .text {
    flex-basis: 55%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p.date {
      margin-bottom: 10px;
    }
    h3 {
      font-family: "Gilroy-Medium";
      font-weight: normal;
      font-size: 20px;
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .blog-card-horizontal {
    gap: 20px;
    .image {
      flex-basis: 60%;
      width: 60%;
      img {
        height: auto;
      }
    }
    .text {
      flex-basis: 40%;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p.date {
        margin-bottom: 10px;
      }
      h3 {
        font-family: "Gilroy-Medium";
        font-weight: normal;
        font-size: 20px;
      }
    }
  }
}
</style>