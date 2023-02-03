<template>
  <div class="weekprocess-container">
    <div class="values home-container">
      <div class="text-area">
        <h2>2-Week Process To Ensure <br /> On-Time & On-Budget Delivery.</h2>
        <p>
          In this workshop, our product strategists, technical experts, and UI/UX specialists work with our clients to produce the best results.
        </p>
        <template>
        <a href="#contact-form"  class="explore-link">Contact Today</a>
      </template>
      </div>
      <div class="icons-area">
        <div class="icon">
          <img src="~/assets/icons/middle-man.png" alt="Work icon" />
          <h2>User Stories Report</h2>
          <p>A comprehensive guide that lists the product's features</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/secure.png" alt="Work icon" />
          <h2>Technical Assessment</h2>
          <p>Early detection of high-risk technical problems and ideal solutions.</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/uphold.png" alt="Work icon" />
          <h2>Interactive Prototyping</h2>
          <p>Visualizing the finished product using interactive UI/UX designs.</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/ensure.png" alt="Work icon" />
          <h2>Delivery Schedule And Plan</h2>
          <p>Timeline and cost breakdown for the project.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeekProcess",
};
</script>

<style lang="scss" scoped>
.weekprocess-container {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 80px;
  background: #EF861D66;
  .values {
    display: flex;
    .text-area {
      margin-top: 110px;
      flex-basis: 40%;
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px; 
      
      a{
        color: #000;
        font-weight: bold;
      }
    }
    .icons-area {
      flex-basis: 60%;
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      gap: 100px;
      justify-content: start;
      align-items: center;
      .icon {
        width: 43.33%;
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        
        img{
          margin-right: 96px;
        }
        p {
          font-family: "Gilroy-Bold";
          margin-top: 15px;
          font-size: 14px;
          margin-left: 86px;
        }
        h2{
          font-family: "Gilroy-Bold";
          font-size: 18px;
          color: #000;
          margin-top: 12px;
        }
      }
    }
  }
}
@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .weekprocess-container {
    margin-top: 30px;
    margin-bottom: 30px;
    padding-top: 30px;
    padding-bottom: 50px;
    .values {
      flex-wrap: wrap;
      .text-area {
        flex-basis: 100%;
        width: 100%;
        margin-top: 12px;
        align-items: center;
        h2{
          text-align: center;
        }
        p{
          text-align: center;
        }
      }
      .icons-area {
        flex-basis: 100%;
        width: 100%;
        gap: 10px;
        justify-content: center;
        flex-direction: row;
        margin-left: 24px;
        margin-top: 12px;
        align-items: normal;
        
        .icon {
          p {
            margin-left: 0px;
            text-align: center;
          }
          h2{
            text-align: center;
          }
          img{
            margin-right: 0px;
          }
      }
      }
    }
  }
}
</style>