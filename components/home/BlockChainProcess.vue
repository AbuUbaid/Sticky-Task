<template>
  <div>
    <div class="blockchain-banner">
      <p>Our Process</p>
    <h1>We Use Cutting-Edge Methods To Ensure Project Success</h1>
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/sticky.png" alt="Features image" />
      </div>
      <div class="text-area">
        <ul class="m-d expand-list">
            <li data-md-content="200">
              <label name="tab" for="tab1" tabindex="-1" class="tab_lab" role="tab">Scoping</label>
              <input type="checkbox" checked class="tab" id="tab1" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></i>
                <i class="fas fa-minus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg></i>
              </span>
              <div class="content">
                <p>Our AI Thought Leaders assist you in comprehending your business issue, and once we determine that machine learning is a good fit, we collaborate to map out a path and list the prerequisites.</p>
              </div>
            </li>
            <li data-md-content="300">
              <label name="tab" for="tab2" tabindex="-1" class="tab_lab" role="tab">Migration</label>
              <input type="checkbox" class="tab" id="tab2" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></i>
                <i class="fas fa-minus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg></i></span>
              <div class="content">
                <p>
                  Our Engineers will take the business cases and workflows from your legacy systems and map them onto the most up-to-date AI based software in order to provide you with improved results.
                </p>
              </div>
            </li>
            <li data-md-content="600">
              <label name="tab" for="tab3" tabindex="-1" class="tab_lab" role="tab">Architecture & Design</label>
              <input type="checkbox" class="tab" id="tab3" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></i>
                <i class="fas fa-minus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg></i></span>
              <div class="content">
                <p>
                  In order to help maximize reusability and add flexibility to your core workflows, we design new AI-based platforms that are centered around your company's business and use cases.
                </p>
              </div>
            </li>
            <li data-md-content="600">
              <label name="tab" for="tab3" tabindex="-1" class="tab_lab" role="tab">Model Development</label>
              <input type="checkbox" class="tab" id="tab3" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></i>
                <i class="fas fa-minus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg></i></span>
              <div class="content">
                <p>
                  While simultaneously developing a model for machine learning, we conduct hundreds of separate experiments. One of the fundamental components of a machine learning system is called a model, and it has the ability to forecast future trends and read text or images.
                </p>
              </div>
            </li>
            <li data-md-content="600">
              <label name="tab" for="tab3" tabindex="-1" class="tab_lab" role="tab">Platform Implementation</label>
              <input type="checkbox" class="tab" id="tab3" tabindex="0" />
              <span class="open-close-icon">
                <i class="fas fa-plus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg></i>
                <i class="fas fa-minus"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 11h14v2H5z"/></svg></i></span>
              <div class="content">
                <p>
                  We integrate the model with either a RESTFUL API or a front-end application, developing all of the required features within an easy-to-navigate graphical user interface so that users can access the model.
                </p>
              </div>
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "BlockChainProcess",
  data: () => {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.blockchain-banner {
  margin-top: 50px;
  p{
    text-align: center;
  }
   h1{
    color: #091756;
    text-align: center;
    margin-top: 12px;
   }
  }

.entry-text {
  margin: 50px auto;
  width: 1100px;
}

.features {
  display: flex;
  background-color: #edf0ff;
  gap: 30px;
  margin-top: 80px;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 50%;
    width: 50%;
    img {
      width: 100%;
    }
  }
  .text-area {
    flex-basis: 50%;
    width: 50%;
    padding-right: 70px;
    p{
      text-align: left !important;
    }
    h2 {
      margin-bottom: 20px;
     }
    ul {
      list-style-type: none;
      list-style-position: inside;
      li {
        font-family: "Gilroy-Regular";
        margin-bottom: 20px;
        font-size: 20px;
      }
    }
    .m-d.expand-list{
        margin: 0;
        padding: 0;
    }
    .m-d.expand-list > li{
        list-style-type: none;
        padding: 15px 0;
        border-bottom: 1px solid #707070;
        position: relative;
/*         max-width: 80%; */
    }
    .m-d label[class^="tab"]:hover{
        cursor: pointer;
    }
    .m-d input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .m-d input[class^="tab"]{
        width: 100%;
        height: 40px;
        position: absolute;
        left: 0;
        top: 0; 
    }
		.m-d input[class^="tab"]:hover{
			cursor: pointer;
		}
    .m-d label[class^="tab"]{
        font-weight: bold;
    }
    .m-d .content{
        height: auto;
        max-height: 0;
        // max-width: 300px;
/*        background: yellow;*/
        overflow: hidden;
        transform: translateY(20px);
        transition: all 180ms ease-in-out 0ms; 
    }
    .m-d li[data-md-content="100"] input[class^="tab"]:checked ~ .content{
        max-height: 100px;
        transition: all 150ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="200"] input[class^="tab"]:checked ~ .content{
        max-height: 200px;
        transition: all 200ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="300"] input[class^="tab"]:checked ~ .content{
        max-height: 300px;
        transition: all 250ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="400"] input[class^="tab"]:checked ~ .content{
        max-height: 400px;
        transition: all 250ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="500"] input[class^="tab"]:checked ~ .content{
        max-height: 500px;
        transition: all 250ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="600"] input[class^="tab"]:checked ~ .content{
        max-height: 600px;
        transition: all 250ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="700"] input[class^="tab"]:checked ~ .content{
        max-height: 700px;
        transition: all 300ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="800"] input[class^="tab"]:checked ~ .content{
        max-height: 800px;
        transition: all 300ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="900"] input[class^="tab"]:checked ~ .content{
        max-height: 900px;
        transition: all 300ms ease-in-out 0ms;
    }
    .m-d li[data-md-content="1000"] input[class^="tab"]:checked ~ .content{
        max-height: 1000px;
        transition: all 350ms ease-in-out 0ms;
    }
		.m-d li[data-md-content=""] input[class^="tab"]:checked ~ .content{
        max-height: 1000px;
        transition: all 250ms ease-in-out 0ms;
    }
    .m-d input[class^="tab"]:checked ~ .content{
        margin-bottom: 20px;
    }
    
    .m-d .open-close-icon{
        display: inline-block;
        position: absolute;
        right: 20px;
        transform: translatey(2px);
    }
    .m-d .open-close-icon i{
        position: absolute;
        left: 0;
    }
    .m-d .open-close-icon .fa-minus{
        transform:rotate(-90deg);
        transition: transform 150ms ease-in-out 0ms;
    }
    .m-d input[class^="tab"]:checked ~ .open-close-icon .fa-minus{
        transform: rotate(0deg);
        transition: transform 150ms ease-in-out 0ms;
    }
    .m-d .open-close-icon .fa-plus{
        opacity: 1;
        transform:rotate(-90deg);
        transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms;
    }
    .m-d input[class^="tab"]:checked ~ .open-close-icon .fa-plus{
        opacity: 0;
        transform: rotate(0deg);
        transition: opacity 50ms linear 0ms, transform 150ms ease-in-out 0ms; 
    }
*{
	line-height: 1.4;
	font-family: "harmonia sans", roboto, arial;
}
  }
}
.why-vpn {
  margin: 80px auto;
  > h2 {
    color: black;
    margin-bottom: 35px;
  }
  .reasons {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .reason {
      text-align: center;
      h4 {
        font-family: "Gilroy-Regular";
        font-weight: normal;
        color: #ef861d;
        margin-bottom: 15px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .blockchain-banner {
  }

  .entry-text {
    margin: 30px auto;
    width: 100%;
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      h2 {
        margin-bottom: 20px;
      }
      ul {
        li {
          font-family: "Gilroy-Regular";
          margin-bottom: 20px;
          font-size: 18px;
        }
      }
    }
  }

  .why-vpn {
    margin: 30px auto;
    > h2 {
      margin-bottom: 25px;
    }
    .reasons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
      .reason {
        text-align: center;
        h4 {
          font-family: "Gilroy-Regular";
          font-weight: normal;
          color: #ef861d;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>