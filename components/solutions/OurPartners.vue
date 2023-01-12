<template>
  <div class="home-container partners">
    <h2>Our Partners</h2>
    <p>
      Organizations need a partner that will solve their problems for today and
      transform them to stay relevant with the changing demands of the
      marketplace. Through strategy and delivery of technology and engineering.
    </p>
    <div class="logos">
        <div class="logo">
          <img src="~/assets/logos/netflix.svg" alt="netflix logo" />
        </div>
        <div class="logo">
          <img src="~/assets/logos/p3.svg" alt="pepsico logo" />
        </div>
        <div class="logo">
          <img src="~/assets/logos/p5.svg" alt="hp logo" />
        </div>
        <div class="logo">
          <img src="~/assets/logos/samsung.svg" alt="samsung logo" />
        </div>
        <div class="logo">
          <img src="~/assets/logos/p7.svg" alt="citrix logo" />
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "OurPartners",
};
</script>

<style lang="scss" scoped>
.partners {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  h2 {
    color: black;
  }
  p {
    max-width: 1000px;
    margin: 15px auto;
    margin-bottom: 30px;
  }
}

.logos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  .logo {
    img {
      width: 100%;
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .partners {
    p {
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }
  .logos {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>