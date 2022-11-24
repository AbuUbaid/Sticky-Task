<template>
  <div class="building-cta">
    <div class="text-area">
      <h2>Next Starts Now</h2>
      <NuxtLink to="/contact" class="explore-link">Business Inquiries</NuxtLink>
      <NuxtLink to="/careers" class="explore-link">Job Openings</NuxtLink>
      <NuxtLink to="/contact" class="explore-link">Media Inquiries</NuxtLink>
    </div>
    <div class="image-area">
      <img src="~/assets/images/building.jpg" alt="Silicon Networks Office" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BuildingCta",
};
</script>

<style scoped>
.building-cta {
  margin: 50px 0px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
}

.building-cta .image-area {
  flex-basis: 70%;
}

.building-cta .image-area img {
  width: 100%;
}

.building-cta .text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.building-cta .text-area h2 {
  margin-bottom: 40px;
}

.building-cta .text-area a {
  color: #ef861d;
  font-size: 20px;
  border-color: #ef861d;
  margin-bottom: 15px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .building-cta {
    padding: 30px 20px;
    margin: 0;
    flex-wrap: wrap;
  }

  .building-cta .text-area {
    margin-bottom: 30px;
  }
  .building-cta .text-area a {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .building-cta .text-area h2 {
    margin-bottom: 20px;
  }

  .building-cta .image-area {
    flex-basis: 100%;
  }
}
</style>