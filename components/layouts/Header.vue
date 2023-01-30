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
        <li class="menu-item-side">
        <NuxtLink to="/services/custom-software"
          >Custom Software Development</NuxtLink
        >
      </li>
      <li class="menu-item-side">
        <NuxtLink to="/services/mobile-development"
          >Web App Development</NuxtLink
        >
      </li>
      <li class="menu-item-side">
        <NuxtLink to="/services/uiux-design"
          >UI/UX Design</NuxtLink
        ></li>
      <li class="menu-item-side">
        <NuxtLink to="/services/qa-testing"
          >QA & Testing</NuxtLink
        >
      </li>
      <li class="menu-item-side">
      <NuxtLink class="nav-li-tag" to="/services/blockchain">Blockchain</NuxtLink>
      </li>
      <li class="menu-item-side">
      <NuxtLink class="nav-li-tag" to="/services/data-science-and-ai">Data Science & AI</NuxtLink>
      </li>
      <li class="menu-item-side">
      <NuxtLink class="nav-li-tag" to="/services/iot">IOT</NuxtLink>
      </li>
      <!-- <li class="menu-item-side">Embedded Software</li> -->
      <!-- <li class="menu-item-side">
        <NuxtLink to="/services/devops-new">DevOps</NuxtLink>
      </li> -->
      </ul>
    </div>

    <div
      id="industries-menu"
      class="mega-menu"
      v-bind:class="{ open: industryOpen }"
    >
      <ul class="menu-side">
        <li class="menu-item-side">
          <NuxtLink to="/industry/footwear">Footwear & Apparel</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/finance">Finance & Insurance</NuxtLink>
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/manufacturing"
            >Manufacturing & Distribution</NuxtLink
          >
        </li>
        <li class="menu-item-side">
          <NuxtLink to="/industry/retail">CPG & Retail</NuxtLink>
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
    <div
      id="about-menu"
      class="mega-menu"
      v-bind:class="{ open: aboutOpen }"
    >
      <ul class="menu-side">
        <!-- <li class="menu-item-side">
          <a href="">Life at Silicon</a>
        </li> -->
        <li class="menu-item-side">
          <a href="">Initiative</a>
        </li>
        
      </ul>
    </div>

    <div class="header-body">
      <div class="header-body-inner">
        <div class="logo">
          <NuxtLink to="/"
            ><img src="~/assets/logos/snlogo.webp" alt="Silicon Networks Logo"
          /></NuxtLink>
        </div>
        <div class="nav-ul desktop-header">
          <ul class="nav-ul">
            <li class="nav-li has-mega">
              <a class=""
                >Services
                <img
                  class="arrow-icon"
                  style="margin-right: -15px"
                  src="~/assets/icons/right-arrow.svg"
                />
               </a
              >
              <div id="services-menu" class="services-model">
                  <div class="engage-models">
                    <img src="~/assets/logos/clutch.webp" alt="Clutch" />
                  </div>
                  <div class="mid-model">
                    <div>
                      <h2 class="sub-menu-head">Software Development</h2>
                      <ul class="menu-side">
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/custom-software">Custom Software Development</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/mobile-development">Mobile Development</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/web-development">Web Development</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/uiux-design">UI/UX Design</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/qa-testing">QA & Testing</a>
                        </li>
                        <!-- <li class="menu-item-side">Embedded Software</li> -->
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/devops-new">DevOps</a>
                        </li>
                        <!-- <li class="menu-item-side">Discovery Workshop</li> -->
                      </ul>
                    </div>
                    <div>
                      <h2 class="sub-menu-head">Emerging Tech</h2>
                      <ul class="menu-side">
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/blockchain">Blockchain</a>
                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/data-science-and-ai">Data Science & AI</a>
                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/services/iot">IoT</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 class="sub-menu-head">Digital Marketing</h2>
                      <ul class="menu-side">
                        <li class="menu-item-side mid-model-list">
                          <a class="nav-li-tag" href="/services/digital">SEO</a>
                        </li>
                        <li class="menu-item-side mid-model-list">
                          <a class="nav-li-tag" href="/services/digital">Paid Media</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 class="sub-menu-head">Solutions</h2>
                      <ul class="menu-side">
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/solutions/microsoft-dynamics">Microsoft Dynamics</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/solutions/hr-connect">HR Connect</a>

                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/solutions/e-commerce">E-Commerce</a>
                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/solutions/stickytasks">StickyTasks</a>
                        </li>
                        <li class="menu-item-side">
                          <a class="nav-li-tag" href="/solutions/enterprise-vpn">Enterprise VPN</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="engage-models">
                    <h2 class="engagment-head">Engagement Models</h2>
                    <ul class="menu-side">
                      <li class="engage-list">
                        <a class="engage-list" href="/team-augmentation">Build Your Dedicated Teams</a>

                      </li>
                      <li class="engage-list">
                        <a class="engage-list" href="/fixed-price">Fixed Price Project</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </li>
            <li class="nav-li has-child" style="position: relative">
              <a
                >Industries
                <img
                  class="arrow-icon"
                  style="margin-right: -15px"
                  src="~/assets/icons/right-arrow.svg"
              /></a>
              <div class="dropdown-content">
                <ul class="sub sub-menu-block">
                  <li>
                    <NuxtLink to="/industry/footwear"
                      >Footwear & Apparel</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/industry/finance"
                      >Finance & Insurance</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/industry/manufacturing"
                      >Manufacturing & Distribution</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/industry/retail">CPG & Retail</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/industry/pharma">Pharma</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/industry/government">Government</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/industry/food">Food & Beverages</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <!-- <li class="nav-li has-child" style="position: relative">
              <a>Solutions</a>
              <div class="dropdown-content">
                <ul class="sub sub-menu-block">
                  <li>
                    <NuxtLink to="/solutions/microsoft-dynamics"
                      >Microsoft Dynamics</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink to="/solutions/hr-connect">HR Connect</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/solutions/e-commerce">E-Commerce</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/solutions/stickytasks">StickyTasks</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/solutions/enterprise-vpn"
                      >Enterprise VPN</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </li> -->
            <li class="nav-li">
              <NuxtLink class="nav-li-tag" to="/insights">Insights </NuxtLink>
            </li>
            <li class="nav-li">
              <NuxtLink class="nav-li-tag" to="/careers">Careers </NuxtLink>
            </li>
            <li class="nav-li has-child" style="position: relative">
              <a>About
                <img
                  class="arrow-icon"
                  style="margin-right: -15px"
                  src="~/assets/icons/right-arrow.svg"
              /></a>
              <div class="dropdown-content">
                <ul class="sub sub-menu-block">
                  <li>
                    <NuxtLink to="/about">Life At Silicon</NuxtLink>
                  </li>
                  <li>
                  <NuxtLink to="/initiative">Initiative</NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-li prominent">
              <NuxtLink class="nav-li-tag" to="/contact">Contact</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="contact-links">
          <a href="mailto:sales@siliconnet.com">sales@siliconnet.com</a>
          <a href="tel:855-904-4417">855-904-4417</a>
        </div>
        <div class="menu mobile-menu">
          <img
            @click.stop="drawer = !drawer"
            src="~/assets/icons/menuicon.svg"
            alt="Menu"
          />
        </div>
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
          <li @click="openIndustryOpen" class="menu-item sub-menu-item">
            <a>Industries </a>
            <img src="~/assets/icons/right-arrow.svg" />
          </li>
          <li class="menu-item">
            <NuxtLink to="/team-augmentation">Team Augmentation</NuxtLink>
          </li>
          <!-- <li class="menu-item">
            <NuxtLink to="/">Case Studies</NuxtLink>
          </li> -->
          <li @click="openSolution" class="menu-item sub-menu-item">
            <a>Solutions</a>
            <img src="~/assets/icons/right-arrow.svg" />
          </li>
          <li class="menu-item">
            <NuxtLink to="/insights">Insights </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/careers">Careers </NuxtLink>
          </li>
          <li class="menu-item sub-menu-item">
            <NuxtLink to="/about">About</NuxtLink>
            <img @click="openAbout" src="~/assets/icons/right-arrow.svg" />
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
      aboutOpen: false,
      solutionOpen: false,
      solutionOpenNew: false,
      industryOpen: false,
      industryOpennew: false,
      serviceOpenNew: false,
    };
  },
  created: function () {
    if (this.$cookies.get("notice") == undefined) {
      this.$cookies.set("notice", true, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }
  },
  methods: {

    openService() {
      (this.solutionOpen = false),
        (this.industryOpen = false),
        (this.industryOpennew = false),
        (this.serviceOpenNew = false),
        (this.serviceOpen = !this.serviceOpen);
    },
    openAbout() {
      this.solutionOpen = false;
      this.industryOpen = false;
      this.serviceOpen = false;
      this.serviceOpenNew = false;
      this.aboutOpen = !this.aboutOpen;
    },
    openServiceNew() {
      this.solutionOpen = false;
      this.industryOpen = false;
      this.serviceOpen = false;
      this.serviceOpenNew = !this.serviceOpenNew;
    },
    openIndustryOpen() {
      this.serviceOpen = false;
      this.solutionOpen = false;
      this.industryOpen = !this.industryOpen;
    },
    openIndustryOpenNew() {
      this.serviceOpen = false;
      this.solutionOpen = false;
      this.solutionOpenNew = false;
      this.industryOpennew = !this.industryOpennew;
    },
    openSolution() {
      this.serviceOpen = false;
      this.industryOpen = false;
      this.solutionOpen = !this.solutionOpen;
    },
    openSolutionNew() {
      this.serviceOpen = false;
      this.industryOpen = false;
      this.industryOpennew = false;
      this.solutionOpenNew = !this.solutionOpenNew;
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
.mobile-menu {
  display: none;
}
.desktop-header {
  display: block;
  .arrow-icon {
    transform: rotate(90deg);
    margin-left: 10px;
  }
  .nav-ul {
    li {
      margin-right: 40px;
      &:hover {
        a {
          color: #091756;
        }
      }
      a {
        padding: 0;
      }
    }
    .prominent {
      background: #091756;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 8px;
      padding-bottom: 8px;
      border-radius: 4px;
      a {
        color: white;
      }

      &:hover {
        a {
          color: #fff;
        }
      }
    }
  }
}
.main-header {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .header-body {
    background: white;
    .header-body-inner {
      max-height: 100%;
      padding: 0px 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 12px;
      padding-bottom: 12px;
      position: relative;
      max-width: 1350px;
      margin: 0 auto;
      padding-left: 50px;
      padding-right: 50px;

      .logo {
        img {
          width: 150px;
        }
      }
      .contact-links {
        flex: 1;
        text-align: right;
        padding-right: 22px;
        display: flex;
        flex-direction: column;
        display: none;
        a {
          color: #e38601;
          font-size: 20px;
          margin-bottom: 10px;
          font-family: "Gilroy-Medium";
        }
      }
      .menu {
        img {
          width: 40px;
          cursor: pointer;
        }
      }
    }
  }
}

.menu-container {
  padding: 70px;
  padding-top: 150px;
  .menu {
    list-style-type: none;
    .menu-item {
      font-size: 30px;
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

.has-mega:hover .services-model {
  transform: rotateX(0);
}

.dropdown-content {
  transition: height 0.7s cubic-bezier(0.32, 0.01, 0, 1);
  display: none;
}

.indusnewopen {
  transition: transform 0.7s cubic-bezier(0.32, 0.01, 0, 1);
  opacity: 1;
  pointer-events: none;
}

.solutionnewopen {
  transition: transform 0.7s cubic-bezier(0.32, 0.01, 0, 1);
  opacity: 1;
  pointer-events: none;
}

.has-child:hover .dropdown-content {
  display: block;
}
.menu-side {
  list-style-type: none;
}
.mega-menu .menu-side li {
  margin-bottom: 25px;
}
.mega-menu a {
  color: white;
  font-size: 25px;
}

.nav-bar-list {
  display: block;
  padding: 8px;
  color: black;
  font-size: 18px;
  font-weight: 500;
}
.services-model {
  display: flex;
  width: 100vw;
  height: 60vh;
  z-index: 111;
  padding-top: 25px;
  // position: fixed;
  // top: 0;
  left: 0;
  // transition: transform 0.3s cubic-bezier(0.32, 0.01, 0, 1);
  // transform: translateY(-100vh);
    margin: 0 auto;
    position: absolute;
    right: 0;
    left: -103px;
    top: 100%;
    border-bottom-left-radius: 4px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    -webkit-transition: all .4s ease 0s;
    transition: all .4s ease 0s;
    -webkit-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: top center;
    transform-origin: top center;
  .menu-side {
    list-style-position: outside !important;
    list-style-type: none;
    li {
      margin-bottom: 10px;
    }
  }
  .engage-models {
    background: #091756;
    height: 100%;
    width: 20%;
    flex-basis: 20%;
    padding: 50px;

    .engage-logo {
      width: 100% !important;
    }
    .among-best {
      font-size: 12px;
      line-height: 1.5;
      color: #fff;
      padding-top: 20px;
    }
    .engagment-head {
      margin: 0 0 10px;
      font-size: 18px;
      font-weight: 700;
      color: white;
    }
    .engage-list {
      color: rgb(255 255 255 / 80%) !important;
      padding-top: 12px;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.5;
      transition: 0.3s all ease;
    }
  }
  .engage-models:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    img {
      width: 120px;
    }
  }
  .mid-model {
    background: white;
    width: 60%;
    flex-basis: 60%;
    height: 100%;
    display: flex;
    padding: 50px;
    gap: 30px;
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

.v-navigation-drawer {
  width: 85vw !important;
}
ul.nav-ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-li {
  float: left;
}

.nav-li a {
  cursor: pointer;
  display: block;
  padding: 8px;
  font-size: 16px;
  font-family: "Gilroy-Medium";
  font-weight: 500;
}
.nav-li-tag {
  cursor: pointer;
  display: block;
  padding: 8px;
  font-size: 16px;
  font-family: "Gilroy-Medium";
  font-weight: 500;
  color: black;
}
.nav-li a img {
  width: 7%;
}
.sub-menu-block {
  list-style-type: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  min-width: 250px;
  top: 100%;
  padding-top: 12px !important;
}

.sub-menu-block li {
  padding: 8px;
  transition: 0.3s all ease;
  border-bottom: 1px solid #ddd;
  margin-right: 0 !important;
  .about-link{
    font-size: 16px;
    font-family: "Gilroy-Medium";
    font-weight: 500;
  }
}
.sub-menu-block li:hover {
  background: #091756;
}
.sub-menu-block li:hover a {
  color: white !important;
}
.sub {
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  position: absolute;
  display: grid;
  max-width: 202px;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 11;
  max-width: 302px;
  // opacity: 0;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  // -webkit-transform: rotateX(90deg);
  // transform: rotateX(90deg);
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
}
@media (min-width: 481px) and (max-width: 1024px) {
}

@media all and (max-width: 480px) {
  .mobile-menu {
    display: block;
    margin-left: 150px;
  }
  .desktop-header {
    display: none;
  }
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
      .header-body-inner {
        max-height: 100%;
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 12px;
        padding-bottom: 12px;
        position: relative;
        max-width: 1350px;
        margin: 0 auto;
        padding-right: 170px;

        .logo {
          img {
            width: 150px;
          }
        }
        .contact-links {
          flex: 1;
          text-align: right;
          padding-right: 22px;
          display: flex;
          flex-direction: column;
          display: none;
          a {
            color: #e38601;
            font-size: 20px;
            margin-bottom: 10px;
            font-family: "Gilroy-Medium";
          }
        }
        .menu {
          img {
            width: 40px;
            cursor: pointer;
          }
        }
      }
      .logo {
        img {
          width: 100px;
        }
      }
      .menu {
        img {
          width: 40px;
          cursor: pointer;
        }
      }
    }
  }
  .menu-container {
    padding: 20px;
    padding-top: 120px;
    .menu {
      list-style-type: none;
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

  .mega-menu a {
    color: white;
    font-size: 20px;
  }
  .engage-models {
    background: #091756;
  }

  .v-navigation-drawer {
    width: 85vw !important;
  }
}
</style>