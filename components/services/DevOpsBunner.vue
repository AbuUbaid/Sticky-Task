<template>
  <div :class="BannerData.url == '#' ? 'banner-container about-banner' : 'banner-container image-size'" :style="inlineStyle">
    <div class="contain">
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

.image-size{
  background-size: 1000px !important;
  height: 100vh;
  width: 100%;
  background-position: center right;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}
.about-banner {
  height: 100vh;
  width: 100%;
  background-size: 600px;
  background-position: center right;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
}


.desc{
  margin-bottom: 30px;
  max-width: 40%;
}

.contain {
  margin-left: 80px;
}

.about-banner h1 {
  width: 600px;
  margin-bottom: 30px;
  margin-top: 290px;
}
.about-banner a {
  color: black;
}

.image-size h1 {
  width: 600px;
  margin-bottom: 30px;
  margin-top: 290px;
}
.image-size a {
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
  .image-size{
  background-position: center left;
}
  .image-size h1 {
    width: 100%;
  }
}
</style>
