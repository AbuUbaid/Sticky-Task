<template>
  <div class="home-container hardware-container">
    <p>OUR CLIENTS</p>
    <h2>Our Valuable Clients</h2>
    <p>Our journey began with Silicon Valley startups to accelerate their product innovations. Over time, we have built core competencies and team strength to make ourselves capable of catering to the needs of larger clients including ISVs, digital businesses, and enterprises. On the spectrum from startups to enterprises, we understand that as needs are different, ‘one size doesn’t fit all’. For instance,
startups challenge us to be on the bleeding-edge of technologies, while enterprises want better ecosystem integration and continuity of their business processes.</p>
    <div class="clients">
      <div class="clients-card">
        <div class="client-logo yellow">
          <img src="https://folium.ai/wp-content/uploads/2022/12/startup.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Technology startups</h2>
          <p>We are startup experts with a successful track record of building 150+ software products for the most demanding startups – right from concept to scale.</p>

        </div>
      </div>
      <div class="clients-card">
        <div class="client-logo red">
          <img src="https://folium.ai/wp-content/uploads/2022/12/vendor.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Software vendors</h2>
          <p>We assist ISVs throughout the product development spectrum with innovation, development, and strategization at the speed of light.</p>

        </div>
      </div>
      <div class="clients-card">
        <div class="client-logo green">
          <img src="https://folium.ai/wp-content/uploads/2022/12/business.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Digital businesses</h2>
          <p>We help digital businesses develop new designs by blurring the digital and physical worlds and using technological advances to create new business models.</p>

        </div>
      </div>
      <div class="clients-card">
        <div class="client-logo blue">
          <img src="https://folium.ai/wp-content/uploads/2022/12/enterprise.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Enterprise/telco</h2>
          <p>We leverage best-of-breed cloud-based practices to empower our enterprise clients to adapt to matured distributed Agile development processes.</p>

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
.hardware-container {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }
  p {
  }
  .clients {
    margin-top: 50px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    .clients-card{
      background: var(--white);
      box-shadow: 0px 10px 20px rgb(34 48 86 / 10%);
      border-radius: 6px;
      display: flex;
      padding: 20px;
      width: calc(100% - 51%);
      align-items: center;
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
        padding: 40px;
        max-width: 116px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 24px;
      }
      .client-description{
        margin: 0;
        padding: 0;
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
  .hardware-container {
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