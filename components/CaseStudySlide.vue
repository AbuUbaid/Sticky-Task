<template>
  <div class="casestudy-slider">
    <p class="text-center">Case Study</p>
    <h2 class="text-center">Discovering New Horizons Together</h2>
    <div class="slideshow-container home-container testi-slider">
      <v-carousel
        :continuous="true"
        :cycle="false"
        :interval="5000"
        :show-arrows="true"
        hide-delimiters
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
          <div class="case-slide">
            <h2>Product Development</h2>
            <p>
              We built this product from initial concept to final market launch.
              By identifying a market need, researching the competition,
              ideating a solution, developing a product roadmap for encompassing
              usage.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="case-slide">
            <h2>Product Development</h2>
            <p>
              We built this product from initial concept to final market launch.
              By identifying a market need, researching the competition,
              ideating a solution, developing a product roadmap for encompassing
              usage.
            </p>
          </div>
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
  background: url("~/assets/images/cslide1.png");
  padding: 0px 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 12px;
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
</style>