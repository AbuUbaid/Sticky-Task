<template>
  <div class="banner-container about-banner">
    <div class="contain">
      <h1>We Provide Excellence In Everything</h1>
      <a href="" class="explore-link">Explore More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstBanner",
  // props: ["bannerInfo"]
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
  align-items: end;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
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
  .about-banner {
    background: url("~/assets/images/about.jpg");
    padding: 20px;
  }

  .about-banner h1 {
    width: 100%;
  }
}
</style>
