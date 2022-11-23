<template>
  <div class="home-container partners">
    <h2>Our Partners</h2>
    <p>
      Organizations need a partner that will solve their problems for today and
      transform them to stay relevant with the changing demands of the
      marketplace. Through strategy and delivery of technology and engineering.
    </p>
    <img src="~/assets/logos/partners1.svg" alt="Partners Logo" />
    <img src="~/assets/logos/partners2.svg" alt="Partners Logo" />
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
}
</style>