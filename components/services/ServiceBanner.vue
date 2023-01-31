<template>
  <div :class=" BannerData?.process == 'process' ?  'banner-container p-banner' : 'banner-container about-banner'" :style="inlineStyle">
    <div class="contain">
      <p class="name">{{ BannerData?.name }}</p>
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
.p-banner {
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
 .p-banner contain{
  color:white !important;
 }
 .p-banner p{
  color:white !important;
 }
 .p-banner a{
  color:white !important;
 }
 .p-banner h1 {
  width: 600px;
  margin-bottom: 30px;
  color: white;
}
.name{
  margin-bottom: 30px;
}
.desc{
  margin-bottom: 30px;
  max-width: 40%;
}

.contain {
  margin-left: 80px;
}

.explore-link{
  font-size: 22px;
  font-weight: 500;
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
  .p-banner h1 {
    width: 100%;
  }
  .desc{
  max-width: 90%;
}
}
</style>
