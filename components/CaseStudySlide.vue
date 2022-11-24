<template>
  <div class="casestudy-slider">
    <p class="text-center">Case Study</p>
    <h2 class="text-center">Discovering New Horizons Together</h2>
    <div class="slideshow-container home-container testi-slider">
      <v-carousel
        :continuous="true"
        :cycle="false"
        :interval="3000"
        :show-arrows="false"
      >
        <template v-slot:prev="{ on, attrs }">
          <img
            v-bind="attrs"
            v-on="on"
            src="~/assets/icons/slide-left.svg"
            alt="Previous Slide"
          />
        </template>
        <template v-slot:next="{ on, attrs }">
          <img
            v-bind="attrs"
            v-on="on"
            src="~/assets/icons/slide-right.svg"
            alt="Next Slide"
          />
        </template>
        <v-carousel-item>
          <NuxtLink to="/solutions/stickytasks" class="case-slide slide1">
            <h2>Product Development</h2>
            <p>
              We built this product from initial concept to final market launch.
              By identifying a market need, researching the competition,
              ideating a solution, developing a product roadmap for encompassing
              usage.
            </p>
          </NuxtLink>
        </v-carousel-item>
        <v-carousel-item>
          <NuxtLink to="/solutions/e-commerce" class="case-slide slide2">
            <h2>E-commerce</h2>
            <p>
              By deploying site reliability engineering strategy we reduced
              friction in operability-related experience on HDD digital
              channels.
            </p>
          </NuxtLink>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseStudySlide",
};
</script>

<style scoped>
.casestudy-slider {
  padding: 50px 0px;
  background: #eeeeee;
}
.casestudy-slider > h2 {
  color: #091756;
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 40px;
}
.case-slide {
  height: 500px;
  color: white;
  background-size: cover;
  background-position: center;
  padding: 0px 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
}

.slide1 {
  background: url("~/assets/images/cslide1.png");
}

.slide2 {
  background: url("~/assets/images/cslide2.jpg");
}
.case-slide h2 {
  margin-bottom: 30px;
  color: white;
}

.case-slide p {
  width: 50%;
  font-size: 20px;
  line-height: 1.4em;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .casestudy-slider > h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 30px;
  }

  .case-slide {
    padding: 0px 20px;
  }

  .case-slide p {
    width: 100%;
  }
}
</style>