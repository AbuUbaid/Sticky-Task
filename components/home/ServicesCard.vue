<template>
  <div id="third">
    <div class="background"></div>
    <div class="third-text home-container">
      <div class="third-img1"></div>
      <div class="third-img2"></div>
      <div class="t-left">
        <p id="head">Our Services</p>
        <h2>Let's Level Up Your Business Together</h2>
        <p>We create effective road-map for your success</p>
        <NuxtLink to="/contact" class="cta-orange">Let's Talk</NuxtLink>
      </div>
      <div class="t-right values-four">
        <NuxtLink to="/services/digital" class="t-four">
          <img src="~/assets/icons/digital.svg" alt="Digital Logo" />
          <h4>Digital</h4>
          <p>
            Create digital Infrastructures, Design websites and make an online
            impact.
          </p>
        </NuxtLink>
        <NuxtLink to="/services/devops" class="t-four">
          <img src="~/assets/icons/devops.svg" alt="Dev Ops" />
          <h4>Dev-Ops And Cloud</h4>
          <p>
            Best Cloud Services, Cloud consult, transformation, security service
            and management.
          </p>
        </NuxtLink>
        <NuxtLink to="/services/microsoft" class="t-four">
          <img src="~/assets/icons/ms.svg" alt="Microsoft Logo" />
          <h4>Microsoft Services</h4>
          <p>
            Assessing technological framework and business objective with
            Microsoft Azure and Dynamics.
          </p>
        </NuxtLink>
        <NuxtLink to="/services/bpo" class="t-four">
          <img src="~/assets/icons/bpaas.svg" alt="BPAAS Logo" />
          <h4>BPAAS</h4>
          <p>
            We have industry professionals that have viable experience in
            understanding and evaluating the BPAAS trends.
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
};
</script>

<style  scoped>
#third {
  padding: 0;
  min-height: 680px;
  padding-bottom: 50px;
  margin-bottom: 50px;
  overflow: hidden;
}

.background {
  background-color: #eef5ff;
  width: 100%;
  height: 250px;
  margin-bottom: -160px;
}

#third:before {
  height: 250px;
  background-color: red;
}

.third-text {
  position: relative;
  display: flex;
  background-color: white;
  box-shadow: 0px 12px 23px #00000017;
  z-index: 2;
  padding: 50px;
}

.third-text h2 {
  color: #091756;
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 50px;
}

.t-left {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.t-right {
  width: 65%;
  padding: 20px;
  padding-top: 0;
}

.t-right .t-four {
  width: 43% !important;
}

.t-four {
  color: black;
}
.t-four img {
  width: 64px;
  height: 64px;
}

.t-four h4 {
  margin-top: 15px;
  margin-bottom: 20px;
  color: #091756;
}

.third-text a.cta-orange {
  margin-top: 35px;
}

.third-img1 {
  background: url("~/assets/images/shape1.svg");
  position: absolute;
  bottom: 0;
  left: -101px;
  width: 148px;
  height: 199px;
  background-repeat: no-repeat;
  background-size: contain;
}

.third-img2 {
  background: url("~/assets/images/shape2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  width: 166px;
  height: 154px;
  position: absolute;
  top: -93px;
  right: -65px;
  z-index: -1;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  margin-top: 0px;
  margin-bottom: 0;
}

.values-four .t-four {
  width: 17%;
  margin-top: 25px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  #third {
    padding-bottom: 30px;

    margin-bottom: 0px;
  }
  .third-text {
    flex-direction: column;
    padding: 30px 20px;
  }

  .third-text h2 {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .third-img2 {
    width: 130px;
    height: 95px;
  }

  .t-left {
    width: 100%;
  }

  .t-right {
    width: 100%;
    padding: 0;
    margin-top: 30px;
  }

  .third-text a.cta-orange {
    margin-top: 15px;
  }

  .t-four img {
    width: 40px;
    height: 40px;
  }
  .t-four h4 {
    margin-top: 5px;
    margin-bottom: 10px;
  }
}
</style>