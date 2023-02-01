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
  name: "Government",
  head: {
    title: 'Government Industry Solutions | Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: "Simplify government operations with our industry solutions. From citizen engagement to process automation, we provide innovative solutions to meet your needs."
      }
    ],
  },
  data: () => {
    return {
      bannerData: {
        top: "Government",
        img: "government.webp",
        heading: "Offering Secure Digital Options For Institutions",
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