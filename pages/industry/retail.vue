<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">Reshaping Retail And Consumer Goods</h2>
      <p class="text-center">
        From an avant garde fashion hub to seasoned conglomerate, our
        forward-thinking experts create top-notch solutions for lasting customer
        relationships. By providing secure digital options to their respective
        customers and retailers, we have enhanced their revenue and growth.
        Silicon Network’s technology driven methodology has created an
        equilibrium of innovation and engagement for the brands. We create
        multiple channels for retail and customer goods to reach their desired
        audience via mobile apps, software and digital solutions.
      </p>
    </div>
    <impact-icons :Impact="Impact" />
    <div class="home-container starting-text">
      <p class="text-center">Use Cases</p>
      <h2 class="text-center">Embracing New Horizons</h2>
    </div>
    <use-case-card :UseCaseCard="UseCaseCard" />
    <mission-globe />
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
  name: "Retail",
  data: () => {
    return {
      bannerData: {
        top: "Retail And CPG",
        img: "retailbanner.jpg",
        heading: "Equipping Customer With Digital Solution",
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
            desc: "Assessing technological infrastructure and business objective  Ensure the IT-footprint offers best value Recommending the best solution",
          },
          {
            img: "implem.svg",
            heading: "Implementation",
            desc: "Deploying fast paced strategy without compromising quality  Load-Testing for long-term scalability Balancing cost and hybrid innovation",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "Minimize the disruption via continuity plan. Match and strengthen your digital asset Provide responsive and effective technology",
          },
        ],
      },
      UseCaseCard: {
        img: "industry4.jpg",
        bgImg: "gradient4.jpg",
        heading: "Use Cases",
        listItems: [
          {
            title: "Precision Farming",
          },
          {
            title: "Predictive Maintenance",
          },
          {
            title: "Asset Tracking",
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