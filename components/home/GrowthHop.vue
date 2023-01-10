<template>
  <div class="home-container growth-containter">
    <div class="growth">
      <div class="video">
        <a href="https://www.youtube.com/watch?v=hXO-Cad2iss" target="_blank"
          ><img src="~/assets/images/ghop.webp"
        /></a>
      </div>
      <div class="content">
        <p class="title">THE GROWTH HOP SHOW</p>
        <h2>
          The Tech Industry and Its Challenges Through the Eyes of a Woman
        </h2>
        <p class="inner-content">
          Get to know the tech industry from the eyes of a woman, Brooke
          Anderson talks about the challenges, achievements and thoughts on the
          growing number of women in tech along with some great advice on how
          women can grow in their career paths.
        </p>
      </div>
      <div class="cta">
        <a
          href="https://www.youtube.com/watch?v=hXO-Cad2iss"
          target="_blank"
          class="cta-orange"
          >View Now</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrowthHop",
};
</script>

<style lang="scss" scoped>
.growth-containter{
  padding-top: 50px;
}
.growth {
  display: flex;
  gap: 50px;
  .video {
    flex-basis: 20%;
    width: 20%;
    display: flex;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  .content {
    flex-basis: 60%;
    width: 60%;
    .title {
      font-size: 14px;
    }
    h2 {
      font-size: 24px;
      margin-top: 5px;
      margin-bottom: 15px;
    }
    .inner-content {
    }
  }
  .cta {
    flex-basis: 20%;
    width: 20%;
    display: flex;
    align-items: center;
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .growth {
    flex-wrap: wrap;
    gap: 20px;
    .video {
      flex-basis: 100%;
      width: 100%;
      justify-content: start;
      img {
        width: 100%;
        height: auto;
        object-fit: contain;
        object-position: left center;
      }
    }
    .content {
      flex-basis: 100%;
      width: 100%;
    }
    .cta {
      flex-basis: 100%;
      width: 100%;
    }
  }
}
</style>