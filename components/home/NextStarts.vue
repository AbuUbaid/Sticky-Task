<template>
  <div class="banner-container">
    <div class="image-ctas">
      <div class="imageCard">
        <h2>Next Starts Now</h2>
        <p>Business inquiries</p>
        <p>Job openings</p>
        <p>Media inquiries</p>
      </div>
      <div class="f-right imageCard">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoImageBanner",
};
</script>

<style  scoped>
.image-ctas {
  color: white;
  display: flex;
}

.imageCard {
  height: 500px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
}

.imageCard h2 {
  font-size: 40px;
  line-height: 1.3em;
  color: #000000;
}


.imageCard p {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3em;
  color: #EF861D;
  padding: 8px;
  width: fit-content;
  border-bottom: 1px solid;

}

.imageCard a.cta-black {
  margin-top: 40px;
  align-self: start;
}
.f-left h2 {
  width: 320px;
}

.f-right h2 {
  width: 410px;
}


.f-right {
  background: url("~/assets/images/startsnew.jpg");
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .image-ctas {
    flex-direction: column;
  }

  .imageCard {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 450px;
  }

  .imageCard h2 {
    font-size: 30px;
    width: 100%;
  }
}
</style>