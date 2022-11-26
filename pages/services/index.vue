<template>
  <div>
    <first-banner />
    <p class="text-center">Services</p>
    <metrics-counter :Metrics="Metrics" />
    <service-values :Values="Values" />
    <service-internal-links />
    <methodology />
    <solution-cards :Cards="IndustryCards" />
    <faq-section :Faqs="Faqs" />
    <case-study-slide />
  </div>
</template>

<script>
import FirstBanner from "../../components/services/FirstBanner.vue";
import ServiceInternalLinks from "../../components/services/ServiceInternalLinks.vue";
import BuildingCta from "../../components/BuildingCTA.vue";
import MetricsCounter from "../../components/services/MetricsCounter.vue";
import Methodology from "../../components/services/Methodology.vue";
import ServiceValues from "../../components/services/ServiceValues.vue";
export default {
  components: {
    BuildingCta,
    FirstBanner,
    MetricsCounter,
    ServiceInternalLinks,
    Methodology,
    ServiceValues,
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
            link: "digital",
          },
          {
            heading: "Dev-Ops And Cloud",
            desc: "Best Cloud Services, Cloud consult, transformation, security service and management.",
            img: "devops.svg",
            link: "devops",
          },
          {
            heading: "Microsoft Services",
            desc: "From finance operation, project service automation, sales, and talent acquisition, we refine these steps to get best results.",
            img: "ms.svg",
            link: "microsoft",
          },
          {
            heading: "BPAAS",
            desc: "Depend on consistent, stable development resources with our global scale connectivity to world-class talent hubs to digitise land records.",
            img: "bpaas.svg",
            link: "bpo",
          },
        ],
      },
      Faqs: {
        title: "Our Process",
        heading: "Our Groundbreaking Work Sequence",
        img: "faqs.webp",
        questions: [
          {
            title: "Plan",
            answer: "Project conception, planning, and prioritization",
          },
          {
            title: "Meet",
            answer:
              "Utilizing Scrum to align teams and stakeholders on features, utilizing user flow diagrams or UML diagrams to illustrate how new features must operate.",
          },
          {
            title: "Iterate",
            answer:
              "On the basis of iteration requirements and evaluation, setting precise goals and delivering the agreed-upon working software.",
          },
          {
            title: "Test",
            answer:
              "QA testing (feature-driven, test-driven, behavior-driven), creating documentation, and launching the iteration into production.",
          },
          {
            title: "Develop",
            answer:
              "Constant maintenance and updates for the software release.",
          },
          {
            title: "Retire",
            answer: "EOL Activities.",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>