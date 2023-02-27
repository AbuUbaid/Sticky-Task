<template>
  <div>
    <service-banner :BannerData="bannerData" class="pro-main" />
    <network :List="list" />
    <mission-globe :Footprint="Footprint" />
    
   </div>
</template>

<script>
import ServiceBanner from "../components/services/ProServiceBanner.vue";
import Network from "../components/home/SNNetwrok.vue";
import ImpactIcons from "../components/home/ImpactIcons.vue";
import MissionGlobe from "../components/industry/MissionGlobe.vue";
var images = require.context("../assets/icons/", false, /\.png$/);
export default {
  head: {
    title: 'Recruitment Process Outsourcing ', // Other meta information
  },
  components: {
    ServiceBanner,
    Network,
    MissionGlobe,
    ImpactIcons
  },
  name: "PRO",
  data: () => {
    return {
      bannerData: {
        img: "promain.webp",
        heading: "Accelerate Your Talent Hunt with Recruitment Process Outsourcing",
        description: "Finding the right talent for your company can be a challenging and time-consuming process.With RPO, you can reduce costs, improve your hiring process, and attract the top talent you need to support your business goals.",
        url: "#contact-form",
        top:'#'
      },
      list : {
        heading:"Why Do You Need RPO?",
        item: [
            {
              text:"Access to the right talent, at the right time"
            },
            {
              text:"Reducing cost per hire and agency spend"
            },
            {
              text:"Reduce time-to-hire"
            },
            {
              text:"Improved candidate experience"
            },
            {
              text:"Adherence to compliance and regulatory requirements"
            },
            {
              text:"Access to real-time data and reporting"
            },
            {
              text:"Agnostic technology consulting"
            },
      ],
        
      },
      Impact: {
        icons: [
          {
            img: "full.png",
            heading: "Full RPO",
            desc: "We will be in charge of the entire hiring process, from workforce planning to sourcing, selection, assessment, offer management, and onboarding.",
          },
          {
            img: "mod.png",
            heading: "Modular RPO",
            desc: "We will provide the specific RPO components you require, such as talent sourcing and recruitment administration, screening support, and technology.",
          },
          {
            img: "pro.png",
            heading: "Project RPO",
            desc: "A prompt reaction to your talent shortages. Our recruiters can implement an agile hiring process and connect you with high-quality professionals in as little as 6-8 weeks.",
          },
          {
            img: "ond.png",
            heading: "RPO On-Demand",
            desc: "A subscription-based service that is ideal for small businesses experiencing a surge in recruitment. Our service expands your recruitment capacity without increasing your headcount or budget.",
          },
        ],
      },
      Footprint: {
        heading: `Satisfied Client`,
        url:"#"
      },
    };
  },
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
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
  .part{
    background:#EF861D66;
    display:flex;
    justify-content:center;
    padding:50px;
    gap:20px;

    .part1{
      display:flex;
      flex-direction:column;
      margin-top:20px;
      gap:30px;
      flex-basis:50%;

      a {
        text-decoration: underline;
        color:#000000;
        font-size:20px;
      }

      p{
        width:73%
      }
    }
    .part2{
      flex-basis:50%;
    }
  }
.values-four {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.values-four .t-four {
  width: 47%;
  margin-top: 10px;
  margin-bottom: 40px;
}

.values-four h4 {
  margin: 10px 0px;
}

.values-four .t-four img {
  width: 60px;
}

@media (max-width:480px){

  .part{
    flex-direction:column;
    .part1{
      p{
        width:100%;
      }
    }
  }
  .values-four {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5%;
    margin-top: 25px;
    margin-left: 0;
  }

  .values-four .t-four {
    width: 47%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>