<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">
        Simplifying Expert Food & Beverage App Solutions
      </h2>
      <p class="text-center">
        By creating custom software products for your food and beverage
        business, our leading software development company can help you meet
        compliance requirements, maintain quality, keep track of your
        competitors, streamline distribution, and plan processes intelligently.
      </p>
    </div>
    <impact-icons :Impact="Impact" />
    <div class="home-container starting-text">
      <p class="text-center">Use Cases</p>
      <h2 class="text-center">Embracing New Horizons</h2>
    </div>
    <use-case-card :UseCaseCard="UseCaseCard" />
    <mission-globe :Footprint="Footprint" />
    <industry-counter :IndustryC="IndustryC" />
    <solution-cards :Cards="IndustryCards" />
  </div>
</template>

<script>
import ImpactIcons from "../../components/industry/ImpactIcons.vue";
import UseCaseCard from "../../components/industry/UseCaseCard.vue";
import MissionGlobe from "../../components/industry/MissionGlobe.vue";
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import IndustryCounter from "../../components/industry/IndustryCounter.vue";
export default {
  components: {
    ServiceBanner,
    ImpactIcons,
    UseCaseCard,
    MissionGlobe,
    SolutionCards,
    IndustryCounter,
  },
  name: "Food",
  head: {
    title: 'Food Industry Solutions | Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: "Transform the way you do business in the food industry with our industry solutions. From farm-to-table traceability to food safety management, we have you covered."
      }
    ],
  },
  data: () => {
    return {
      bannerData: {
        top: "Food & Beverages",
        img: "food.webp",
        heading: "Create Custom Software Products With Ease",
        url: "#",
      },

      Footprint: {
        heading: `Creating Successful Global Footprint In Leading Industry `,
      },
      IndustryCards: [
        { title: "CPG & Retail", link: "" },
        { title: "Government", link: "" },
        { title: "Apparel & Footwear", link: "" },
        { title: "Manufacturing & Distribution", link: "" },
        { title: "Insurance & Financial Services", link: "" },
        { title: "Food & Beverage", link: "" },
        { title: "Pharmaceutical", link: "" },
      ],
      Impact: {
        title: "Our Impact",
        heading: "Empowering Tech Industry On Every Step",
        icons: [
          {
            img: "consult.svg",
            heading: "Consultancy",
            desc: "As your technology advisor, Silicon Network curates your digital footprint that is future-proofed for sustainable growth and profitability.",
          },
          {
            img: "implem.svg",
            heading: "Implementation",
            desc: "Through our implementation services, we help our clients reach their full potential. Our digital projects are run by business consultants, highly skilled technical teams, and digital accelerators who use credible methods and the best practices in their fields.",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "In addition to staying at the cutting edge of digital enterprise technologies, Silicon Network's digital support professionals provide proactive and corrective support for the network, computing, storage, and network infrastructure, business applications, user accounts, and much more of our clients' needs.",
          },
        ],
      },
      UseCaseCard: {
        img: "industry7.webp",
        bgImg: "gradient7.webp",
        heading: "Use Cases",
        listItems: [
          {
            title: "Product Management",
          },
          {
            title: "End-to-End Process Automation",
          },
          {
            title: "Data Analysis for Customer Centric Growth",
          },
          {
            title: "Churn Prevention",
          },
        ],
      },
      IndustryC: {
        items: [
          {
            heading: "Global Experts",
            value: "5250+",
          },
          {
            heading: "Services Delivered From Countries",
            value: "5+",
          },
          {
            heading: "Active Clients Across Globe",
            value: "2670+",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.starting-text {
  margin: 50px auto;
  h2 {
    margin: 10px 0px;
  }
}
</style>