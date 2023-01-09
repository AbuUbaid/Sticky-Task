<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <process />
    <!-- <next-starts /> -->
  </div>
</template>

<script>
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import ImpactIcons from "../../components/home/ImpactIcons.vue";
import Process from "../../components/home/Process.vue";
import TopNotchSoftware from "../../components/home/TopNotchSoftware.vue";
import EndToEndSoftware from "../../components/home/EndToEndSoftware.vue";
import NextStarts from "../../components/home/NextStarts.vue";
import Service from "../../components/services/Service.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import FaqSection from "../../components/FaqSection.vue";
export default {
  components: {
    ServiceBanner,
    ImpactIcons,
    Process,
    Service,
    SolutionCards,
    FaqSection,
    TopNotchSoftware,
    EndToEndSoftware,
    NextStarts,
  },
  name: "UIUXDesign",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "processbanner.png",
        heading: "We Design And Launch Great Digital Products.",
        process: "process",
        url: "#contact-form",
      },
      Impact: {
        heading: "DESIGN SERVICES",
        icons: [
          {
            img: "training.svg",
            heading: "User Research",
            desc: "We conduct in-depth research to create your user personas and map the entire customer journey for your product before we get our hands dirty.",
          },
          {
            img: "medical.svg",
            heading: "Rapid Prototyping",
            desc: "We design prototypes and run user tests on our concepts. This will allow us to learn more about how well-designed your upcoming product will be.",
          },
          {
            img: "pto.svg",
            heading: "UX Design",
            desc: "We combine expert user experience design with cutting-edge technology to create compelling experiences that solve business problems and make people happy.",
          },
          {
            img: "medical.svg",
            heading: "Development",
            desc: "Our software engineers work alongside designers to ensure that the products we deliver to our clients are flawless in terms of experience, design, and technology.",
          },
          {
            img: "pto.svg",
            heading: "Usability Testing",
            desc: "We collaborate with our clients to develop products that meet genuine user requirements. This emphasis on user-centered design ensures that the products we create provide engaging experiences.",
          },
        ],
      },
      Metrics: {
        heading: "BPAAS",
        desc: "Automate, manage the caliber of talent by embracing multichannel approaches, for digital transformation and expansion.",
        icons: [
          {
            heading: "Access Vetted Pool Of Trained Consultants",
            value: "5k+",
          },
          {
            heading: "Engineers & Architects",
            value: "3k+",
          },
          {
            heading: "Data Scientists",
            value: "52+",
          },
          {
            heading: "CX Consumer Panels",
            value: "20+",
          },
        ],
      },
      data: [
        {
          heading: "Staff Augmentation",
          url: "one.svg",
          text: `Successful companies operate on an efficient workforce, which require a crucial scale up development for better and high quality products. Silicon Network works tirelessly to provide coherent technical talent for all-encompassing and high-end value. Our experienced approach allows us to connect companies with high-seasoned  talent which can grow your team quickly and cost-effectively; making a way of success for your business. `,
          listItems: [
            "Hiring Capacity And Volume",
            "Basic Filtering Of Vendors",
            "Success Measurement",
          ],
        },
        {
          heading: "BPO",
          url: "two.svg",
          text: `By leveraging our expertise in the digital sphere, we provide efficient, accurate, and measurable BPO services. By automating, managing quality, embracing multichannel approaches, and embracing digital transformation, we accelerate the delivery of your service. 
Our commitment to complete client satisfaction is backed by impeccable transparency and accountability.
`,
          listItems: [
            "Multi-Channel/Omnichannel Support.",
            "Robust CRM Integration Capabilities.",
            "Compliant Service Solutions.",
            "High Uptime Reliability.",
          ],
        },
      ],
      IndustryCards: [
        { title: "CPG & Retail", link: "" },
        { title: "Government", link: "" },
        { title: "Apparel & Footwear", link: "" },
        { title: "Manufacturing & Distribution", link: "" },
        { title: "Insurance & Financial Services", link: "" },
        { title: "Food & Beverage", link: "" },
        { title: "Pharmaceutical", link: "" },
      ],
      Faqs: {
        title: "Our Process",
        heading: "Our Groundbreaking Work Sequence",
        img: "faqs.webp",
        questions: [
          {
            title: "Plan",
            answer: "Project conception, planning, and prioritization",
          },
          {
            title: "Meet",
            answer:
              "Utilizing Scrum to align teams and stakeholders on features, utilizing user flow diagrams or UML diagrams to illustrate how new features must operate.",
          },
          {
            title: "Iterate",
            answer:
              "On the basis of iteration requirements and evaluation, setting precise goals and delivering the agreed-upon working software.",
          },
          {
            title: "Test",
            answer:
              "QA testing (feature-driven, test-driven, behavior-driven), creating documentation, and launching the iteration into production.",
          },
          {
            title: "Develop",
            answer:
              "Constant maintenance and updates for the software release.",
          },
          {
            title: "Retire",
            answer: "EOL Activities.",
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