<template>
  <div>
    <main-banner />
    <counter-area :counterData="counterData" />
    <services-card />
    <two-image-banner />
    <solution-cards />
    <case-study-slide />
    <hardware-partners />
    <!-- <testimonial-slider /> -->
  </div>
</template>

<script>
import CaseStudySlide from "../components/CaseStudySlide.vue";
import CounterArea from "../components/home/CounterArea.vue";
import HardwarePartners from "../components/home/HardwarePartners.vue";
import MainBanner from "../components/home/MainBanner.vue";
import ServicesCard from "../components/home/ServicesCard.vue";
import SolutionCards from "../components/home/SolutionCards.vue";
import TestimonialSlider from "../components/home/TestimonialSlider.vue";
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
  },
  name: "IndexPage",
  data: () => {
    return {
      counterData: {
        heading: "Achieving Substantial Solutions Through Holistic Approach",
        subheading: "We Provide Best And Best Only",
        counters: [
          {
            text: "ACTIVE CLIENTS",
            number: "2.6k+",
          },
          {
            text: "HOURS OF EXPERIENCE",
            number: "10M+",
          },
          {
            text: "PROJECTS COMPLETED",
            number: "215k+",
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
