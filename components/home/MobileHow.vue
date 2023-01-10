<template>
  <div class="top-notch-container">
    <h2>How We Do It</h2>
    <p>Use our simple three-step application development process to expedite the completion of your project.</p>
    <div class="mid-count">
        <div class="one">1</div>
        <div class="line"><hr class="divider"></div>
        <div class="one">2</div>
        <div class="line"><hr class="divider"></div>
        <div class="one">3</div>
    </div>
    <div  class="services-model">
      <div class="mid-model">
        <div class="text-area">
          <ul class="menu-side">
            <li class="menu-item-side">Requirements Definition</li>
            <li class="menu-item-side">Analyzing the requirements</li>
            <li class="menu-item-side">Documenting the process</li>
            <li class="menu-item-side">Provide initial design</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
            <li class="menu-item-side mid-model-list">Frontend & backend development</li>
            <li class="menu-item-side mid-model-list">Weekly Client Feedback (SCRUM)</li>
            <li class="menu-item-side mid-model-list">QA Testing</li>
            <li class="menu-item-side mid-model-list">Deployment</li>
          </ul>
        </div>
        <div class="text-area">
          <ul class="menu-side">
            <li class="menu-item-side">SLA Based Support</li>
            <li class="menu-item-side">L3 and Production Support Services</li>
            <li class="menu-item-side">Operational support where needed</li>
            <li class="menu-item-side">On-going Support</li>
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
.top-notch-container {
  background-color: #ECF0FF;
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

    .menu-item-side{
      text-align: left;
      font-size: 17px !important;
    }

    li {
      margin-bottom: 10px;
      list-style: none;
    }
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
    padding: 50px;
    gap: 200px;
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
        font-size: 20px;
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
      text-align: left;
    }
  }
}
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

  }
}
</style>