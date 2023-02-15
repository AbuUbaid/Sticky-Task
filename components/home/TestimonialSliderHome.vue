<template>
  <div class="home-container testi-slider">
    <h2>Testimonials</h2>
      
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
      <div class="testi-monial-slider">
        <div class="testi-slide" >
          <div class="text-area" >
            <div class="inner-wrap" style="padding: 0.9rem 1.9rem 2rem;">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                We're satisfied with what Silicon Networks has done to help us
                reach our digital marketing goals. We recommend Silicon Networks if you need help with a digital project.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Eddie Walker</p>
              <p>Salsoft Technologies</p>
            </div>
          </div>
        </div>
        <div class="testi-slide">
          <div class="text-area">
            <div class="inner-wrap">
              <p>
                I don’t even know where to begin - Silicon Networks added a level of simplicity to our remote hiring process, that we didn’t know even existed.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Vaani Gupta</p>
              <p>People Psyence®</p>
            </div>
          </div>
        </div>
      </div>
      <div class="testi-slide mobile-slider" >
          <div class="text-area" >
            <div class="inner-wrap" style="padding: 0.9rem 1.9rem 2rem;">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                We're satisfied with what Silicon Networks has done to help us
                reach our digital marketing goals. We recommend Silicon Networks if you need help with a digital project.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Eddie Walker</p>
              <p>Salsoft Technologies</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="testi-monial-slider">
        <div class="testi-slide">
          <div class="text-area">
            <div class="inner-wrap">
              <p>
                I don’t even know where to begin - Silicon Networks added a level of simplicity to our remote hiring process, that we didn’t know even existed.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Vaani Gupta</p>
              <p>People Psyence®</p>
            </div>
          </div>
        </div>
        <div class="testi-slide">
          <div class="text-area">
            <div class="inner-wrap">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                It’s a really big deal to offer what Silicon Networks claimed. 5 months in and the operational ease we’re experiencing is indescribable.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Cristopher Kummer</p>
              <p>IMAA</p>
            </div>
          </div>
        </div>
      </div>
      <div class="testi-slide mobile-slider">
          <div class="text-area">
            <div class="inner-wrap">
              <p>
                I don’t even know where to begin - Silicon Networks added a level of simplicity to our remote hiring process, that we didn’t know even existed.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Vaani Gupta</p>
              <p>People Psyence®</p>
            </div>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div class="testi-monial-slider">
          <div class="testi-slide">
          <div class="text-area">
            <div class="inner-wrap">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                It’s a really big deal to offer what Silicon Networks claimed. 5 months in and the operational ease we’re experiencing is indescribable.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Cristopher Kummer</p>
              <p>IMAA</p>
            </div>
          </div>
        </div>
        <div class="testi-slide" >
          <div class="text-area">
            <div class="inner-wrap" style="padding: 0.9rem 1.9rem 2rem;">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                We're satisfied with what Silicon Networks has done to help us
                reach our digital marketing goals. We recommend Silicon Networks if you need help with a digital project.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Eddie Walker</p>
              <p>Salsoft Technologies</p>
            </div>
          </div>
        </div>
        </div>
      <div class="testi-slide mobile-slider">
          <div class="text-area">
            <div class="inner-wrap">
              <!-- <p class="title">Testimonial</p> -->
              <p>
                It’s a really big deal to offer what Silicon Networks claimed. 5 months in and the operational ease we’re experiencing is indescribable.
              </p>
            </div>
            <div class="client-inner-wrap">
              <p class="client-name">Cristopher Kummer</p>
              <p>IMAA</p>
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
.testi-slider h2{
  text-align: center;
  margin-top: 50px;
}
.mobile-slider{
  display: none !important;
}
.testi-monial-slider{
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
}
.testi-slider{
  margin-bottom: -90px;
}
.testi-slide {
  display: flex;
  padding: 50px 0px;
  gap: 50px;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
}

.testi-slide .text-area .inner-wrap {
  width: 500px;
  display: flex;
  border-radius: 25px;
  box-shadow: 0 10px 40px 0 rgb(22 90 140 / 10%);
  padding: 1.9rem 1.9rem 3rem;
}

.testi-slide .text-area .inner-wrap p {
  margin-top: 0px;
  margin-bottom: 5px;
  color: #263238;
  font-size: 1.1rem;
  line-height: 1.6;
  letter-spacing: 0px;
  text-shadow: none;
}
.testi-slide .text-area p.title {
  font-size: 20px;
}
.client-name {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 40px;
}

.client-inner-wrap{
  text-align: center;
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
  .testi-monial-slider{
    display: none !important;
  }
  .mobile-slider{
    display: flex !important;
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
  
  /* .testi-slide .text-area {
    width: 100%;
    flex: 1;
  } */
   
  .testi-slide .text-area .inner-wrap {
  text-align: center;
  width: 412px;
}
}
</style>