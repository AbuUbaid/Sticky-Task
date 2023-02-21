<template>
  <div class=" banner-container pro-banner" :style="inlineStyle">
    <div class="contain">
      <h1>{{ BannerData.heading }}</h1>
      <p class="desc">{{ BannerData?.description }}</p>
      <template v-if="BannerData.url !== '#'">
        <a :href="BannerData.url"  class="pro-explore-link">{{ BannerData.top != '#' ? 'Book a Consultant Now!' : "Let's Build"}}</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProServiceBanner",
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

<style lang="scss"  scoped>
.pro-banner {
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
.pro-main {
  .desc{
    max-width:40%;
  }
}
.desc{
  margin-bottom: 30px;
  max-width: 75%;
  color: #000 !important;
}

.contain {
  margin-left: 80px;
  margin-top:30%;

}

.pro-explore-link{
  font-size: 22px;
  font-weight: 500;
  color: #F23801 !important;
  text-decoration: underline;
}

.pro-banner h1 {
  width: 792px;
  margin-bottom: 30px;
  color: #000;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .contain {
    margin-left: 20px;
  }
  .pro-banner {
  background-position: left;
  }
  .pro-main {
  .desc{
    max-width:94%;
  }
}
  .pro-banner h1 {
    width: 100%;
  }
  .p-banner h1 {
    width: 100%;
  }
  .desc{
  max-width: 96%;
  margin-bottom: 22px;
}
}
</style>
