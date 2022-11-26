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
  background: url("~/assets/images/about.webp");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-banner h1 {
  width: 840px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .about-banner {
    background: url("~/assets/images/about.webp");
  }
  .about-banner h1 {
    width: 100%;
  }
}
</style>