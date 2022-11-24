<template>
  <div class="secpage-seven home-container">
    <p class="title text-center">Industry Specialization</p>
    <h2 class="text-center">
      Serving The Best Tech Solution In Every Walk Of Life
    </h2>
    <!-- <a
      class="single-card"
      :href="card.link"
      :key="card"
      v-for="card in Cards"
      >{{ card.title }}</a
    >  -->

    <NuxtLink to="/industry/retail" class="single-card">CPG & Retail</NuxtLink>
    <NuxtLink to="/industry/government" class="single-card"
      >Government</NuxtLink
    >
    <NuxtLink to="/industry/e-commerce" class="single-card"
      >Apparel & Footwear</NuxtLink
    >
    <NuxtLink to="/industry/manufacturing" class="single-card"
      >Manufacturing & Retail</NuxtLink
    >
    <NuxtLink to="/industry/finance" class="single-card"
      >Insurance & Financial Services</NuxtLink
    >
    <NuxtLink to="/industry/food" class="single-card">Food & Beverage</NuxtLink>
    <NuxtLink to="/industry/pharma" class="single-card"
      >Pharmaceutical</NuxtLink
    >
  </div>
</template>

<script>
export default {
  name: "SolutionCards",
  props: {
    Cards: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.secpage-seven {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 15px;
  margin: 50px auto;
}

.secpage-seven .title {
  width: 100%;
}

.secpage-seven h2 {
  color: #091756;
  width: 100%;
  margin-bottom: 50px;
}

.secpage-seven .single-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 142px;
  background: #f6f6f6 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  text-transform: capitalize;
  transition: all 0.3s ease;
  color: black;
  font-family: "Gilroy-Medium";
}
/* 
.single-card.hover:hover {
  color: white;
  font-size: 25px;
  background: url("assets/Hero_GoogleCloud_LeftSpace.png");
  border: 1px solid #707070;
  opacity: 0.47;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;
} */

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-seven {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 15px;
    margin: 30px auto;
  }

  .secpage-seven .title {
    width: 100%;
  }

  .secpage-seven h2 {
    color: #091756;
    width: 100%;
    margin-bottom: 30px;
  }

  .secpage-seven .single-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 47%;
    height: 142px;
    background: #f6f6f6 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    text-transform: capitalize;
    transition: all 0.3s ease;
  }
}
</style>