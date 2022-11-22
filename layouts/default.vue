<template>
  <div>
    <header-main />
    <Nuxt />
    <tech-partners />
    <building-cta />
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "../components/layouts/Header.vue";
import TechPartners from "../components/TechPartners.vue";
import BuildingCta from "../components/BuildingCTA.vue";
import FooterMain from "../components/layouts/Footer.vue";
export default {
  components: {
    HeaderMain,
    TechPartners,
    BuildingCta,
    FooterMain,
  },
};
</script>

<style lang="scss" scoped>
</style>