<template>
  <div id="second">
    <div class="home-container">
      <div class="three">
        <div v-for="(item, i) in IndustryC.items" :key="i" class="count">
          <p>{{ item.heading }}</p>
          <h4>{{ item.value }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryCounter",
  props: {
    IndustryC: {
      type: Object,
    },
  },
};
</script>

<style scoped>
#second {
  margin-bottom: 50px;
  text-align: center;
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

.count:nth-child(2) {
  border-left: 0.5px solid #707070;
  border-right: 0.5px solid #707070;
}
.count:nth-child(4) {
  border-left: 0.5px solid #707070;
  border-right: 0.5px solid #707070;
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
}

@media (max-width: 480px) {
  .three {
    flex-wrap: wrap;
}
  .count:nth-child(2) {
    border: none;
  }
  .count:nth-child(4) {
    border: none;
  }
}
</style>