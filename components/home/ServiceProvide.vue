<template>
  <div :class=" Impact?.url == '#' ?  'service-provide' : 'verify-secpage-values'">
    <div class="intro-text">
      <h2 class="text-center">{{ Impact ? Impact.heading : ''}} {{ icon?.url }}</h2>
    </div>
    <div class="values-four">
      <div v-for="(icon, i) in (Impact ? Impact.icons : [])" :key="i" class="t-four">
        <h4>{{ icon.heading }}</h4>
        <p>
          {{ icon.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceProvide",
  props: {
    Impact: {
      type: Object,
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.verify-secpage-values {
  background-color: #EF861D66;
  padding: 50px;
}
.service-provide{
  background-color: #EF861D66;
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
  width: 25%;
  margin-top: 10px;
  margin-bottom: 40px;
  align-items: left;
  text-align: left;
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
  .service-provide{
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