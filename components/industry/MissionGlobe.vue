<template>
  <div class="home-container globe-container">
    <div class="intro-text">
      <p class="text-center">Mission</p>
      <h2 class="text-center">{{Footprint.heading}}</h2>
    </div>
    <div class="globe-image">
      <img src="~/assets/images/globe.webp" alt="Globe image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionGlobe",
  props: {
    Footprint: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.globe-container {
  margin: 50px auto;
  .intro-text {
    h2 {
      margin: 10px auto;
    }
  }
  .globe-image {
    margin-top: 50px;
    img {
      width: 100%;
    }
  }
}
</style>