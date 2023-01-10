<template>
  <div class="tech-partner-platforms">
    <div class="home-container">
      <div>
        <div class="ei-one">
          <h2>Tech Stacks For Effective & Up-To-Date Web Apps</h2>
        </div>
        <div class="ei-two">
          <img src="~/assets/logos/techstack.jpg" alt="Partner Logos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechStacks",
};
</script>

<style scoped>
.tech-partner-platforms {
  padding: 50px 0;
  background: #FBFBFB;
  position: relative;
  margin-bottom: 0;
  text-align: center;
}

.tech-partner-platforms h2 {
  margin-bottom: 40px;
  font-size: 35px;
  color: #091756;
}


.ei-two img {
  width: 100%;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .tech-partner-platforms{
    padding: 30px 0px;
  }
  .tech-partner-platforms h2 {
    font-size: 30px;
  }
}
</style>