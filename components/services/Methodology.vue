<template>
  <div class="banner-container methodology">
    <div class="image-area">
      <img class="roundimg" src="~/assets/images/methodology.svg" />
    </div>
    <div class="slider-area method-slider">
      <p>Methodology</p>
      <h2>Our Determined Process of Integration</h2>
      <v-carousel
        :continuous="true"
        :cycle="false"
        :interval="3000"
        :show-arrows="true"
        hide-delimiters
        height="180px"
      >
        <template v-slot:prev="{ on, attrs }">
          <img
            v-bind="attrs"
            v-on="on"
            src="~/assets/icons/rounded-left.svg"
            alt="Previous Slide"
          />
        </template>
        <template v-slot:next="{ on, attrs }">
          <img
            v-bind="attrs"
            v-on="on"
            src="~/assets/icons/rounded-right.svg"
            alt="Next Slide"
          />
        </template>
        <v-carousel-item>
          <div class="slide">
            <p class="title">Agile</p>
            <p>
              We promote an incremental and iterative approach to work. Our team
              ensures short, ongoing release cycles — with fast feedback loops.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="slide">
            <p class="title">Scrum</p>
            <p>
              With adaptive development, our teams work cross-functionally
              sprint cycles of 2-4 weeks.
            </p>
          </div>
        </v-carousel-item>

        <v-carousel-item>
          <div class="slide">
            <p class="title">Waterfall</p>
            <p>
              We follow a sequential model for planning, building, and
              delivering software.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="slide">
            <p class="title">Extreme Programming (XP)</p>
            <p>
              We specialize in crafting high-quality software using best
              practices such as code review, testing, incremental development,
              clean design, and integration testing.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="slide">
            <p class="title">QA&E</p>
            <p>
              We ensure a holistic approach to achieving and maintaining quality
              enterprise processes, applications and systems.
            </p>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="slide">
            <p class="title">Analytics</p>
            <p>
              Our expertise revolves around predictive analytics that blend Big
              Data processing, cognitive computing and practical
              decision-making.
            </p>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Methodology",
};
</script>

<style lang="scss"  scoped>
.methodology {
  background: #eef5ff;
  display: flex;
  .image-area {
    flex-basis: 45%;
    width: 45%;
    .roundimg {
      width: 100%;
      margin-left: -150px;
      transform: rotate(0deg);
      margin-top: 0;
    }
  }
  .slider-area {
    flex-basis: 55%;
    width: 55%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .slide {
      .title {
        font-family: "Gilroy-Bold";
        font-size: 18px;
        margin-bottom: 25px;
      }
      width: 70%;
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .methodology {
    margin-top: 50px;
    margin-bottom: 30px;
    padding-top: 0px;
    padding-bottom: 30px;
    flex-wrap: wrap;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      overflow: hidden;
      .roundimg {
        width: 100%;
        margin-left: 0;
        transform: rotate(90deg);
        margin-top: -100px;
      }
    }
    .slider-area {
      margin-top: 30px;
      padding-left: 20px;
      padding-right: 2px;
      flex-basis: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      h2 {
        margin-top: 15px;
        margin-bottom: 20px;
      }
      .slide {
        .title {
          margin-bottom: 20px;
        }
        width: 100%;
      }
    }
  }
}
</style>