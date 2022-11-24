<template>
  <div>
    <first-banner />
    <p class="text-center">Services</p>
    <metrics-counter :Metrics="Metrics" />
    <about-values :Values="Values" />
    <service-internal-links />
    <methodology />
    <solution-cards :Cards="IndustryCards" />
    <faq-section :Faqs="Faqs" />
    <case-study-slide />
    <tech-partners />
    <building-cta />
  </div>
</template>

<script>
import FirstBanner from "../../components/services/FirstBanner.vue";
import ServiceInternalLinks from "../../components/services/ServiceInternalLinks.vue";
import BuildingCta from "../../components/BuildingCTA.vue";
import MetricsCounter from "../../components/services/MetricsCounter.vue";
import Methodology from "../../components/services/Methodology.vue";
export default {
  components: {
    BuildingCta,
    FirstBanner,
    MetricsCounter,
    ServiceInternalLinks,
    Methodology,
  },
  name: "ServicesPage",
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
      Metrics: {
        heading: "Services That Reflect Ingenuity",
        desc: "Silicon Network brings together IT strategy, deep industry knowledge, change management and large-scale application delivery.",
        icons: [
          {
            heading: "Full Stack Engineers",
            value: "220+",
          },
          {
            heading: "Devops & Cloud Experts",
            value: "230+",
          },
          {
            heading: "AI & Data Scientists",
            value: "100+",
          },
          {
            heading: "Design & Digital Professionals",
            value: "1000+",
          },
        ],
      },
      Values: {
        title: "Our Services",
        heading:
          "Integrating Practical Technology Through Software Into Digital World",
        paragraph: "",
        cards: [
          {
            heading: "Digital",
            desc: "Create digital Infrastructures, Design websites and make an online impact;",
            img: "digital.svg",
          },
          {
            heading: "Dev-Ops And Cloud",
            desc: "Best Cloud Services, Cloud consult, transformation, security service and management.",
            img: "devops.svg",
          },
          {
            heading: "Microsoft Services",
            desc: "From finance operation, project service automation, sales, and talent acquisition, we refine these steps to get best results.",
            img: "ms.svg",
          },
          {
            heading: "BPAAS",
            desc: "Depend on consistent, stable development resources with our global scale connectivity to world-class talent hubs to digitise land records.",
            img: "bpaas.svg",
          },
        ],
      },
      Faqs: {
        title: "Our Process",
        heading: "Our Groundbreaking Work Sequence",
        img: "faqs.jpg",
        questions: [
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>