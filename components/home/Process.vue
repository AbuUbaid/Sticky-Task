<template>
  <div class="process-container">
    <h2>OUR PROCESS</h2>
    <p>Our 3 Step Formula For Building Great Products</p>
    <div  class="services-model">
      <div data-v-c26da7d8="" class="logos">
        <div data-v-c26da7d8="" class="logo">
          <img data-v-c26da7d8="" src="/_nuxt/assets/images/process.svg" alt="siemens logo">
        </div>
        <div data-v-c26da7d8="" class="logo">
          <img data-v-c26da7d8="" src="/_nuxt/assets/images/process1.svg" alt="siemens logo">
        </div>
        <div data-v-c26da7d8="" class="logo">
          <img data-v-c26da7d8="" src="/_nuxt/assets/images/process2.svg" alt="siemens logo">
        </div>
      </div> 
      <div class="mid-model">
        <div class="text-area">
          <ul class="menu-side">
          <h2 class="sub-menu-head">Explore Together</h2>
            <li class="menu-item-side">Identifying major pain points</li>
            <li class="menu-item-side">Goals to be achieved</li>
            <li class="menu-item-side">Competitor analysis</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
          <h2 class="sub-menu-head">Define Strategy</h2>
            <li class="menu-item-side">Design Strategy</li>
            <li class="menu-item-side">Use Cases</li>
            <li class="menu-item-side">Paper Wireframes</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
          <h2 class="sub-menu-head">Build & Iterate</h2>
            <li class="menu-item-side">Interactive Prototype</li>
            <li class="menu-item-side">System Assets & Specs</li>
            <li class="menu-item-side">UI Style Guide</li>
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
.process-container {
  background-color: #FFF;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }
  p {
  }

  .services-model {
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  z-index: 111;
  z-index: 100;
  .menu-side {
    text-align: left;
   
  }
  .logos {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  width: 100%;
  display: flex;
  gap: 300px;
  justify-content: center;
  .logo {
    img {
      width: 100%;
    }
  }
}
  .mid-model {
    width:100%;
    display: flex;
    padding: 50px;
    gap: 300px;
    justify-content: center;

    .text-area {
    h2 {
      margin-bottom: 20px;
    }
    ul {
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

}

@media (max-width: 480px) {
  .process-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }

    .services-model{
      .logos{
        margin-left: 0px;
        margin-right: 0px;
        gap: 50px;
        justify-content: center;
      }
      .mid-model{
        gap: 20px;
        flex-direction: column;
        margin-left: 42px;

        .text-area{

          .menu-side{

            .sub-menu-head{
              text-align: left;
            }
            .menu-item-side{
              font-size: 16px;
            }
          }

        }
      }
    }

  }
}
</style>