<template>
  <div>
    <mobile-dev-banner :BannerData="bannerData" />
    <impact-icons :Impact="Impact" />
    <service-provide :Impact="Impact1" />
    <block-chain-works />
    <tech-stacks />
  </div>
</template>

<script>
import MobileDevBanner from "../../components/services/MobileDevBanner.vue";
import TechStacks from "../../components/home/TechStacks.vue";
import ServiceProvide from "../../components/home/ServiceProvide.vue";
import BlockChainWorks from "../../components/home/BlockChainWorks.vue";
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
    BlockChainWorks
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
        img: "blockbunner.png",
        name: "BlockChain",
        heading: "Delivering Decentralized Software Systems",
        description: "Providing assistance in boosting your safety, performance, and productivity respectively.",
        url: "#contact-form",
      },
      Impact1: {
        heading: "Services We Provide",
        url:'#',
        icons: [
          {
            heading: "Private And Public Blockchains",
            desc: "With the use of public and private blockchains, you can manage who gets access to certain information.",
          },
          {
            heading: "Wallets And Exchanges",
            desc: "We collaborate with you to build safe cryptocurrency exchanges and wallets so you can trade freely and without worry.",
          },
          {
            heading: "Distributed Applications",
            desc: "Our decentralized application development solution aids in maintaining tamper- and intrusion-free records.",
          },
          {
            heading: "Migration & Testing",
            desc: "We help you make a plan for testing and migration, and we also help you move your current business to blockchain.",
          },
          {
            heading: "Insightful Contracts",
            desc: "We deliver highly safe and affordable smart contracts using Blockchain platforms like Ethereum.",
          },
          {
            heading: "Blockchain Consulting",
            desc: "We discover threats and possibilities that blockchain can address by assessing your company's infrastructure.",
          },
        ],
      },
      Impact: {
        heading: "Why Choose Blockchain?",
        icons: [
          {
            img: "save-time.png",
            heading: "Save Time And Money On Operations",
            desc: "Using blockchain technology, verification can be done without the help of third parties or extra steps.",
          },
          {
            img: "middle-man.png",
            heading: "Get Rid Of The Middleman",
            desc: "Blockchain takes away the need for a middleman and gives you control over your own transactions.",
          },
          {
            img: "secure.png",
            heading: "Secure Your Data",
            desc: "As several consensus methods must be met for an entry to be authenticated, the technology eliminates the chance of fraud or duplicate entries.",
          },
          {
            img: "uphold.png",
            heading: "Uphold A High Standard Of Transparency",
            desc: "Every node in the blockchain keeps track of transactions, so everyone can see what's going on.",
          },
          {
            img: "become.png",
            heading: "Become In Charge Of Your Information",
            desc: "Every stakeholder has a voice in important decisions since adding records to the chain requires the agreement of every member of the ledger.",
          },
          {
            img: "ensure.png",
            heading: "Ensure Data Completeness",
            desc: "Data cannot be changed or deleted because of the blockchain's append-only feature, which enables you to always retain its accuracy.",
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