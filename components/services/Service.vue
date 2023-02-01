<template>
  <div class="service-single">
    <div :class="isEven && 'f-order-1'" class="txt-area">
      <p v-html="item.text"></p>
      <ul>
        <li v-for="(listItem, i) in item.listItems" :key="i">
          {{ listItem }}
        </li>
      </ul>
    </div>
    <div class="img-bg" :style="inlineStyle">
      <h2>{{ item.heading }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isEven: {
      type: Boolean,
    },
    item: {
      type: Object,
    },
  },
  head: {
    title: 'Customized Solutions for Your Unique Needs | Silicon Networks',
    meta: [
      {
        // hid: 'description',
        name: 'description',
        content: 'From digital transformation to email protection and cloud services, we got you all covered. Choose the right solution for you and elevate your online experience.'
      }
    ],
  },
  computed: {
    bgImage() {
      return require("@/assets/images/" + this.item.url);
    },
    inlineStyle() {
      return {
        backgroundImage: `url(${this.bgImage})`,
      };
    },
  },
};
</script>

<style lang="scss">
.service-single {
  display: flex;
}
.service-single > * {
  width: 50%;
  flex-basis: 50%;
}

.f-order-0 {
  order: 0;
}

.f-order-1 {
  order: 1;
}

.txt-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 120px;
  p {
    margin-bottom: 10px;
  }
  ul {
    list-style-type: none;
    list-style-position: inside;
    li {
      font-family: "Gilroy-Bold";
      margin-bottom: 10px;
    }
    li::before {
      content: "■"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
      color: #ef861d; /* Change the color */
      font-weight: bold; /* If you want it to be bold */
      display: inline-block; /* Needed to add space between the bullet and the text */
      width: 1em; /* Also needed for space (tweak if needed) */
    }
  }
}
.img-bg {
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: white;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .service-single {
    display: flex;
    flex-wrap: wrap;
  }
  .service-single > * {
    width: 100%;
    flex-basis: 100%;
  }

  .txt-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    order: 1 !important;
  }

  .img-bg {
    background-size: cover;
    height: 310px;
    order: 0 !important;
  }
}
</style>