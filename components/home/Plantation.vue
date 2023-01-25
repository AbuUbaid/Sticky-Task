<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="image-area">
        <img src="~/assets/images/plantation.png" alt="Features image" />
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
      text-align: left !important;
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
  

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      h2 {
        margin-bottom: 20px;
      }
    }
  }
}
</style>