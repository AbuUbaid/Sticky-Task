<template>
  <div>
    <contact-form />
    <building-cta />
  </div>
</template>

<script>
import ContactForm from "../components/contact/ContactForm.vue";
import BuildingCta from "../components/BuildingCTA.vue";
export default {
  components: { ContactForm, BuildingCta },
  name: "ContactPage",
};
</script>

<style lang="scss" scoped>
</style>