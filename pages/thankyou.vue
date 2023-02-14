<template>
  <div>
     <!-- header -->
     <div class="overlay"></div>
     <div class="header">

      <div class="logo"> <a href="/"><img src="~/assets/images/snlogo.e8022ac.webp" alt="" srcset=""/></a>      </div>

      <div class="request-quote-btn-ctn">
        Toll Free 855-904-4417

      </div>

      </div>
      <div class="inner-section">
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
  background: #fff;
  padding: 8px 50px;
  .logo{
    img{
      width: 20%;
    }
  }
  .request-quote-btn-ctn {
  display: flex;
  justify-content: space-between;
  }
}
.inner-section{
  background: #ecf5ff;
}
.thanks{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  text-align: center;
  padding: 50px;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #f9f9f9;
  padding:50px;
  margin-top: 80px;
  border-top: 6px solid #081653;
  p{
    color: #000;
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
