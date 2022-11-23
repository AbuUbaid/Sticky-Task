<template>
  <div class="main-header">
    <div
      id="services-menu"
      class="mega-menu"
      v-bind:class="{ open: serviceOpen }"
    >
      <ul class="menu-side">
        <li class="menu-item-side">
          <NuxtLink to="/services/digital">Digital</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/services/devops">DevOps and Cloud</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/services/bpo">BPO</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/services/microsoft">Microsoft Services</NuxtLink>
        </li>
      </ul>
    </div>

    <div
      id="industries-menu"
      class="mega-menu"
      v-bind:class="{ open: industryOpen }"
    >
      <ul class="menu-side">
        <li class="menu-item-side">
          <NuxtLink to="/industry/e-commerce">E-Commerce</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/finance"
            >Financial Services Insurance</NuxtLink
          >
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/manufacturing"
            >Manufacturing & Beyond</NuxtLink
          >
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/retail">Retail</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/pharma">Pharma</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/government">Government</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/food">Food & Beverages</NuxtLink>
        </li>
      </ul>
    </div>

    <div
      id="solutions-menu"
      class="mega-menu"
      v-bind:class="{ open: solutionOpen }"
    >
      <ul class="menu-side">
        <li class="menu-item-side">
          <NuxtLink to="/solutions/microsoft-dynamics"
            >Microsoft Dynamics</NuxtLink
          >
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/solutions/hr-connect">HR Connect</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/solutions/e-commerce">E-Commerce</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/solutions/stickytasks">StickyTasks</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/solutions/enterprise-vpn">Enterprise VPN</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="header-body">
      <div class="logo">
        <NuxtLink to="/"
          ><img src="~/assets/logos/snlogo.svg" alt="Silicon Networks Logo"
        /></NuxtLink>
      </div>
      <div class="menu">
        <img
          @click.stop="drawer = !drawer"
          src="~/assets/icons/menu.svg"
          alt="Menu"
        />
      </div>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      height="100vh"
      @transitionend="checkDrawer"
    >
      <div class="menu-container">
        <ul class="menu">
          <li class="menu-item sub-menu-item services">
            <NuxtLink to="/services">Services</NuxtLink>
            <img @click="openService" src="~/assets/icons/right-arrow.svg" />
          </li>
          <li @click="openIndustry" class="menu-item sub-menu-item">
            <a>Industries </a>
            <img src="~/assets/icons/right-arrow.svg" />
          </li>
          <li class="menu-item">
            <NuxtLink to="/">Case Studies</NuxtLink>
          </li>
          <li @click="openSolution" class="menu-item sub-menu-item">
            <a>Solutions</a>
            <img src="~/assets/icons/right-arrow.svg" />
          </li>
          <li class="menu-item">
            <NuxtLink to="/careers">Careers </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "HeaderMain",
  data: () => {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
      serviceOpen: false,
      solutionOpen: false,
      industryOpen: false,
    };
  },
  methods: {
    openService() {
      this.solutionOpen = false;
      this.industryOpen = false;
      this.serviceOpen = !this.serviceOpen;
    },
    openIndustry() {
      this.serviceOpen = false;
      this.solutionOpen = false;
      this.industryOpen = !this.industryOpen;
    },
    openSolution() {
      this.serviceOpen = false;
      this.industryOpen = false;
      this.solutionOpen = !this.solutionOpen;
    },
    checkDrawer() {
      if (this.drawer === false) {
        this.serviceOpen = false;
        this.solutionOpen = false;
        this.industryOpen = false;
      }
    },
    closeMega() {
      return;
      if (
        this.serviceOpen == true ||
        this.solutionOpen == true ||
        this.industryOpen == true
      ) {
        this.serviceOpen = false;
        this.solutionOpen = false;
        this.industryOpen = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  width: 44.55vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header-body {
    height: 120px;
    background: white;
    padding: 0px 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 180px;
      }
    }
    .menu {
      img {
        width: 100px;
        cursor: pointer;
      }
    }
  }
}

.menu-container {
  padding: 70px;
  padding-top: 180px;
  .menu {
    list-style: none;
    .menu-item {
      font-size: 40px;
      margin-bottom: 25px;
      position: relative;
      a {
        color: black;
        display: block;
        cursor: pointer;
      }
      img {
        width: 12px;
        box-sizing: content-box;
        padding-left: 50px;
        cursor: pointer;
      }
    }
    .menu-item.sub-menu-item {
      display: flex;
      justify-content: space-between;
      a {
        flex: 1;
      }
    }
    .menu-item.sub-menu-item.services {
      display: flex;
      justify-content: space-between;
      a {
        flex: 0;
      }
      img {
        width: 12px;
      }
    }
  }
}

.v-navigation-drawer {
  z-index: -1;
  width: 45vw !important;
}

.mega-menu {
  height: 100vh;
  background-color: #091756;
  position: fixed;
  width: 35vw;
  left: 44vw;
  top: 0;
  display: flex;
  padding: 50px;
  padding-top: 180px;
  transition: transform 0.7s cubic-bezier(0.32, 0.01, 0, 1);
  transform: translateX(-100vw);
  z-index: -1;
}

.mega-menu.open {
  transform: translateX(0);
}

.mega-menu .menu-side {
  list-style: none;
}

.mega-menu .menu-side li {
  margin-bottom: 35px;
}
.mega-menu a {
  color: white;
  font-size: 30px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media all and (max-width: 480px) {
  .main-header {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .header-body {
      height: 60px;
      background: white;
      padding: 0px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        img {
          width: 100px;
        }
      }
      .menu {
        img {
          width: 70px;
          cursor: pointer;
        }
      }
    }
  }
  .menu-container {
    padding: 20px;
    padding-top: 120px;
    .menu {
      list-style: none;
      .menu-item {
        font-size: 28px;
        margin-bottom: 25px;
        position: relative;
        a {
          color: black;
          display: block;
          cursor: pointer;
        }
        img {
          width: 12px;
          box-sizing: content-box;
          padding-left: 50px;
          cursor: pointer;
        }
      }
      .menu-item.sub-menu-item {
        display: flex;
        justify-content: space-between;
        a {
          flex: 1;
        }
      }
      .menu-item.sub-menu-item.services {
        display: flex;
        justify-content: space-between;
        a {
          flex: 0;
        }
        img {
          width: 12px;
        }
      }
    }
  }

  .mega-menu {
    height: 100vh;
    background-color: #091756;
    position: fixed;
    width: 70vw;
    left: 0vw;
    top: 0;
    display: flex;
    padding: 20px;
    padding-top: 120px;
    transition: transform 0.7s cubic-bezier(0.32, 0.01, 0, 1);
    transform: translateX(-100vw);
    z-index: 1;
  }

  .mega-menu.open {
    transform: translateX(0);
  }

  .mega-menu .menu-side {
    list-style: none;
  }

  .mega-menu .menu-side li {
    margin-bottom: 35px;
  }
  .mega-menu a {
    color: white;
    font-size: 20px;
  }

  .v-navigation-drawer {
    width: 85vw !important;
  }
}
</style>