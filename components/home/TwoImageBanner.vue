<template>
  <div class="banner-container">
    <div class="image-ctas">
      <div class="f-left imageCard">
        <!-- <p>Build Your Dedicated Teams</p> -->
        <h2>Hire top 1% global vetted engineers</h2>
        <NuxtLink to="/team-augmentation" class="cta-black"
          >Augment your Team</NuxtLink
        >
      </div>
      <div class="f-right imageCard">
        <!-- <p>Fixed Price Project</p> -->
        <h2>Let’s Build You A Team Of Quality-Assured Tech Pros Remotely</h2>
        <NuxtLink to="/contact" class="cta-black"
          >DEVELOP YOUR PRODUCT</NuxtLink
        >
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
  height: 500px;
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
  background: url("~/assets/images/leftt.webp");
}

.f-right {
  background: url("~/assets/images/rightt.webp");
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