<template>
  <div>
    <mobile-dev-banner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <mobile-how />
    <tech-stacks />
  </div>
</template>

<script>
import MobileDevBanner from "../../components/services/MobileDevBanner.vue";
import MobileHow from "../../components/home/MobileHow.vue";
import TechStacks from "../../components/home/TechStacks.vue";
import NextStarts from "../../components/home/NextStarts.vue";
import Service from "../../components/services/Service.vue";
import FaqSection from "../../components/FaqSection.vue";
import ImpactIcons from "../../components/home/ImpactIcons.vue";
export default {
  components: {
    Service,
    FaqSection,
    NextStarts,
    ImpactIcons,
    MobileDevBanner,
    MobileHow,
    TechStacks
  },
  name: "MobileDevelopment",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {  
      bannerData: {
        img: "web-dev.webp",
        name: "Web Development",
        heading: "By Developing Web Experiences, We Evolve.",
        description: "Making interactive online applications is the best way to give our clients experiences that go above and beyond what they expect.",
        url: "#contact-form",
      },
      Impact: {
        heading: "What We Do",
        icons: [
          {
            img: "UX.png",
            heading: "Experience Design",
            desc: "Because we have a lot of experience with front-end development and UI/UX design, we can make online apps with great user experiences.",
          },
          {
            img: "App-dev.png",
            heading: "App Development",
            desc: "We've been making high-performance mobile apps with lots of features for the last ten years that will go above and beyond what you expect.",
          },
          {
            img: "Backend-dev.png",
            heading: "Backend Development",
            desc: "We make back-end solutions for mobile, web, and desktop platforms that can be scaled up or down depending on your needs.",
          },
          {
            img: "full-stack-dev.png",
            heading: "Full Stack Development",
            desc: "We offer expert software engineering for all kinds of technologies, from simple front-end prototyping to highly effective back-ends.",
          },
          {
            img: "qa-testing.png",
            heading: "QA Testing",
            desc: "There are a lot of independent software QA and testing services that follow the strictest security guidelines and benchmarks.",
          },
          {
            img: "support.png",
            heading: "Support",
            desc: "We offer a variety of SLA-based maintenance subscriptions to keep your app up and running, handle feature updates, and fix bugs.",
          },
        ],
      },
      Impact1: {
        heading: "What Will You Receive",
        icons: [
          {
            img: "training.svg",
            heading: "Reduced Market Time",
            desc: "Cut time to market by up to 50% through streamlined software delivery.",
          },
          {
            img: "medical.svg",
            heading: "High Performance",
            desc: "Boost team output and accelerate the delivery of new functionality.",
          },
          {
            img: "pto.svg",
            heading: "Low Risk",
            desc: "Early detection of quality issues can reduce defects by 30% throughout the lifestyle.",
          },
          {
            img: "pto.svg",
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