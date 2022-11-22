<template>
  <div class="values-container">
    <div class="values home-container">
      <div class="text-area">
        <h2>Sky is not the limit for Us, <br />it's just the beginning.</h2>
      </div>
      <div class="icons-area">
        <div class="icon">
          <img src="~/assets/icons/work.svg" alt="Work icon" />
          <p>Work Smart</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/work.svg" alt="Work icon" />
          <p>Work Smart</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/work.svg" alt="Work icon" />
          <p>Work Smart</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/work.svg" alt="Work icon" />
          <p>Work Smart</p>
        </div>
        <div class="icon">
          <img src="~/assets/icons/work.svg" alt="Work icon" />
          <p>Work Smart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Values",
};
</script>

<style lang="scss" scoped>
.values-container {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 50px;
  padding-bottom: 80px;
  background: #f6f6f6;
  .values {
    display: flex;
    .text-area {
      flex-basis: 40%;
      width: 40%;
      display: flex;
      align-items: center;
    }
    .icons-area {
      flex-basis: 60%;
      width: 60%;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      align-items: center;
      .icon {
        width: 33.33%;
        margin-top: 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        p {
          font-family: "Gilroy-Bold";
          margin-top: 15px;
        }
      }
    }
  }
}
</style>