<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <employ />
    <network :List="list" />
    <support :itemList="itemList" />
   </div>
</template>

<script>
import ServiceBanner from "../components/services/ProServiceBanner.vue";
import Network from "../components/home/SNNetwrok.vue";
import Employ from "../components/home/EmployBussiness.vue";
import Support from "../components/home/HrSupport.vue";
export default {
  head: {
    title: 'HR Support', // Other meta information
  },
  components: {
    ServiceBanner,
    Employ,
    Network,
    Support
  },
  name: "HRSupport",
  data: () => {
    return {
      bannerData: {
        top: "pro",
        img: "pro.webp",
        heading: "Silicon Networks can help you develop your team the right way",
        description: "For both established and expanding businesses, our HR consultants offer a full range of services.",
        url: "#contact-form",
      },
      itemList: {
       heading:"Coordinated HR Support",
       description: "In Order To Ensure That Their Companies Are Prepared For The Next Stage Of Transformation With The Right People In Place And A Culture That Attracts And Retains Top Talent In Challenging Market Conditions, HR Professionals Are At The Forefront Of Championing Change And Resiliency Within Their Organizations.",
      item: [
        {
          heading: "Organizational structure",
          text:"In order to achieve a successful engagement and HR process, we operate with the purpose of understanding your business.",
          img:"n1.svg"
        },
        {
          heading: "Recruiting",
          text:"Assisting your company in finding and keeping outstanding employees. Both your time and the results matter.",
          img:"n2.svg"
        },
        {
          heading: "HR Consulting",
          text:"You can make wise modifications to your HR strategy with the assistance of insights and suggestions from an outside organization like ours. We prioritize the needs of people and offer guidance.",
          img:"n3.svg"
        },{
          heading: "Oversight & Policies",
          text:"Your duty to your people is to make sure you have the required policies in place that comply with the most recent legal standards.",
          img:"n4.svg"
        },{
          heading: "Crisis Control",
          text:"We help our clients create crisis management teams and plans for their businesses.",
          img:"n5.svg"
        },{
          heading: "Recruiting talent",
          text:"We help you define the benchmarks and build up your internal talent acquisition plan.",
          img:"n6.svg"
        },{
          heading: "HR Solutions for Businesses",
          text:"From virtual team support to full outsourcing, we can support and operate as an extension of your HR staff. Our experts help you make important decisions with confidence and objectivity.",
          img:"n7.svg"
        },
      ],
      },
      list: {
       heading:" Want to know what it's like to work with Silicon Networks as a partner?",
        item: [
      {
        text:"In order to achieve a successful engagement and HR process, we operate with the purpose of understanding your business."
      },
      {
        text:"We show concern for our group, our clients' personnel, as well as the larger community."
      },
      {
        text:"To draw and keep talented Recruiting and HR professionals, we foster a collaborative, team-oriented atmosphere."
      },
      {
        text:"Finally, by empowering creativity and adopting a growth attitude, we can achieve great things."
      },
      ],
      }
    };
  },
};
</script>

<style lang="scss" >
.starting-text {
  margin: 50px auto;
  h2 {
    margin: 10px 0px;
  }
}
</style>