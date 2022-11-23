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
          <v-expansion-panel-header> Role Title </v-expansion-panel-header>
          <v-expansion-panel-content> Role Desc </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header> Role Title </v-expansion-panel-header>
          <v-expansion-panel-content> Role Desc </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header> Role Title </v-expansion-panel-header>
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
        title: "Our Impact",
        heading: "Empowering Tech Industry On Every Step",
        icons: [
          {
            img: "consult.svg",
            heading: "Support",
            desc: "Assessing technological infrastructure and business objective  Ensure the IT-footprint offers best value Recommending the best solution",
          },
          {
            img: "implem.svg",
            heading: "Implementation",
            desc: "Deploying fast paced strategy without compromising quality  Load-Testing for long-term scalability Balancing cost and hybrid innovation",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "Minimize the disruption via continuity plan. Match and strengthen your digital asset Provide responsive and effective technology",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "Minimize the disruption via continuity plan. Match and strengthen your digital asset Provide responsive and effective technology",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "Minimize the disruption via continuity plan. Match and strengthen your digital asset Provide responsive and effective technology",
          },
          {
            img: "supp.svg",
            heading: "Support",
            desc: "Minimize the disruption via continuity plan. Match and strengthen your digital asset Provide responsive and effective technology",
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
  margin-top: 80px;
  margin-bottom: 50px;
}
</style>