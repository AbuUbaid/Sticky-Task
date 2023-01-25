<template>
  <div class="footer-container" id="footer">
    <div class="footer-detail">
      <p>Reaching</p>
      <h2>To New Heights</h2>
      <NuxtLink to="/contact" class="cta-orange">Contact Us</NuxtLink>
    </div>
    <hr />
    <p class="top-notch">
      Redefining The Digital Sphere With The Power Of Top-Notch Products And
      Services
    </p>
    <div class="footer-flex">
      <div class="logo">
        <img src="~/assets/logos/snlogo.webp" alt="Silicon Networks Logo" />
      </div>
      <div class="footer-texts">
        <div class="footer-text">
          <h3>USA</h3>
          <p>4288 Fremont Blvd Fremont, CA 94538</p>
          <a href="tel:855-904-4417">855-904-4417</a>
          <a href="mailto:info@siliconnet.com">info@siliconnet.com</a>
        </div>
        <div class="footer-text">
          <h3>Dubai</h3>
          <p>Office 403, Bay Square Building 3 - Dubai - UAE</p>
        </div>
        <div class="footer-text">
          <h3>Karachi Office</h3>
          <p>47 Street No 6،, Darul Aman Society PECHS, Karachi, Pakistan</p>
        </div>
        <div class="footer-text">
          <h3>Lahore Office</h3>
          <p>
            30 Khayaban-e-Iqbal, Sector XX DHA Phase 3, Lahore, Pakistan <br />
            +92 (423) 544 5651-2
          </p>
        </div>
      </div>
      <div class="footer-subscribe">
        <h3>Stay In Touch</h3>
        <div class="relate">
          <input type="text" placeholder="your email address" />
          <button>Subscribe</button>
        </div>
        <h3 class="follow-us">Follow Us</h3>
        <div class="contact contact-icons">
          <a
            href="https://www.linkedin.com/company/siliconnetwork/"
            target="_blank"
            ><img src="~/assets/icons/ln.svg" alt="LinkedIn"
          /></a>
          <a
            href="https://web.facebook.com/siliconnetworkofficial"
            target="_blank"
            ><img src="~/assets/icons/fb.svg" alt="Facebook"
          /></a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2022, Copyrights @ Silicon Networks</p>
      <p>All Right Reserved.</p>
    </div>
    <div  v-if="show_notice" class="cookie-notice-container" style="color:#fff;">
      <span id="cn-notice-text" class="cn-text-container">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</span>
      <span id="cn-notice-buttons" class="cn-buttons-container">
        <a href="#!" id="cn-accept-cookie" data-cookie-set="accept" class="cn-set-cookie cn-button" aria-label="Ok" style="background-color:#00a99d;" @click="closeNotice()">Ok</a>
      </span>
      <span id="cn-close-notice" data-cookie-set="accept" class="cn-close-icon" title="No" @click="closeNotice"></span>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "FooterMain",
  data: () => {
    return {
      show_notice: true
    }
  },

  created: function(){
    this.show_notice = this.$cookies.get('notice');
  },
  methods:{
      closeNotice(){
        this.$cookies.set("notice", false, {
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
        });
        this.show_notice = false;
        console.log("show notice", this.$cookies.get('notice'));
      }
  }
};


</script>

<style scoped>
.footer-container {
  padding-top: 50px;
  padding-bottom: 15px;
  padding-left: 80px;
  padding-right: 80px;
}
.cookie-notice-container{
  padding: 15px 30px;
  text-align: center;
  width: 100%;
  animation-name: fadeIn;
  background-color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.cn-text-container{
  margin: 0 0 6px 0;
  display: inline-block;
}
.cn-buttons-container{
  display: inline-block;
}
.cn-button{
    font-family: -apple-system,BlinkMacSystemFont,Arial,Roboto,"Helvetica Neue",sans-serif;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: .25px;
    line-height: 20px;
    line-height: 1;
    margin: 0 0 0 25px;
    text-align: center;
    text-transform: none;
    display: inline-block;
    cursor: pointer;
    touch-action: manipulation;
    white-space: nowrap;
    outline: none;
    box-shadow: none;
    text-shadow: none;
    border: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-decoration: none;
    padding: 8.5px 10px;
    color: inherit;
}
.cn-close-notice{
  position: absolute;
  right: 15px;
  top: 50%;
  margin-top: -10px;
  width: 15px;
  height: 15px;
  opacity: .5;
  padding: 10px;
  outline: none;
  cursor: pointer;
}
#footer {
  background: #f9f9f9 0% 0% no-repeat padding-box;
}

.logo img {
  width: 200px;
}

#footer h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

#footer button {
  background-color: #ef861d;
}

.top-notch {
  font-size: 18px;
  margin-top: 20px;
}

.footer-flex,
.contact,
.footer-texts {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 6%;
  width: auto;
  margin: 30px auto;
}

.footer-flex {
  margin-top: 60px;
}

.footer-texts {
  margin-top: 0;
  gap: 35px;
}

.contact {
  justify-content: left;
  flex: 2;
}

.contact img {
  width: 24px;
}

.footer-detail {
  margin: 5px auto;
  padding-left: 80px;
  position: relative;
}

.footer-detail p {
  font-size: 18px;
}

.footer-detail h2 {
  font-size: 50px;
  color: #091756;
  margin-bottom: 20px;
}

.footer-detail > a {
  position: absolute;
  right: 0;
  top: calc(50% - 24px);
}

.footer-texts {
  flex-wrap: wrap;
  justify-content: center;
  width: 515px;
}

.footer-texts .footer-text {
  width: 43%;
}

.footer-text a {
  color: black;
}
.copyright {
  display: flex;
  justify-content: space-between;
}

.copyright p {
  font-size: 12px;
}

.relate {
  display: flex;
}

.relate input {
  width: 250px;
  height: 45px;
  border: none;
  background: #ececec 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font-size: 20px;
  padding: 0 13px;
}

.relate button {
  position: relative;
  left: -20px;
  width: 125px;
  height: 45px;
}

.contact-icons {
  margin-top: 10px;
}

.follow-us {
  margin-top: 25px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .footer-container {
    padding: 30px 20px;
    padding-bottom: 15px;
  }
  .footer-detail {
    padding: 0;
  }
  .footer-detail h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .footer-detail > a {
    position: relative;
    margin-bottom: 20px;
  }

  .footer-flex {
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 0;
  }
  .footer-flex .logo {
    margin-bottom: 20px;
  }
  .footer-subscribe {
    width: 100%;
  }
}
</style>