<template>
  <div class="banner-container about-banner" :style="inlineStyle">
    <div class="contain">
      <h1>{{ BannerData.heading }}</h1>
      <a href="" class="explore-link">Explore More</a>
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
</style>
