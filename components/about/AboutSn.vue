<template>
  <div class="secpage-donut home-container">
    <div class="donut">
      <img src="~/assets/images/donut.jpg" alt="donut" />
    </div>
    <div class="donut-text">
      <p>
        Our mission is to create an ecosystem of scalable and broad software and
        IoT-enabled solutions which upholds a precedent of excellence for the
        industry.<br /><br />
        We firmly believe that transforming the roadmap of success for digital
        business is not a delightful route, that is why we have come prepared.
        Our persistence commitment to innovation and growth kept us going.
      </p>
      <div class="donut-logo">
        <img src="~/assets/icons/market.svg" alt="donut-logo" />
        <h3>AFFLUENT MARKETPLACE EXPERIENCE</h3>
      </div>
      <div class="donut-logo">
        <img src="~/assets/icons/global-network.svg" alt="donut-logo" />
        <h3>GLOBAL FOOTPRINT</h3>
      </div>
      <div class="donut-logo">
        <img src="~/assets/icons/support.svg" alt="donut-logo" />
        <h3>MISSION CRITICAL SUPPORT</h3>
      </div>
      <div class="donut-logo">
        <img src="~/assets/icons/excellence.svg" alt="donut-logo" />
        <h3>EXCELLENCE</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSn",
};
</script>

<style scoped>
.secpage-donut {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfb 0% 0% no-repeat padding-box;
  opacity: 1;
  gap: 30px;
}

.secpage-donut .donut,
.secpage-donut .donut-text {
  flex-basis: 50%;
  width: 50%;
}

.secpage-donut .donut img {
  width: 550px;
}

.donut-logo {
  display: flex;
  gap: 47px;
  margin: 15px 0;
  font-weight: 900;
}

.donut-text p {
  margin-bottom: 45px;
}

.donut-logo img {
  width: 40px;
  height: 40px;
}

.secpage-values {
  margin-top: 50px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-donut {
    margin-bottom: 30px;
    flex-wrap: wrap;
    margin-top: 50px;
  }

  .secpage-donut .donut,
  .secpage-donut .donut-text {
    flex-basis: 100%;
    width: 100%;
  }

  .secpage-donut .donut img {
    width: 100%;
  }

  .donut-logo {
    display: flex;
    gap: 30px;
    margin: 15px 0;
    font-weight: 900;
  }

  .donut-text p {
    margin-bottom: 45px;
  }

  .donut-logo img {
    width: 30px;
    height: 30px;
  }
  .donut-logo h3 {
    font-size: 18px;
  }

  .secpage-values {
    margin-top: 50px;
  }
}
</style>