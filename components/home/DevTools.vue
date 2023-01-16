<template>
  <div class="home-container hardware-container">
    <div class="digital-solutions">
      <h2 class="text-center">Devops Tools We Leverage</h2>
      <img src="~/assets/icons/tools1.svg" alt="Ecommerce Solutions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HardwarePartners",
};
</script>

<style lang="scss" scoped>
.hardware-container {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }
  p {
  }
  .companies {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 90px;
    img {
      width: 110px;
    }
  }
  .digital-solutions {
  padding: 50px;
  text-align: center;
  h2 {
    color: black;
    margin-bottom: 50px;
  }
  img {
    width: 90%;
  }
}
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .hardware-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
    .companies {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      a {
        display: block;
        text-align: center;
        img {
          width: 200px;
        }
      }
    }
    .digital-solutions {
    padding: 20px;
    text-align: center;
    h2 {
      color: black;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }
  }
}
</style>