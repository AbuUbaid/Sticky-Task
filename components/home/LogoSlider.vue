<template>
  <div class="home-container testi-slider">
    <v-carousel
      :continuous="true"
      :cycle="false"
      :interval="3000"
      :show-arrows="true"
      hide-delimiters
    >
      <template v-slot:prev="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          src="~/assets/icons/slide-left.svg"
          alt="Previous Slide"
        />
      </template>
      <template v-slot:next="{ on, attrs }">
        <img
          v-bind="attrs"
          v-on="on"
          src="~/assets/icons/slide-right.svg"
          alt="Next Slide"
        />
      </template>
      <template v-for="(item, index) in slider">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap" style="height: 100%">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < slider.length">
                <v-col :key="i">
                  {{ slider[+index + i] }}
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </div>
</template>

<script>
//var images = require.context("../assets/images/", false, /\.webp$/);
export default {
  name: "LogoSlider",
  data() {
    return {
      slider: [
        "hddlogo.webp",
        "hddlogo.webp",
        "hddlogo.webp",
        "hddlogo.webp",
        "hddlogo.webp",
        "hddlogo.webp",
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 5;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 5;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
  },
  methods: {
    imgUrl: function (path) {
      alert(path);
      return images("@/assets/images/" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>