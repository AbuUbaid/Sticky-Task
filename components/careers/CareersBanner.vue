<template>
  <div class="banner-container about-banner">
    <div class="contain">
      <h1>Take The Leap, Step Into The Future</h1>
      <a href="" class="explore-link">Join Us</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareersBanner",
};
</script>

<style  scoped>
.about-banner {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/careers.webp");
  background-size: cover;
  background-position: center;
}

.contain {
  margin-left: 80px;
  margin-bottom: 80px;
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
  .contain {
    margin-left: 20px;
    margin-bottom: 80px;
  }

  .about-banner h1 {
    width: 100%;
    margin-bottom: 30px;
  }
  .about-banner a {
    color: black;
  }
}
</style>
