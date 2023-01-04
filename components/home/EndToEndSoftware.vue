<template>
  <div class="end-container">
    <h2>End to End Software Development Methodologies</h2>
    <div  class="services-model">
      <div data-v-c26da7d8="" class="logos">
        <div data-v-c26da7d8="" class="logo">
          <img data-v-c26da7d8="" src="/_nuxt/assets/images/customlogo.jpg" alt="siemens logo">
        </div>
      </div> 
      <div class="mid-model">
        <div>
          <ul class="menu-side">
          <h2 class="sub-menu-head">Requirements Gathering</h2>
            <li class="menu-item-side">Work Breakdown Structure</li>
            <li class="menu-item-side">Project Plan</li>
            <li class="menu-item-side">Project Budget</li>
            <li class="menu-item-side">Requirements Docs</li>
            <li class="menu-item-side">Use Cases</li>
            <li class="menu-item-side">User Stories</li>
          </ul>
        </div>
        <div>
          <ul class="menu-side">
          <h2 class="sub-menu-head">Design & Development</h2>
            <li class="menu-item-side mid-model-list">Low-Fi Design</li>
            <li class="menu-item-side mid-model-list">Hi-FI Design</li>
            <li class="menu-item-side mid-model-list">User Experience Design</li>
            <li class="menu-item-side mid-model-list">Source Code</li>
            <li class="menu-item-side mid-model-list">Compiled Code</li>
            <li class="menu-item-side mid-model-list">Code Documentation</li>
          </ul>
        </div>
        <div>
          <ul class="menu-side">
          <h2 class="sub-menu-head">Delivery & Support</h2>
            <li class="menu-item-side">Release Management</li>
            <li class="menu-item-side">Change Management</li>
            <li class="menu-item-side">User Docs and Training</li>
            <li class="menu-item-side">Scheduled Maintenance</li>
            <li class="menu-item-side">Adaptive Maintenance</li>
            <li class="menu-item-side">Software Roadmap</li>
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
.end-container {
  background-color: #ECF0FF;
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
    li {
      list-style-type: circle;
      margin-bottom: 10px;
    }
  }
  .logos {
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  width: 100%;
  display: flex;
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
    justify-content: center;
    padding: 50px;
    gap: 200px;
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
  .end-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
      .mid-model {
      flex-direction: column !important;
      gap: 50px !important;
      }

  }
}
}
</style>