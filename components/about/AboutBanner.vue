<template>
  <div class="banner-container about-banner">
    <h1 class="text-center">
      Revitalising Industrial Approach With Digital And Contemporary Methodology
    </h1>
  </div>
</template>

<script>
export default {
  name: "AboutBanner",
};
</script>

<style  scoped>
.about-banner {
  height: 100vh;
  width: 100%;
  background: url("~/assets/images/about.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-banner h1{
  width: 840px;
}
</style>