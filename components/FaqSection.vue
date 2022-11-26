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
              <div v-html="question.answer"></div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>

  <!-- <div class="faq-parent">
    <p class="text-center">Our Process</p>
    <h2 class="text-center">Our Groundbreaking Work Sequence</h2>
    <div class="faq-container">
      <div class="img">
        <img :src="imgUrl(Faqs.img)" alt="FAQ image" />
      </div>
      <div class="faqs">
        <v-expansion-panels accordion>
          <v-expansion-panel>
            <v-expansion-panel-header> Hypothesize </v-expansion-panel-header>
            <v-expansion-panel-content>
              Study current and potential customers to see what they need and
              want.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Build </v-expansion-panel-header>
            <v-expansion-panel-content>
              Design the interface, create and analyze user flows and build
              prototypes.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Test </v-expansion-panel-header>
            <v-expansion-panel-content>
              Refine based on feedback from team, friends, family and beta
              testers.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Launch </v-expansion-panel-header>
            <v-expansion-panel-content>
              Don't mistake speed for precocity. Your product is ready when it's
              ready.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> Monitor </v-expansion-panel-header>
            <v-expansion-panel-content>
              Some of the ways you can use is market research, competitive
              analysis, product feedback and customer support.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div> -->
</template>

<script>
var images = require.context("../assets/images/", false, /\.webp$/);
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