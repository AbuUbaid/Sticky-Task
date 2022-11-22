<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1>One-Stop-Shop For Remote Comprehensive Management Needs</h1>
      </div>
    </div>
    <p class="entry-text home-container text-center">
      Sticky Tasks allows you to organize your tasks effectively. This software
      keeps track of your work, your business, employees, and your most valuable
      asset, your time. This attendance management software allows you to set
      approval workflows and detailed reporting based on company policy for
      higher productivity and streamlined output.
    </p>
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/stickyfeatures.jpg" alt="Features image" />
      </div>
      <div class="text-area">
        <h2>AWS Certified Partner BOH Support</h2>
        <ul>
          <li>Programming (Technical) Support</li>
          <li>Programming (Technical) Support</li>
          <li>Programming (Technical) Support</li>
          <li>Programming (Technical) Support</li>
          <li>Programming (Technical) Support</li>
        </ul>
      </div>
    </div>
    <solution-features :Features="Features" />
    <div class="home-container why-vpn">
      <h2 class="text-center">Why Opt Enterprise VPN</h2>
      <div class="reasons">
        <div class="reason">
          <h4>Extra protection 24/7</h4>
          <p>
            Threat Protection monitors your activity to prevent harmful website
            visits and software downloads. Blocking trackers and intrusive ads
            makes browsing safer and smoother.
          </p>
        </div>
        <div class="reason">
          <h4>Extra protection 24/7</h4>
          <p>
            Threat Protection monitors your activity to prevent harmful website
            visits and software downloads. Blocking trackers and intrusive ads
            makes browsing safer and smoother.
          </p>
        </div>
        <div class="reason">
          <h4>Extra protection 24/7</h4>
          <p>
            Threat Protection monitors your activity to prevent harmful website
            visits and software downloads. Blocking trackers and intrusive ads
            makes browsing safer and smoother.
          </p>
        </div>
      </div>
    </div>
    <our-partners />
  </div>
</template>

<script>
import OurPartners from "../../components/solutions/OurPartners.vue";
import SolutionFeatures from "../../components/solutions/SolutionFeatures.vue";
export default {
  components: { SolutionFeatures, OurPartners },
  name: "EnterpriseVpn",
  data: () => {
    return {
      Features: {
        heading: "HAH?",
        desc: "WHAT",
        cards: [
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
          {
            heading: "Productivity",
            desc: "Get a 360 view of productive and idle time of your team to manage employee appraisals and payroll accordingly.",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.solution-banner {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/about.jpg");
  .contain {
    margin-bottom: 150px;
    margin-left: 70px;
    h1 {
      width: 650px;
      margin-bottom: 30px;
    }
  }
}

.entry-text {
  margin: 50px auto;
  width: 1100px;
}

.features {
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 50%;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .text-area {
    flex-basis: 50%;
    width: 50%;
    padding-right: 70px;
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
        // content: "⚆"; 
        // content: "◎"; 
        content: "◯"; 
        color: #ef861d; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-right: 15px;
      }
    }
  }
}
.why-vpn {
  margin: 80px auto;
  > h2 {
    color: black;
    margin-bottom: 35px;
  }
  .reasons {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .reason {
      text-align: center;
      h4 {
        font-family: "Gilroy-Regular";
        font-weight: normal;
        color: #ef861d;
        margin-bottom: 15px;
      }
    }
  }
}
</style>