<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">Enabling Finance Digitalization</h2>
      <p class="text-center">
        Our belief in transforming financial services into concrete
        relationships has kept our passion intact. By implementing solutions
        such as enterprise integration, business process management, and robotic
        process automation, we help banks and financial institutions improve
        efficiency and boost their bottom line.
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
  name: "Finance",
  data: () => {
    return {
      bannerData: {
        top: "Insurance & Financial",
        img: "financebanner.jpg",
        heading: "Strengthening Banking Experience And Innovation",
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
        img: "industry2.jpg",
        bgImg: "gradient2.jpg",
        heading: "Use Cases",
        listItems: [
          {
            title: "Fraud Detection",
          },
          {
            title: "End-To-End Process Automation",
          },
          {
            title: "Object Detection And Classification",
          },
          {
            title: "Smart Security Protocols",
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