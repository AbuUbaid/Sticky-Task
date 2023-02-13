<template>
  <div class="home-top-container">
    <div class="top-expert">
      <div class="top-logos">
        <div class="top-tech">
          <img src="~/assets/images/ror-1.webp" alt="ror" />
          <p>Roby On Rails</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/laravel-1.webp" alt="laravel" />
          <p>Laravel</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/flutter-1.webp" alt="flutter" />
          <p>Flutter</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/angular-1.webp" alt="angular" />
          <p>Angular</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/node-1.webp" alt="node" />
          <p>Node JS</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/go-1.webp" alt="go" />
          <p>Golang</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/react-1.webp" alt="react" />
          <p>React</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/spring-1.webp" alt="spring" />
          <p>Spring Boot</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/vue-1.webp" alt="vue" />
          <p>VUE Js</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/salesforce-1.webp" alt="salesforce" />
          <p>Salesforce</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/service-1.webp" alt="service" />
          <p>Service Now</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/java-1.webp" alt="java" />
          <p>Java</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/react-1.webp" alt="react" />
          <p>React Native</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/python-1.webp" alt="python" />
          <p>python</p>
        </div>
        <div class="top-tech">
          <img src="~/assets/images/net-1.webp" alt="net" />
          <p>.Net</p>
        </div>
      </div>
      <div class="top-experts-text">
        <h2>Powering Your Projects with Top Notch Technology Expertise</h2>
        <p>
          We have more than ten years of experience in the service industry. We
          can serve every technology expertise, and here are some of the famous
          ones.
        </p>
        <p class="not-sure">
          Not sure which technology is appropriate for your project? Not to
          worry, Schedule a completely free 30-minute consultation with our
          Senior Business Development Executive.
        </p>
        <a href="#free-consult" class="talk-experts"
          >TALK TO OUR EXPERTS</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-top-container {
  margin-top: 50px;
  padding: 50px;
  .top-expert {
    display: flex;
    gap: 50px;
    .top-logos {
      flex-basis: 50%;
      gap: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;

      .top-tech {
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-shadow: 0 2.8125rem 3.75rem 0 rgb(34 34 34 / 10%);
        padding: 1rem !important;
        background: white;
        p {
          text-align: center;
        }
        img {
          width: 100%;
        }
      }
    }
    .top-experts-text {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
      gap: 20px;
      padding: 50px;
      h2 {
        font-size: 35px;
        color: #091756;
      }

      p {
        font-family: "Gilroy-Regular";
        font-size: 18px;
        line-height: 1.875rem;
      }
      .not-sure {
        font-family: "Gilroy-Regular";
        font-size: 1.125rem;
        line-height: 1.875rem;
        color: #3d048f;
      }
      .talk-experts {
        background-color: #3d048f;
        color: white;
        border-radius: 5px;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        margin-top: 25px;
        text-align: center;
        width: max-content;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media (max-width: 480px) {
  .home-top-container {
    margin-top: 30px;
    padding: 20px;
    .top-expert {
      flex-wrap: wrap;
      gap: 30px;
      .top-logos {
        flex-basis: 100%;
        gap: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        .top-tech {
          display: flex;
          flex-direction: column;

          gap: 20px;
          box-shadow: 0 2.8125rem 3.75rem 0 rgb(34 34 34 / 10%);
          padding: 1rem !important;
          background: white;
          p {
            text-align: center;
          }
          img {
            width: 100%;
          }
        }
      }
      .top-experts-text {
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        gap: 20px;
        padding: 0px;
        h2 {
          font-size: 28px;
          color: #091756;
        }

        p {
          font-family: "Gilroy-Regular";
          font-size: 16px;
          line-height: 1.875rem;
        }
        .not-sure {
          font-family: "Gilroy-Regular";
          font-size: 1.125rem;
          line-height: 1.875rem;
          color: #3d048f;
        }
        .talk-experts {
          background-color: #3d048f;
          color: white;
          border-radius: 5px;
          border: none;
          padding: 15px 20px;
          cursor: pointer;
          margin-top: 25px;
          text-align: center;
        }
      }
    }
  }
}
</style>