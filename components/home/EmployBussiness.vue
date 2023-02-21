<template>
  <div>
    <div class="home-container starting-text">
      <h2 class="text-left">Employ Our Business Consulting Services To Create A Brighter Future</h2>
      <p class="text-left">
        Assisting professionals in navigating the issues of human capital during times of growth, uncertainty, and transformation.
      </p>
      <div class="text-aria">
      <p class="text-left" >
        Whether you need them for the short, medium, or long term, Silicon Networks offers specialized business strategy consulting services that are created to support your organization in all areas. We are aware of the numerous and intricate needs of your company. However, our clients may rest assured that our business consulting experts have the necessary qualifications and experience to help.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployBussiness",
  data: () => {
    return {
    };
  },
};
</script>

<style lang="scss" >
.starting-text {
  margin: 50px auto;
  h2 {
    margin: 10px 0px;
    max-width: 54%;
  }
  p{
    color:#EF861D;
    max-width: 50%;
    margin-top: 45px;
  }
}

.text-aria{
  display:flex;
  flex-wrap:wrap;
  gap:20px;

  p{
    color:#000;
    margin-top: 25px;
    max-width:100% !important;
  }
}

@media (max-width: 480px){
  .starting-text {
  h2 {
    max-width: 100%;
  }
  p{
    max-width: 100%;
  }
}
}

</style>