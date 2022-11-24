<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <metrics-counter :Metrics="Metrics" />
    <section class="">
      <Service
        :isEven="isEven(index)"
        :item="item"
        :key="index"
        v-for="(item, index) in data"
      />
    </section>
    <SolutionCards :Cards="IndustryCards" />
    <FaqSection :Faqs="Faqs" />
  </div>
</template>

<script>
import ServiceBanner from "../../components/services/ServiceBanner.vue";
import Service from "../../components/services/Service.vue";
import SolutionCards from "../../components/SolutionCards.vue";
import FaqSection from "../../components/FaqSection.vue";
import MetricsCounter from "../../components/services/MetricsCounter.vue";
export default {
  components: {
    ServiceBanner,
    Service,
    SolutionCards,
    FaqSection,
    MetricsCounter,
  },
  name: "DevOps",

  methods: {
    isEven(index) {
      return (index + 1) % 2 == 0;
    },
  },
  data: () => {
    return {
      bannerData: {
        img: "cloud.jpg",
        heading: "Ensuring Continuous Delivery, Deployment, And Integration",
        url: "#",
      },
      Metrics: {
        heading: "Cloud Services",
        desc: "Through Devops, We Enhance The Quality Of Software Development By Re-Engineering Your Development And Deployment Processes.",
        icons: [
          {
            heading: "Expert Devops Consultants",
            value: "35+",
          },
          {
            heading: "Devops Automations",
            value: "200+",
          },
          {
            heading: "Cloud Migrations & Upgradations",
            value: "535+",
          },
          {
            heading: "Customer Engagements",
            value: "500k+",
          },
        ],
      },
      data: [
        {
          heading: "Cloud Management",
          url: "one.svg",
          text: `Managed Cloud Services Evaluate The User's Applications And Data To Determine The Best Cloud Resources For Their IT Infrastructure. Our Team Then Develops A Custom Plan That Outlines How To Get Started With Building And Running An Optimized Cloud Environment.`,
          listItems: [
            "Tracking Cloud Costs",
            "Monitor And Track Workloads",
            "End User Experience (EUE) Monitoring Tool",
          ],
        },
        {
          heading: "Cloud Consult",
          url: "two.svg",
          text: `Our Practical And Interactive Approach To Cloud Computing Makes Use Of Devops Tools To Improve Our Customers' Capacity For Rapid Delivery Of Both Applications And Services.`,
          listItems: [
            "Cloud Strategy",
            "Cloud Readiness Assessment",
            "Data Center Services",
            "Development & Integration Services",
            "Cloud Migration Services",
            "Support Services",
          ],
        },
        {
          heading: "Cloud Migration",
          url: "three.svg",
          text: `For Any Sustainable Business Journey, It Is Important To Create And Ensure A Secure And Scalable Cloud Landscape.With Our Cloud Assessment Tools, Infrastructure, And Processes, We Can Assist You Regardless Of Where You Are In Your Cloud Journey.`,
          listItems: [
            "Secure And Scalable Cloud Landscape",
            "Migration Strategy And Planning",
            "Migration Execution",
          ],
        },
        {
          heading: "DevOps",
          url: "four.svg",
          text: `With our Azure or AWS DevOps Consulting Services, we assist you in focusing on agile methodology and bringing a best practice implementation for your organization in the cloud era:`,
          listItems: [
            "DevOps Assessment",
            "DevOps Automation",
            "DevOps Management",
            "DevOps Managed Services",
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
        img: "faqs.jpg",
        questions: [
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
          },
          {
            title: "Plan",
            answer:
              "Prioritizing projects, envisioning them, and scoping them out",
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