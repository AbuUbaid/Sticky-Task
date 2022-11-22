<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <metrics-counter :Metrics="Metrics" />
    <section class="">
      <Service
        :isEven="isEven(index)"
        :item="item"
        :key="index"
        v-for="(item, index) in data"
      />
    </section>
    <SolutionCards :Cards="IndustryCards" />
    <FaqSection :Faqs="Faqs" />
  </div>
</template>

<script>
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import Service from "../../components/services/Service.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import FaqSection from "../../components/FaqSection.vue";
import MetricsCounter from "../../components/services/MetricsCounter.vue";
export default {
  components: {
    ServiceBanner,
    Service,
    SolutionCards,
    FaqSection,
    MetricsCounter,
  },
  name: "Digital",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "about.jpg",
        heading: "Curating Top-Notch Brand, Product And Services",
        url: "#",
      },
      Metrics: {
        heading: "Services That Reflect Ingenuity",
        desc: "Silicon Network brings together IT strategy, deep industry knowledge, change management and large-scale application delivery.",
        icons: [
          {
            heading: "Full Stack Engineers",
            value: "220+",
          },
          {
            heading: "Full Stack Engineers",
            value: "220+",
          },
          {
            heading: "Full Stack Engineers",
            value: "220+",
          },
          {
            heading: "Full Stack Engineers",
            value: "220+",
          },
        ],
      },
      data: [
        {
          url: "one.svg",
          text: "Aaaaaaaa",
          listItems: [
            "Content & Media",
            "Content & Media",
            "Information & Architecture",
            "Design Thinking",
          ],
        },
        {
          url: "two.svg",
          text: "",
          listItems: [
            "Content & Media",
            "Content & Media",
            "Information & Architecture",
            "Design Thinking",
          ],
        },
        {
          url: "three.svg",
          text: "",
          listItems: [
            "Content & Media",
            "Content & Media",
            "Information & Architecture",
            "Design Thinking",
          ],
        },
        {
          url: "four.svg",
          text: "",
          listItems: [
            "Content & Media",
            "Content & Media",
            "Information & Architecture",
            "Design Thinking",
          ],
        },
      ],
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
        title: "Our Services",
        heading:
          "Integrating Practical Technology Through Software Into Digital World",
        paragraph: "",
        cards: [
          {
            heading: "Digital",
            desc: "Create digital Infrastructures, Design websites and make an online impact",
            img: "digital.svg",
          },
          {
            heading: "Dev-Ops And Cloud",
            desc: "Best Cloud Services, Cloud consult, transformation, security service and management",
            img: "ms.svg",
          },
          {
            heading: "Microsoft Services",
            desc: "From finance operation, project service automation, sales, and talent acquisition, we refine these steps to get best results.",
            img: "devops.svg",
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

<style lang="scss">
.fopage-images {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 20px;
}

.fopage-images .order {
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 20px;
}

.fopage-width {
  width: 50%;
  margin: auto;
}
</style>