<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1 class="text-center">
          One-Stop-Shop For Remote Comprehensive Management Needs
        </h1>
      </div>
    </div>
    <p class="entry-text home-container text-center">
      Sticky Tasks allows you to organize your tasks effectively. This software
      keeps track of your work, your business, employees, and your most valuable
      asset, your time. This attendance management software allows you to set
      approval workflows and detailed reporting based on company policy for
      higher productivity and streamlined output.
    </p>
    <div class="featured-feature home-container">
      <div class="image-area">
        <img src="~/assets/images/hrimg.jpg" alt="Featured image" />
      </div>
      <div class="text-area">
        <h2>Human Resources Administration Made Easy</h2>
        <p>
          Our company aims for the flexibility and automation of our client's
          businesses and provides them with the latest software solutions. Our
          industry specialists utilize Agile and Smart AWS software to give HR
          services with project and test management tools in addition to other
          development tools so that organizations may control their digital
          environment with complete authority.
        </p>
      </div>
    </div>
    <div class="featured-feature reversed home-container">
      <div class="image-area">
        <img src="~/assets/images/hrimg.jpg" alt="Featured image" />
      </div>
      <div class="text-area">
        <h2>Human Resources Administration Made Easy</h2>
        <p>
          Our company aims for the flexibility and automation of our client's
          businesses and provides them with the latest software solutions. Our
          industry specialists utilize Agile and Smart AWS software to give HR
          services with project and test management tools in addition to other
          development tools so that organizations may control their digital
          environment with complete authority.
        </p>
      </div>
    </div>
    <div class="features">
      <div class="image-area">
        <h2>Solution To Human Resources That Is Adaptable And Effective</h2>
        <p>
          Develop a digital platform that utilizes global approaches and Fast
          integrated web technology to effectively manage proactive e-commerce
          through workflow creative thinking. Protected personal office spaces
          with a networked and unified front and back office activities.
        </p>
        <img src="~/assets/images/stickyfeatures.jpg" alt="Features image" />
      </div>
      <div class="text-area">
        <div class="solution">
          <h4>Impactful Efficiency</h4>
          <p>
            Track the performance of your business with complete authority to
            accelerate scalability.
          </p>
        </div>
        <div class="solution">
          <h4>Impactful Efficiency</h4>
          <p>
            Track the performance of your business with complete authority to
            accelerate scalability.
          </p>
        </div>
        <div class="solution">
          <h4>Impactful Efficiency</h4>
          <p>
            Track the performance of your business with complete authority to
            accelerate scalability.
          </p>
        </div>
        <div class="solution">
          <h4>Impactful Efficiency</h4>
          <p>
            Track the performance of your business with complete authority to
            accelerate scalability.
          </p>
        </div>
      </div>
    </div>
    <solution-features :Features="Features" />
    <our-partners />
  </div>
</template>

<script>
import OurPartners from "../../components/solutions/OurPartners.vue";
import SolutionFeatures from "../../components/solutions/SolutionFeatures.vue";
export default {
  components: { SolutionFeatures, OurPartners },
  name: "HrConnect",
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
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/about.jpg");
  .contain {
    margin-top: 150px;
    h1 {
      width: 820px;
      margin-bottom: 30px;
    }
  }
}

.entry-text {
  margin: 50px auto;
  width: 1100px;
}

.featured-feature {
  margin: 50px auto;
  display: flex;
  gap: 80px;
  .image-area {
    width: 50%;
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }
  .text-area {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    flex-basis: 50%;
    h2 {
      font-family: "Gilroy-Regular";
      font-weight: normal;
      color: black;
    }
    p {
      margin-top: 20px;
    }
  }
}
.featured-feature.reversed {
  .image-area {
    order: 1;
  }
}

.features {
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 50%;
    width: 50%;
    padding-left: 50px;
    padding-right: 100px;
    h2 {
      margin-bottom: 10px;
      color: black;
    }
    p {
      margin-bottom: 25px;
    }
    img {
      width: 100%;
    }
  }
  .text-area {
    flex-basis: 50%;
    width: 50%;
    padding-right: 70px;
    .solution {
      margin-bottom: 25px;
      h4 {
        color: #ef861d;
        font-size: 20px;
        font-family: "Gilroy-Regular";
        font-weight: normal;
      }
      p {
        font-size: 20px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .solution-banner {
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
    background: url("~/assets/images/about.jpg");
    .contain {
      margin-top: 150px;
      h1 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  .entry-text {
    margin: 30px auto;
    width: 100%;
    padding: 0px 20px;
  }

  .featured-feature {
    margin: 30px auto;
    margin-top: 50px;
    flex-wrap: wrap;
    gap: 40px;
    .image-area {
      width: 100%;
      flex-basis: 100%;
    }
    .text-area {
      width: 100%;
      flex-basis: 100%;
      h2 {
        font-family: "Gilroy-Regular";
        font-weight: normal;
        color: black;
      }
      p {
        margin-top: 20px;
      }
    }
  }
  .featured-feature.reversed {
    .image-area {
      order: 0;
    }
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      h2 {
        margin-bottom: 10px;
        color: black;
      }
      p {
        margin-bottom: 25px;
      }
      img {
        width: 100%;
      }
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      .solution {
        margin-bottom: 25px;
        h4 {
          color: #ef861d;
          font-size: 20px;
          font-family: "Gilroy-Regular";
          font-weight: normal;
        }
        p {
          font-size: 20px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>