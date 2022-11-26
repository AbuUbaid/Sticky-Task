<template>
  <div>
    <service-banner :BannerData="bannerData" class="mss-banner" />
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
  name: "Pharma",
  data: () => {
    return {
      bannerData: {
        top: "Pharmaceutical",
        img: "pharma.webp",
        heading: "Seize The Space In Health",
        url: "#",
      },

      Footprint: {
        heading: `Creating Successful Global Footprint In Leading Industry`,
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
            heading: "Consulting",
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
        img: "industry5.webp",
        bgImg: "gradient5.webp",
        heading: "Use Cases",
        listItems: [
          {
            title: "Predictive Analytics",
          },
          {
            title: "Product Development",
          },
          {
            title: "Sentiment Analysis",
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