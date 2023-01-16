<template>
  <div>
    <dev-ops-bunner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <verification :Impact="Impact1" />
    <domains />
  </div>
</template>

<script>
import DevOpsBunner from "../../components/services/DevOpsBunner.vue";
import TopNotchSoftware from "../../components/home/TopNotchSoftware.vue";
import Verification from "../../components/home/Verification.vue";
import Domains from "../../components/home/Domains.vue";
import EndToEndSoftware from "../../components/home/EndToEndSoftware.vue";
import NextStarts from "../../components/home/NextStarts.vue";
import Service from "../../components/services/Service.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import FaqSection from "../../components/FaqSection.vue";
import ImpactIcons from "../../components/home/ImpactIcons.vue";
export default {
  components: {
    Service,
    SolutionCards,
    FaqSection,
    TopNotchSoftware,
    Verification,
    Domains,
    EndToEndSoftware,
    NextStarts,
    ImpactIcons,
    DevOpsBunner,
  },
  name: "DevOpsNew",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "qatesting.jpg",
        heading: "Lets Make Your Product Rebust And Reliable",
        description:
          "Enhancing the software's quality while maintaing the timeline for delivery.",
        url: "#contact-form",
      },
      Impact: {
        heading: "Services We Offer",
        icons: [
          {
            img: "test-auto.png",
            heading: "Test Automation",
            desc: "Time is saved and productivity is increased with smarter testing.",
          },
          {
            img: "perform-test.png",
            heading: "Performance Testing",
            desc: "To determine how well your software will perform under heavy load.",
          },
          {
            img: "security-test.png",
            heading: "Security Testing",
            desc: "Utilizing stringent cybersecurity procedures to guarantee the security of your data.",
          },
          {
            img: "mob-testing.png",
            heading: "Mobile Testing",
            desc: "Keeping speed and responsiveness as top priorities.",
          },
          {
            img: "manual-test.png",
            heading: "Manual Testing",
            desc: "Without a human touch, our testing process is insufficient.",
          },
        ],
      },
      Impact1: {
        heading: "Our Verification & Validation Process",
        url:'#!',
        icons: [
          {
            img: "planning.png",
            heading: "Reduced Market Time",
            desc: "Cut time to market by up to 50% through streamlined software delivery.",
          },
          {
            img: "curve.png",
            heading: "High Performance",
            desc: "Boost team output and accelerate the delivery of new functionality.",
          },
          {
            img: "process.png",
            heading: "Low Risk",
            desc: "Early detection of quality issues can reduce defects by 30% throughout the lifestyle.",
          },
          {
            img: "report.png",
            heading: "High Adaptability",
            desc: "The operational state is more stable and secure, and changes are auditable in a systematic manner.",
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