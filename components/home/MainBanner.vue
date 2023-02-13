<template>
  <div class="banner-container home-slides">
    <v-carousel
      :continuous="false"
      :cycle="false"
      :interval="5000"
      :show-arrows="false"
      hide-delimiters
      height="100vh"
    >
      <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>
              Let’s whip you up an engineering team.
            </h1>
            <a href="#contact-form" class="explore-link"
              >Let's Build</a>
            <img
              src="~/assets/logos/goldpartner.webp"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img sideimg1"></div>
        </div>
      </v-carousel-item>
      <!-- <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>Leading The Future Of Innovative Business</h1>
            <NuxtLink to="/contact" class="explore-link"
              >Let's get to work</NuxtLink
            >
            <img
              src="~/assets/logos/goldpartner.webp"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img sideimg2"></div>
        </div>
      </v-carousel-item> -->
    </v-carousel>
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
  max-width: 571px;
  line-height: 1.5em;
}

.home-slides .home-slide .text-area p {
  color: white;
  margin-top: 14px;
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
  width: 51vw;
  flex-basis: 51vw;
}

.home-slides .home-slide .side-img.image-area {
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
}
.sideimg1 {
  background: url("~/assets/images/STBanner.webp");
}
.sideimg2 {
  background: url("~/assets/images/secondbanner.webp");
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .home-slides {
    height: 80vh;
    overflow: hidden;
  }

  .home-slides .home-slide {
    height: 80vh;
  }
  .home-slide {
    flex-wrap: wrap;
  }
  .home-slides .home-slide .text-area,
  .home-slides .home-slide .image-area {
    width: 100vw;
    flex-basis: 100vw;
  }
  .home-slides .home-slide .text-area {
    padding: 20px;
    padding-bottom: 50px;
    order: 1;
  }

  .home-slides .home-slide .image-area {
    height: 90vw;
  }
}
</style>