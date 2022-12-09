<template>
  <div>
    <header-main />
    <Nuxt />
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "../components/layouts/Header.vue";
import TechPartners from "../components/TechPartners.vue";
import BuildingCta from "../components/BuildingCTA.vue";
import FooterMain from "../components/layouts/Footer.vue";
import GlobalForm from "../components/GlobalForm.vue";
export default {
  components: {
    HeaderMain,
    TechPartners,
    BuildingCta,
    FooterMain,
    GlobalForm,
  },
};
</script>

<style lang="scss" scoped>
</style>