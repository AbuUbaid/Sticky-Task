<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
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
  name: "Microsoft",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "ms.webp",
        heading: "Curating Top-Notch Brand, Product And Services",
        url: "#",
      },
      Metrics: {
        heading: "Microsoft Services",
        desc: `We make sure that these tools along with multiple productivity applications and artificial intelligence can be best subscribed to your business goals. From finance operation, marketing, project service automation, retails, sales, and talent acquisition, we refine these applications to get top-notch results.`,
        icons: [
          {
            heading: "Foolproof And Interactive Websites Developed.",
            value: "10k",
          },
          {
            heading: "Omni Channel Experience Experts & Engineers",
            value: "225",
          },
          {
            heading: "Automation Center Bots",
            value: "50",
          },
          {
            heading: "Full Stack Engineers",
            value: "220",
          },
        ],
      },
      data: [
        {
          heading: "Dynamic 365",
          url: "one.svg",
          text: `Efficient results require trustworthy tools. Our experts build your business growth by deploying top-notch softwares and services. A cloud-based business application Dynamic 365 combines components of customer relationship management (CRM) and enterprise resources planning (ERP) for your business.`,
          listItems: [
            "Easy To Use And Deploy",
            "Full Integration With Microsoft Products",
            "Reduced Sales Cycle",
            "Improved Customer Service Experience",
          ],
        },
        {
          heading: "Power BI",
          url: "two.svg",
          text: `Business intelligence is achieved by data-driven culture. We deploy Power BI service which provides analytic eye on enterprise level. 
Our team uses such cloud-based applications to integrate with other Microsoft solutions, lowering the security risks, added cost and unwanted complexities scaling from individual to organization as a whole. `,
          listItems: [
            "Interactive Power BI Desktop",
            "Customized Visualization",
            "Visibility",
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

.mss-banner h1 {
  color: white;
}
.mss-banner a {
  color: white !important;
}
</style>