<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/plantation.webp" alt="Features image" />
      </div>
      <div class="text-area">
        <h2>Plantation Drive</h2>
        <p>Silicon Network held a successful plantation drive with hundreds of volunteers. The event promoted environmental awareness and greenery. Volunteers tirelessly planted fruit, shade, and ornamental trees. The event gave participants a chance to bond and help the community. The plantation drive was a success, and organizers hope to hold more.</p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Plantation",
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
  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
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