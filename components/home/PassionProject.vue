<template>
  <div class="pp-container" :style="inlineStyle">
    <div class="contain">
      <h2>Let's convert your passion project into an ultimate reality today!</h2>
      <template>
        <a href="#contact-form"  class="explore-link">Get in Touch</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassionProject",
  computed: {
    bgImage() {
      return require("@/assets/images/" + "pp.png");
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style  scoped>
.pp-container {
  height: 30vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
}
.contain {
  margin-left: 80px;
}

.explore-link{
  font-size: 22px;
  font-weight: bold;
  color: #F23801;
}

.pp-container h2 {
  margin-bottom: 30px;
  color: #091756;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .contain {
    margin-left: 20px;
  }

  .pp-container h1 {
    width: 100%;
  }
}
</style>
