<template>
  <div class="secpage-images">
    <div class="fi-first rec">
      <img src="~/assets/images/shape3.svg" alt="secpage-images" />
      <p>Our Team</p>
      <h2>Orchestrating The Digital World</h2>
    </div>
    <img src="~/assets/images/about1.jpg" alt="secpage-images" class="rec" />
    <img src="~/assets/images/about2.jpg" alt="secpage-images" class="circle" />
    <img src="~/assets/images/about3.jpg" alt="secpage-images" class="square" />
    <img src="~/assets/images/about4.jpg" alt="secpage-images" class="circle" />
    <img src="~/assets/images/about5.jpg" alt="secpage-images" class="rec" />
    <img src="~/assets/images/about6.jpg" alt="secpage-images" class="square" />
  </div>
</template>

<script>
export default {
  name: "AboutTeam",
};
</script>

<style scoped>
.secpage-images {
  display: flex;
  flex-wrap: wrap;
  background: #fbfbfb 0% 0% no-repeat padding-box;
  opacity: 1;
  gap: 40px;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  padding: 50px;
  position: relative;
}

.fi-first h2 {
  color: #091756;
  margin-top: 10px;
}
.fi-first img {
  width: 94px;
  height: 99px;
  position: absolute;
  top: -20px;
  left: 18px;
}

.secpage-images .fi-first {
  margin: 0;
}

.secpage-images .fi-first {
  margin: 0;
}

.square {
  width: 257px;
  height: 212px;
}

.rec {
  width: 532px;
  height: 212px;
}

.circle {
  width: 212px;
  height: 212px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-images {
    display: flex;
    flex-wrap: wrap;
    background: #fbfbfb 0% 0% no-repeat padding-box;
    opacity: 1;
    gap: 20px;
    align-items: center;
    justify-content: start;
    margin: 30px auto;
    padding: 20px;
    position: relative;
  }

  .fi-first h2 {
    color: #091756;
    margin-top: 10px;
  }
  .fi-first img {
    width: 94px;
    position: absolute;
    top: -20px;
    left: 18px;
  }

  .secpage-images .fi-first {
    margin: 0;
  }

  .secpage-images .fi-first {
    margin: 0;
  }

  .square {
    width: 80%;
    height: auto;
    display: none;
  }

  .rec {
    width: 50%;
    height: auto;
  }

  .circle {
    width: 40%;
    height: auto;
  }
}
</style>