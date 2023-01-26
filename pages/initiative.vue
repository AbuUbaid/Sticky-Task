<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <div class="home-container starting-text">
      <p class="text-center">Initiative</p>
      <h2 class="text-center">Enabling Advancement With Outstanding Initiatives</h2>
      <p class="text-center">
        Discover the methods we use to broaden our technical knowledge and put it to use in our daily work. Our employees benefit from the best opportunities, workplaces, and corporate cultures. Initiatives from the company may also involve outside initiatives, like campaigns to raise money for charities or workplace healthcare facilities.
      </p>
      <p class="text-center" style="margin-top:16px">
        We support corporate social responsibility. Among our top priorities are the environment and climate change. Doing so is not only ethical but also our social responsibility.
      </p>
    </div>
    <technical-training />
    <plantation />
    <blood-donation />
    <a-wasia />
  </div>
</template>

<script>
import ServiceBanner from "../components/services/ServiceBanner.vue";
import TechnicalTraining from "../components/home/TechnicalTraining.vue";
import Plantation from "../components/home/Plantation.vue";
import BloodDonation from "../components/home/BloodDonation.vue";
import AWasia from "../components/home/AWasia.vue";
export default {
  components: {
    ServiceBanner,
    TechnicalTraining,
    Plantation,
    BloodDonation,
    AWasia
  },
  name: "Initiative",
  data: () => {
    return {
      bannerData: {
        top: "",
        img: "main-initiative.webp",
        heading: "",
        url: "#",
      },
    };
  },
};
</script>

<style lang="scss" >
.starting-text {
  margin: 50px auto;
  h2 {
    margin: 10px 0px;
  }
}
</style>