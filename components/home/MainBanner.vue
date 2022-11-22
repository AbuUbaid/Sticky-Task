<template>
  <div class="banner-container home-slides">
    <v-carousel
      :continuous="true"
      :cycle="false"
      :interval="5000"
      :show-arrows="false"
      hide-delimiter-background
      height="100vh"
    >
      <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>
              Integrating High-End Software For Better Digital Infrastructure
            </h1>
            <a href="#!" class="explore-link">Explore More</a>
            <img
              src="~/assets/logos/goldpartner.svg"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img"></div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>Testing life</h1>
            <a href="#!" class="explore-link">Explore More</a>
            <img
              src="~/assets/logos/goldpartner.svg"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img"></div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <!-- <div class="slideshow-container">
      <div class="home-slide">
        <div class="text-area">
          <h1>
            Integrating High-End Software For Better Digital Infrastructure
          </h1>
          <a href="#!" class="explore-link">Explore More</a>
          <img
            src="~/assets/logos/goldpartner.svg"
            alt="Microsoft Gold Partner"
          />
        </div>
        <div class="image-area side-img"></div>
      </div>
     
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  data: () => {
    return {
      cycle: true,
    };
  },
};
</script>

<style scoped>
.home-slides {
  height: 100vh;
}

.home-slides .home-slide {
  display: flex;
  height: 100vh;
}

.home-slides .home-slide .text-area {
  width: 45vw;
  flex-basis: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: #091756;
  padding-left: 70px;
  padding-bottom: 80px;
}

.home-slides .home-slide .text-area h1 {
  color: white;
  max-width: 400px;
  line-height: 1.5em;
}

.home-slides .home-slide .text-area .explore-link {
  color: white;
  border-color: white;
  margin-top: 50px;
}

.home-slides .home-slide .text-area img {
  width: 300px;
  margin-top: 30px;
}

.home-slides .home-slide .image-area {
  width: 55vw;
  flex-basis: 55vw;
}

.home-slides .home-slide .side-img.image-area {
  background: url("~/assets/images/STBanner.jpg");
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
  /* transition: 0.3s ease-out; */
}



/* .home-slides .home-slide .side-img2 {
  background: url("assets/Mask\ Group\ 10.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.3s ease-out;
} */
</style>