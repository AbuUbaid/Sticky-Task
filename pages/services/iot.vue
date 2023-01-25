<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <verification :Impact="Impact" />
    <iot-solution :Impact="Impact1" />
    <tech-stacks />
  </div>
</template>

<script>
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import TechStacks from "../../components/home/TechStacks.vue";
import Verification from "../../components/home/Verification.vue";
import IotSolution from "../../components/home/IotSolution.vue";
import Service from "../../components/services/Service.vue";
import FaqSection from "../../components/FaqSection.vue";
export default {
  components: {
    Service,
    FaqSection,
    ServiceBanner,
    TechStacks,
    Verification,
    IotSolution
  },
  name: "BlockChain",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {  
      bannerData: {
        img: "iot.png",
        name: "Internet Of Things",
        heading: "Your IoT Partner From Concept To Implementation And Beyond",
        description: "We work with you to provide full IoT development, deployment, and management.",
        url: "#contact-form",
      },
      Impact1: {
        heading: "We create custom IoT solutions for clients in a variety of industries",
        url:'#',
        icons: [
          {
            img:"UX.png",
            heading: "AVIATION",
          },
          {
            img:"UX.png",
            heading: "AGRICULTURE",
          },
          {
            img:"UX.png",
            heading: "SMART HOMES",
          },
          {
            img:"UX.png",
            heading: "HEALTH CARE",
          },
          {
            img:"UX.png",
            heading: "AUTOMOTIVES",
          },
          {
            img:"UX.png",
            heading: "RETAIL",
          },
        ],
      },
      Impact: {
        heading: "What We Do",
        url:'#',
        icons: [
          {
            img: "save-time.png",
            heading: "IoT Consultancy",
            desc: "Our consultants create strategies that address all of your technological requirements, whether you need just one piece of an IoT puzzle or a full-scale solution.",
          },
          {
            img: "middle-man.png",
            heading: "App Development",
            desc: "Customized mobile and web apps that leverage the power of connected devices to provide enterprises with next-generation IoT products.",
          },
          {
            img: "secure.png",
            heading: "System Integration",
            desc: "Our backend integrations enable apps to track and communicate with devices using industry-standard protocols.",
          },
          {
            img: "uphold.png",
            heading: "Extension Into IoT",
            desc: "We transform existing enterprise and consumer solutions into IoT assets by connecting distributed devices and gadgets.",
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