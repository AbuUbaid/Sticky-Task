<template>
  <div class="banner-container home-slides">
    <v-carousel
      :continuous="true"
      :cycle="true"
      :show-arrows="false"
      height="100vh"
    >
      <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>
              We Ideate, Innovate, & Inspire Technology Solutions
            </h1>
            <p>Enterprises . Growth Companies . Startups</p>
            <a href="#contact-form" class="explore-link"
              >Build The Best Now</a>
            <img
              src="~/assets/logos/goldpartner.webp"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img sideimg1"></div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="home-slide">
          <div class="text-area">
            <h1>Let’s whip you up an engineering team.</h1>
            <NuxtLink to="/contact" class="explore-link"
              >Book An Appointment   </NuxtLink
            >
            <img
              src="~/assets/logos/goldpartner.webp"
              alt="Microsoft Gold Partner"
            />
          </div>
          <div class="image-area side-img sideimg2"></div>
        </div>
      </v-carousel-item>
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
  padding-bottom: 150px;
}

.home-slides .home-slide .text-area h1 {
  color: white;
  max-width: 571px;
  line-height: 1.5em;
  font-size: 40px;
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
  flex-basis: 53vw;
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
  background: url("~/assets/images/main-page.webp");
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
  .home-slides .home-slide .text-area h1 {
  font-size: 20px !important;
}

  .home-slides .home-slide .image-area {
    height: 90vw;
  }
}
</style>