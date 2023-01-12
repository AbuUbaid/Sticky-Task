<template>
  <div class="global-form" id="contact-form">
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
              <p v-if="success" class="successt">
                Thanks for getting in touch!
              </p>
            </v-form>
          </template>
        </v-app>
      </div>
      <div class="badges-container">
        <img src="~/assets/images/sf-clutch--black.svg" alt="Clutch" />
        <img src="~/assets/images/el-goodfirms.svg" alt="Good firms" />
        <hr />
        <!-- <div class="sales-team">
          <h4>Minal Ehsan</h4>
          <p>Head of Sales</p>
          <a href="mailto:minal@siliconnet.com">minal@siliconnet.com</a>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/minal-a-b35364196/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#E38601"
                  d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                />
              </svg>
            </a>
            <a
              href="https://join.skype.com/invite/fxTWFzScaPvP"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="#E38601"
                  d="M13.31 20.4a8.5 8.5 0 0 1-9.71-9.71 5.25 5.25 0 0 1 7.09-7.09 8.5 8.5 0 0 1 9.71 9.71 5.25 5.25 0 0 1-7.09 7.09zm-1.258-3.244h-.04c2.872 0 4.303-1.386 4.303-3.243 0-1.198-.551-2.471-2.726-2.958l-1.983-.44c-.755-.172-1.622-.4-1.622-1.115s.62-1.213 1.724-1.213c2.23 0 2.027 1.528 3.131 1.528.576 0 1.093-.342 1.093-.93 0-1.37-2.197-2.4-4.056-2.4-2.021 0-4.173.859-4.173 3.144 0 1.098.394 2.27 2.56 2.813l2.689.671c.816.202 1.018.659 1.018 1.072 0 .687-.684 1.358-1.918 1.358-2.417 0-2.078-1.857-3.374-1.857-.58 0-1.003.398-1.003.971 0 1.114 1.352 2.598 4.377 2.598z"
                />
              </svg>
            </a>
          </div>
        </div> -->
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
.successt {
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
    height: 450px;
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
        margin-right: 15px;
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

        .social-icons {
          margin-top: 10px;
          > a {
            margin-right: 10px;
            display: inline-block;
          }
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

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .global-form {
    margin-bottom: 50px;
    .background {
      background-color: #eef5ff;
      width: 100%;
      height: 250px;
      margin-bottom: -200px;
    }

    .form-parent {
      padding: 20px;
      margin: 0px;
      flex-wrap: wrap;
      gap: 30px;
      .form-container {
        flex-basis: 100%;
        width: 100%;
      }
      .badges-container {
        flex-basis: 100%;
        width: 100%;
        gap: 30px;
        > img {
          width: 50%;
        }
      }
    }
  }
}
</style>