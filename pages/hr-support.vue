<template>
  <div>
    <service-banner :BannerData="bannerData" />
    <employ />
    <network :List="list" />
    <support />
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