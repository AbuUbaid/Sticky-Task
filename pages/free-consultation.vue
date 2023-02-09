<template>
   <div>
     <!-- header -->
     <div class="overlay"></div>


<div class="header-ctn ">

    <div class="header-ctn-inner">

        <div class="header">

            <div class="logo">

                <img src="~/assets/images/snlogo.e8022ac.webp" alt="" srcset="">
            </div>

            <div class="request-quote-btn-ctn">

                <div class="phone-icon">

                    <div class="circle">
                        <i class="phone-icon fas fa-phone"></i>
                    </div>

                </div>

                <div class="quote-button ">

                    <a href="#free-consult" class="button-blue">Request a Quote</a>
                </div>
            </div>

        </div>
        <!-- hero section -->


        <div class="hero-content">

            <div class="left">
                <h2>Leading IT Staff Augmentation Company</h2>
                <div class="hr"></div>

                <h1>Hire the Top 1% Tech Talent Remotely & Build Your Dream Team
                </h1>

                <p>Silicon Networks’s IT Staff Augmentation Services are designed to enable your organization
                    to
                    accomplish its short and long-term development goals by boosting your projects. Hire the top 1%
                    tech
                    talent today from us to leverage our technical expertise. Your dream team is just a few steps
                    away!

                </p>

                <div class="free-consult">
                  <button class="button-blue">Book a Free Consultation</button>
                  <button class="button-blue">Live Chat</button>
                </div>
            </div>
            <div class="right">

                <div class="form-ctn">

                    <h2>Book a Free Consultation</h2>

                    <form v-on:submit="checkFields"
                        ref="form"
                        style="padding:12px;">
                        <div style="padding:4px;" class="form-group">
                            <label for="fullName">Full Name*</label>
                            <br>
                            <input v-model="formData.name"
                            :rules="nameRules" type="text" id="fullName" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="workEmail">Work Email*</label>
                            <br>

                            <input v-model="formData.email"
                            :rules="emailRules" placeholder="name@gmail.com" type="email" id="workEmail" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="phoneNumber">Phone Number*</label>
                            <br>

                            <input v-model="formData.phone"
                            :rules="phoneRules" type="tel" id="phoneNumber" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="message">Message*</label>
                            <br>

                            <textarea v-model="formData.message"
                            :rules="messageRules" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="lets-connect">LET'S CONNECT!</button>
                        <v-progress-circular
                          text-align="center"
                          indeterminate
                          color="#E38601"
                          v-if="loading == true"
                        ></v-progress-circular>
                    </form>

                </div>

            </div>
        </div>
    </div>
</div>

<!-- Awards -->

<div class="awards-ctn">


    <div class="awards-ctn-inner">

        <div class="awards-section-left">

            <div class="heading"> Awards:</div>
            <div class="award-logo"><img src="~/assets/images/icon_1.png" alt="" srcset=""></div>
            <div class="award-logo"><img src="~/assets/images/icon_2.png" alt="" srcset=""></div>
            <div class="award-logo"><img src="~/assets/images/icon_3.png" alt="" srcset=""></div>
        </div>
        <div class="awards-section-right">

            <div class="microsoft-logo">
                <img src="~/assets/images/PngItem_274930-1-1.png" alt="" srcset="">
            </div>
        </div>
    </div>
</div>


<!-- get in touch -->


<div class="get-touch-ctn">


    <div class="get-in-touch-ctn-inner">

        <div class="get-in-touch-left">
            <img src="~/assets/images/MicrosoftTeams-image-16-1.png" alt="" srcset="">
        </div>

        <div class="get-in-touch-right">
            <h2>Increase Your Chances of Success & Expedite Your Projects with IT Staff Augmentation Services
            </h2>

            <ul>

                <li>Progressing in today’s technology-dependent world is not easy. Among many factors, having the
                    right technology talent in your talent is critical. But managing and retaining a team of
                    technology experts often turns out to be a more significant issue.
                </li>

                <li>Urgent requirements for new talents or redundancy are the two situations that haunt modern
                    businesses. Still, Silicon Networks IT staffing services allow them to have the top IT
                    talent work for them, having experience, professional excellence, and everything that your team
                    needs, that too in reasonable IT staff augmentation cost, keeping it all in your budget.
                </li>

                <li>Our IT staff augmentation services are designed to help organizations boost their projects and
                    acquire the right technology talent on time with no hassle. In all your needs, your extended
                    engineering team seamlessly fits into your process, reports to your managers, and follows your
                    delivery methods to uphold the quality that you need.
                </li>
            </ul>

            <button class="button-blue">GET IN TOUCH</button>
        </div>
    </div>
</div>

<!-- Hiring Model -->

<div class="hiring-model-ctn">


    <div class="hiring-model-ctn-inner">
        <h2>Hiring Model</h2>

        <div class="three-column-section">

            <div class="col1">

                <div class="dedicated-team">

                    <div class="img"><img src="~/assets/images/Screenshot 2023-02-08 192718.png" alt="" srcset=""></div>
                    <div class="heading">
                        <h3>Dedicated Team</h3>
                    </div>



                </div>
                <ul>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>For large Projects</p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Evolutionary Enhancements
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Full time dedicated set of resources
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>No Hidden Cost
                        </p>
                    </li>
                </ul>
            </div>


            <!-- col2 -->


            <div class="col1">

                <div class="dedicated-team">

                    <div class="img"><img src="~/assets/images/ind-source.png" alt="" srcset=""></div>
                    <div class="heading">
                        <h3>Individual Resources
                        </h3>
                    </div>



                </div>
                <ul>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Full time Dedicated Member</p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>For Remote team augmentation
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Project Management handled by you
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>No Hidden Cost
                        </p>
                    </li>
                </ul>
            </div>

            <!-- col3 -->

            <div class="col1">

                <div class="dedicated-team">

                    <div class="img"><img src="~/assets/images/project-outsource.png" alt="" srcset=""></div>
                    <div class="heading">
                        <h3>Project Outsource
                        </h3>
                    </div>
                </div>
                <ul>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Pre-Defined Projects

                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Milestone Based Payment
                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>Project Management by Us

                        </p>
                    </li>
                    <li>
                        <img src="~/assets/images/circle.png" alt="" srcset="">
                        <p>No Hidden Cost


                        </p>
                    </li>
                </ul>
            </div>
        </div>


    </div>
</div>


<!-- Best Developer Online -->


<div class="best-dev-online-ctn">

    <div class="best-dev-online-ctn-left">
        <img src="~/assets/images/shutterstock_1716024505-1.jpg" alt="" srcset="">

    </div>

    <div class="best-dev-online-ctn-right">

        <h2>Why Silicon Networks Is The Best Choice For IT Staff Augmentation Services?
        </h2>

        <p>Silicon Networks works for some of the biggest names in the industry and assists them in achieving
            their organizational goals. From impactful startups to SMBs to Fortune 500 companies and other
            enterprise-scale organizations – our workforce enables all of them to stay ahead of the curve.
        </p>

        <ul>

            <li>
                Expert Developers With 10+ Years of Experience

            </li>

            <li>108 Worldwide Clients (Mostly Fortune 500 Companies)
            </li>

            <li> 200+ Silicon Valley-Caliber Developers
            </li>
        </ul>

        <div class="two-column-section">

            <div class="col1">

                <h3>Certifications & Partner
                </h3>
                <ul>

                    <li>Silicon Networks is a Microsoft Certified Gold Partner
                    </li>

                    <li>Microsoft Certified Developers
                    </li>
                    <li>Seamless Communication Channels
                    </li>
                    <li>360 Development Methodology
                    </li>
                    <li>In-Depth Knowledge of Development Tools & Framework
                    </li>
                    <li>Clearly Defined Steps & Procedures
                    </li>
                    <li>Strict Quality Testing Process
                    </li>
                </ul>
            </div>
            <div class="col2">

                <h3>Experience & Skills
                </h3>
                <ul>

                    <li>15+ Years of Development Experience
                    </li>
                    <li>Numerous Successful Projects Delivered for Various Industries
                    </li>
                    <li>Reasonably Priced Development Solutions
                    </li>
                    <li>Top Rated Developers
                    </li>
                    <li>Round The Clock Support & Maintenance
                    </li>
                    <li>Experienced Developers with Extensive Knowledge
                    </li>
                </ul>
            </div>

        </div>
    </div>

</div>


<!-- about best developer -->


<div class="about-best-dev-ctn">

    <h2>ABOUT SILICON NETWORKS
    </h2>


    <div class="about-best-dev-ctn-inner">

        <div class="about-best-dev-ctn-inner-left">

            <img src="~/assets/images/best-dev-on.jpg" alt="" srcset="">
        </div>
        <div class="right">

            <div class="three-column-section">

                <div class="col1">

                    <h2>91.5%
                    </h2>

                    <p>SENIOR AND MID DEVELOPERS

                    </p>
                </div>
                <div class="col2">
                    <h2>90%
                    </h2>
                    <p>TRIAL-TO-HIRE SUCCESS

                    </p>


                </div>
                <div class="col3">

                    <h2>B2+
                    </h2>
                    <p>ENGLISH LEVEL OF OUR ENGINEERS

                    </p>
                </div>

            </div>

            <div class="why-choose">

                <h2>Why Choose Siliconn Networks?
                </h2>

                <p>Silicon Networks is a modern-day technology firm serving Fortune 500 and enterprise-scale
                    organizations all over the world. Our focus is to deliver technology-aided convenience to
                    consumers and use it for the betterment and improvement of the world. Our IT staffing services
                    enable them to meet their short-term and long-term objectives.

                </p>
                <p> We have worked with the world’s leading organizations and brands to deliver unmatched technology
                    consulting services through IT staff augmentation, providing them a chance to excel in this
                    ever-competitive world and leveraging the power of digital. Excellence is our top priority, with
                    no compromise on quality.</p>
            </div>
        </div>


    </div>
</div>

<!-- client section -->

<div class="client-section-ctn">
    <div class="client-section-ctn-inner">
      <h2>Clients</h2>
        <marquee behavior="" direction="">

            <div class="moving-box" id="movingBox">

                <div class="log1">
                    <img src="~/assets/images/clientc.webp" alt="" srcset="">
                    <img src="~/assets/images/clientc.webp" alt="" srcset="">
                    <img src="~/assets/images/clientc.webp" alt="" srcset="">
                    <img src="~/assets/images/clientc.webp" alt="" srcset="">
                </div>
                <div class="log1">                    
                  <img src="~/assets/images/gridb-1.webp" alt="" srcset="">
                  <img src="~/assets/images/gridb-1.webp" alt="" srcset="">
                  <img src="~/assets/images/gridb-1.webp" alt="" srcset="">
                  <img src="~/assets/images/gridb-1.webp" alt="" srcset="">
                </div>
                <div class="log1">                    
                  <img src="~/assets/images/grid1.webp" alt="" srcset="">
                  <img src="~/assets/images/grid1.webp" alt="" srcset="">
                  <img src="~/assets/images/grid1.webp" alt="" srcset="">
                  <img src="~/assets/images/grid1.webp" alt="" srcset="">
                  <img src="~/assets/images/grid1.webp" alt="" srcset="">
                </div>
            </div>
        </marquee>
    </div>
    <!-- rating and reviews -->

<div class="rating-and-reviews-section">
    <h2>Ratings & Reviews
    </h2>

    <div class="rating-and-reviews-section-inner">


        <div class="left">

            <div class="img"><img src="~/assets/images/inc.png" alt="" srcset=""></div>
            <div class="img"><img src="~/assets/images/clutch.png" alt="" srcset=""></div>
            <div class="img"><img src="~/assets/images/trophy.png" alt="" srcset=""></div>
            <div class="img"><img src="~/assets/images/top-ai.png" alt="" srcset=""></div>
            <div class="img"><img src="~/assets/images/image-573.png" alt="" srcset=""></div>
            <div class="img"><img src="~/assets/images/good-girms.png" alt="" srcset=""></div>
        </div>

        <div class="right">


            <div class="review-box">

                <div class="person-heading-text">

                    <div class="img">

                        <img src="~/assets/images/person.png" alt="" srcset="">
                    </div>
                    <div class="name-desc">

                        <p><b>Alberto Miedes
                            </b></p>

                        <p>Senior Technology Consultant, Iqvia

                        </p>


                    </div>

                </div>
                <p>“I would highlight their professionalism, high level of support, and commitment. They did
                    their best to provide deliverables on time and adapted their work schedule based on the
                    project milestones. There was a fluent collaboration with them. Different channels were
                    used depending on the circumstances and criticality of the topics, from the usual Jira &
                    Confluence tools, Slack for more immediate matters, to email or telco when needed.
                    Thanks to their efforts, knowledge and excellent work, they conducted the transition to
                    an internal service team in my company without issues and transparently.”

                </p>


            </div>
        </div>


    </div>
</div>
</div>

<!-- Ready to hire -->

<div class="ready-to-hire-ctn">

    <h2>Ready to Hire Experienced, Skilled and Certified Engineers?
    </h2>

    <p>Fill out the form below and we will contact you with more information.

    </p>


    <div class="ready-to-hire-ctn-inner">

        <div class="book-free-cons-section">

            <h2>Book a Free Consultation
            </h2>

            <form v-on:submit="checkFields"
              ref="form"
              id="free-consult">
                <div class="form-group">
                    <label for="fullName">Full Name*</label>
                    <br>
                    <input v-model="formData.name"
                            :rules="nameRules" type="text" id="fullName" required>
                </div>
                <div class="form-group">
                    <label for="workEmail">Work Email*</label>
                    <br>

                    <input v-model="formData.email"
                            :rules="emailRules" type="email" id="workEmail" required>
                </div>
                <div class="form-group">
                    <label for="phoneNumber">Phone Number*</label>
                    <br>

                    <input v-model="formData.phone"
                            :rules="phoneRules" type="tel" id="phoneNumber" required>
                </div>
                <div class="form-group">
                    <label for="message">Message*</label>
                    <br>

                    <textarea v-model="formData.message"
                            :rules="messageRules"  id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="lets-connect">LET'S CONNECT!</button>
                <v-progress-circular
                indeterminate
                color="#E38601"
                text-align="center"
                v-if="loading == true"
              ></v-progress-circular>
            </form>

        </div>

        <div class="right-section">

            <img style="width:25%; border-radius: 50%;" src="~/assets/images/chris.png" alt="" srcset="">

            <h5 style="margin-top:12px;">Chris Johnson
            </h5>

            <p>Sales Director
            </p>

            <p style="margin-top:0px !important;">sales@siliconnet.com

            </p>

            <button  class="button-blue1">Headquarter:
                  855-904-4417
                </button>


        </div>


    </div>
</div>
   </div>
</template>


<script>
import axios from "axios";  
export default {
  layout: 'ad',
  name: "FreeConsultation",
  data: () => {
    return {
      loading: false,
      valid: true,
      success: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [(v) => !!v || "Phone is required"],
      messageRules: [
        (v) => !!v || "Message is required"
      ],
    };
  },
  methods: {
    checkFields(e) {
      e.preventDefault();
      console.log("form data", this.formData);
      this.loading = true;
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
              };
              this.loading = false;
              this.$router.push('/thankyou');
            }
          });
    },
  },
};
</script>


<style scoped>

body {
  margin: 0px;
  padding: 0px;
}
.successt{
  color:#3D048F !important;
  font-weight: bold;
  text-align:center;
  margin-top: 20px;

}

.button-blue {
  background-color: #3D048F;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 25px;
}
.button-blue1 {
  background-color: #fff;
  color: #3D048F;
  border-radius: 5px;
  border: 1px solid #3D048F;
  padding: 15px 20px;
  cursor: pointer;
  margin-top: 45px;
}

.header-ctn {
  background-image: url("~/assets/images/shutterstock_1928952092-1.jpg");
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86)), url("~/assets/images/shutterstock_1928952092-1.jpg");
  width: 100%;
  height: 125vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding-top: 2rem;
  padding-bottom: 8rem;
  z-index: 99;
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
  width: 35%;
  filter: invert();
}
.header-ctn .header-ctn-inner .header .request-quote-btn-ctn {
  display: flex;
  justify-content: space-between;
}
.header-ctn .hero-content {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
}
.header-ctn .hero-content h2 {
  color: white;
}
.header-ctn .hero-content h1 {
  color: white;
}
.header-ctn .hero-content p {
  color: white;
}
.header-ctn .hero-content .hr {
  width: 90px;
  height: 5px;
  background-color: white;
}
.header-ctn .hero-content .right {
  display: flex;
  align-items: center;
  justify-content: end;
}
.header-ctn .hero-content .right .form-ctn {
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  width: 70%;
}
.header-ctn .hero-content .right .form-ctn h2 {
  color: #3D048F;
  font-size: 30px;
  text-align: center;
}
.header-ctn .hero-content .right .form-ctn form input {
  border: none;
  margin-top: 2rem;
  border-bottom: 1px solid gray;
  width: 100%;
}
.header-ctn .hero-content .right .form-ctn form textarea {
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
}
.header-ctn .hero-content .right .form-ctn form .lets-connect {
  border: 2px solid #3D048F;
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 100%;
}
.header-ctn .hero-content .right .form-ctn form .lets-connect:hover {
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 100%;
  background-color: #3D048F;
  color: white;
}

.awards-ctn {
  width: 100%;
  background-color: #111517;
}
.awards-ctn .awards-ctn-inner {
  width: 1240px;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.awards-ctn .awards-ctn-inner .awards-section-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.awards-ctn .awards-ctn-inner .awards-section-left .heading {
  color: white;
}
.awards-ctn .awards-ctn-inner .awards-section-right {
  text-align: center;
}

.get-touch-ctn {
  width: 100%;
  background-color: #EEEEEE;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.get-touch-ctn .get-in-touch-ctn-inner {
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
}
.get-touch-ctn .get-in-touch-ctn-inner .get-in-touch-left img {
  width: 100%;
}
.get-touch-ctn .get-in-touch-ctn-inner .get-in-touch-right h2 {
  color: #3D048F;
}
.get-touch-ctn .get-in-touch-ctn-inner .get-in-touch-right ul {
  padding: 0px;
}
.get-touch-ctn .get-in-touch-ctn-inner .get-in-touch-right ul li {
  margin-top: 1rem;
}

.hiring-model-ctn {
  width: 100%;
  background-color: white;
  padding: 4rem;
}
.hiring-model-ctn .hiring-model-ctn-inner {
  /* width: 1240px;
  margin: auto; */
}
.hiring-model-ctn .hiring-model-ctn-inner h2 {
  color: #3D048F;
  margin-bottom: 12px;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section .dedicated-team {
  display: flex;
  align-items: center;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section .dedicated-team .heading h3 {
  color: #54595F;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section ul {
  list-style: none;
  padding: 0px;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section ul li {
  display: flex;
  align-items: center;
  color: #54595f;
  margin-top: 12px;
}
.hiring-model-ctn .hiring-model-ctn-inner .three-column-section ul li img {
  width: 8%;
}

.best-dev-online-ctn {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
}
.best-dev-online-ctn .best-dev-online-ctn-left img {
  width: 100%;
}
.best-dev-online-ctn .best-dev-online-ctn-right ul {
  padding: 30px;
  list-style: none;
}
.best-dev-online-ctn .best-dev-online-ctn-right ul li {
  margin-top: 2rem;
  color: #3D048F;
  font-size: 22px;
}
.best-dev-online-ctn .best-dev-online-ctn-right .two-column-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
.best-dev-online-ctn .best-dev-online-ctn-right .two-column-section .col1 ul {
  list-style-type: "✓ ";
  color: #3D048F;
}
.best-dev-online-ctn .best-dev-online-ctn-right .two-column-section .col1 ul li {
  margin-top: 1rem;
  font-size: 16px;
  color: black;
}
.best-dev-online-ctn .best-dev-online-ctn-right .two-column-section .col2 ul {
  list-style-type: "✓ ";
  color: #3D048F;
}
.best-dev-online-ctn .best-dev-online-ctn-right .two-column-section .col2 ul li {
  margin-top: 1rem;
  font-size: 16px;
  color: black;
}

.about-best-dev-ctn {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  background-color: #EEEEEE;
}
.about-best-dev-ctn h2 {
  color: #3D048F;
}
.about-best-dev-ctn .about-best-dev-ctn-inner {
  width: 1240px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 40px;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .about-best-dev-ctn-inner-left img {
  width: 100%;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col1 {
  width: 90%;
  background-color: #3D048F;
  padding: 1rem;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col1 h2 {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col1 p {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col2 {
  width: 90%;
  background-color: #3D048F;
  padding: 1rem;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col2 h2 {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col2 p {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col3 {
  width: 90%;
  background-color: #3D048F;
  padding: 1rem;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col3 h2 {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col3 p {
  color: white;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .why-choose h2 {
  color: #3D048F;
  text-align: left;
  padding: 12px;
}
.about-best-dev-ctn .about-best-dev-ctn-inner .right .why-choose p {
  text-align: left;
  color: #54595F;
  padding: 12px;
}

.client-section-ctn {
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  gap: 50px;
}
.client-section-ctn .client-section-ctn-inner {
  flex-basis: 40%;
  color: #3D048F;
  padding-top: 2rem;
  margin-bottom: 4rem;
}
.client-section-ctn .client-section-ctn-inner h2{
  color: #3D048F;
  margin-bottom: 4rem;
}
.client-section-ctn .client-section-ctn-inner .moving-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
}

.rating-and-reviews-section {
  flex-basis: 50%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.rating-and-reviews-section h2 {
  color: #3D048F;
  margin-bottom: 4rem;
}
.rating-and-reviews-section .rating-and-reviews-section-inner {
  display: flex;
  gap: 50px;
}
.rating-and-reviews-section .rating-and-reviews-section-inner .left {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  text-align: center;
  align-items: center;
  gap: 10px;
}
.rating-and-reviews-section .rating-and-reviews-section-inner .right .review-box {
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
}
.rating-and-reviews-section .rating-and-reviews-section-inner .right .review-box .person-heading-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  text-align: center;
}

.free-consult{
  display: flex;
  margin-top: 25px;
  gap: 10px;
}
.ready-to-hire-ctn {
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #3D048F;
  text-align: center;
}
.ready-to-hire-ctn h2 {
  color: white;
}
.ready-to-hire-ctn p {
  color: white;
  margin-top: 25px;
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
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .form-group {
  width: 100%;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .form-group input {
  width: 100%;
  border: none;
  border-bottom: 2px solid #3D048F;
  text-align: left;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .form-group textarea {
  width: 100%;
  border: none;
  border: 2px solid #3D048F;
  margin-top: 2rem;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .lets-connect {
  border: 2px solid #3D048F;
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 50%;
  background-color: transparent;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .lets-connect:hover {
  font-size: 25px;
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 2rem;
  cursor: pointer;
  width: 50%;
  background-color: #3D048F;
  color: white;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section p {
  color: #54595F;
}/*# sourceMappingURL=style.css.map */
@media (max-width: 480px) {
  .header-ctn {
    height: -moz-max-content;
    height: max-content;
  }
  .client-section-ctn{
    flex-direction: column;
  }
  .button-blue{
    margin: 12px auto;
    display: block;
  }
  .ready-to-hire-ctn{
    padding: 42px;
  }
  .rating-and-reviews-section .rating-and-reviews-section-inner .right .review-box{
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  .rating-and-reviews-section .rating-and-reviews-section-inner .right .review-box .person-heading-text{
    flex-direction: column;
    gap: 10px;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner .right .why-choose h2{
    font-size: 22px;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col1{
    width: 100%;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col2{
    width: 100%;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section .col3{
    width: 100%;
  }
  
  .header-ctn .hero-content h2{
    margin-bottom: 40px;
  }
  .header-ctn .hero-content h1{
    margin-bottom: 25px !important;
    margin-top: 25px !important;
  }
  .free-consult{
    flex-direction: column;
    gap: 0px;
    align-items: center;
    width: 71%;
    margin-left: 50px;

  }
  .header-ctn .hero-content .right .form-ctn{
    width: 100% !important;
  }
  .header-ctn .hero-content p{
    margin-bottom: 25px;
  }
  .quote-button{
    display: none;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section h2{
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
  .awards-ctn {
    display: none;
  }
  .get-touch-ctn .get-in-touch-ctn-inner {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    grid-template-columns: 1fr;
  }
  .hiring-model-ctn {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 20px;
    padding-right: 20px;
  }
  .hiring-model-ctn .hiring-model-ctn-inner {
    width: 100%;
  }
  .hiring-model-ctn .hiring-model-ctn-inner .three-column-section {
    grid-template-columns: 1fr;
  }
  .best-dev-online-ctn {
    display: flex;
    flex-direction: column-reverse;
    padding-left: 20px;
    padding-right: 20px;
  }
  .about-best-dev-ctn {
    padding-left: 20px;
    padding-right: 20px;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner {
    width: 100%;
    grid-template-columns: 1fr;
  }
  .about-best-dev-ctn .about-best-dev-ctn-inner .right .three-column-section {
    grid-template-columns: 1fr;
  }
  .rating-and-reviews-section .rating-and-reviews-section-inner {
    flex-direction: column;
  }
  .client-section-ctn .client-section-ctn-inner{
    margin-bottom: 0rem;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form{
    padding: 0px;
  }
  .button-blue1{
    margin-bottom: 40px;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .right-section{
    padding: 12px;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .lets-connect {
    width: 100%;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .lets-connect:hover {
      width: 100%;
      font-size: 19px;
  }
  .ready-to-hire-ctn .ready-to-hire-ctn-inner .book-free-cons-section form .lets-connect {
      font-size: 19px;
  }
  .header-ctn .hero-content .right .form-ctn form .lets-connect{
    font-size: 19px;
  }
  .header-ctn .hero-content .right .form-ctn form .lets-connect:hover{
    font-size: 19px;
  }
}/*# sourceMappingURL=style.css.map */
</style>