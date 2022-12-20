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
      <v-app>
        <template>
          <v-form
            @submit.prevent="checkFields"
            ref="form"
            method="post"
            v-model="valid"
          >
            <div class="form-group">
              <div>
                <v-select
                  v-model="formData.select"
                  :items="items"
                  :rules="[(v) => !!v || 'Item is required']"
                  label="How can we help you?"
                  required
                  name="Service Type"
                ></v-select>
              </div>
            </div>
            <div class="form-group">
              <div>
                <v-text-field
                  v-model="formData.name"
                  placeholder="Name"
                  required
                  :rules="nameRules"
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  placeholder="Email"
                  required
                  v-model="formData.email"
                  :rules="emailRules"
                ></v-text-field>
              </div>
            </div>
            <div class="form-group">
              <div>
                <v-text-field
                  v-model="formData.phone"
                  placeholder="Phone"
                ></v-text-field>
              </div>
              <div>
                <v-text-field
                  v-model="formData.organization"
                  placeholder="Organization"
                ></v-text-field>
              </div>
            </div>
            <div class="form-group">
              <v-textarea
                v-model="formData.message"
                placeholder="Message"
              ></v-textarea>
            </div>
            <button type="submit" class="m-btn" :disabled="loading == true">
              Send Message
            </button>
            <v-progress-circular
              indeterminate
              color="#E38601"
              v-if="loading == true"
            ></v-progress-circular>
            <p v-if="success" class="successt">Thanks for getting in touch!</p>
          </v-form>
        </template>
      </v-app>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ContactForm",
  data() {
    return {
      loading: false,
      valid: true,
      success: false,
      formData: {
        name: "",
        organization: "",
        email: "",
        phone: "",
        message: "",
        select: null,
      },
      items: [
        "Mobile App Development",
        "Enterprise Software Development",
        "Web Development",
        "Dedicated Teams",
        "IT Consulting",
        "Internet of Things",
        "Blockchain",
        "Augmented Reality",
        "Artificial Intelligence",
        "Cloud Computing",
        "FinTech",
        "Other",
      ],
      nameRules: [(v) => !!v || "First name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    checkFields(e) {
      if (this.$refs.form.validate()) {
        //console.log(this.formData);
        this.loading = true;
        axios
          .post("https://formspree.io/f/xlevkodl", this.formData)
          .then((res) => {
            if (res.status == 200) {
              this.success = true;
              this.formData = {
                name: "",
                organization: "",
                email: "",
                phone: "",
                message: "",
                select: null,
              };
              this.loading = false;
            }
          });
        e.preventDefault();
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form-container {
  display: flex;
}

.successt {
  color: #e38601;
  font-family: "Gilroy-Medium";
  font-weight: 500;
  margin-top: 30px;
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
  margin-right: 20px;
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