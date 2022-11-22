<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <div class="home-container starting-text">
      <p class="text-center">Our Industry</p>
      <h2 class="text-center">Adding Value To Medicinal Care</h2>
      <p class="text-center">
        The process of developing medical apps for use in healthcare involves
        customizing, developing, supporting, and evolving these apps. As part of
        our commitment to providing state-of-the-art care, we strive to develop
        cutting-edge apps.
        <br /><br />
        Our thorough market analysis, keen software ideation helped us create
        staunch digital infrastructure with promising API integration. In
        achieving agile development, we run the process from healthcare standard
        and maintenance. This expertise and critical approach maneuver a digital
        experience for our clients.
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
  name: "Pharma",
  data: () => {
    return {
      bannerData: {
        img: "about.jpg",
        heading: "Curating Top-Notch Brand, Product And Services",
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
            heading: "Support",
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
        img: "industry1.jpg",
        bgImg: "gradient1.jpg",
        heading: "Use Cases",
        listItems: [
          {
            title: "End-To-End Process Automation",
          },
          {
            title: "Computer Assisted Diagnosis (CAD)",
          },
          {
            title: "Data Analysis For Customer- Centric Growth",
          },
        ],
      },
      IndustryC: {
        items: [
          {
            heading: "ACTIVE CLIENTS",
            value: "2.6k+",
          },
          {
            heading: "ACTIVE CLIENTS",
            value: "2.6k+",
          },
          {
            heading: "ACTIVE CLIENTS",
            value: "2.6k+",
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