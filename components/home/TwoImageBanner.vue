<template>
  <div class="banner-container">
    <div class="image-ctas">
      <div class="f-left imageCard">
        <p>A-Team</p>
        <h2>Give your Business a Robust Drive</h2>
        <a class="cta-black">Augment your Team</a>
      </div>
      <div class="f-right imageCard">
        <p>Blog</p>
        <h2>A Lean Approach and Scrum Framework to Develop Projects</h2>
        <a class="cta-black">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoImageBanner",
};
</script>

<style  scoped>
.image-ctas {
  color: white;
  display: flex;
}

.imageCard {
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
}

.imageCard h2 {
  font-size: 40px;
  line-height: 1.3em;
  color: white;
}

.imageCard a.cta-black {
  margin-top: 40px;
  align-self: start;
}
.f-left h2 {
  width: 320px;
}

.f-right h2 {
  width: 410px;
}

.f-left {
  background: url("~/assets/images/leftt.jpg");
}

.f-right {
  background: url("~/assets/images/rightt.jpg");
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .image-ctas {
    flex-direction: column;
  }

  .imageCard {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 450px;
  }

  .imageCard h2 {
    font-size: 30px;
    width: 100%;
  }
}
</style>