<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <contact-form />
    <building-cta />
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";

import ServiceBanner from "../components/services/ServiceBanner.vue";
import BuildingCta from "../components/BuildingCTA.vue";
export default {
  components: { ContactForm, BuildingCta, ServiceBanner },
  name: "ContactPage",
  data: () => {
    return {
      bannerData: {
        img: "about.jpg",
        heading: "Curating Top-Notch Brand, Product And Services",
        url: "#",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>