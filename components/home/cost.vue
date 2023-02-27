<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="text-area">
        <div class="part2">
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
      <div class="image-area">
        <img src="~/assets/images/key-features-02.jpg" alt="key-features" />

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
  data: () => {
    return {
      Impact: {
        icons: [
          {
            img: "pay (4).png",
            heading: "Cost-effective solutions",
            desc: "Cost-effective staffing solutions with the flexibility to upscale or downsize as per the organization’s need.",
          },
          {
            img: "pay (3).png",
            heading: "HRMS Software",
            desc: "Robust HRMS system that ensures accurate data, as well as access to different types of data at a single click.",
          },
          {
            img: "pay (1).png",
            heading: "Efficient Turnaround time",
            desc: "Increased operational efficiency with defined TAT helps us to proactively hire candidates in the pipeline",
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
  background-color: #fcfeff;
  .features{
    .image-area {
      margin-top: -37px;
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
    margin-bottom: 0px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      text-align: center;
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