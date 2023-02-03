<template>
  <div class="banner-container about-banner" :style="inlineStyle">
    <div class="contain">
      <p class="desc">{{ BannerData.name }}</p>
      <p class="top">{{ BannerData.top }}</p>
      <h1>{{ BannerData.heading }}</h1>
      <p class="desc">{{ BannerData?.description }}</p>
      <template v-if="BannerData.url !== '#'">
        <a :href="BannerData.url"  class="explore-link">Get in Touch</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileDevBanner",
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
  height: 95vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}

.desc{
  margin-bottom: 30px;
  max-width: 40%;
  color: white;
}

.contain {
  margin-left: 80px;
  margin-top: 50px;
}

.about-banner h1 {
  width: 600px;
  margin-bottom: 30px;
  color: white;
}
.about-banner a {
  color: white;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {

  .about-banner{
    height: 80vh;
    background-position: left;
  }
  .text-center{
    text-align: left;
  }
  .contain {
    margin-left: 20px;
  }

  .desc{
    max-width: 90% !important;
    margin-bottom: 22px;
  }
  .about-banner h1 {
    width: 100%;
  }
}
</style>
