<template>
  <div id="second">
    <div class="home-container">
      <h2>{{ Metrics.heading }}</h2>
      <p>
        {{ Metrics.desc }}
      </p>
      <div class="three">
        <div v-for="icon in Metrics.icons" :key="icon" class="count">
          <p>{{ icon.heading }}</p>
          <h4>{{ icon.value }}</h4>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetricsCounter",
  props: {
    Metrics: {
      type: Array,
    },
  },
};
</script>

<style scoped>
#second {
  text-align: center;
  color: #091756;
  padding-bottom: 50px;
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

.count:not(:last-child) {
  border-right: 0.5px solid #707070;
}
</style>