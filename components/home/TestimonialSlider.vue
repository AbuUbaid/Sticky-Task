<template>
  <div class="home-container testi-slider">
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
        <div class="testi-slide">
          <div class="image-area">
            <img
              src="~/assets/images/testi1.svg"
              alt="Sticky Task Testimonial"
            />
          </div>
          <div class="text-area">
            <div class="inner-wrap">
              <p class="title">Testimonial2</p>
              <h3>Your Words Motivate Us To Be Better!</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </p>
              <p class="client-name">John Doe</p>
              <p>Co-Founder Of Salsoft</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="testi-slide">
          <div class="image-area">
            <img
              src="~/assets/images/testi1.svg"
              alt="Sticky Task Testimonial"
            />
          </div>
          <div class="text-area">
            <div class="inner-wrap">
              <p class="title">Testimonial</p>
              <h3>Your Words Motivate Us To Be Better!</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </p>
              <p class="client-name">John Doe</p>
              <p>Co-Founder Of Salsoft</p>
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
</style>