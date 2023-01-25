<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <verification :Impact="Impact"  />
    <fixed-price-process />
    <week-process />
  </div>
</template>

<script>
import ServiceBanner from "../components/services/ServiceBanner.vue";
import Verification from "../components/home/Verification.vue";
import FixedPriceProcess from "../components/home/FixedPriceProcess.vue";
import WeekProcess from "../components/home/WeekProcess.vue";
export default {
  name: "CareersPage",
  components: {
    ServiceBanner,
    Verification,
    FixedPriceProcess,
    WeekProcess
  },
  data: () => {
    return {
      bannerData: {
        img: "fixed-price.png",
        name: "Fix Price Project",
        heading: "We Help Bring Ideas To Life",
        description: "Our tech experts help reduce development costs while upholding high standards of quality.",
        url: "#contact-form",
      },
      Impact: {
        heading: "We Provide You",
        url:'#',
        icons: [
          {
            img: "middle-man.png",
            heading: "Fast Track Delivery",
            desc: "Comprehensive requirements engineering and an efficient development process ensure rapid delivery without bottlenecks.",
          },
          {
            img: "secure.png",
            heading: "Quality Products",
            desc: "Throughout the lifecycle of the project, we provide quality assurance to ensure that the final product exceeds your expectations.",
          },
          {
            img: "uphold.png",
            heading: "Competitive Advantage",
            desc: "We offer practical solutions leveraging latest technological tools and industry practices at market competitive rates.",
          },
          {
            img: "ensure.png",
            heading: "Security & Protection",
            desc: "All the work is completely IP protected and secured by maintaining the intellectual property through strict NDAs.",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  margin-top: 50px;
  margin-bottom: 50px;
  > h2 {
    margin-bottom: 15px;
  }
}

.roles {
  display: none;
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>