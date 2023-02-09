<template>
  <div>
    <!-- <div class="banner-container solution-banner">
      <div class="contain">
        <h1>Recruit Ideal Team</h1>
        <p>
          Boost your team's momentum and expertise with custom software
          developers and an expert team.
        </p>
        <a href="#" class="explore-link">Hire a Team</a>
      </div>
    </div> -->
    <div class="home-container new-banner">
      <div class="first-content">
        <div class="text">
          <h1>Upscale Your Project with Top-Notch Resources</h1>
          <p class="entry">
            Boost your team's momentum and expertise with capable engineers and
            talent.
          </p>
          <a href="#contact-form" class="cta-orange">Hire a Team</a>
          <a href="#contact-form" class="cta-orange">Free Consultation</a>
          <div class="tech-logos">
            <img src="~/assets/logos/js.svg" alt="Node Js" />
            <img src="~/assets/logos/python.svg" alt="Python" />
            <img src="~/assets/logos/laravel.svg" alt="Laravel" />
            <img src="~/assets/logos/angular.svg" alt="Angular" />
            <img src="~/assets/logos/react.svg" alt="React" />
            <img src="~/assets/logos/net.svg" alt="Dot Net" />
            <img src="~/assets/logos/django.svg" alt="Django" />
            <img src="~/assets/logos/ruby.svg" alt="Ruby on rails" />
          </div>
          <div class="acknowledgements">
            <p>Acknowledgements</p>
            <div class="ack-logos">
              <img src="~/assets/logos/pecb-certified.svg" />

              <img src="~/assets/logos/accelerance-certified.svg" />
              <img src="~/assets/logos/trustpilot.png" />
            </div>
          </div>
        </div>
        <div class="image">
          <div class="banner-wrapper-shapes">
            <img src="~/assets/images/team-augmentation-banner.webp" />
          </div>
          <div class="metrics">
            <div class="m-single">
              <p class="head">1000+</p>
              <p>End-to-end projects</p>
            </div>
            <div class="m-single">
              <p class="head">75</p>
              <p>Net Promoter Score (NPS)</p>
            </div>
            <div class="m-single">
              <p class="head">02%</p>
              <p>Top engineering talent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container manage-container">
      <h2>
        Manage Development Using the Agile Process and Achieve Business
        Objectives As A Team
      </h2>
      <p class="tagline">
        Our guiding principle: If you succeed, we succeed. Thus, our teams
        provide custom-tailored solutions to meet the requirements of your
        business.
      </p>
      <div class="two-col">
        <div class="left">
          <p>
          As you diversify your team, make the most of the experience and
          expertise available in the depth of tribal knowledge. Whether you want
          to expand your in-house development team with a strategic partner or
          hire a team to deliver your project, Silicon Network has you covered.
          We have assisted startups and leading companies by providing them with
          a solid team and ensuring complete transparency and open
          communication.
        </p>
        </div>
        <div class="right">
          <div class="form-ctn">

                    <h2>Book a Free Consultation</h2>

                    <form v-on:submit="checkFields"
                        ref="form">
                        <div style="padding:4px;" class="form-group">
                            <label for="fullName">Full Name*</label>
                            <br>
                            <input v-model="formData.name" type="text" id="fullName" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="workEmail">Work Email*</label>
                            <br>

                            <input v-model="formData.email" placeholder="name@gmail.com" type="email" id="workEmail" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="phoneNumber">Phone Number*</label>
                            <br>

                            <input v-model="formData.phone" type="tel" id="phoneNumber" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="message">Message*</label>
                            <br>

                            <textarea v-model="formData.message" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="lets-connect">LET'S CONNECT!</button>
                        <v-progress-circular
                          text-align="center"
                          indeterminate
                          color="#E38601"
                          v-if="loading == true"
                        ></v-progress-circular>
                        <p v-if="success" class="successt">
                          Thanks for getting in touch!
                        </p>
                    </form>

                </div>
        </div>
      </div>
    </div>
    <!-- <div class="dedicated-container">
      <div class="inner-container home-container">
        <p>Let's Get Started</p>
        <h2>Create a Committed Team For Your Company</h2>
        <p>
          To provide the best resources that support our client's vision, we
          adopt the client-first paradigm and create partnerships that are
          advantageous to both parties. We pool our knowledge and abilities to
          find the best team for your operations.
        </p>
        <img src="~/assets/images/team.webp" alt="Dedicated Team" />
      </div>
    </div> -->

    <div class="benefits-container">
      <div class="home-container heading-content">
        <h2>We’re here to assist you!</h2>
        <p class="entry">No more recruitment hassle!</p>
      </div>
      <div class="cards">
        <div class="card">
          <img
            src="~/assets/icons/time-to-market.svg"
            alt="shorten time"
            class="icon"
          />
          <h3 class="heading">Shorten time-to-market</h3>
          <p class="content">
            We will assist you in launching your product into the market faster,
            from quality assurance strategy and project management to boosting
            scope decomposition.
          </p>
        </div>
        <div class="card">
          <img
            src="~/assets/icons/expense.svg"
            alt="shorten time"
            class="icon"
          />
          <h3 class="heading">Save 50% on your expenses</h3>
          <p class="content">
            Our scalable teams adapt to your changing needs, ensuring that you
            only have the best available resources for your project.
          </p>
        </div>
        <div class="card">
          <img
            src="~/assets/icons/core-business.svg"
            alt="shorten time"
            class="icon"
          />
          <h3 class="heading">Concentrate on your core business.</h3>
          <p class="content">
            Whatever stage of the SDLC you are currently at, we will assist you
            in ramping up your processes so that you can focus on core business.
          </p>
        </div>
        <div class="card">
          <img
            src="~/assets/icons/skill-gap.svg"
            alt="shorten time"
            class="icon"
          />
          <h3 class="heading">Close the skill gap</h3>
          <p class="content">
            To provide you with a technically competent team, we hire the top 2%
            of available talent.
          </p>
        </div>
      </div>
      <div class="cta">
        <a href="#contact-form" class="cta-orange">Grow your Team Now!</a>
      </div>
    </div>
    <div class="home-container robust-container">
      <h2>
        Robust and Effective Engagement Models to Meet Your Resource Demands
      </h2>
      <p>
        As your strategic partner, we seek to streamline the DTM process and
        eliminate ambiguities and bottlenecks.We provide clients with a wide
        variety of engagement models, empowering you to select the model that
        best aligns with your business goals and enabling you to reap the full
        benefits of a diverse remote team.
      </p>
      <a href="#!" class="explore-link">Grow your Team Now!</a>

      <div class="two-sections">
        <div>
          <h2>Own A Squad</h2>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Dedicated Team With
            Monthly Billing
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Manage As Your Own Team
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Onsite Traveling
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Daily Scrum Via Video
            Conference
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Scale-Up / Scale-Down
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Resource Replacement
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Cost-Effective
          </p>
        </div>
        <div>
          <h2>Project-Based Engagement</h2>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Share An Idea With Us
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Get The Estimates
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" />Onsite Traveling
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> We Manage Your Project
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Product Demos
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Daily Scrum Via Video
            Conference
          </p>
          <p class="slide-text">
            <img src="~/assets/icons/arrow-right.svg" /> Onsite / Remote Uats
          </p>
        </div>
      </div>
    </div>
    <div class="tribal-container">
      <div class="home-container inner">
        <h2>Leverage the Potential of Tribal Knowledge</h2>
        <p>
          Effective virtual collaboration transcends the limitations of time and
          place. We implement best practices and collaborative technology tools
          that not only facilitate the flow of information, but also create a
          system of support that capitalizes on the strengths of each team.
        </p>
        <div class="icons">
          <div class="icon">
            <img src="~/assets/icons/icon1.svg" alt="Scrum" />
            <h4>Scrum Meeting; Agile Methodology</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon2.svg" alt="Scrum" />
            <h4>Kanban Organized Workflow</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon3.svg" alt="Scrum" />
            <h4>Cultural Fit</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon4.svg" alt="Scrum" />
            <h4>Central Documentation Repository</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon5.svg" alt="Scrum" />
            <h4>Direct Access To Team</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon6.svg" alt="Scrum" />
            <h4>Daily Syncs</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon7.svg" alt="Scrum" />
            <h4>Face To Face Meeting</h4>
          </div>
          <div class="icon">
            <img src="~/assets/icons/icon8.svg" alt="Scrum" />
            <h4>State Of The Art Latest Technology Stack</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="home-container onboarding-container">
      <div class="image">
        <h2>Our Onboarding Procedure</h2>
        <img
          src="~/assets/images/onboarding-banner.webp"
          alt="Onboarding image"
        />
      </div>
      <div class="text">
        <div class="big-text">
          <div class="number">1</div>
          <div class="content">
            <h3>Communicate</h3>
            <p>
              To define the scope, share your requirements and specific goals.
            </p>
          </div>
        </div>
        <div class="big-text">
          <div class="number">2</div>
          <div class="content">
            <h3>Pick the team</h3>
            <p>We will pair you with the best candidate for your project.</p>
          </div>
        </div>
        <div class="big-text">
          <div class="number">3</div>
          <div class="content">
            <h3>Free-trial</h3>
            <p>
              Before signing up, assess the dynamics and observe how they play
              out.
            </p>
          </div>
        </div>
        <div class="big-text">
          <div class="number">4</div>
          <div class="content">
            <h3>Advance</h3>
            <p>Scalable teams will adapt to your changing needs.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lists-container home-container">
      <h2>Which Expertise Will Drive Your Vision?</h2>
      <p>
        Tell us the skills you need and we'll match you with the best developer
        in days, not weeks.
      </p>
      <ul class="lists">
        <li>Backend Engineers</li>
        <li>Frontend Engineers</li>
        <li>.NET Engineers</li>
        <li>Python Engineers</li>
        <li>UI/UX Engineers</li>
        <li>Magento Engineers</li>
        <li>Node.JS Engineers</li>
        <li>Salesforce Engineers</li>
        <li>DevOps Engineers</li>
        <li>Machine Learning Engineers</li>
        <li>Backbone.JS Engineers</li>
        <li>Software Engineers</li>
        <li>Ember.Js Engineers</li>
        <li>JQuery Engineers</li>
        <li>Web Engineers</li>
        <li>Scala Engineers</li>
        <li>Full Stack Engineers</li>
        <li>React Native Engineers</li>
        <li>Ionic Engineers</li>
        <li>Kotlin Engineers</li>
      </ul>
      <a href="#contact-form" class="explore-link text-center"
        >Hire Top Talent Now!</a
      >
    </div>

    <testimonial-slider />

    <FaqSection :Faqs="Faqs" />
  </div>
</template>

<script>
import axios from "axios";  
import TestimonialSlider from "../components/home/TestimonialSlider.vue";
export default {
  components: { TestimonialSlider },
  name: "TeamAugmentation",
  layout: 'teamaug',
  head: {
    title: 'Team Augmentation Services | Silicon Networks',
    meta: [
      {
        // hid: 'description',

        name: 'description',
        content: "Maximize your team's potential with our top-notch Staff Augmentation services. Benefit from the expertise of seasoned professionals to achieve your business goals."
      }
    ],
  },
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
      Faqs: {
        title: "",
        heading: "Frequently Asked Questions",
        img: "faqs.webp",
        questions: [
          {
            title: "How Do You Recruit a Dedicated Development Team?",
            answer:
              "After reading all of the information regarding our dedicated teams, please fill out the contact form, and we will contact you.",
          },
          {
            title: "Why Should You Employ Dedicated Developers?",
            answer:
              "The core of any project is a team of passionate developers. Engineers who are qualified are needed for a project to be completed on time and on budget. Hiring a dedicated team improves the quality of a project by opening it up to new ideas and creative approaches. It also improves the team's technical skills and knowledge. Hiring the whole team at once saves time compared to the traditional method of looking for and hiring resources. With the help of Silicon Networks, you can grow your team as the project progresses. Remote teams are usually made up of talented people who can work well together, have the same goals, and want to take on challenging projects. They have high goals and are committed to delivering high-quality software on schedule. When you need to build and release a product quickly, it's helpful to hire a team of programmers who work together.",
          },
          {
            title:
              "What are the benefits of having a dedicated team of developers?",
            answer:
              "A good strategy is to use a dedicated team to design and launch products. If your company doesn't have the experts it needs for the project, you must start looking for them. But this will automatically make the project longer. When you work with a dedicated team, it's easier to grow quickly. Our hard-working teams are very motivated and excited as they try to finish a difficult task in the time allotted. Businesses also save money when they hire dedicated teams.",
          },
          {
            title: "What is the structure of a dedicated team?",
            answer:
              "A dedicated team structure is usually made up of highly skilled professionals, such as developers, quality assurance teams, and remote project managers. So, a dedicated team is one of the best options because it combines a high level of skill with low costs.",
          },
          {
            title: "What motivates top tech talent to join Silicon Networks?",
            answer: `The reasons Silicon Networks recruits talent include the following.
<ul>
<li>High potential for growth</li>
<li>Once vetted, always eligible</li>
<li>Tech exclusive community </li>
<li>Extensive development and training</li>
</ul>
`,
          },
        ],
      },
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
            }
          });
    },
  },
};
</script>

<style lang="scss" scoped>
// .solution-banner {
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   align-items: start;
//   justify-content: end;
//   flex-direction: column;
//   margin-bottom: 50px;
//   background: url("~/assets/images/recruit.webp");
//   background-size: cover;
//   background-position: top center;
//   .contain {
//     margin-bottom: 150px;
//     margin-left: 70px;
//     max-width: 650px;
//     h1 {
//     }
//     p {
//       margin-top: 15px;
//       margin-bottom: 50px;
//     }
//     a {
//       font-size: 18px;
//       color: #f23801;
//     }
//   }
// }

.new-banner {
  min-height: 100vh;
  width: 100%;
  .first-content {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      flex-basis: 50%;
      width: 50%;
    }
    .text {
      .entry {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .cta-orange {
        margin-right: 15px;
      }
      .tech-logos {
        margin-top: 25px;
        display: flex;
        gap: 15px;
        img {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }
      }
      .acknowledgements {
        margin-top: 50px;
        .ack-logos {
          margin-top: 20px;
          img {
            width: 60px;
            margin-right: 15px;
          }
        }
      }
    }
    .image {
      display: flex;
      align-items: end;
      flex-direction: column;

      .banner-wrapper-shapes {
        position: relative;
        img {
          max-width: 486px;
        }
      }
      .metrics {
        width: 486px;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        .m-single {
          .head {
            font-size: 18px;
            font-family: "Gilroy-Bold";
            margin-bottom: 10px;
          }
          p {
            font-size: 16px;
            line-height: 1.3em;
          }
        }
      }
    }
  }
}

.banner-wrapper-shapes::before {
  background-image: url("~/assets/images/shape-circle.svg");
  width: 99px;
  height: 99px;
  left: -49.5px;
  top: 50px;
  content: "";
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}

.banner-wrapper-shapes::after {
  background-image: url("~/assets/images/shape-triangle.svg");
  width: 112px;
  height: 112px;
  bottom: -36px;
  right: -2rem;
  content: "";
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}

.manage-container {
  margin-top: 8px;
  margin-bottom: 50px;
  h2 {
    width: 60%;
  }
  p.tagline {
    width: 70%;
    margin-top: 30px;

    margin-bottom: 15px;
    font-size: 20px;
    font-family: "Gilroy-Medium";
    color: #ef861d;
  }
  .two-col {
    display: flex;
    gap: 20px;
    
    .left{
      flex-basis: 50%;

      p{
        margin-top: 195px;
      }
    }
    .right {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 50%;
            box-shadow: 0 6px 18px rgb(0 0 0 / 10%);

            .form-ctn {
                background-color: white;
                padding: 2rem;
                border-radius: 15px;
                width: 100%;

                h2 {
                  color: #091756;
                  width: 100%;
                  font-size: 31px;
                  margin-bottom: 25px;
                  text-align: center;
                }

                form {

                    input {
                        border: none;
                        margin-top: 2rem;
                        border-bottom: 1px solid gray;
                        width: 100%;
                    }

                    textarea {
                        border: none;
                        border-bottom: 1px solid gray;
                        width: 100%;

                    }

                    .lets-connect {
                        background-color: #e38601;
                        color: #fff;
                        font-size: 19px;
                        padding: 10px 20px;
                        border-radius: 10px;
                        margin-top: 2rem;
                        cursor: pointer;
                        width: 100%;



                    }

                    .lets-connect:hover {
                        font-size: 19px;
                        padding: 10px 20px;
                        border-radius: 10px;
                        margin-top: 2rem;
                        cursor: pointer;
                        width: 100%;
                        background-color: #000;
                        color: white;
                    }
                    p{
                      text-align: center;
                      margin: 25px;
                      font-weight: 600;
                      color: #091756;
                    }
                }


            }
        }
  }
}

// .dedicated-container {
//   padding-top: 80px;
//   padding-bottom: 80px;
//   background: #ecf5ff;

//   .inner-container {
//     text-align: center;
//     > h2 {
//       margin-top: 10px;
//       margin-bottom: 20px;
//       text-align: left;
//     }
//     > p {
//       max-width: 65%;
//       text-align: left;
//     }
//     > img {
//       margin-top: 30px;
//       height: 800px;
//     }
//   }
// }

.benefits-container {
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #ecf5ff;
  .heading-content {
    p.entry {
      font-size: 24px;
      margin-top: 5px;
      margin-bottom: 30px;
    }
  }
  .cards {
    margin-top: 40px;
    margin-bottom: 40px;
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    .card {
      flex-grow: 1;
      flex-basis: 0;
      background: white;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
      .icon {
        width: 50px;
        height: 50px;
        object-fit: contain;
        margin-bottom: 15px;
      }
      .heading {
        margin-bottom: 15px;
        font-size: 20px;
      }
      .content {
        line-height: 1.3em;
        font-size: 16px;
      }
    }
  }
  .cta {
    margin-top: 30px;
    text-align: center;
  }
}

.robust-container {
  padding-top: 50px;
  padding-bottom: 50px;
  > h2 {
    width: 50%;
  }
  > p {
    margin-top: 15px;
    margin-bottom: 40px;
    width: 50%;
  }
  > a {
    color: #f23801;
    font-size: 18px;
  }

  .two-sections {
    margin-top: 80px;
    display: flex;
    gap: 40px;
    > div {
      flex-basis: 50%;
      width: 50%;
      background: #f1f1f1;
      padding: 50px;
      border-radius: 12px;
      > h2 {
        margin-bottom: 50px;
      }
      > p {
        font-family: "Gilroy-Medium";
        margin-bottom: 20px;
        img {
          margin-right: 15px;
        }
      }
    }
  }
}

.tribal-container {
  background: #fbf3e8;
  padding-top: 50px;
  padding-bottom: 50px;
  .inner {
    h2 {
      width: 50%;
    }
    > p {
      width: 60%;
      margin-top: 10px;
    }
    .icons {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      .icon {
        margin-bottom: 30px;
        width: 22%;
        text-align: center;
        background: white;
        padding-bottom: 20px;
        border-radius: 8px;
        img {
          width: 60px;
          margin-top: -35px;
          margin-bottom: 15px;
        }
      }
    }
  }
}

.onboarding-container {
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  gap: 50px;
  > * {
    width: 50%;
    flex-basis: 50%;
  }
  .image {
    h2 {
      margin-bottom: 30px;
    }
    img {
      width: 90%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    .big-text {
      display: flex;
      .number {
        width: 25%;
        flex-basis: 25%;
        font-weight: bold;
        font-family: "Gilroy-Bold";
        font-size: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1em;
        color: #e38601;
      }
      .content {
        width: 75%;
        flex-basis: 75%;
        h3 {
        }
        p {
          margin-top: 5px;
          font-size: 16px;
        }
      }
    }
  }
}

.lists-container {
  margin-top: 50px;
  margin-bottom: 50px;
  > p {
    width: 50%;
    margin-top: 10px;
  }
  .lists {
    margin-top: 50px;
    list-style-type: none;
    list-style-position: inside;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    li {
      font-family: "Gilroy-Bold";
      margin-bottom: 20px;
      font-size: 18px;
    }
    li::before {
      // content: "⚆";
      // content: "◎";
      content: "◯";
      color: #ef861d;
      display: inline-block;
      width: 1em;
      margin-right: 15px;
    }
  }
  a {
    display: block;
    margin-left: auto;
    margin-right: auto;
    color: #e23800;
    font-size: 18px;
    margin-top: 20px;
  }
}
@media (max-width: 480px) {
  // .solution-banner {
  //   .contain {
  //     margin-bottom: 180px;
  //     margin-left: 20px;
  //     margin-right: 20px;
  //     h1 {
  //       width: 100%;
  //     }
  //     p {
  //       margin-bottom: 20px;
  //     }
  //   }
  // }

  .new-banner {
    margin-top: 25px;
    .first-content {
      flex-wrap: wrap;

      > * {
        flex-basis: 100%;
        width: 100%;
      }
      .text {
        .entry {
          font-size: 24px;
          margin-top: 20px;
          margin-bottom: 30px;
        }
        .cta-orange {
          margin-bottom: 15px;
        }
        .tech-logos {
          margin-top: 25px;
          display: flex;
          overflow: hidden;
          gap: 15px;
          img {
            width: 25px;
            height: 25px;
            object-fit: contain;
          }
        }
        .acknowledgements {
          margin-top: 50px;
          .ack-logos {
            margin-top: 20px;
            img {
              width: 50px;
              margin-right: 15px;
            }
          }
        }
      }
      .image {
        margin-top: 30px;
        .banner-wrapper-shapes {
          img {
            max-width: 100%;
          }
        }
        .metrics {
          width: 100%;
          flex-wrap: wrap;
          gap: 20px;
        }
      }
    }
  }

  .manage-container {
    margin-top: 50px;
    margin-bottom: 30px;
    h2 {
      width: 100%;
    }
    p.tagline {
      width: 100%;
      margin-top: 15px;
      font-size: 18px;
    }
    .two-col {
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      .left{

        p{
          margin-top: 0px;
        }
      }

      .right{
        .form-ctn{
          h2{
            font-size: 25px;
          }
        }
      }
    }
  }

  // .dedicated-container {
  //   padding-top: 50px;
  //   padding-bottom: 50px;
  //   background: #ecf5ff;

  //   .inner-container {
  //     text-align: center;
  //     > h2 {
  //       margin-top: 10px;
  //       margin-bottom: 20px;
  //       text-align: left;
  //     }
  //     > p {
  //       max-width: 100%;
  //       text-align: left;
  //     }
  //     > img {
  //       margin-top: 30px;
  //       height: auto;
  //       width: 100%;
  //       object-fit: contain;
  //     }
  //   }
  // }

  .benefits-container {
    .heading-content {
      p.entry {
        font-size: 18px;
      }
    }
    .cards {
      padding-left: 20px;
      padding-right: 20px;
      flex-wrap: wrap;
      gap: 20px;
      .card {
        flex-basis: unset;
      }
    }
  }

  .robust-container {
    padding-top: 30px;
    padding-bottom: 30px;
    > h2 {
      width: 100%;
    }
    > p {
      margin-top: 15px;
      margin-bottom: 20px;
      width: 100%;
    }

    .two-sections {
      margin-top: 30px;
      flex-wrap: wrap;
      gap: 20px;
      > div {
        flex-basis: 100%;
        width: 100%;
        background: white;
        padding: 0px;
        border-radius: 12px;
        > h2 {
          margin-bottom: 30px;
        }
        > p {
          font-family: "Gilroy-Medium";
          margin-bottom: 20px;
          img {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .tribal-container {
    padding-top: 30px;
    padding-bottom: 30px;
    .inner {
      h2 {
        width: 100%;
      }
      > p {
        width: 100%;
        margin-top: 10px;
      }
      .icons {
        flex-wrap: wrap;
        gap: 30px;
        .icon {
          margin-bottom: 30px;
          width: 45%;
          text-align: center;
          background: white;
          padding-bottom: 20px;
          padding-right: 20px;
          padding-left: 20px;
          border-radius: 8px;
          img {
            width: 60px;
            margin-top: -35px;
            margin-bottom: 15px;
          }
        }
      }
    }
  }

  .onboarding-container {
    margin-top: 40px;
    margin-bottom: 60px;
    flex-wrap: wrap;
    > * {
      width: 100%;
      flex-basis: 100%;
    }
    .image {
      h2 {
        margin-bottom: 20px;
      }
      img {
        width: 100%;
      }
    }
    .text {
      gap: 40px;
      .big-text {
        .number {
          font-size: 70px;
        }
      }
    }
  }

  .lists-container {
    margin-top: 30px;
    margin-bottom: 30px;
    > p {
      width: 100%;
    }
    .lists {
      margin-top: 30px;
      grid-template-columns: 1fr;
      grid-gap: 10px;

      li {
        margin-bottom: 0px;
        font-size: 18px;
      }
      li::before {
        // content: "⚆";
        // content: "◎";
        content: "◯";
        color: #ef861d;
        display: inline-block;
        width: 1em;
        margin-right: 15px;
      }
    }
    a {
      display: block;
      margin-left: auto;
      margin-right: auto;
      color: #e23800;
      font-size: 18px;
      margin-top: 30px;
    }
  }
}
</style>