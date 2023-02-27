<template>
  <div class="home-container top-notch-container">
    <h2>{{ itemList.heading }}</h2>
    <p>{{ itemList.description }}</p>
    <div class="clients">
      <div class="clients-card" v-for="(item, index) in itemList.item" :key="index">
        <div class="logo-number">
          <div class="client-logo">
        <img :src="imgUrl(item.img)" :alt="item.img" class="img-fluid" />
        </div>
        <div class="client-description">
          <h2>{{item.heading}}</h2>
        </div>
        </div>
        <div class="client-description">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context("../../assets/images/", false, /\.svg$/);
export default {
  name: "HrSupport",
  props:['itemList'],
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
.top-notch-container {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 0px;
  h2 {
    margin-bottom: 10px;
  }  .clients {
    margin-top: 50px;
    flex-wrap: wrap;
    display: flex;
    gap:30px;
    justify-content: center;
    .clients-card{
      border: 1px solid #091756;
      border-radius: 15px;
      opacity: 1;
      display: flex;
      gap: 10px;
      flex-direction: column;
      padding: 20px;
      width: 30%;
      align-items: left;
      margin-bottom: 30px;
      .logo-number{
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        align-items:center;
      }
      .red {
        background-color: #FFEFEE;
      }
      .yellow{
        background-color: #FFEFCC;
      }
      .green {
        background-color: #EBF9F2;
      }
      .blue {
          background-color: #E5ECF2;
      }
      .client-logo{
        border-radius: 6px;
        padding: 8px;
        max-width: 62px;
        max-height: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .client-description{
        margin: 0;
        padding: 0;
        text-align: left;
        box-sizing: border-box;
        h2{
          font-size: 20px;
          margin-bottom: 6px;
          color: #EF861D;
        }
        p{
          padding-right: 20px;
          margin-top:20px;
        }
      }
    }

  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .top-notch-container {
    padding: 30px 20px;
    h2 {
      margin-bottom: 10px;
      text-align: center;
    }
    p {
      text-align: center;
    }
    .clients {
      margin-top: 30px;
      justify-content: center;
      gap: 10px;

      .clients-card{
        max-width: 320px;
        width: 100%;
        flex-direction: column;
        gap: 25px;
        align-items: center;

        .client-description{
        p{
          padding-right: 0px;
        }
      }
      }
      .client-logo{
        margin-right: 0px;
      }
      a {
        display: block;
        text-align: center;
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>