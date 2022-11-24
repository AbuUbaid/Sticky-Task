<template>
  <div class="secpage-values home-container">
    <div class="values-four">
      <div class="t-four">
        <p class="slide-text">
          Consult & Strategy<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Experience & Design<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Digital Commerce<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Integrations<img src="~/assets/icons/arrow-right.svg" />
        </p>
      </div>
      <div class="t-four">
        <p class="slide-text">
          Cloud Consult Service<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Cloud Transform Service<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Cloud Security Service<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Cloud Managed Service<img src="~/assets/icons/arrow-right.svg" />
        </p>
      </div>
      <div class="t-four">
        <p class="slide-text">
          Dynamic 365<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          Power BI<img src="~/assets/icons/arrow-right.svg" />
        </p>
      </div>
      <div class="t-four">
        <p class="slide-text">
          Staff Augmentation<img src="~/assets/icons/arrow-right.svg" />
        </p>
        <p class="slide-text">
          BPO<img src="~/assets/icons/arrow-right.svg" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceInternalLinks",
};
</script>

<style scoped>
.secpage-values {
  margin-bottom: 80px;
}

.values-four {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10%;
}

.values-four .t-four {
  border-top: 0.5px solid #707070;
  width: 17%;
  margin-top: 25px;
}
.slide-text {
  margin-top: 15px;
}

.slide-text img {
  float: right;
  cursor: pointer;
  width: 18px;
  height: 18px;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .secpage-values {
    display: none;
  }
}
</style>