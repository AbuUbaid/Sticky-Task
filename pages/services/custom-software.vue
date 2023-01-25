<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <top-notch-software />
    <end-to-end-software />
    <case-study-slide />
  </div>
</template>

<script>
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import TopNotchSoftware from "../../components/home/TopNotchSoftware.vue";
import EndToEndSoftware from "../../components/home/EndToEndSoftware.vue";
import NextStarts from "../../components/home/NextStarts.vue";
import Service from "../../components/services/Service.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import CaseStudySlide from "../../components/CaseStudySlide.vue";
import FaqSection from "../../components/FaqSection.vue";
export default {
  components: {
    ServiceBanner,
    Service,
    SolutionCards,
    CaseStudySlide,
    FaqSection,
    TopNotchSoftware,
    EndToEndSoftware,
    NextStarts,
  },
  name: "CustomSoftware",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "digital.webp",
        name: "Custom Software Solutions",
        heading: "Custom Software Solutions For Your Company",
        description: "We Are Your One-Stop Shop, Whether You Have A New Product In Development Or An Already Established One. Engage Us For Any Stage, Or The Entire Lifecycle, Of Your Software Development.",
        url: "#contact-form",
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