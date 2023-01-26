<template>
  <div>
    <mobile-dev-banner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <service-provide :Impact="Impact1" />
    <block-chain-process />
    <tech-stacks />
  </div>
</template>

<script>
import MobileDevBanner from "../../components/services/MobileDevBanner.vue";
import TechStacks from "../../components/home/TechStacks.vue";
import ServiceProvide from "../../components/home/ServiceProvide.vue";
import BlockChainProcess from "../../components/home/BlockChainProcess.vue";
import Service from "../../components/services/Service.vue";
import FaqSection from "../../components/FaqSection.vue";
import ImpactIcons from "../../components/home/ImpactIcons.vue";
export default {
  components: {
    Service,
    FaqSection,
    ImpactIcons,
    MobileDevBanner,
    TechStacks,
    ServiceProvide,
    BlockChainProcess
  },
  name: "DataScience",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {  
      bannerData: {
        img: "AI.webp",
        name: "Data Science & AI",
        heading: "Utilizing Data Science To Motivate Strategic Business Decisions",
        description: "Using data science, you can make important business decisions and plan, design, and build your AI transformation projects.",
        url: "#contact-form",
      },
      Impact1: {
        heading: "Our Expertise",
        url:'#',
        icons: [
          {
            heading: "Machine Learning",
            desc: "Strong ML model development will help in the search for the best results and the best performance.",
          },
          {
            heading: "In-Depth Learning",
            desc: "Deep learning has the ability to learn on its own, and we use that to help you always get better results.",
          },
          {
            heading: "Machine Learning",
            desc: "Your systems can analyze and comprehend their surroundings thanks to our robust computer vision models.",
          },
          {
            heading: "Automatic Language Recognition",
            desc: "We give your program the tools it needs to understand natural language and respond to it.",
          },
          {
            heading: "Optimization",
            desc: "Our engineers can help you train your AI models to get the results you want by changing the parameters.",
          },
        ],
      },
      Impact: {
        heading: "Services We Offer",
        icons: [
          {
            img: "save-time.png",
            heading: "AI Model Creation",
            desc: "Creation of unique AI models using deep learning and machine learning methods.",
          },
          {
            img: "middle-man.png",
            heading: "Big Data Solutions",
            desc: "Artificial intelligence-driven design, development, and deployment of Big Data solutions.",
          },
          {
            img: "secure.png",
            heading: "AI Edge",
            desc: "To maintain real-time performance and efficiency, a cloud-native, Edge-first strategy is required.",
          },
          {
            img: "uphold.png",
            heading: "AI System Lifecycle Management",
            desc: "Figuring out a plan for making AI work and putting end-to-end AI lifecycle management into action.",
          },
          {
            img: "become.png",
            heading: "Integration",
            desc: "Integrating systems with AI-ready platforms to create better, more reliable software.",
          },
          {
            img: "ensure.png",
            heading: "Transforming AI",
            desc: "Establishing a business case, prospects, and a development roadmap to direct you through your AI transformation.",
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