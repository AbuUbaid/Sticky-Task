<template>
  <div class="secpage-values home-container">
    <div class="intro-text">
      <p class="text-center">{{ Impact.title }}</p>
      <h2 class="text-center">{{ Impact.heading }}</h2>
    </div>
    <div class="values-four">
      <div v-for="icon in Impact.icons" :key="icon" class="t-four">
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
      type: Array,
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
  margin: 80px auto;
}

.intro-text h2 {
  font-size: 40px;
  margin: 10px 0;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10%;
  margin-top: 45px;
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
</style>