<template>
  <div>
    <about-banner />
    <about-purpose />
    <about-sn />
    <about-values :Values="Values" />
    <about-team />
    <solution-cards :Cards="IndustryCards" />
    <case-study-slide />
  </div>
</template>

<script>
import AboutBanner from "../components/about/AboutBanner.vue";
import AboutPurpose from "../components/about/AboutPurpose.vue";
import BuildingCta from "../components/BuildingCTA.vue";
import CaseStudySlide from "../components/CaseStudySlide.vue";
import TechPartners from "../components/TechPartners.vue";

export default {
  components: {
    CaseStudySlide,
    AboutBanner,
    TechPartners,
    BuildingCta,
    AboutPurpose,
  },
  name: "AboutPage",
  data: () => {
    return {
      IndustryCards: [
        { title: "CPG & Retail", link: "" },
        { title: "Government", link: "" },
        { title: "Apparel & Footwear", link: "" },
        { title: "Manufacturing & Distribution", link: "" },
        { title: "Insurance & Financial Services", link: "" },
        { title: "Food & Beverage", link: "" },
        { title: "Pharmaceutical", link: "" },
      ],
      Values: {
        title: "Values",
        heading: "Our Identity And Our Devotion Go Hand-In-Hand",
        paragraph:
          "Our success is relative to our devotion and attitude towards hard-work and innovation. This has assisted us in curating ideal digital solutions and high-end platforms. ",
        cards: [
          {
            heading: "Vigilant",
            desc: "Each detail is carefully considered, so we deliver a superior product",
            img: "digital.svg",
          },
          {
            heading: "Reliability",
            desc: "In every aspect of our business, we strive to deliver what we promise. We meet every deadline, and we communicate effectively.",
            img: "devops.svg",
          },
          {
            heading: "Community",
            desc: "The mission of our organization is to drive positive, long-term growth for the community to make it a better place for everyone to live.",
            img: "ms.svg",
          },
          {
            heading: "Empathy",
            desc: "To create a culture where young minds can learn, interact, and grow, Silicon Network aims to become a hub of learning and interaction.",
            img: "bpaas.svg",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>