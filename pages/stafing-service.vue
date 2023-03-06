<template>
  <div>
    <!-- header -->
    <div class="overlay"></div>

    <div class="header-ctn">
      <div class="header-ctn-inner">
        <div class="header">
          <div class="logo">
            <a href="/">
              <img src="~/assets/logos/snlogo.webp" alt="Silicon Networks Logo"
            /></a>
          </div>

          <div class="request-quote-btn-ctn">
            <!-- <div class="quote-button">
                    <a href="#free-consult" class="button-blue">START 15 Days Risk Free Trial</a>
                </div> -->
            <div class="quote-button">
              <a href="#free-consult" class="button-blue">Inquire Now</a>
            </div>
          </div>
        </div>
        <!-- hero section -->
        <div class="hero-content">
          <h1>Your Global Talent Partner</h1>

          <p>
            Sillicon Networks talent acquisition solutions deliver speed, scalability and industry-leading technology to provide you with the competitive edge you need to hire top talent.
          </p>

          <div class="free-consult">
            <a href="#free-consult" class="button-blue">Inquire Now </a>
            <!-- <a href="#free-consult"  class="button-blue">START 15 Days Risk Free Trial</a> -->
          </div>
          <div class="tech-logos">
            <img src="~/assets/images/icon_1.png" alt="clutch" />
            <img src="~/assets/images/icon_2.png" alt="inc" />
            <img src="~/assets/images/icon_3.png" alt="clutch" />
            <img
              style="width: 80px; height: 80px; filter: brightness(0) invert(1)"
              src="~/assets/images/trustpilot.png"
              alt="microsoft"
            />
          </div>
        </div>
          <div class="slick-track">
            <div class="slide">
            <img src="~/assets/images/img1.png" alt="Slide 1" />
            <h2>Rebecca Smith</h2>
            <p>React Native Developer • New York, US</p>
            <p>84% Skill Score</p>
          </div>
          <!-- <div class="slide">
            <img src="~/assets/images/img2.png" alt="Slide 2" />
            <h2>Hugo Mendes</h2>
            <p>React Developer • Buenos Aires, ARG</p>
            <p>87% Skill Score</p>
          </div> -->
          <!-- <div class="slide">
            <img src="~/assets/images/img3.png" alt="Slide 3" />
            <h2>Hugo Mendes</h2>
            <p>React Developer • Buenos Aires, ARG</p>
            <p>87% Skill Score</p>
          </div> -->
          <div class="slide">
            <img src="~/assets/images/img4.png" alt="Slide 4" />
            <h2>Madison Bennet</h2>
            <p>Java Developer • London, UK</p>
            <p>77% Skill Score</p>
          </div>
          <div class="slide">
            <img src="~/assets/images/img5.png" alt="Slide 5" />
            <h2>Sara Daigo</h2>
            <p>Full-Stack Developer • Kope, JP</p>
            <p>91% Skill Score</p>
          </div>
          <div class="slide">
            <img src="~/assets/images/img6.png" alt="Slide 6" />
            <h2>Mary Olanrewaju</h2>
            <p>iOS Developer • Lagos, NG</p>
            <p>89% Skill Score</p>
          </div>
          <div class="slide">
            <img src="~/assets/images/img7.png" alt="Slide 7" />
            <h2>Filip Morgen</h2>
            <p>Backend Developer• Kope, JP</p>
            <p>87% Job Success</p>
          </div>
          </div>
      </div>
    </div>

    <!-- Clients slider -->
    <div class="client-section-ctn-inner">
      <h2>Trusted by Top-Tier Companies</h2>
      <!-- <marquee behavior="" direction=""> -->
        <div class="moving-box" id="movingBox">
          <div class="log1">
            <img  src="~/assets/images/client-logo.png" alt="" srcset="" />
            <!-- <img style="width:52%" src="~/assets/images/grid1.webp" alt="" srcset="" /> -->
            <!-- <img src="~/assets/images/gridb-1.webp" alt="" srcset="" /> -->
          </div>
        </div>
      <!-- </marquee> -->
    </div>

    <network :List="list" />
    <verification :Impact="Impact1" class="hire-dev" />
    <support :itemList="itemList" />
    <TopTechStack :topTech="topTech" />
    <plantation :list="listKey" class="key-features" />
    <cost  class="key-features" />


    <!-- why org choose remote -->
    <!-- <div class="remote">
      <h2>Why Organizations Choose Silicon Networks</h2>
      <p class="subtext">
        Here are some reasons why global companies prefer Silicon Networks for
        hiring remote developers:
      </p>
      <div class="part">
        <div class="part1">
          <img src="~/assets/images/choose.webp" alt="" srcset="" />
        </div>
        <div class="part2">
          <div class="values-four">
            <div
              v-for="(icon, i) in Impact ? Impact.icons : []"
              :key="i"
              class="t-four"
            >
              <img :src="imgUrl(icon.img)" alt="t-four" />
              <h4>{{ icon.heading }}</h4>
              <p>
                {{ icon.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Forbes section -->
    <div class="global-section">
      <div class="sec1">
      <mission-globe :Footprint="Footprint" />
      </div>
      <div class="sec2">
        <testimonial-slider/>
      </div>
    </div>
    <industry-counter :IndustryC="IndustryC" />
    <Forbes />
    <!-- Ready to hire -->
    <div class="ready-to-hire-ctn">
      <h2>Ready to Hire Experienced, Skilled and Certified Engineers?</h2>

      <p>
        Fill out the form below and we will contact you with more information.
      </p>

      <div class="ready-to-hire-ctn-inner">
        <div class="book-free-cons-section">
          <h2>Request a Quote Now</h2>

          <form v-on:submit="checkFields" ref="form" id="free-consult">
            <div class="form-group">
              <label for="fullName">Full Name*</label>
              <br />
              <input
                v-model="formData.name"
                placeholder="Name"
                :rules="nameRules"
                type="text"
                id="fullName"
                required
              />
            </div>
            <div class="form-group">
              <label for="workEmail">Work Email*</label>
              <br />

              <input
                v-model="formData.email"
                placeholder="name@gmail.com"
                :rules="emailRules"
                type="email"
                id="workEmail"
                required
              />
            </div>
            <div class="form-group">
              <label for="phoneNumber">Phone Number*</label>
              <br />

              <input
                v-model="formData.phone"
                placeholder="Phone"
                :rules="phoneRules"
                type="tel"
                id="phoneNumber"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <br />

              <textarea
                v-model="formData.message"
                :rules="messageRules"
                id="message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="lets-connect">Inquire Now</button>
            <v-progress-circular
              indeterminate
              color="#E38601"
              text-align="center"
              v-if="loading == true"
            ></v-progress-circular>
          </form>
        </div>

        <div class="right-section">
          <div class="sn-benifits">
            <h2>Benefits With Silicon Networks</h2>
            <ul>
              <li>Dedicated Developers</li>
              <li>160 Working Hours/Month with Flexible Hiring Models</li>
              <li>Simple & Transparent Pricing</li>
              <li>Agile Methodology</li>
              <li>15 Days Risk-Free Trial</li>
              <li>Strict NDA Signed for Complete Privacy</li>
              <li>Faster Resource Accessibility</li>
              <li>Focus on Your Core Business</li>
              <li>Large Technical Pool with wider Technology Stack</li>
            </ul>
          </div>
          <button class="button-blue1">Headquarter: 855-904-4417</button>
          <p style="margin-top: 12px !important">sales@siliconnet.com</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2023, Copyrights @ Silicon Networks</p>
      <p>All Right Reserved.</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import TestimonialSlider from "../components/home/TestimonialSlider.vue";
import Network from "../components/home/SNNetwrok.vue";
import CounterArea from "../components/home/CounterArea.vue";
import MissionGlobe from "../components/industry/MissionGlobe.vue";
import Verification from "../components/home/Verification.vue";
import TopTechStack from "../components/home/TopTechStack.vue";
import Support from "../components/home/HrSupport.vue";
import Forbes from "../components/home/Forbes.vue";
import Plantation from "../components/home/Plantation.vue";
import cost from "../components/home/cost.vue";

var images = require.context("../assets/icons/", false, /\.png$/);

import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  layout: "ad",
  name: "Sttafing Service",
  head: {
    title: "Sttafing Service", // Other meta information
  },
  data: () => {
    return {
      loading: false,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 7,
      },
      valid: true,
      success: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
        LeadSource:"",
        LeadMedium: "",
        GoogleClickID: "",
        LandingPageUrl: "",
        IP:"",
        City:"",
        ZIp:"",
        Region:"",
        Country:"",
        Organization:"",
        ISP:"",
      },
      topTech: {
        heading: "Discover the Technology Expertise We Provide Staffing Solutions For",
        formId: "#free-consult",
        button:"Inquire Now",
        description:
          "At Silicon Networks, we hire remote software developers for a wide range of tech stacks. We can surelyfind the right fit for you!",
      },
      list: {
        heading: "Augment Your Team with Staffing Solutions",
        fromHeading: "Request a Quote Now",
        fromButton: "Inquire Now",
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
      itemList: {
       heading:"Scope of Services",
       description: "As your staffing service provider, we offer full-scale manpower services through comprehensive workforce management solutions that include:",
      item: [
        {
          heading: "General Staffing",
          text:"Our general staffing solutions give you access to a pool of pre-screened skilled talent, available at a short notice. Allowing you to easily scale up your workforce depending on the business demands even for niche skills.",
          img:"n1.svg"
        },
        {
          heading: "Staff augmentation",
          text:"We specialise in augment short-term employment candidates, based on your project requirements for a short period of time, who are the best fit for your organization, from a talent pool of active and passive candidates, based on your workforce requirements.",
          img:"n2.svg"
        },
        {
          heading: "Permanent Staffing",
          text:"If you are looking to hire permanent staff for your organization, we have different engagement models to help you find the right talent – right from executive search to contingency search, to RPO. We also customize our solutions as per your hiring volume and skill requirements.",
          img:"n3.svg"
        },
        {
          heading: "Specialty Staffing",
          text:"We specialize in specialty staffing solutions. We sourcing talent for clients that having a need for a unique workforce or for a specific job that requires unique skillsets. We focus on providing a comprehensive level of service with a variety of flexible solutions that meet your business needs.",
          img:"n6.svg"
        },
        {
          heading: "Managed Service Provider",
          text:"As a staffing industry specialist, we provide comprehensive managed services to clients. We not only specialize in the IT sector but also other sectors, BFSI, healthcare, engineering and manufacturing. We possess expertise in handling a huge number of operational back-end tasks that are critical for the success of a business.",
          img:"n5.svg"
        },
      ],
      },
      Footprint: {
        heading: `Explore our Global Talent Acquisition Solutions`,
        img: "global.webp",
        url: "#",
      },
      IndustryC: {
        items: [
          {
            heading: "Client Retention",
            value: "96 %",
          },
          {
            heading: "Expansion on Contract",
            value: "95 %",
          },
          {
            heading: "Annual Hires",
            value: "285,000",
          },
          {
            heading: "Counteries Served",
            value: "7 +",
          },
        ],
      },
      Impact1: {
        heading: "Why Choose Silicon Newtorks as your Staffing Partner?",
        text: "We leverage our expertise in staffing services to match your manpower requirements and ensure you drive the best returns on your human resource investment.Our bespoke staffing solutions help businesses scale their workforce as needed to help achieve their goals.",
        url: "#!1",
        icons: [
          {
            img: "pay (4).png",
            heading: "Strong Team of Consultants",
            desc: "A strong team of 300+ consultants who ensure you find the right candidates that fit in your organization’s culture and boost productivity.",
          },
          {
            img: "pay (3).png",
            heading: "IT Companies Worked With",
            desc: "We have worked with Fortune 500 companies. We hire more than 100k candidates every year.",
          },
          {
            img: "pay (2).png",
            heading: "Best Consultant Awards",
            desc: "We have consistently won best consultant awards from many of our esteemed clients including Fortune 500 companies like IBM, Cisco, Accenture, Thomson Reuters and many more.",
          },
        ],
      },
      Impact: {
        icons: [
          {
            img: "full.png",
            heading: "90% Faster Hiring",
            desc: "We hire remote software engineers beforehand after evaluating them thoroughly to filter out the world‘s top 1% of developer talent.",
          },
          {
            img: "mod.png",
            heading: "Role-Specific Expertise",
            desc: "Silicon Networks has a tried and tested track record of brilliance in remote hiring. We match your company with the best remote based talent that has extensive experience relevant to the role you‘re trying to fill.",
          },
          {
            img: "pro.png",
            heading: "Top Talent Quality",
            desc: "Our developers are not just exceptional coders; they have brilliant soft skills too. Hence, they can fit perfectly into your team.",
          },
          {
            img: "ond.png",
            heading: "2-Week No-Risk Trial",
            desc: "Our 2-week free trial allows you to work with our developers for two weeks without paying any upfront charges and only pay if you are completely satisfied.",
          },
        ],
      },
      Impact2: {
        icons: [
          {
            img: "full.png",
            heading: "90% Faster Hiring",
            desc: "We hire remote software engineers beforehand after evaluating them thoroughly to filter out the world‘s top 1% of developer talent.",
          },
          {
            img: "mod.png",
            heading: "Role-Specific Expertise",
            desc: "Silicon Networks has a tried and tested track record of brilliance in remote hiring. We match your company with the best remote based talent that has extensive experience relevant to the role you‘re trying to fill.",
          },
          {
            img: "pro.png",
            heading: "Top Talent Quality",
            desc: "Our developers are not just exceptional coders; they have brilliant soft skills too. Hence, they can fit perfectly into your team.",
          },
          {
            img: "ond.png",
            heading: "2-Week No-Risk Trial",
            desc: "Our 2-week free trial allows you to work with our developers for two weeks without paying any upfront charges and only pay if you are completely satisfied.",
          },
        ],
      },
      listKey: {
        img:'key-features-01.webp',
        key:'key',
        heading: "Staffing Solutions – Key Features",
        description: "Our access to a wide database with a variety of specializations for Industries like BPM & ITES, Ecommerce, Pharma, Healthcare & Life Sciences, Manufacturing, Energy and Infrastructure, Auto & Axillary, Electronics and Semiconductor, Engineering and R & D, Retail, Logistics, Personnel and Confidential Search, Aerospace & Defense allows us to hire from diverse fields and backgrounds.",
      },
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [(v) => !!v || "Phone is required"],
      messageRules: [(v) => !!v || "Message is required"],
    };
  },
  components: {
    Network,
    MissionGlobe,
    TestimonialSlider,
    CounterArea,
    Verification,
    TopTechStack,
    Forbes,
    Support,
    Plantation,
    cost,
    VueSlickCarousel,
  },
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
    async checkFields(e) {
    e.preventDefault();
    this.loading = true;
     const data = await fetch('https://api.ipregistry.co?key=nwycadxz2ux4u0d8')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
       return payload;
    });
    
    this.formData.IP = data.ip;
    this.formData.Organization = data.company.name;
    this.formData.ISP = data.company.name;
    this.formData.City = data.location.city;
    this.formData.ZIp = data.location.postal;
    this.formData.Country = data.location.country.name;
    this.formData.Region = data.location.region.name;
    this.formData.LandingPageUrl = 'https://www.siliconnet.com' + this.$route.fullPath;
    this.formData.LeadSource = this.$route.query.src ? this.$route.query.src : 'Google';
    this.formData.LeadMedium = this.$route.query.medium ? this.$route.query.medium : 'PPC';
    this.formData.GoogleClickID = this.$route.query.id ? this.$route.query.id : '';

    axios
    .post("https://formspree.io/f/mbjegoag", this.formData)
    .then((res) => {
      console.log("djfksdjf", res);
      if (res.status == 200) {
        this.success = true;
        this.formData = {
        name: "",
        email: "",
        phone: "",
        message: "",
        LeadSource:"",
        LeadMedium: "",
        GoogleClickID: "",
        LandingPageUrl: "",
        IP:"",
        City:"",
        ZIp:"",
        Region:"",
        Country:"",
        Organization:"",
        ISP:"",
      },
        this.loading = false;
        this.$router.push('/thankyou/');
      }
    });
    },
  },
};
</script>


<style lang="scss" scoped>
body {
  margin: 0px;
  padding: 0px;
}
.copyright {
  display: flex;
  justify-content: space-between;
  padding:25px;
}

.copyright p {
  font-size: 12px;
}
.slick-track{
  display: flex;
  gap: 10px;
  margin: 50px;
  justify-content: center;
}
.tech-logos {
  margin-top: 25px;
  display: flex;
  overflow: hidden;
  gap: 50px;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
}

.button-blue {
  background-color: #3d048f;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 25px;
}
.button-blue1 {
  background-color: #fff;
  color: #3d048f;
  border-radius: 5px;
  border: 1px solid #3d048f;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 45px;
}

.header-ctn {
  background-color: #0b092f;
  width: 100%;
  height: 146vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 1rem;
  padding-bottom: 8rem;
  z-index: 99;
}
.header-ctn .header-ctn-inner .card-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 400px;
  text-align: center;
}

.slide {
  position: relative;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;
  cursor: pointer;
  opacity: 1;
  h2{
     text-align: center;
     font-size: 16px;
     color: #F23801;
     margin-bottom: 12px;
  }
  p{
    text-align: center;
    color:#fff;
    margin-top: 4px;
    font-size: 14px;
  }
}

// .slide.active {
//   transform: scale(1.2);
//   opacity: 1;
// }

// .slide:hover {
//   opacity: 1;
//   transition: all 0.3s ease-in-out;
// }

.slide img {
  max-width: 100%;
  height: auto;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(-100%);
  }
  45% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-200%);
  }
  70% {
    transform: translateX(-200%);
  }
  75% {
    transform: translateX(-300%);
  }
  95% {
    transform: translateX(-300%);
  }
  100% {
    transform: translateX(-400%);
  }
}
.header-ctn .header-ctn-inner {
  width: 1240px;
  margin: auto;
}
.header-ctn .header-ctn-inner .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-ctn .header-ctn-inner .header .logo img {
  width: 20%;
  filter: brightness(0) invert(1);
}
.header-ctn .header-ctn-inner .header .request-quote-btn-ctn {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.header-ctn .hero-content {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.header-ctn .hero-content h2 {
  color: white;
}
.header-ctn .hero-content h1 {
  color: white;
  margin-bottom: 16px;
  width: 42%;
  text-align: center;
}
.header-ctn .hero-content p {
  width: 60%;
  text-align: center;
  color: white;
}

.client-section-ctn {
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  gap: 50px;
}
.client-section-ctn-inner {
  flex-basis: 40%;
  color: #3d048f;
  h2 {
    text-align: center;
    margin-top: 25px;
  }
}
.client-section-ctn .client-section-ctn-inner .moving-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  
}
.log1{
    display: flex;
    gap: 20px;
    padding: 0px 15px;
  }

.global-section{
  display: flex;
  gap: 40px;

  .sec1{
    flex-basis: 50%;
  }
  .sec2{
    flex-basis: 50%;
  }
}
.free-consult {
  display: flex;
  margin-top: 25px;
  gap: 10px;
}
.ready-to-hire-ctn {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #3d048f;
  text-align: center;
}
.ready-to-hire-ctn h2 {
  color: white;
}
.ready-to-hire-ctn p {
  color: white;
  margin-top: 25px;
}
.sn-benifits ul {
  list-style-type: "✓ ";
  color: #54595f;
  margin-top: 85px;
}
.sn-benifits h2 {
  color: #000 !important;
}
.sn-benifits ul li {
  margin-top: 1rem;
  font-size: 16px;
  color: black;
  text-align: left;
}

.remote {
  background: #ef861d66;
  padding-top: 25px;
  h2 {
    text-align: center;
    margin-bottom: 14px;
  }
  p {
    text-align: center;
  }
  .part {
    display: flex;
    justify-content: center;
    padding: 50px;
    gap: 150px;
    .part1 {
      display: flex;
      flex-basis: 40%;
      img {
        width: 100%;
      }
      p {
        text-align: left !important;
      }
    }
    .part2 {
      flex-basis: 60%;
    }
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
.values-four .t-four p {
  text-align: left;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner {
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 40px;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section {
  background-color: white;
  border-right: 2px solid gray;
  padding: 2rem;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section h2 {
  color: #111517;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form {
  text-align: left;
  padding: 30px;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .form-group {
  width: 100%;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .form-group
  input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #3d048f;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 1rem;
  min-height: 40px;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .form-group
  input:focus {
  outline: none;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .form-group
  textarea {
  width: 100%;
  border: none;
  border: 2px solid #3d048f;
  margin-top: 2rem;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .lets-connect {
  border: 2px solid #3d048f;
  font-size: 19px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 50%;
  background-color: transparent;
}
.ready-to-hire-ctn
  .ready-to-hire-ctn-inner
  .book-free-cons-section
  form
  .lets-connect:hover {
  font-size: 19px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 50%;
  background-color: #3d048f;
  color: white;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.quote-button-trial {
  margin-top: 30px;
  text-align: center;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section p {
  color: #54595f;
} /*# sourceMappingURL=style.css.map */
@media (max-width: 480px) {

  .global-section{
  flex-direction: column;
  gap: 20px;
}
  .log1{
    img{
      width: 361px;
      margin-top: 12px;
    }
  }
  .slick-track{
    display: none;
  }
  .tech-logos {
    gap: 30px;
    img {
      width: 50px;
    }
  }
  .sn-benifits ul {
    margin-top: 30px;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section p {
    margin-top: -22px;
    margin-bottom: 12px;
  }
  .header-ctn {
    height: -moz-max-content;
    height: max-content;
  }
  .client-section-ctn {
    flex-direction: column;
  }
  .button-blue {
    margin: 12px auto;
    display: block;
  }
  .ready-to-hire-ctn {
    padding: 42px;
  }

  .header-ctn .hero-content h2 {
    margin-bottom: 40px;
  }
  .header-ctn .hero-content h1 {
    margin-bottom: 25px !important;
    margin-top: 25px !important;
    width: 100%;
  }
  .header-ctn .hero-content p {
    margin-bottom: 25px;
    width: 100%;
  }
  .free-consult {
    flex-direction: column;
    gap: 0px;
    align-items: center;
    width: 71%;
  }
  .header-ctn .hero-content .right .form-ctn {
    width: 100% !important;
  }

  .quote-button {
    display: none;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .header-ctn .header-ctn-inner {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
  .header-ctn .header-ctn-inner .header {
    flex-direction: column;
  }
  .header-ctn .hero-content {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
  .header-ctn .hero-content .right {
    justify-content: flex-start;
  }
  .header-ctn .hero-content .right .form-ctn form .lets-connect {
    font-size: 16px;
  }
  .client-section-ctn .client-section-ctn-inner {
    margin-bottom: 0rem;
  }

  .remote {
    h2 {
      margin: 14px auto;
      width: 77%;
    }
    .subtext {
      width: 80%;
      margin: 14px auto;
    }
    .part {
      flex-direction: column;
      gap: 50px;
      padding: 20px;
    }
  }
  .values-four {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5%;
    margin-top: 0px;
    margin-left: 0;
  }

  .values-four .t-four {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: left;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form {
    padding: 0px;
  }
  .button-blue1 {
    margin-bottom: 40px;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section {
    padding: 12px;
  }
  .ready-to-hire-ctn
    .ready-to-hire-ctn-inner
    .book-free-cons-section
    form
    .lets-connect {
    width: 100%;
  }
  .ready-to-hire-ctn
    .ready-to-hire-ctn-inner
    .book-free-cons-section
    form
    .lets-connect:hover {
    width: 100%;
    font-size: 19px;
  }
  .ready-to-hire-ctn
    .ready-to-hire-ctn-inner
    .book-free-cons-section
    form
    .lets-connect {
    font-size: 19px;
  }
  .header-ctn .hero-content .right .form-ctn form .lets-connect {
    font-size: 19px;
  }
  .header-ctn .hero-content .right .form-ctn form .lets-connect:hover {
    font-size: 19px;
  }

  .testi-section {
    flex-direction: column;
  }
} /*# sourceMappingURL=style.css.map */
</style>