<template>
  <div class="home-container top-notch-container">
    <h2>Coordinated HR Support</h2>
    <p>In Order To Ensure That Their Companies Are Prepared For The Next Stage Of Transformation With The Right People In Place And A Culture That Attracts And Retains Top Talent In Challenging Market Conditions, HR Professionals Are At The Forefront Of Championing Change And Resiliency Within Their Organizations.</p>
    <div class="clients">
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n1.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Organizational structure</h2>
        </div>
        </div>
        <div class="client-description">
          <p>Refine and redefine how your operational standards and processes operate so that they work with your workforce rather than against it. Keep your talent, keep your composure, and aim high.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n2.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Recruiting</h2>
        </div>
        </div>
        <div class="client-description">
          <p>Assisting your company in finding and keeping outstanding employees. Both your time and the results matter..</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n3.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>HR Consulting</h2>
        </div>
        </div>
        <div class="client-description">
          <p>You can make wise modifications to your HR strategy with the assistance of insights and suggestions from an outside organization like ours. We prioritize the needs of people and offer guidance.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n4.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Oversight & Policies</h2>
        </div>
        </div>
        <div class="client-description">
          <p>Your duty to your people is to make sure you have the required policies in place that comply with the most recent legal standards.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n5.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Crisis Control</h2>
        </div>
        </div>
        <div class="client-description">
          <p>We help our clients create crisis management teams and plans for their businesses.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n6.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>Recruiting talent</h2>
        </div>
        </div>
        <div class="client-description">
          <p>We help you define the benchmarks and build up your internal talent acquisition plan.</p>
        </div>
      </div>
      <div class="clients-card">
        <div class="logo-number">
          <div class="client-logo">
          <img src="~/assets/images/n7.svg" class="img-fluid">
        </div>
        <div class="client-description">
          <h2>HR Solutions for Businesses</h2>
        </div>
        </div>
        <div class="client-description">
          <p>From virtual team support to full outsourcing, we can support and operate as an extension of your HR staff. Our experts help you make important decisions with confidence and objectivity</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HrSupport",
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
    gap:30px;
    justify-content: center;
    .clients-card{
      border: 1px solid #091756;
      border-radius: 15px;
      opacity: 1;
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 20px;
      width: 30%;
      align-items: left;
      margin-bottom: 30px;
      .logo-number{
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        align-items:center;
      }
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
          color: #EF861D;
        }
        p{
          padding-right: 20px;
          margin-top:20px;
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