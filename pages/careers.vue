<template>
  <div>
    <careers-banner />
    <div class="home-container">
      <h2 class="text-center">OUR CULTURE</h2>
      <p class="text-center">
        With our global connections, we can handle any challenge. Our
        environment is conducive to bringing out bright ideas.
        <br />Join us as we innovate and develop solutions that matter
      </p>
    </div>
    <div class="home-container roles">
      <h2 class="text-center">OPEN ROLES</h2>
      <v-expansion-panels accordion>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Full Stack Developer (JavaScript)
          </v-expansion-panel-header>
          <v-expansion-panel-content> Role Desc </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Senior Test Automation Engineer
          </v-expansion-panel-header>
          <v-expansion-panel-content> Role Desc </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            WooCommerce Developer</v-expansion-panel-header
          >
          <v-expansion-panel-content> Role Desc </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <values />
    <impact-icons :Impact="Impact" />
  </div>
</template>

<script>
import Benefits from "../components/careers/Benefits.vue";
import CareersBanner from "../components/careers/CareersBanner.vue";
import Values from "../components/careers/Values.vue";
import ImpactIcons from "../components/industry/ImpactIcons.vue";
export default {
  name: "CareersPage",
  components: {
    CareersBanner,
    Values,
    Benefits,
    ImpactIcons,
  },
  data: () => {
    return {
      Impact: {
        title: "Benefits",
        heading: "Best Advantages At Best Company",
        icons: [
          {
            img: "training.svg",
            heading: "Training & Development",
            desc: "Occasionally, You’ll Get An Email From HR Asking You To Participate In Training Sessions Where We Enhance Your Hard Skills And Soft Skills.",
          },
          {
            img: "medical.svg",
            heading: "Medical",
            desc: "Sure, Work Is Important, But Nothing Comes Before Your Health. We Provide A Comprehensive Medical Plan Tailored According To Your Designation.",
          },
          {
            img: "pto.svg",
            heading: "PTO And Holidays",
            desc: "We Believe In Maintaining A Work-Life Balance. Need To Spend Time With Family And Friends, Call In Sick, Or Take That Well-Deserved Vacation To The Bahamas? You Got It.",
          },
          {
            img: "mental.svg",
            heading: "Mental Health Activities",
            desc: "Your Wellness Is Our Priority, And Nobody Should Feel Alone. Speak To A Counselor, Participate In Pep Talks, And Get A Stipend In Your Package.",
          },
          {
            img: "workk.svg",
            heading: "Work Anywhere, Anytime",
            desc: "We’re Headquartered In Fresno, US, But You Can Work Your Magic From Any Location And Time Zone. We Only Ask That You Have Wi-Fi, And You’re Good To Go.",
          },
          {
            img: "next.svg",
            heading: "Next-Gen Technologies",
            desc: "We Succeed Because We Are Hands-On With The Latest Tools And Technologies. You Name It, We Have It!",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  margin-top: 50px;
  margin-bottom: 50px;
  > h2 {
    margin-bottom: 15px;
  }
}

.roles {
  display: none;
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>