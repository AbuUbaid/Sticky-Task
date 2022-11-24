<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1>DevOps Services</h1>
      </div>
    </div>

    <div class="featured-features">
      <div class="home-container">
        <h2 class="text-center">
          We promise Continuous delivery, deployment and best infrastructure
          automation.
        </h2>
        <div class="features">
          <div class="feature">
            <img src="~/assets/icons/evaluation.svg" alt="Evaluation icon" />
            <h4>DevOps Assessment</h4>
            <p>
              DevOps practice evaluation, existing infrastructure audit,
              development pipeline assessment, eliminating redundant work, and
              identifying the correct set of DevOps tools are all part of our
              DevOps assessment.
            </p>
          </div>
          <div class="feature">
            <img src="~/assets/icons/automation.svg" alt="Evaluation icon" />
            <h4>DevOps Automation</h4>
            <p>
              We assist enterprises in implementing a continuous development and
              continuous delivery pipeline, automating processes, using
              sophisticated DevOps technologies, and avoiding dangerous
              deployments.
            </p>
          </div>
          <div class="feature">
            <img src="~/assets/icons/management.svg" alt="Evaluation icon" />
            <h4>DevOps Management</h4>
            <p>
              OneDrive for Business is unmatched by any other storage management
              tool when it comes to storage management, and it gives
              intelligence to storage management.
            </p>
          </div>
          <div class="feature">
            <img src="~/assets/icons/service.svg" alt="Evaluation icon" />
            <h4>DevOps Managed Services</h4>
            <p>
              Our DevOps managed services provide effective software delivery
              and implementation, as well as automation of infrastructure to
              build and release, security management to system stability, and
              Process Automation to provide 24/7 support.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="digital-solutions">
      <h2 class="text-center">Devops Tools We Leverage</h2>
      <img src="~/assets/icons/tools1.svg" alt="Ecommerce Solutions" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "MicrosoftDynamics",
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.solution-banner {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/msdb.jpg");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  .contain {
    margin-left: 70px;
    h1 {
      width: 820px;
      margin-bottom: 30px;
    }
  }
}

.featured-features {
  background: #f2f5ff;
  padding-top: 60px;
  padding-bottom: 60px;
  h2 {
    color: black;
  }
  .features {
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
    gap: 4%;
    .feature {
      margin-bottom: 40px;
      width: 48%;
      img {
        width: 50px;
      }
      h4 {
        font-size: 18px;
        color: #ef861d;
        font-weight: 500;
        font-family: "Gilroy-Medium";
        margin-top: 10px;
        margin-bottom: 15px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}

.digital-solutions {
  padding: 50px;
  text-align: center;
  h2 {
    color: black;
    margin-bottom: 50px;
  }
  img {
    width: 90%;
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
    align-items: start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
    background: url("~/assets/images/about.jpg");
    .contain {
      margin-left: 20px;
      h1 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  .featured-features {
    background: #f2f5ff;
    padding-top: 30px;
    padding-bottom: 30px;
    h2 {
      color: black;
      text-align: left;
    }
    .features {
      display: flex;
      margin-top: 50px;
      flex-wrap: wrap;
      gap: 8%;
      .feature {
        margin-bottom: 40px;
        width: 100%;
        img {
          width: 50px;
        }
        h4 {
          font-size: 18px;
          color: #ef861d;
          font-weight: 500;
          font-family: "Gilroy-Medium";
          margin-top: 10px;
          margin-bottom: 15px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }

  .digital-solutions {
    padding: 20px;
    text-align: center;
    h2 {
      color: black;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }
}
</style>