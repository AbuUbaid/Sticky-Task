<template>
  <div class="fifteen-usecase">
    <div class="text-area" :style="inlineStyle">
      <h2>{{ UseCaseCard.heading }}</h2>
      <ul>
        <li v-for="item in UseCaseCard.listItems" :key="item">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="image-area">
      <img :src="imgUrl(UseCaseCard.img)" alt="Industry image" />
    </div>
  </div>
</template>

<script>
var images = require.context("../../assets/images/", false, /\.jpg$/);
export default {
  name: "UserCaseCard",
  props: {
    UseCaseCard: {
      type: Array,
    },
  },
  methods: {
    imgUrl: function (path) {
      return images("./" + path);
    },
  },
  computed: {
    bgImage() {
      return require("@/assets/images/" + this.UseCaseCard.bgImg);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style scoped>
.fifteen-usecase {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.fifteen-usecase .text-area {
  width: 50%;
  height: 400px;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("~/assets/images/gradient1.jpg");
  background-position: left center;
  background-size: cover;
  padding-left: 71px;
  color: white;
  position: relative;
  left: 100px;
  z-index: -1;
  border-radius: 10px;
}

.fifteen-usecase .text-area h2 {
  color: white;
}

.fifteen-usecase .text-area ul {
  list-style: none;
}

.fifteen-usecase .text-area ul li {
  margin: 15px 0;
  font-size: 20px;
}

.fifteen-usecase .image-area {
  flex-basis: 50%;
  width: 50%;
}

.fifteen-usecase .image-area img {
  width: 100%;
}
</style>