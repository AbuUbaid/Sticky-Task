<template>
  <div class="home-container top-notch-container">
    <h2>Turn the requirements of your company into a top-notch software product.</h2>
    <div class="clients">
      <div class="clients-card">
        <div class="client-logo">
          <img src="~/assets/images/topnotch1.jpg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Website App Development</h2>
        </div>
        <div class="client-description">
          <p>We use the latest technologies and platforms to make new web products with strong backends and easy-to-use front ends.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="client-logo">
          <img src="~/assets/images/topnotch2.jpg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Mobile App Development</h2>
        </div>
        <div class="client-description">
          <p>Our engineers work to develop the greatest business solution by utilizing the ideal SDLC tools and processes, whether it is native or cross-platform software.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HardwarePartners",
};
</script>

<style lang="scss" scoped>
.top-notch-container {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }  .clients {
    margin-top: 50px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    .clients-card{
      background: #ECF5FF 0% 0% no-repeat padding-box;
      border: 1px dashed #091756;
      border-radius: 15px;
      opacity: 1;
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 40px;
      width: 49%;
      align-items: left;
      margin-bottom: 30px;
      .red {
        background-color: #FFEFEE;
      }
      .yellow{
        background-color: #FFEFCC;
      }
      .green {
        background-color: #EBF9F2;
      }
      .blue {
          background-color: #E5ECF2;
      }
      .client-logo{
        border-radius: 6px;
        padding: 8px;
        max-width: 62px;
        max-height: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .client-description{
        margin: 0;
        padding: 0;
        text-align: left;
        box-sizing: border-box;
        h2{
          font-size: 20px;
          margin-bottom: 6px;
          color: var(--box-heading);
        }
        p{
          padding-right: 20px;
        }
      }
    }

  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .top-notch-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
    .clients {
      margin-top: 30px;
      justify-content: center;
      gap: 10px;

      .clients-card{
        max-width: 320px;
        width: 100%;
        flex-direction: column;
        gap: 25px;
        align-items: center;

        .client-description{
        p{
          padding-right: 0px;
        }
      }
      }
      .client-logo{
        margin-right: 0px;
      }
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