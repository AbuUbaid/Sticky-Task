<template>
  <div>
    <dev-ops-bunner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <dev-tools />
    <impact-icons :Impact="Impact1" />
  </div>
</template>

<script>
import DevOpsBunner from "../../components/services/DevOpsBunner.vue";
import TopNotchSoftware from "../../components/home/TopNotchSoftware.vue";
import EndToEndSoftware from "../../components/home/EndToEndSoftware.vue";
import DevTools from "../../components/home/DevTools.vue";
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
    EndToEndSoftware,
    DevTools,
    NextStarts,
    ImpactIcons,
    DevOpsBunner
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
        img: "devops.jpg",
        heading: "Improve The Efficiency Of Your IT Staff With Devops",
        description: "By automating inefficiencies, DevOps solutions raise the caliber and security of software. Businesses can improve the performance of their IT teams with the aid of Silicon Networks' DevOps consulting services.",
        url: "#",
      },
      Impact: {
        heading: "Our DevOps Services",
        icons: [
          {
            img: "devops-assment.png",
            heading: "Devops Assessment",
            desc: "In order to automate deployment cycles across your delivery infrastructure, our DevOps engineer examines the key points, creates a road map, and makes recommendations for tools and procedures.",
          },
          {
            img: "devops-auto.png",
            heading: "Devops Automation",
            desc: "We automate the entire delivery cycle, ensuring that deployments and rollbacks are completed with a single click, mitigating risks and boosting productivity.",
          },
          {
            img: "devops-manage.png",
            heading: "Devops Management",
            desc: "We support your core team in ensuring that the delivery pipeline automation cycle operates in a fully integrated manner and in adjusting your automated deployment cycle to changes.",
          },
        ],
      },
      Impact1: {
        heading: "What Will You Receive",
        icons: [
          {
            img: "rmt.png",
            heading: "Reduced Market Time",
            desc: "Cut time to market by up to 50% through streamlined software delivery.",
          },
          {
            img: "hperform.png",
            heading: "High Performance",
            desc: "Boost team output and accelerate the delivery of new functionality.",
          },
          {
            img: "low-risk.png",
            heading: "Low Risk",
            desc: "Early detection of quality issues can reduce defects by 30% throughout the lifestyle.",
          },
          {
            img: "hadapt.png",
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