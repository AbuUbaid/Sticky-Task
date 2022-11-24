<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1 class="text-center">Improve Your Virtual Storefront</h1>
      </div>
    </div>
    <p class="entry-text home-container text-center">
      Companies’ needs anywhere in the world that deal with technology can be
      met through e-commerce. Clients can access a group of experienced business
      consultants and expert coders on this platform to assist them in
      overcoming a wide range of challenges and achieving their business
      objectives
    </p>

    <div class="features">
      <div class="image-area">
        <h2>Keeping Retailers Current And Connected</h2>
        <img src="~/assets/images/connected.jpg" alt="Features image" />
      </div>
      <div class="text-area">
        <div class="solution">
          <h4>Customer Data Platform</h4>
          <p>
            Create a centralized customer database to understand and connect
            with the customers and create more personalized marketing campaigns.
          </p>
        </div>
        <div class="solution">
          <h4>Omni-Channel Experience Platforms</h4>
          <p>
            Create a merged agile system that ensures a cohesive customer experience and makes businesses profitable through increased sales.
          </p>
        </div>
        <div class="solution">
          <h4>Advanced Digital Experience</h4>
          <p>
            Make creative visuals & impactful marketing campaigns that deliver the brand’s message to the audience across all the platforms. Generate a seamless brand experience for customers.
          </p>
        </div>
        <div class="solution">
          <h4>Personalization</h4>
          <p>
            Digital solutions that customize the business’s content based on client behavior and profiles. Optimize the brand’s appeal to the audience by catering best customer serv ice through agile personalized software.
          </p>
        </div>
      </div>
    </div>
    <div class="digital-solutions">
      <h2 class="text-center">Digital Solutions & Accelerators</h2>
      <p class="text-center">
        Silicon Networks is a professional company known for top of the range
        industrial solutions by catalyzing the adoption of modern technology
        solutions for business growth
      </p>
      <img src="~/assets/icons/ecomicons.svg" alt="Ecommerce Solutions" />
    </div>
    <how-it-works />
    <our-partners />
  </div>
</template>

<script>
import HowItWorks from "../../components/solutions/HowItWorks.vue";
import OurPartners from "../../components/solutions/OurPartners.vue";
import SolutionFeatures from "../../components/solutions/SolutionFeatures.vue";
export default {
  components: { SolutionFeatures, OurPartners, HowItWorks },
  name: "ECom",
  data: () => {
    return {};
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
  background: url("~/assets/images/ecom.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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

.digital-solutions {
  background: #fef3e8;
  padding: 50px;
  text-align: center;
  h2 {
    color: black;
  }
  > p {
    width: 1000px;
    margin-top: 15px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  img {
    width: 90%;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .solution-banner {
    .contain {
      h1 {
        width: 100%;
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
      padding-left: 20px;
      padding-right: 20px;
      h2 {
        margin-bottom: 10px;
        color: black;
      }
      p {
        margin-bottom: 15px;
      }
      img {
        width: 100%;
      }
    }
    .text-area {
      flex-basis: 100%;
      margin-top: 30px;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
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

  .digital-solutions {
    padding: 20px;
    h2 {
      color: black;
    }
    > p {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>