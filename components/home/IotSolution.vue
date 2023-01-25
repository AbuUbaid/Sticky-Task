<template>
  <div :class=" Impact?.url == '#' ?  'iot-solution' : 'verify-secpage-values'">
    <div class="intro-text">
      <h2 class="text-center">{{ Impact ? Impact.heading : ''}} {{ icon?.url }}</h2>
    </div>
    <div class="values-four">
      <div v-for="(icon, i) in (Impact ? Impact.icons : [])" :key="i" class="t-four">
        <img :src="imgUrl(icon.img)" alt="t-four" />
        <h4>{{ icon.heading }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context("../../assets/icons/", false, /\.png$/);
export default {
  name: "ServiceProvide",
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
.verify-secpage-values {
  background-color: #ECF0FF;
  padding: 50px;
}
.iot-solution{
  background-color: #ECF0FF;
  padding: 50px;
}

.intro-text h2 {
  font-size: 40px;
  margin: 10px 0;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin-top: 45px;
  
}

.values-four .t-four {
  width: 17%;
  margin-top: 10px;
  margin-bottom: 40px;
  padding: 50px;
  align-items: left;
  text-align: center;
  background: transparent linear-gradient(180deg, #CCD2EB 0%, #939CC4 100%) 0% 0% no-repeat padding-box;
  border-radius: 40px;
  opacity: 1;
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
  .verify-secpage-values {
    margin: 30px auto;
  }
  .iot-solution{
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