<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="image-area">
        <img :src="imgUrl(list.img)" :alt="list.img" />

      </div>
      <div class="text-area">
        <h2>{{list.heading}}</h2>
        <p>{{list.description}}</p>
        <div class="part2" v-if="list?.key && list.key == 'key'">
          <div class="values-four">
            <div
              v-for="(icon, i) in Impact ? Impact.icons : []"
              :key="i"
              class="t-four"
            >
              <img :src="iconUrl(icon.img)" alt="t-four" />
             <div class="key-text">
              <h4>{{ icon.heading }}</h4>
              <p>
                {{ icon.desc }}
              </p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
var images = require.context("../../assets/images/", false, /\.webp$/);
var icons = require.context("../../assets/icons/", false, /\.png$/);
export default {
  name: "Plantation",
  props:['list'],
  data: () => {
    return {
      Impact: {
        icons: [
          {
            img: "pay (2).png",
            heading: "Diversity and Inclusion",
            desc: "Focus on Diversity and Inclusion establishing a sense of belonging among the employees and foster better productivity in the workplace.",
          },
          {
            img: "pay (4).png",
            heading: "AI-driven",
            desc: "Use of the latest tools and technology including AI, tech screening tools, Psychometric tools, Functional assessments etc., in order to achieve essential results.",
          },
          {
            img: "pay (3).png",
            heading: "Customized staffing solutions",
            desc: "We offer a customized staffing model for better match of candidates and provide you the flexibility to scale up or scale down according to the dynamics.",
          },
          {
            img: "pay (1).png",
            heading: "Payroll and Statutory compliance adherence",
            desc: "Ensure an error-free payroll and handling of statutory compliance with care and boasting a 100% compliance score.",
          },
        ],
      },
    };
  },
  methods:{
    imgUrl: function (path) {
    return images("./" + path);
   },
   iconUrl: function (path) {
    return icons("./" + path);
   },
  }
  
};
</script>

<style lang="scss" scoped>
.blockchain-banner {
  padding: 50px;
  p{
    text-align: center;
  }
  }
  .values-four {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.values-four .t-four {
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 12px;
}

.key-features{
  background-color: #fafafa;
  .features{
    .image-area {
      margin-top: 90px;
      text-align: center;
    }
    .text-area{
    margin-top: 0px;
  }
  }
  
}

.values-four h4 {
  margin: 10px 0px;
}

.values-four .t-four img {
  width: 60px;
}

.values-four .t-four{
  .key-text{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
.values-four .t-four p {
  text-align: left;
}
.features {
  display: flex;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 50%;
    width: 50%;
    img {
      width: 80%;
    }
  }
  .text-area {
    flex-basis: 50%;
    width: 50%;
    padding-right: 70px;
    margin-top: 145px;
    p{
      text-align: left;
    }
    h2 {
      margin-bottom: 20px;
      color: #000;
      font-size: 30px;
     }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  
  .blockchain-banner {
    padding: 0px
  }
  .values-four {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5%;
    margin-top: 0px;
    margin-left: 0;
  }

  .values-four .t-four {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: left;
    p{
      text-align: left !important;
    }
  }
  .features {
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      text-align: center;
      margin-top: 30px;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding: 20px;
      margin-top: 0px;
      h2 {
        margin-bottom: 20px;
        text-align: center;
      }
      p{
        text-align: center;
      }
    }
  }
}
</style>