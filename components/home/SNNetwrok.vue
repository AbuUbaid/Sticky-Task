<template>
  <div class="home-container manage-container">
      <div class="two-col">
        
        <div class="left">
          <h2>
           {{ List.heading }}
        </h2>
        <div class="text-area">
          <ul class="menu-side">
            <li v-for="(item, index) in List.item" :key="index" class="menu-item-side">{{ item.text }}</li>
          </ul>
        </div>
        </div>
        <div class="right">
          <div class="form-ctn">

                    <h2>{{ List.fromHeading ? List.fromHeading : "Book a Free Consultation" }}</h2>

                    <form v-on:submit="checkFields"
                        ref="form">
                        <div style="padding:4px;" class="form-group">
                            <label for="fullName">Full Name*</label>
                            <br>
                            <input v-model="formData.name" type="text" id="fullName" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="workEmail">Work Email*</label>
                            <br>

                            <input v-model="formData.email" placeholder="name@gmail.com" type="email" id="workEmail" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="phoneNumber">Phone Number*</label>
                            <br>

                            <input v-model="formData.phone" type="tel" id="phoneNumber" required>
                        </div>
                        <div style="padding:4px;" class="form-group">
                            <label for="message">Message*</label>
                            <br>

                            <textarea v-model="formData.message" id="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="lets-connect">LET'S CONNECT!</button>
                        <v-progress-circular
                          text-align="center"
                          indeterminate
                          color="#E38601"
                          v-if="loading == true"
                        ></v-progress-circular>
                    </form>

                </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "SNNetwork",
  props:['List'],
  data: () => {
    return {
      loading: false,
      valid: true,
      success: false,
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    checkFields(e) {
      e.preventDefault();
      console.log("form data", this.formData);
      this.loading = true;
        axios
          .post("https://formspree.io/f/mbjegoag", this.formData)
          .then((res) => {
            console.log("djfksdjf", res);
            if (res.status == 200) {
              this.success = true;
              this.formData = {
                name: "",
                email: "",
                phone: "", 
                message: "",
              };
              this.loading = false;
              this.$router.push('/thankyou');
            }
          });
    },
  },
};
</script>
<style lang="scss" scoped>
.manage-container {
  margin-top: 8px;
  margin-bottom: 50px;
  .two-col {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    
    .left{
      flex-basis: 50%;
      .text-area {
        margin-top:30px;
        h2 {
          margin-bottom: 20px;
        }
        ul {
          list-style-type: none;
          list-style-position: inside;
          li {
            font-family: "Gilroy-Regular";
            margin-bottom: 30px;
            font-size: 20px;
          }
          li::before {
            content: "◯";
            color: #ef861d; /* Change the color */
            font-weight: bold; /* If you want it to be bold */
            display: inline-block; /* Needed to add space between the bullet and the text */
            width: 1em; /* Also needed for space (tweak if needed) */
            margin-right: 15px;
          }
        }
      }
    }
    .right {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 50%;
            box-shadow: 0 6px 18px rgb(0 0 0 / 10%);

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
                    p{
                      text-align: center;
                      margin: 25px;
                      font-weight: 600;
                      color: #091756;
                    }
                }


            }
        }
  }
}

@media (max-width:480px){
  .manage-container {
    margin-top: 50px;
    margin-bottom: 30px;
    h2 {
      width: 100%;
    }
    
    .two-col {
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      align-items: center;
      .left{

        p.tagline {
      width: 100%;
      margin-top: 15px;
      font-size: 18px;
      }
      }

      .right{
        .form-ctn{
          h2{
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>