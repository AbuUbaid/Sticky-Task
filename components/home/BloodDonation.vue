<template>
  <div>
    <div class="blockchain-banner">
    <div class="features">
      <div class="text-area">
        <h2>Blood Donation Drive</h2>
        <p>Silicon Network hosted a successful blood drive. Employees and community members donated blood at the company's headquarters. A local hospital organized the blood drive, which helped the needy. People could save lives and give back at the event. Blood donors felt proud and fulfilled. The organizers thank everyone who made the event a success and hope to hold more drives like it in the future.</p>
      </div>
      <div class="image-area">
        <img src="~/assets/images/blooddonation.png" alt="Features image" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "BloodDonation",
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