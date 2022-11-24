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
        img: "digital.jpg",
        heading: "Curating Top-Notch Brand, Product And Services",
        url: "#",
      },
      Metrics: {
        heading: "Digital Transformation",
        desc: "We Contemplate Your Digital Strategy For Perfect Brand Experience By Curating Outstanding Content And Experimenting With Different Forms Of Media.",
        icons: [
          {
            heading: "Active Social Media Marketing Projects.",
            value: "255+",
          },
          {
            heading: "Dedicated Design Studios",
            value: "10",
          },
          {
            heading: "Design Consultants & Creative Artists",
            value: "435+",
          },
          {
            heading: "Omni-Channel Experienced Engineers",
            value: "225+",
          },
        ],
      },
      data: [
        {
          heading: "Consult & Strategy",
          url: "one.svg",
          text: `For any other potential business the journey starts with a great idea.
Our team of experts make sure to refine the ideation process with
responsible insights and thorough comprehension.
We also take immense pride in working with established firms and
assisting them in strategizing an exponential route through the digital
landscape and triumph.`,
          listItems: [
            "Brand Experience",
            "Content & Media",
            "Information & Architecture",
            "Design Thinking",
          ],
        },
        {
          heading: "Consult & Strategy",
          url: "two.svg",
          text: `Our experts analyze the system switch keeping in check technical errors
across applications, data and multiple processes. We work with the goal
to provide supportive machine infrastructure which can provide a 360-
degree view of the respective business for customers, partners and
employees.`,
          listItems: [
            "Efficient Operations",
            "Data Cleansing",
            "Product Evaluation",
          ],
        },
        {
          heading: "Consult & Strategy",
          url: "three.svg",
          text: `Ideation expands into the visual sphere through comprehensive
procedure. In the digital domain, design is not reduced to mere
aesthetics or beautification. We believe that design has a key
role in problem solving for agile customer experience.  Our
methodology aspires to be holistically interactive and practical.`,
          listItems: [
            "Holistic Approach",
            "Contextualized Data Collection",
            "Iterative Validation",
            "Stakeholders Identification",
          ],
        },
        {
          heading: "Experience & Design",
          url: "four.svg",
          text: `We have analyzed market behavior for a long time to understand the
highs and lows of it. In this way, we help businesses improve relevance
and drive growth by re-imagining buying and selling experiences. 
<br><br>
Using an astute business model, we balance the complexity of the sales 
and commerce ecosystem with the simplicity of a simple sales process.`,
          listItems: [
            "Supply Chain Management",
            "Internet Marketing",
            "User Experience",
            "Electronic Data Interchange",
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