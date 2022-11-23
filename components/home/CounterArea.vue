<template>
  <div id="second">
    <div class="home-container">
      <h2>{{ counterData.heading }}</h2>
      <p>{{ counterData.subheading }}</p>
      <div class="three">
        <div
          class="count"
          v-for="counter in counterData.counters"
          :key="counter"
        >
          <p>{{ counter.text }}</p>
          <h4>{{ counter.number }}</h4>
        </div>
      </div>
      <div class="logos">
        <div class="logo">
          <img src="~/assets/logos/logos.jpg" alt="Client Logos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterArea",
  props: {
    counterData: {
      type: Object,
    },
  },
};
</script>

<style scoped>
#second {
  background: #ecf5ff;
  text-align: center;
  color: #091756;
  padding: 50px 0px;
  width: 100%;
}

#second h4 {
  padding-top: 15px;
  font-size: 50px;
}

#second p {
  margin-top: 15px;
  font-size: 16px;
  color: black;
}

.three {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.count {
  padding: 1% 6%;
  margin-top: 2%;
}

.count p {
  font-size: 25px;
  margin-bottom: 0px;
}

.count h4 {
  color: rgb(239, 134, 29);
  font-size: 50px;
  font-family: "Gilroy-Bold";
}

/* .count:not(:last-child) */

.count:nth-child(2) {
  border-right: 0.5px solid #707070;
  border-left: 0.5px solid #707070;
}

.logos {
  display: flex;
  align-items: center;
  margin: 25px auto 0;
  justify-content: space-between;
  width: 80%;
}

.logos img {
  width: 100%;
}

@media (min-width: 481px) and (max-width: 1024px) {
  #second {
    padding: 30px 0px;
  }

  .count h4 {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  #second {
    padding: 30px 0px;
  }

  .count h4 {
    font-size: 30px;
  }

  .three {
    flex-wrap: wrap;
  }

  .count:nth-child(2) {
    border: 0;
    border-top: 0.5px solid #707070;
    border-bottom: 0.5px solid #707070;
  }
}
</style>