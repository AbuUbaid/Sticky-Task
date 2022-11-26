<template>
  <div class="banner-container about-banner" :style="inlineStyle">
    <div class="contain">
      <p class="top">{{ BannerData.top }}</p>
      <h1>{{ BannerData.heading }}</h1>
      <template v-if="BannerData.url !== '#'">
        <a :href="BannerData.url"  class="explore-link">Explore More</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceBanner",
  props: {
    BannerData: {
      type: Object,
    },
  },
  computed: {
    bgImage() {
      return require("@/assets/images/" + this.BannerData.img);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style  scoped>
.about-banner {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.contain {
  margin-left: 80px;
}

.about-banner h1 {
  width: 600px;
  margin-bottom: 30px;
}
.about-banner a {
  color: black;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .contain {
    margin-left: 20px;
  }

  .about-banner h1 {
    width: 100%;
  }
}
</style>
