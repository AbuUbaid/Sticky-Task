<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">Achieving Optimal Fleet Management</h2>
      <p class="text-center">
        Our transportation infrastructure serves a variety of purposes, from
        transporting freight to enabling business travel. By utilizing digital
        solutions, fleet management logistics can be significantly improved,
        including routing, maintenance, and financing. Using digital technology,
        Silicon Network helps transportation clients become more efficient and
        customer-focused.
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
  name: "Manufacturing",
  data: () => {
    return {
      Footprint: {
        heading: `Creating Successful Global Footprint In Leading Industry `,
      },
      bannerData: {
        top: "Manufacturing And Distribution",
        img: "manufacturing.webp",
        heading: "Enabling Seamless Logistical Flow",
        url: "#",
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
        img: "industry3.webp",
        bgImg: "gradient3.webp",
        heading: "Use Cases",
        listItems: [
          {
            title: "Predictive Maintenance",
          },
          {
            title: "Asset Tracking",
          },
          {
            title: "Decision Analytics",
          },
          {
            title: "Product Management",
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

<style lang="scss" >
.starting-text {
  margin: 50px auto;
  h2 {
    margin: 10px 0px;
  }
}
</style>