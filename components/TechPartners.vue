<template>
  <div class="partner-platforms">
    <div class="home-container">
      <div>
        <div class="ei-one">
          <h2>TECHNOLOGY PLATFORMS</h2>
        </div>
        <div class="ei-two">
          <img src="~/assets/logos/partnerLogo.jpg" alt="Partner Logos" />
        </div>
      </div>
    </div>
    <img src="~/assets/images/shape4.svg" alt="Shape" class="yellow" />
  </div>
</template>

<script>
export default {
  name: "TechPartners",
};
</script>

<style scoped>
.partner-platforms {
  padding: 50px 0;
  background: #f1f1f1;
  position: relative;
  margin: 50px 0;
}

.partner-platforms h2 {
  margin-bottom: 40px;
  font-size: 35px;
  color: #091756;
}

.yellow {
  position: absolute;
  left: 0px;
  bottom: 0;
  width: 50px;
}

.ei-two img {
  width: 100%;
}
</style>