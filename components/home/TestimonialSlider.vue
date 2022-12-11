<template>
  <div class="home-container testi-slider">
    <v-carousel
      :continuous="false"
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
        <div class="testi-slide">
          <div class="image-area">
            <img
              src="~/assets/logos/logo-salsoft.png"
              alt="Sticky Task Testimonial"
            />
          </div>
          <div class="text-area">
            <div class="inner-wrap">
              <p class="title">Testimonial</p>
              <h3>Your Words Motivate Us To Be Better!</h3>
              <p>
                We're satisfied with what Silicon Networks has done to help us
                reach our digital marketing goals. The team has a great sense of
                responsibility and work ethic. They are consistently ready to
                respond to our inquiries and address our concerns. We recommend
                Silicon Networks if you need help with a digital project.
              </p>
              <p class="client-name">Eddie Walker</p>
              <p>Salsoft Technologies</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="testi-slide">
          <div class="image-area">
            <img
              src="~/assets/logos/logo-hpp.png"
              alt="Sticky Task Testimonial"
            />
          </div>
          <div class="text-area">
            <div class="inner-wrap">
              <p class="title">Testimonial</p>
              <h3>Your Encouragement Drives Us to Excellence.</h3>
              <p>
                Silicon Network assisted us on-site with the creation of a CRM
                system for one of our fastest-growing product lines. The SN team
                has been extremely cooperative, and the project as a whole has
                been a tremendous success.
              </p>
              <p class="client-name">Mike Ross</p>
              <p>Half Price Packaging</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="testi-slide">
          <div class="image-area">
            <img
              src="~/assets/logos/logo-sc.png"
              alt="Sticky Task Testimonial"
            />
          </div>
          <div class="text-area">
            <div class="inner-wrap">
              <p class="title">Testimonial</p>
              <h3>Your Encouragement Drives Us to Excellence.</h3>
              <p>
                We were looking for a partnership with an organization that goes
                above and beyond to place qualified people on challenging
                projects. We were able to avoid obstacles and guarantee
                important customer deliverables by utilizing Silicon Network's
                knowledge and engineering prowess.
              </p>
              <p class="client-name">Ahmad Hayat</p>
              <p>Softception</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "TestimonialSlider",
};
</script>

<style scoped>
.testi-slider {
  margin: 50px auto;
}

.testi-slide {
  display: flex;
  padding: 50px 0px;
  gap: 50px;
}

.testi-slide .image-area {
  display: flex;
  align-items: center;
  flex-basis: 50%;
  width: 50%;
  justify-content: center;
}

.testi-slide .image-area img {
  width: 350px;
}

.testi-slide .text-area {
  flex-basis: 50%;
  width: 50%;
  display: flex;
  align-items: start;
}

.testi-slide .text-area .inner-wrap {
  width: 500px;
}

.testi-slide .text-area p {
}
.testi-slide .text-area p.title {
  font-size: 20px;
}
.testi-slide .text-area p.client-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 40px;
}

.testi-slide .text-area h3 {
  font-size: 40px;
  color: #091756;
  margin-top: 15px;
  margin-bottom: 30px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .testi-slide {
    flex-wrap: wrap;
    padding: 20px 0px;
  }
  .testi-slide .text-area h3 {
    font-size: 24px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .testi-slide .text-area p.title {
    font-size: 16px;
  }
  .testi-slide .text-area p.client-name {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .testi-slide .text-area {
    width: 100%;
    flex: 1;
  }

  .testi-slide .image-area {
    width: 100%;
    flex: 1;
  }

  .testi-slide .image-area img {
    width: 100px;
  }
}
</style>