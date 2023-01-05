<template>
  <div class="domain-container">
    <h2>Domains And Technologies</h2>
    <div  class="services-model">
      <div class="mid-model">
        <div class="text-area">
          <ul class="menu-side">
            <h2>Desktop</h2>
            <li class="menu-item-side">VS coded UI test</li>
            <li class="menu-item-side">HP UFT</li>
            <li class="menu-item-side">Sikuli Script</li>
            <li class="menu-item-side">Ranorex</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
            <h2>Performance</h2>
            <li class="menu-item-side">Apache JMeter</li>
            <li class="menu-item-side">BlazeMeter</li>
            <li class="menu-item-side">Gatling</li>
            <li class="menu-item-side">Load Runner</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
            <h2>Mobile</h2>
            <li class="menu-item-side">Appium</li>
            <li class="menu-item-side">Robotium</li>
            <li class="menu-item-side">Silk Test</li>
            <li class="menu-item-side">On-going Support</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
            <h2>Web Services</h2>
            <li class="menu-item-side">Selenium</li>
            <li class="menu-item-side">Protractor</li>
            <li class="menu-item-side">Serenity</li>
            <li class="menu-item-side">Cypress.io</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EndSoftware",
  data: () => {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
.domain-container {
  background-color: #FFFFFF;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }
  p {
  }
  
  .mid-count{
    display: flex;
    gap:50px;
    margin-top: 30px;
    justify-content: center;
    

    .one{
      text-align: center;
      background-color: #EF861D;
      font-size: 36px;
      font-weight: bold;
      width: 45px;
      height: 45px;
      border-radius: 100%;
      color: white;
    }
    .line{
      width: 25%;
      margin-top: 18px;

      .divider{
        border: 1px solid gray;
      }
    }
  }
  .services-model {
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  z-index: 111;
  z-index: 100;
  .menu-side {
    li list-style-type{
      background-color: #EF861D;
    }
  }
  .logos {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  width: 80%;
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
  .mid-model {
    width:100%;
    display: flex;
    justify-content: center;
    padding: 50px;
    gap:140px;
    .text-area {
    h2 {
      margin-bottom: 20px;
      font-size: 18px !important;
      font-weight: 700 !important;
      color: #1b1b1b !important;
    }
    ul {
      text-align: left;
      list-style-type: none;
      list-style-position: inside;
      li {
        font-family: "Gilroy-Regular";
        margin-bottom: 20px;
        font-size: 18px;
      }
      li::before {
        content: "◯";
        color: #ef861d; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-right: 15px;
      }
    }
  }
    .sub-menu-head {
      margin: 0 0 10px;
      font-size: 18px;
      font-weight: 700;
      color: #1b1b1b;
    }
    .mid-model-list {
      border: none;
      padding: 2px 0;
      -webkit-transition: 0.3s all ease;
      transition: 0.3s all ease;
      font-weight: 400;
      color: #000;
    }
  }
}

  @media (max-width: 480px) {
  .domain-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }

  }
}
}
</style>