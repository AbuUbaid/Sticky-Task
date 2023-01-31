<template>
  <div class="pp-container" :style="inlineStyle">
    <div class="contain">
      <p>Silicon Network attended the Affiliate World Conference, which brought together top affiliate marketing companies and innovators. Conferences, workshops, and networking were abundant. Experts taught attendees new techniques and business connections. Silicon Network learned about affiliate marketing trends and networked. Silicon Network was inspired and motivated by keynote speakers and other attendees and plans to apply the learning to their business.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PassionProject",
  computed: {
    bgImage() {
      return require("@/assets/images/" + "AW.webp");
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
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  text-align: center;
}

.contain {
  margin-left: 177px;
  text-align: center;
}

.contain  p{
    margin-top: 40%;
    text-align: center;
    color: #fff;
    max-width: 80%;
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
  .contain  p{
    margin-top: 80%;
    max-width: 98%;
  }
}
</style>
