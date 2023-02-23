<template>
  <div class="forbes-container">
    <div class="forbes">
      <h2>We Have Been Making Headlines</h2>
      <p>Our commitment to transforming the traditional hiring process has been recognized by some of the top platforms in the industry.</p>
      <div class="forbes-logos">
        <div class="logo">
          <span><img src="~/assets/images/forbes.webp" alt="forbes logo" /></span>
        </div>
        <div class="logo">
          <span><img src="~/assets/images/aol.webp" alt="aol logo" /></span>
        </div>
        <div class="logo">
          <span><img src="~/assets/images/wsj.webp" alt="wsj logo" /></span>
        </div>
        <div class="logo">
          <span><img src="~/assets/images/yh.webp" alt="yh logo" /></span>
        </div>
        <div class="logo">
          <span><img src="~/assets/images/ph.webp" alt="ph logo" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forbes",
};
</script>

<style lang="scss" scoped>
.forbes-container {
  background: rgb(232 244 255);

  .forbes{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 35px;
    
    p{
      text-align: center;
      width: 50%;
    }
    .forbes-logos {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin-top: 35px;
      margin-bottom: 35px;
  .logo {
    background: rgb(255, 255, 255);
    box-shadow: rgb(168 155 155 / 25%) 0px 24px 44px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 130px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.35s ease 0s;
    span{
      box-sizing: border-box;
      display: block;
      overflow: hidden;
      width: initial;
      height: initial;
      background: none;
      opacity: 1;
      border: 0;
      margin: 0;
      padding: 50px;
        right: 0;

      img {
        object-fit: contain;
        pointer-events: none;
        width: 100% !important;
        height: 100% !important;
        min-width: initial !important;
        min-height: initial !important;
    }
    }
  }
}
  }
}


@media (max-width: 480px) {
  .forbes-container{
    .forbes{
      p{
        width:100% !important;
      }

      h2{
        text-align:center;
        margin:auto;
      }

      .forbes-logos{
        flex-direction:column;

        .logo{
          span{
            padding:80px;
          }
        }
      }
    }
  }
}
</style>