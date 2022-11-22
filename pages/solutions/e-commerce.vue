<template>
  <div>
    <div class="banner-container solution-banner" >
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
        <h2>Solution To Human Resources That Is Adaptable And Effective</h2>
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
</style>