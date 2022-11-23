<template>
  <div class="contact-form-container">
    <div class="contact-info">
      <img
        class="top-shape"
        src="~/assets/images/shape5.svg"
        alt="Icon shape"
      />
      <h2>Contact Information</h2>
      <p>
        Our success is relative to our devotion and attitude towards hard-work
        and innovation.
      </p>
      <div class="info">
        <img src="~/assets/icons/map.svg" alt="" />
        <p>44288 Fremont Blvd Fremont, CA 94538</p>
      </div>
      <div class="info">
        <img src="~/assets/icons/phone.svg" alt="" />
        <p>855-904-4417</p>
      </div>
      <div class="info">
        <img src="~/assets/icons/mail.svg" alt="" />
        <p>Info@Siliconnet.Net</p>
      </div>

      <div class="social-links">
        <a href="#!"><img src="~/assets/icons/fbd.svg" alt="Facebook" /></a>
        <a href="#!"><img src="~/assets/icons/instad.svg" alt="Facebook" /></a>
        <a href="#!"><img src="~/assets/icons/twd.svg" alt="Facebook" /></a>
      </div>

      <img
        class="bottom-shape"
        src="~/assets/images/shape2.svg"
        alt="Icon shape"
      />
    </div>
    <div class="contact-form">
      <template>
        <v-form ref="form">
          <div class="form-group">
            <div>
              <v-text-field
                v-model="name"
                placeholder="First Name"
              ></v-text-field>
            </div>

            <div>
              <v-text-field
                v-model="lname"
                placeholder="Last Name"
              ></v-text-field>
            </div>
          </div>
          <div class="form-group">
            <div>
              <v-text-field placeholder="Mail" v-model="name"></v-text-field>
            </div>

            <div>
              <v-text-field v-model="email" placeholder="Phone"></v-text-field>
            </div>
          </div>
          <div class="form-group">
            <v-text-field v-model="name" placeholder="Message"></v-text-field>
          </div>
          <button class="m-btn">Send Message</button>
        </v-form>
      </template>
    </div>
  </div>
</template>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      lname: "",
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-form-container {
  display: flex;
}
.contact-info {
  position: relative;
  flex-basis: 35%;
  padding: 50px;
  h2 {
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 25px;
  }
  .top-shape {
    position: absolute;
    width: 120px;
    left: -60px;
    top: -60px;
  }
  .bottom-shape {
    position: absolute;
    right: 40px;
    bottom: 0;
    width: 60px;
  }
}
.contact-form {
  flex-basis: 65%;
  padding: 30px;
  padding-left: 0;
  display: flex;
  align-items: center;
  > * {
    flex: 1;
  }
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    margin-right: 20px;
  }
}
.form-group {
  display: flex;
  div {
    width: 100%;
  }
  > div {
    margin-right: 20px;
  }
}
.m-btn {
  border-bottom: 1px solid black;
  padding-bottom: 8px;
  font-size: 20px;
  margin-top: 20px;
}

.social-links {
  margin-top: 30px;
  display: flex;
  gap: 10px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .contact-form-container {
    flex-wrap: wrap;
  }

  .contact-info {
    flex-basis: 100%;
    padding: 20px;
    margin-top: 50px;
    order: 1;
    h2 {
      margin-bottom: 10px;
    }
    > p {
      margin-bottom: 15px;
    }
    .top-shape {
      position: absolute;
      width: 120px;
      left: -90px;
      top: -60px;
    }
    .bottom-shape {
      position: absolute;
      right: 20px;
      bottom: 0;
      width: 60px;
    }
  }
  .contact-form {
    flex-basis: 100%;
    padding-left: 0;
    padding: 20px;
  }
}
</style>