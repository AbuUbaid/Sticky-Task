<template>
  <div :class=" Impact?.url == '#' ?  'verify-secpage-devops' : 'verify-secpage-values'">
    <div class="intro-text">
      <h2 class="text-center">{{ Impact ? Impact.heading : ''}} {{ icon?.url }}</h2>
      <P class="text-center subtext">{{ Impact ? (Impact.text ? Impact.text : '') : ''}}</P>
    </div>
    <div v-if="Impact?.url == '#!1' " class="mid-count">
        <div class="one">1</div>
        <div class="line"><hr class="divider"></div>
        <div class="one">2</div>
        <div class="line"><hr class="divider"></div>
        <div class="one">3</div>
    </div>
    <div class="values-four">
      <div v-for="(icon, i) in (Impact ? Impact?.icons : [])" :key="i" class="t-four">
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
var images = require.context("../../assets/icons/", false, /\.png$/);
export default {
  name: "Verification",
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

<style lang="scss" scoped>
.hire-dev{
  h2{
  width:50%;
  margin:auto !important;
  margin-bottom: 14px !important;
  }
.subtext{
  width:50%;
  margin:auto;
}
.values-four {
  display: flex;
  justify-content: center !important;
  gap: 40px;
  margin-top: 45px;
}
}
.verify-secpage-values {
  background-color: #ECF0FF;
  padding: 50px;
}
.verify-secpage-devops{
  background-color: #fff;
  padding: 50px;
}

.intro-text h2 {
  font-size: 40px;
  margin: 10px 0;
}
.mid-count{
    display: flex;
    gap:50px;
    margin-top: 30px;
    justify-content: center;

    .one{
      text-align: center;
      background-color: #EF861D;
      font-size: 36px;
      font-weight: bold;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      color: white;
    }
    .line{
      width: 25%;
      margin-top: 18px;

      .divider{
        border: 1px solid gray;
      }
    }
  }
.values-four {
  display: flex;
  justify-content: left;
  gap: 40px;
  margin-top: 45px;
}

.values-four .t-four {
  width: 25%;
  margin-top: 10px;
  margin-bottom: 40px;
  align-items: center;
  text-align: center;
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
  .mid-count{
   gap: 8px;
  }
  .hire-dev{
    margin: 0px !important;
    padding: 22px !important;
  h2{
  width:100%;
  }
.subtext{
  width:100%;
}
.values-four {
  justify-content: center !important;
}
}
  .verify-secpage-values {
    margin: 30px auto;
  }
  .verify-secpage-devops{
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
    width: 90%;
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