<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <contact-form />
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";

import ServiceBanner from "../components/services/ServiceBanner.vue";
import BuildingCta from "../components/BuildingCTA.vue";
export default {
  components: { ContactForm, BuildingCta, ServiceBanner },
  layout: 'noform',
  name: "ContactPage",

  data: () => {
    return {
      bannerData: {
        img: "contactbg.webp",
        heading: "Get All Of Your Queries Answered By The Best In The Field ",
        url: "#",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>