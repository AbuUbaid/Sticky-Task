<template>
  <div class="home-container solution-features">
    <h2 class="text-center">{{ Features.heading }}</h2>
    <p class="text-center">
      {{ Features.desc }}
    </p>
    <div class="cards">
      <div class="card" v-for="(card, index) in Features.cards" :key="index">
        <h4>
          <span>{{ index + 1 }}</span> {{ card.heading }}
        </h4>
        <p>
          {{ card.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionFeatures",
  props: {
    Features: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.solution-features {
  margin-top: 50px;
  margin-bottom: 50px;
  h2 {
    color: black;
  }
  > p {
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    justify-content: center;

    .card {
      border: 0.5px solid #707070;
      border-radius: 12px;
      padding: 20px;
      width: 31%;
      margin-bottom: 2%;

      h4 {
        color: #ef861d;
        font-size: 20px;
        font-family: "Gilroy-Regular";
        font-weight: 400;
        display: flex;
        align-items: center;
        span {
          margin-right: 15px;
          color: white;
          background-color: #091756;
          width: 40px;
          height: 40px;
          font-size: 20px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        font-size: 18px;
        margin-top: 20px;
      }
    }
  }
}
</style>