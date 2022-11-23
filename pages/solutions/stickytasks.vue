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
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/stickyfeatures.jpg" alt="Features image" />
      </div>
      <div class="text-area">
        <h2>Solution To Human Resources That Is Adaptable And Effective</h2>
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
    <div class="video-section">
      <div class="home-container">
        <h2 class="text-center">Cross-Functional Project Management</h2>
        <p class="text-center">
          Manage Multiple Projects Concurrently While Eliminating Bottlenecks
          That Slow Progress.
        </p>

        <h1 class="text-center">Video Placeholder</h1>
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
  name: "StickyTasks",
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

.video-section {
  background: url("~/assets/images/videobg.jpg");
  background-size: cover;
  background-position: center;
  padding: 50px;
  .home-container {
    h2 {
      color: white;
    }
    p {
      color: white;
      margin-top: 15px;
      margin-bottom: 50px;
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .solution-banner {
    margin-bottom: 30px;
    padding: 0 20px;
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
  }

  .features {
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .text-area {
      margin-top: 30px;
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      h2 {
        margin-bottom: 20px;
      }
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

  .video-section {
    background: url("~/assets/images/videobg.jpg");
    background-size: cover;
    background-position: center;
    padding: 20px 0px;
    .home-container {
      h2 {
        color: white;
      }
      p {
        color: white;
        margin-top: 15px;
        margin-bottom: 50px;
      }
    }
  }
}
</style>