<template>
  <div class="home-container hardware-container">
    <h2>Devops Tools We Leverage</h2>
    <div class="companies">
      <a  target="_blank"
        ><img src="~/assets/logos/jenkins.jpg"
      /></a>
      <a target="_blank"
        ><img src="~/assets/logos/selenium.jpg"
      /></a>
      <a  target="_blank"
        ><img src="~/assets/logos/docker.jpg"
      /></a>
      <a  target="_blank"
        ><img src="~/assets/logos/puppet.jpg"
      /></a>
      <a target="_blank"
        ><img src="~/assets/logos/azure.jpg"
      /></a>
      <a  target="_blank"
        ><img src="~/assets/logos/kubernetes.jpg"
      /></a>
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
  }
}
</style>