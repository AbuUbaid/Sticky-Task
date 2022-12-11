<template>
  <div>
    <header-main />
    <Nuxt />
    <tech-partners />
    <!-- <building-cta /> -->
    <global-form />
    <footer-main />
    <!-- <CookieControl>
      <template v-slot:bar>
        <p>
          We use cookies to ensure that we give you the best experience on our
          website. If you continue to use this site we will assume that you are
          happy with it
        </p>
      </template>
    </CookieControl> -->
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