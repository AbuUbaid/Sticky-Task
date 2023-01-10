<template>
  <div class="secpage-values home-container">
    <div class="intro-text">
      <h2 class="text-center">{{ Impact ? Impact.heading : ''}}</h2>
    </div>
    <div class="values-four">
      <div v-for="(icon, i) in (Impact ? Impact.icons : [])" :key="i" class="t-four">
        <img :src="imgUrl(icon.img)" alt="t-four" />
        <h4>{{ icon.heading }}</h4>
        <p>
          {{ icon.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context("../../assets/icons/", false, /\.svg$/);
export default {
  name: "ImpactIcons",
  props: {
    Impact: {
      type: Object,
    },
  },
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
  },
};
</script>

<style scoped>
.secpage-values {
  margin-top: 50px;
}

.intro-text h2 {
  font-size: 40px;
  margin: 10px 0;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 45px;
  justify-content: space-between;
}

.values-four .t-four {
  width: 25%;
  margin-top: 10px;
  margin-bottom: 40px;
}

.values-four h4 {
  margin: 10px 0px;
}

.values-four .t-four img {
  width: 60px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-values {
    margin: 30px auto;
  }

  .intro-text h2 {
    font-size: 28px;
    margin: 10px 0;
  }

  .values-four {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5%;
    margin-top: 25px;
  }

  .values-four .t-four {
    width: 47%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .values-four h4 {
    margin: 10px 0px;
  }

  .values-four .t-four img {
    width: 60px;
  }
}
</style>