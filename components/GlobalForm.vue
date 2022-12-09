<template>
  <div class="global-form">
    <div class="background"></div>
    <div class="form-parent home-container">
      <div class="form-container">
        <h2>Let's Get Started</h2>
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
                  ></v-select>
                </div>
              </div>
              <div class="form-group">
                <div>
                  <v-text-field
                    v-model="formData.fname"
                    placeholder="First Name"
                    required
                    :rules="nameRules"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    placeholder="Mail"
                    required
                    v-model="formData.email"
                    :rules="emailRules"
                  ></v-text-field>
                </div>
              </div>
              <div class="form-group">
                <div>
                  <v-text-field
                    v-model="formData.lname"
                    placeholder="Last Name"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    v-model="formData.phone"
                    placeholder="Phone"
                  ></v-text-field>
                </div>
              </div>
              <div class="form-group">
                <v-textarea
                  v-model="formData.message"
                  placeholder="Message"
                ></v-textarea>
              </div>
              <button type="submit" class="m-btn">Send Message</button>
              <p v-if="success" class="success">Thanks for getting in touch!</p>
            </v-form>
          </template>
        </v-app>
      </div>
      <div class="badges-container">
        <img src="~/assets/images/sf-clutch--black.svg" alt="" />
        <img src="~/assets/images/el-goodfirms.svg" alt="" />
        <hr />
        <div class="sales-team">
          <h4>Laura Anderson</h4>
          <p>Head of Sales</p>
          <a href="mailto:laura@siliconnet.com">laura@siliconnet.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GlobalForm",
  data() {
    return {
      valid: true,
      success: false,
      formData: {
        fname: "",
        lname: "",
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
        axios
          .post("https://formspree.io/f/xlevkodl", this.formData)
          .then((res) => {
            if (res.status == 200) {
              this.success = true;
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
.success {
  color: #e38601;
  font-family: "Gilroy-Medium";
  font-weight: 500;
  margin-top: 30px;
}
.global-form {
  margin-bottom: 50px;
  .background {
    background-color: #eef5ff;
    width: 100%;
    height: 550px;
    margin-bottom: -350px;
  }

  .form-parent {
    position: relative;
    background-color: white;
    box-shadow: 0px 12px 23px #00000017;
    z-index: 2;
    padding: 50px;
    margin: 0 200px;
    display: flex;
    gap: 50px;
    .form-container {
      flex-basis: 80%;
      width: 80%;
      .m-btn {
        padding: 15px 40px;
        background-color: #ef861d;
        color: white;
        display: inline-block;
        text-decoration: none;
        transition: 0.2s ease;
        font-size: 18px;
        border-radius: 5px;
        line-height: 1em;
        &:hover {
          background: black;
        }
      }
    }
    .badges-container {
      display: flex;
      flex-direction: column;
      flex-basis: 20%;
      width: 20%;
      justify-content: center;
      gap: 50px;
      .sales-team {
        p {
          font-size: 16px;
        }
        a {
          font-size: 16px;
          color: #ef861d;
        }
      }
    }
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
</style>