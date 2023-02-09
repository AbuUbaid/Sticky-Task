<template>
  <div>
     <!-- header -->
     <div class="overlay"></div>
     <div class="header">

      <div class="logo">

      <img src="~/assets/images/snlogo.e8022ac.webp" alt="" srcset="">
      </div>

      <div class="request-quote-btn-ctn">
        Toll Free 855-904-4417

      </div>

      </div>
      <div class="thanks">
        <div>
          <h2>Thank you for considering Siliconn Netwroks</h2>
        </div>
        <div>
          <p>We have received your online inquiry and forwarded your information to one of our Account Directors who will be in touch with you shortly.</p>
        </div>
        <div>
          <p>We look forward to working with you.</p>
        </div>
        <div>
          <p>Please check your inbox and spam (junk) folder for payment confirmation email.</p>
        </div>
      </div>
      <div class="footer">
         <p>Copyright © 2023 Silicon Networks - All Rights Reserved</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "ThankYou",
  layout: 'ad',
  data: () => {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #181e2a;
  padding: 8px 50px;
  .logo{
    img{
      width: 35%;
      filter: invert(100);
    }
  }
  .request-quote-btn-ctn {
  display: flex;
  justify-content: space-between;
  color: #fff;
  }
}
.thanks{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  text-align: center;
  margin-top: 90px;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #181e2a;
  padding:50px;
  margin-top: 80px;
  border-top: 6px solid #c00f01;;
  p{
    color: #fff;
  }
}

@media (max-width: 480px) {
  .header{
    padding: 12px 30px;
     .logo{
      img{
        width: 45%;
      }
     }
    .request-quote-btn-ctn{
      width: 848px;
    }
  }
}

</style>
