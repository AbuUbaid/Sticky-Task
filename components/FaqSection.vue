<template>
  <div class="faq-parent">
    <p class="text-center">{{ Faqs.title }}</p>
    <h2 class="text-center">{{ Faqs.heading }}</h2>
    <div class="faq-container">
      <div class="img">
        <img :src="imgUrl(Faqs.img)" alt="FAQ image" />
      </div>
      <div class="faqs">
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(question, i) in Faqs.questions" :key="i">
            <v-expansion-panel-header>{{
              question.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ question.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context("../assets/images/", false, /\.jpg$/);
export default {
  name: "FaqSection",
  props: {
    Faqs: {
      type: Array,
    },
  },
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
  },
};
</script>

<style scoped>
.faq-parent {
  padding: 50px 0px;
}
.faq-parent h2 {
  color: #091756;
}

.faq-container {
  margin-top: 40px;
  padding: 50px 0px;
  background: #ecf5ff;
  display: flex;
  gap: 50px;
}
.faq-container > * {
  width: 50%;
  flex-basis: 50%;
}
.faq-container img {
  width: 90%;
}

.faq-container .faqs {
  padding-right: 50px;
  display: flex;
  align-items: center;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .faq-parent {
    padding: 20px 0px;
  }
  .faq-parent h2 {
    color: #091756;
  }

  .faq-container {
    margin-top: 40px;
    padding: 20px 0px;
    background: #ecf5ff;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
  .faq-container > * {
    width: 100%;
    flex-basis: 100%;
  }
  .faq-container img {
    width: 100%;
  }

  .faq-container .faqs {
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
}
</style>