<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="text-area">
        <h2>Technical Training Programs</h2>
        <p>Silicon Networks takes great pride in establishing an IT-wide knowledge base for its employees. We teach the most up-to-date skills, technologies, and tools developed by industry leaders. The offered courses are instructed by industry experts and technology specialists to help you advance your knowledge.</p>
      </div>
      <div class="image-area">
        <img src="~/assets/images/campaign.png" alt="Features image" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "TechnicalTraining",
  data: () => {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.blockchain-banner {
  padding: 50px;
  p{
    text-align: center;
  }
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
    margin-top: 50px;
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
    padding: 0px;
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      text-align: center;
      margin-top: 25px;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
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