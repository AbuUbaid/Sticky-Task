<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">Empowering Public Sector For Betterment</h2>
      <p class="text-center">
        Silicon Network has been assisting federal to local government bodies to
        amalgamate digital sense into the public sector. Our experts provide
        informed solutions to promote economic growth, the expansion of social
        responsibility, and better citizen service. The fields of expertise
        includes, education, land record management showcasing better
        understanding of social fabric and digital human sciences
      </p>
    </div>
    <impact-icons :Impact="Impact" />
    <div class="home-container starting-text">
      <p class="text-center">Use Cases</p>
      <h2 class="text-center">Embracing New Horizons</h2>
    </div>
    <use-case-card :UseCaseCard="UseCaseCard" />
    <mission-globe :Footprint="Footprint"/>
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
  name: "Government",
  data: () => {
    return {
      bannerData: {
        top: "Government",
        img: "government.webp",
        heading: "Offering Secure Digital Options For Institutions",
        url: "#",
      },
      
      Footprint: {
        heading: `Creating Successful Global Footprint In Leading Industry `
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
        img: "industry6.webp",
        bgImg: "gradient6.webp",
        heading: "Use Cases",
        listItems: [
          {
            title: "Decision Analytics",
          },
          {
            title: "Object Detection And Classification",
          },
          {
            title: "Smart Security Protocols",
          },
          {
            title: "Fraud Detection",
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