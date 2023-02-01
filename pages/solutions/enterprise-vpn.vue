<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1>Access Business Resources And Assets Safely And Easily.</h1>
      </div>
    </div>
    <p class="entry-text home-container text-center">
      Enterprise VPN creates a tunnel between your organization's resources and
      its employees. VPN-connected employees can access company networks. Since
      this tunnel is end-to-end encrypted, businesses need not worry about
      unauthorized access or network visibility, ensuring total traffic
      protection and anonymity.
    </p>
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/servers.svg" alt="Features image" />
      </div>
      <div class="text-area">
        <h2>AWS Certified Partner BOH Support</h2>
        <ul>
          <li>Programming (Technical) Support</li>
          <li>Non-Programming (Functional) Support</li>
          <li>Implementations & Integrations</li>
          <li>DevOps Support</li>
          <li>Setup & Configuration</li>
          <li>Bug Fixes & Troubleshooting</li>
          <li>Migration & Updates</li>
          <li>Application Support</li>
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
          <h4>Large server network</h4>
          <p>
            When it comes to speed, Enterprise VPN is among the best VPNs
            available. With more servers, you're more likely to find one nearby
            and always have a stable and secure VPN connection.
          </p>
        </div>
        <div class="reason">
          <h4>Cross Platform Access</h4>
          <p>
            Enterprise is one of the best VPN services in the United States,
            United Kingdom, Australia, and Canada for all of your devices. It
            provides apps for all major platforms.
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
  head: {
    title: 'Enterprise VPN Solutions | Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: "Secure your business with our Enterprise VPN Solutions. Keep your data private, protect against cyber threats and improve productivity. Tryit today now."
      }
    ],
  },
  data: () => {
    return {
      Features: {
        heading: "",
        desc: "",
        cards: [
          {
            heading: "AWS Configurations",
            desc: "Our  experts provide  configurations, enabling us to assess, audit, and evaluate your current infrastructure and simplify compliance auditing, change management, security analysis, and operational troubleshooting.",
          },
          {
            heading: `Migrations`,
            desc: `Our Experienced AWS Cloud Migration Experts Perform A Full Assessment Of Your IT Infrastructure To Determine The Best Framework, Library, And SDK To Effectively Migrate Your Application And/Or Data To AWS With Zero-To-Minimal Downtime.`,
          },
          {
            heading: `Integrations`,
            desc: `We seamlessly integrate AWS cloud and other third-party plugins, add-ons, and extensions into your existing on-premise systems, incorporating customizable features, functionalities, and capabilities to enhance your current business workflows.`,
          },
          {
            heading: `Compliance`,
            desc: `Our AWS DevOps experts provide AWS configurations, enabling us to assess, audit, and evaluate your current AWS infrastructure and simplify compliance auditing, change management, security analysis, and operational troubleshooting.`,
          },
          {
            heading: `Security`,
            desc: `Our experienced AWS cloud migration experts perform a full assessment of your IT infrastructure to determine the best framework, library, and SDK to effectively migrate your application and/or data to AWS with zero-to-minimal downtime.`,
          },
          {
            heading: `Support`,
            desc: `We seamlessly integrate AWS cloud and other third-party plugins, add-ons, and extensions into your existing on-premise systems, incorporating customizable features, functionalities, and capabilities to enhance your current business workflows`,
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
  display: flex;
  align-items: start;
  justify-content: end;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/chr.webp");
  background-size: cover;
  background-position: top center;
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

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .solution-banner {
    .contain {
      margin-bottom: 150px;
      margin-left: 20px;
      margin-right: 20px;
      h1 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  .entry-text {
    margin: 30px auto;
    width: 100%;
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      h2 {
        margin-bottom: 20px;
      }
      ul {
        li {
          font-family: "Gilroy-Regular";
          margin-bottom: 20px;
          font-size: 18px;
        }
      }
    }
  }

  .why-vpn {
    margin: 30px auto;
    > h2 {
      margin-bottom: 25px;
    }
    .reasons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
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
}
</style>