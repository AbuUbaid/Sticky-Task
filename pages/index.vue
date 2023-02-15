
<template>
  <div>
    <main-banner />
    <!-- <global-form /> -->
    <counter-area :counterData="counterData" />
    <services-card />
    <two-image-banner />
    <solution-cards />
    <!-- <case-study-slide /> -->
    <our-clients />
    <!-- <growth-hop /> -->
    <top-rated-solutions/>
    <testimonial-slider />
    <hardware-partners />
    <!-- <logo-slider /> -->
  </div>
</template>

<script>
import CaseStudySlide from "../components/CaseStudySlide.vue";
import GlobalForm from "../components/GlobalForm.vue";
import CounterArea from "../components/home/CounterArea.vue";
import GrowthHop from "../components/home/GrowthHop.vue";
import HardwarePartners from "../components/home/HardwarePartners.vue";
import OurClients from "../components/home/OurClients.vue";
import TopRatedSolutions from "../components/home/TopRatedSolutions.vue";
import LogoSlider from "../components/home/LogoSlider.vue";
import MainBanner from "../components/home/MainBanner.vue";
import ServicesCard from "../components/home/ServicesCard.vue";
import SolutionCards from "../components/home/SolutionCards.vue";
import TestimonialSlider from "../components/home/TestimonialSliderHome.vue";
import TwoImageBanner from "../components/home/TwoImageBanner.vue";
export default {
  components: {
    MainBanner,
    CounterArea,
    ServicesCard,
    TwoImageBanner,
    SolutionCards,
    CaseStudySlide,
    TestimonialSlider,
    HardwarePartners,
    OurClients,
    TopRatedSolutions,
    LogoSlider,
    GrowthHop,
    GlobalForm,
  },
  head: {
    title: 'Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: 'Our cutting-edge technology provides reliable and fast internet solutions for businesses and individuals. Join us today and revolutionize your online experience.'
      }
    ],
  },
  name: "IndexPage",
  data: () => {
    return {
      tab: null,
      titleName:'Testimonial',
      counterData: {
        heading: "Achieving Substantial Solutions Through Holistic Approach",
        subheading: "We Provide Best And Best Only",
        counters: [
          {
            text: "ACTIVE CLIENTS",
            number: "2.6K+",
          },
          {
            text: "HOURS OF EXPERIENCE",
            number: "10M+",
          },
          {
            text: "PROJECTS COMPLETED",
            number: "215K+",
          },
        ],
      },

      Cards: [
        { title: "CPG & Retail", link: "" },
        { title: "Government", link: "" },
        { title: "Apparel & Footwear", link: "" },
      ],
    };
  },
};
</script>
