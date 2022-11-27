<template>
  <div class="home-container hardware-container">
    <h2>Our Hardware Solutions</h2>
    <p>The largest hardware & pc components supplier in the US</p>
    <div class="companies">
      <a href="https://harddiskdirect.com/" target="_blank"
        ><img src="~/assets/logos/hddlogo.webp" alt="Hard Disk Direct logo"
      /></a>
      <a href="https://memoryclearance.com/" target="_blank"
        ><img src="~/assets/logos/mclogo.webp" alt="Memory clearance logo"
      /></a>
      <a href="https://www.itechdevices.ae/" target="_blank"
        ><img src="~/assets/logos/itechlogo.webp" alt="iTech Devices logo"
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
    justify-content: space-between;
    img {
      width: 250px;
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