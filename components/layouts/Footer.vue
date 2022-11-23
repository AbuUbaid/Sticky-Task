<template>
  <div class="footer-container" id="footer">
    <div class="footer-detail">
      <p>Reaching</p>
      <h2>To New Heights</h2>
      <a class="cta-orange">Contact Us</a>
    </div>
    <hr />
    <p class="top-notch">
      Redefining The Digital Sphere With The Power Of Top-Notch Products And
      Services
    </p>
    <div class="footer-flex">
      <div class="logo">
        <img src="~/assets/logos/snlogo.svg" alt="Silicon Networks Logo" />
      </div>
      <div class="footer-texts">
        <div class="footer-text">
          <h3>Karachi Office</h3>
          <p>
            346, Block G3, Johar Town, Lahore, Pakistan +92 (423) 544 5651-2
          </p>
        </div>
        <div class="footer-text">
          <h3>Lahore Office</h3>
          <p>
            346, Block G3, Johar Town, Lahore, Pakistan +92 (423) 544 5651-2
          </p>
        </div>
        <div class="footer-text">
          <h3>USA</h3>
          <p>
            346, Block G3, Johar Town, Lahore, Pakistan +92 (423) 544 5651-2
          </p>
        </div>
        <div class="footer-text">
          <h3>China</h3>
          <p>
            346, Block G3, Johar Town, Lahore, Pakistan +92 (423) 544 5651-2
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
          <a href=""><img src="~/assets/icons/insta.svg" alt="Instagram" /></a>
          <a href=""><img src="~/assets/icons/fb.svg" alt="Facebook" /></a>
          <a href=""><img src="~/assets/icons/tw.svg" alt="Twitter" /></a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>© 2022, Copyrights @ Silicon Networks</p>
      <p>All Right Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMain",
};
</script>

<style scoped>
.footer-container {
  padding-top: 50px;
  padding-bottom: 15px;
  padding-left: 80px;
  padding-right: 80px;
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