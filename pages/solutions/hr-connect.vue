<template>
  <div>
    <div class="banner-container solution-banner">
      <div class="contain">
        <h1 class="text-center">
          One-Stop-Shop For Remote Comprehensive Management Needs
        </h1>
      </div>
    </div>
    <p class="entry-text home-container text-center">
      Known for its expertise in HR, Marketing, Sales, and Financial Services,
      HR Connect provides small-medium business owners with access to these
      services that don't typically fall within their budgets. As your business
      grows, HR Connect ensures you receive simple, practical and proven
      strategies for people management.
    </p>
    <div class="featured-feature home-container">
      <div class="image-area">
        <img src="~/assets/images/hrimg.jpg" alt="Featured image" />
      </div>
      <div class="text-area">
        <h2>Human Resources Administration Made Easy</h2>
        <p>
          Our company aims for the flexibility and automation of our client's
          businesses and provides them with the latest software solutions. Our
          industry specialists utilize Agile and Smart AWS software to give HR
          services with project and test management tools in addition to other
          development tools so that organizations may control their digital
          environment with complete authority.
        </p>
      </div>
    </div>
    <div class="featured-feature reversed home-container">
      <div class="image-area">
        <img src="~/assets/images/hrimg.jpg" alt="Featured image" />
      </div>
      <div class="text-area">
        <h2>Managing Digital Communities</h2>
        <p>
          Digital solutions connect and engage teams, from Talent Recruitment to
          Training new Employees, providing reports with on-the-job product
          training, and teaching leaders the value of soft skills in the
          workplace. Connect HRMS is the most effective instrument in every way.
        </p>
      </div>
    </div>
    <div class="features">
      <div class="image-area">
        <h2>Results-Oriented Policies</h2>
        <p>
          Develop a digital platform that utilizes global approaches and Fast
          integrated web technology to effectively manage proactive e-commerce
          through workflow creative thinking. Protected personal office spaces
          with a networked and unified front and back office activities.
        </p>
        <img src="~/assets/images/stickyfeatures.jpg" alt="Features image" />
      </div>
      <div class="text-area">
        <div class="solution">
          <h4>Cloud Capable</h4>
          <p>
            Utilize the adaptability and intelligence of cloud-integrated
            solutions to create a cloud-ready, safe, and dependable digital
            space.
          </p>
        </div>
        <div class="solution">
          <h4>Intra-net Biometric</h4>
          <p>
            Automation of a cloud software network that reduces security threats
            and maintains the confidentiality of data across the digital
            environment.
          </p>
        </div>
        <div class="solution">
          <h4>Integration of ERP</h4>
          <p>
            Integration of Microsoft Dynamics 365 ERP to securely transfer data
            across the digital environment and connect systems, resulting in
            increased productivity.
          </p>
        </div>
        <div class="solution">
          <h4>BI and Interactional</h4>
          <p>
            Utilize potent BI technologies to examine corporate information and
            document past and current strategies. Interpret data both internally
            and externally.
          </p>
        </div>
      </div>
    </div>
    <solution-features :Features="Features" />
    <our-partners />
  </div>
</template>

<script>
import OurPartners from "../../components/solutions/OurPartners.vue";
import SolutionFeatures from "../../components/solutions/SolutionFeatures.vue";
export default {
  components: { SolutionFeatures, OurPartners },
  name: "HrConnect",
  data: () => {
    return {
      Features: {
        heading: "Features",
        desc: "Silicon Networks is a professional corporation recognized for its top-tier HR solutions by using smart AWS software for business expansion.",
        cards: [
          {
            heading: "Human Capital Management ",
            desc: `The HCM module is a cost-effective solution to centralize personnel information, engage employees and managers, and empower the HR Department. It is developed using cutting-edge technologies by the industry's foremost experts and professionals to manage end-to-end HR processes across the enterprise. Connect HRMS offers the most effective HR software in Pakistan.`,
          },
          {
            heading: `Payroll & Attendance`,
            desc: `Define Pay packages across your entire firm and obtain accurate, compliant payroll in a few clicks. ESS portal automates all the leave, advance, loan, costs, OT, and other perks and deductions. Payroll module is directly integrated with your biometric attendance devices.`,
          },
          {
            heading: `Employee Auto-Service`,
            desc: `Employees can record time, expenses, Leaves, advances, and loans, as well as access paystubs, deductions, and taxation update their personal information via mobile or web, as well as design custom workflows, and handle all approvals.`,
          },
          {
            heading: `Talent Management`,
            desc: `Utilize low-hanging fruit to determine a rough estimate of a value-added activity for beta testing the digital divide.`,
          },
          {
            heading: `Compliance`,
            desc: `A comprehensive examination of the organization's adherence to regulatory obligations.`,
          },
          {
            heading: `Digital Documents`,
            desc: `Document management software is a program used for storing, managing, and tracking electronic documents and scanned pictures of paper-based information.`,
          },
          {
            heading: `Tasks Management`,
            desc: `The process of managing activities throughout the life cycle. Includes planning, testing, surveillance, and reporting.`,
          },
          {
            heading: `Recruitment`,
            desc: `The recruitment process consists of locating, investigating, selecting, and recruiting candidates to fill vacancies. This is a crucial component of the human resource management system.`,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.solution-banner {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 50px;
  background: url("~/assets/images/hrcon.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  .contain {
    margin-top: 150px;
    h1 {
      width: 820px;
      margin-bottom: 30px;
    }
  }
}

.entry-text {
  margin: 50px auto;
  width: 1100px;
}

.featured-feature {
  margin: 50px auto;
  display: flex;
  gap: 80px;
  .image-area {
    width: 50%;
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }
  .text-area {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    flex-basis: 50%;
    h2 {
      font-family: "Gilroy-Regular";
      font-weight: normal;
      color: black;
    }
    p {
      margin-top: 20px;
    }
  }
}
.featured-feature.reversed {
  .image-area {
    order: 1;
  }
}

.features {
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 50%;
    width: 50%;
    padding-left: 50px;
    padding-right: 100px;
    h2 {
      margin-bottom: 10px;
      color: black;
    }
    p {
      margin-bottom: 25px;
    }
    img {
      width: 100%;
    }
  }
  .text-area {
    flex-basis: 50%;
    width: 50%;
    padding-right: 70px;
    .solution {
      margin-bottom: 25px;
      h4 {
        color: #ef861d;
        font-size: 20px;
        font-family: "Gilroy-Regular";
        font-weight: normal;
      }
      p {
        font-size: 20px;
        margin-top: 10px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .solution-banner {
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
    background: url("~/assets/images/about.jpg");
    .contain {
      margin-top: 150px;
      h1 {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  .entry-text {
    margin: 30px auto;
    width: 100%;
    padding: 0px 20px;
  }

  .featured-feature {
    margin: 30px auto;
    margin-top: 50px;
    flex-wrap: wrap;
    gap: 40px;
    .image-area {
      width: 100%;
      flex-basis: 100%;
    }
    .text-area {
      width: 100%;
      flex-basis: 100%;
      h2 {
        font-family: "Gilroy-Regular";
        font-weight: normal;
        color: black;
      }
      p {
        margin-top: 20px;
      }
    }
  }
  .featured-feature.reversed {
    .image-area {
      order: 0;
    }
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      h2 {
        margin-bottom: 10px;
        color: black;
      }
      p {
        margin-bottom: 25px;
      }
      img {
        width: 100%;
      }
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      .solution {
        margin-bottom: 25px;
        h4 {
          color: #ef861d;
          font-size: 20px;
          font-family: "Gilroy-Regular";
          font-weight: normal;
        }
        p {
          font-size: 20px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>