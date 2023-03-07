<template>
  <v-row justify="center">
    <v-dialog v-model="$parent.dialog" max-width="500">
      <div class="form-ctn">
        <h2>{{ listItem.heading }}</h2>

        <form v-on:submit="checkFields" ref="form">
          <div style="padding: 4px" class="form-group">
            <label for="fullName">Full Name*</label>
            <br />
            <input v-model="formData.name" type="text" id="fullName" required />
          </div>
          <div style="padding: 4px" class="form-group">
            <label for="workEmail">Work Email*</label>
            <br />

            <input
              v-model="formData.email"
              placeholder="name@gmail.com"
              type="email"
              id="workEmail"
              required
            />
          </div>
          <div style="padding: 4px" class="form-group">
            <label for="phoneNumber">Phone Number*</label>
            <br />

            <input
              v-model="formData.phone"
              type="tel"
              id="phoneNumber"
              required
            />
          </div>
          <div style="padding: 4px" class="form-group">
            <label for="message">Message</label>
            <br />

            <textarea
              v-model="formData.message"
              id="message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" class="lets-connect">
            {{ listItem.btnText }}
          </button>
          <v-progress-circular
            text-align="center"
            indeterminate
            color="#E38601"
            v-if="loading"
          ></v-progress-circular>
        </form>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "PopupForm",
  props: ["listItem"],
  data: () => {
    return {
      dialog: true,
      loading: false,
      success: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
        LeadSource: "",
        LeadMedium: "",
        GoogleClickID: "",
        LandingPageUrl: "",
        IP: "",
        City: "",
        ZIp: "",
        Region: "",
        Country: "",
        Organization: "",
        ISP: "",
      },
    };
  },
  mounted() {
  },

  methods: {
    async checkFields(e) {
      e.preventDefault();
      this.loading = true;
      const data = await fetch("https://api.ipregistry.co?key=nwycadxz2ux4u0d8")
        .then(function (response) {
          return response.json();
        })
        .then(function (payload) {
          return payload;
        });

      this.formData.IP = data.ip;
      this.formData.Organization = data.company.name;
      this.formData.ISP = data.company.name;
      this.formData.City = data.location.city;
      this.formData.ZIp = data.location.postal;
      this.formData.Country = data.location.country.name;
      this.formData.Region = data.location.region.name;
      this.formData.LandingPageUrl =
        "https://www.siliconnet.com" + this.$route.fullPath;
      this.formData.LeadSource = this.$route.query.src
        ? this.$route.query.src
        : "Google";
      this.formData.LeadMedium = this.$route.query.medium
        ? this.$route.query.medium
        : "PPC";
      this.formData.GoogleClickID = this.$route.query.id
        ? this.$route.query.id
        : "";

      axios
        .post("https://formspree.io/f/mbjegoag", this.formData)
        .then((res) => {
          if (res.status == 200) {
            this.success = true;
            (this.formData = {
              name: "",
              email: "",
              phone: "",
              message: "",
              LeadSource: "",
              LeadMedium: "",
              GoogleClickID: "",
              LandingPageUrl: "",
              IP: "",
              City: "",
              ZIp: "",
              Region: "",
              Country: "",
              Organization: "",
              ISP: "",
            }),
              (this.loading = false);
            // this.dialog = false;
            this.$router.push("/thankyou/");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-ctn {
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  width: 100%;

  h2 {
    color: #091756;
    width: 100%;
    font-size: 31px;
    margin-bottom: 25px;
    text-align: center;
  }

  form {
    input {
      border: none;
      border-bottom: 1px solid gray;
      width: 100%;
      min-height: 40px;
      margin-top: 5px;
    }

    textarea {
      border: none;
      border-bottom: 1px solid gray;
      width: 100%;
    }

    .lets-connect {
      background-color: #e38601;
      color: #fff;
      font-size: 19px;
      padding: 10px 20px;
      border-radius: 10px;
      margin-top: 2rem;
      cursor: pointer;
      width: 100%;
    }

    .lets-connect:hover {
      font-size: 19px;
      padding: 10px 20px;
      border-radius: 10px;
      margin-top: 2rem;
      cursor: pointer;
      width: 100%;
      background-color: #000;
      color: white;
    }
    p {
      text-align: center;
      margin: 25px;
      font-weight: 600;
      color: #091756;
    }
  }
}
@media (max-width: 480px) {
  .form-ctn {
    h2 {
      font-size: 25px;
    }
  }
}
</style>