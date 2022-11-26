<template>
  <div class="home-container how-it-works testi-slider">
    <h2 class="text-center">How It Works</h2>
    <p class="text-center">
      Organizations need a partner that will solve their problems for today and
      transform them to stay relevant with the changing demands of the
      marketplace. Through strategy and delivery of technology and engineering.
    </p>

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
        <div class="slide">
          <div class="image-area">
            <img src="~/assets/images/works1.webp" alt="How it works 1" />
          </div>
          <div class="text-area">
            <div class="innerText">
              <p class="heading">1. Store Front Setup</p>
              <p>
                Organizations need a partner that will solve their problems for
                today and transform.
              </p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="slide">
          <div class="image-area">
            <img src="~/assets/images/works1.webp" alt="How it works 1" />
          </div>
          <div class="text-area">
            <div class="innerText">
              <p class="heading">2. Store Front Setup</p>
              <p>
                Organizations need a partner that will solve their problems for
                today and transform.
              </p>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
};
</script>

<style lang="scss" scoped>
.how-it-works {
  margin: 50px auto;
  h2 {
    color: black;
  }
  > p {
    margin-top: 15px;
    margin-bottom: 30px;
  }
}

.slide {
  display: flex;
  gap: 50px;
  .image-area {
    width: 40%;
    flex-basis: 40%;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .text-area {
    width: 60%;
    flex-basis: 60%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .innerText {
      width: 500px;
      p {
        font-size: 18px;
      }
      p.heading {
        font-family: "Gilroy-Bold";
        margin-bottom: 15px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .how-it-works {
    margin: 30px auto;
    > p {
      margin-top: 15px;
      margin-bottom: 30px;
    }
  }

  .slide {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    .image-area {
      width: 100%;
      flex-basis: 100%;
      text-align: center;
      img {
        width: 100%;
      }
    }
    .text-area {
      width: 100%;
      flex-basis: 100%;
      flex-wrap: wrap;
      .innerText {
        width: 100%;
        text-align: center;
        p {
          font-size: 18px;
        }
        p.heading {
          font-family: "Gilroy-Bold";
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>