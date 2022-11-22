<template>
  <div class="home-container globe-container">
    <div class="intro-text">
      <p class="text-center">Values</p>
      <h2 class="text-center">Our Identity And Our Devotion Go Hand-In-Hand</h2>
    </div>
    <div class="globe-image">
      <img src="~/assets/images/globe.jpg" alt="Globe image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionGlobe",
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