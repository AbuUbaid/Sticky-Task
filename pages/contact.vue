<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <contact-form />
    <global-form/>
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";
import GlobalForm from "../components/GlobalForm.vue";

import ServiceBanner from "../components/services/ServiceBanner.vue";
import BuildingCta from "../components/BuildingCTA.vue";
export default {
  components: { ContactForm,GlobalForm, BuildingCta, ServiceBanner },
  layout: 'noform',
  name: "ContactPage",
  head: {
    title: 'Contact Us | Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: "We're always here for you. Contact us today and receive a quick response from our friendly and knowledgeable customer support team. Get the support you need!"
      }
    ],
  },
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