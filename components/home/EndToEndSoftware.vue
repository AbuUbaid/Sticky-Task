<template>
  <div class="top-notch-container">
    <h2>Turn the requirements of your company into a top-notch software product.</h2>
    <div  class="services-model">
      <div data-v-c26da7d8="" class="logos"><div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p1.svg" alt="siemens logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p2.svg" alt="nasa logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p3.svg" alt="pepsico logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p4.svg" alt="lockheed martin logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p5.svg" alt="hp logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p6.svg" alt="johnsons johnsons logo"></div> <div data-v-c26da7d8="" class="logo"><img data-v-c26da7d8="" src="/_nuxt/assets/logos/p7.svg" alt="citrix logo"></div></div>
      <div class="mid-model">
        <div>
          <h2 class="sub-menu-head">Emerging Tech</h2>
          <ul class="menu-side">
            <li class="menu-item-side">Blockchain</li>
            <li class="menu-item-side">Web 3.0</li>
          </ul>
        </div>
        <div>
          <h2 class="sub-menu-head">Digital Marketing</h2>
          <ul class="menu-side">
            <li class="menu-item-side mid-model-list">SEO</li>
            <li class="menu-item-side mid-model-list">
              Paid Media
            </li>
          </ul>
        </div>
        <div>
          <h2 class="sub-menu-head">Solutions</h2>
          <ul class="menu-side">
            <li class="menu-item-side">
              <NuxtLink to="/solutions/microsoft-dynamics"
                >Microsoft Dynamics</NuxtLink
              >
            </li>
            <li class="menu-item-side">
              <NuxtLink to="/solutions/hr-connect"
                >HR Connect</NuxtLink
              >
            </li>
            <li class="menu-item-side">
              <NuxtLink to="/solutions/e-commerce"
                >E-Commerce</NuxtLink
              >
            </li>
            <li class="menu-item-side">
              <NuxtLink to="/solutions/stickytasks"
                >StickyTasks</NuxtLink
              >
            </li>
            <li class="menu-item-side">
              <NuxtLink to="/solutions/enterprise-vpn"
                >Enterprise VPN</NuxtLink
              >
            </li>
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

  .services-model {
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
  z-index: 111;
  z-index: 100;
  .menu-side {
    li {
      margin-bottom: 10px;
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
    flex:1;
    padding: 50px;
    gap: 20px;
    > * {
      flex: 1;
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
}
</style>