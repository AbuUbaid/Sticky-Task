<template>
  <div class="secpage-values home-container">
    <div class="intro-text">
      <p>{{ Values.title }}</p>
      <h2>{{ Values.heading }}</h2>
      <p>
        {{ Values.paragraph }}
      </p>
    </div>
    <div class="values-four">
      <div v-for="(value, i) in Values.cards" :key="i" class="t-four">
        <img :src="imgUrl(value.img)" alt="t-four" />
        <h4>{{ value.heading }}</h4>
        <p>
          {{ value.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context("../../assets/icons/", false, /\.svg$/);
export default {
  name: "AboutValues",
  props: {
    Values: {
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

.intro-text {
  max-width: 700px;
}

.intro-text h2 {
  color: #091756;
  font-size: 40px;
  margin: 15px 0;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10%;
  margin-top: 45px;
}

.values-four .t-four {
  width: 17%;
  margin-top: 25px;
}

.values-four h4 {
  margin: 10px 0px;
}

.secpage-images {
  display: flex;
  flex-wrap: wrap;
  background: #fbfbfb 0% 0% no-repeat padding-box;
  opacity: 1;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.secpage-images .fi-first {
  margin: 0;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-values {
    margin-top: 50px;
  }

  .intro-text {
    max-width: 700px;
  }

  .intro-text h2 {
    color: #091756;
    font-size: 28px;
    margin: 15px 0;
  }

  .values-four {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10%;
    margin-top: 0px;
    flex-wrap: wrap;
  }

  .values-four .t-four {
    width: 45%;
    margin-top: 25px;
  }

  .values-four h4 {
    margin: 10px 0px;
  }

  .secpage-images {
    display: flex;
    flex-wrap: wrap;
    background: #fbfbfb 0% 0% no-repeat padding-box;
    opacity: 1;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }

  .secpage-images .fi-first {
    margin: 0;
  }
}
</style>