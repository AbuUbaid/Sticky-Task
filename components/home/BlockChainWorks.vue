<template>
  <div>
    <div class="blockchain-banner">
    <h1>How Blockchain Works?</h1>
    <div class="features">
      <div class="text-area">
        <ul>
          <li>Transaction Request Is Made</li>
          <li>A Block Representing The Transaction Is Created</li>
          <li>The Block Is Sent To Every Node On The Network</li>
          <li>The Block Is Added To The Existing Blockchain</li>
          <li>Transaction Is Validated By Every Node</li>
          <li>Transaction Is Completed</li>
        </ul>
      </div>
      <div class="image-area">
        <img src="~/assets/images/how-blockchain.webp" alt="Features image" />
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "BlockChainWorks",
  data: () => {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.blockchain-banner {
  background-color: #edf0ff;
  margin-top: 50px;
  padding: 50px;
   h1{
    color: #091756;
    text-align: center;
   }
  }

.entry-text {
  margin: 50px auto;
  width: 1100px;
}

.features {
  display: flex;
  margin-top: 80px;
  margin-bottom: 80px;
  .image-area {
    flex-basis: 58%;
    width: 58%;
    img {
      width: 100%;
    }
  }
  .text-area {
    flex-basis: 42%;
    width: 42%;
    padding-right: 70px;
    h2 {
      margin-bottom: 20px;
    }
    ul {
      list-style-type: none;
      list-style-position: inside;
      li {
        font-family: "Gilroy-Regular";
        margin-bottom: 20px;
        font-size: 20px;
      }
      li::before {
        // content: "⚆";
        // content: "◎";
        content: "◯";
        color: #ef861d; /* Change the color */
        font-weight: bold; /* If you want it to be bold */
        display: inline-block; /* Needed to add space between the bullet and the text */
        width: 1em; /* Also needed for space (tweak if needed) */
        margin-right: 15px;
      }
    }
  }
}
.why-vpn {
  margin: 80px auto;
  > h2 {
    color: black;
    margin-bottom: 35px;
  }
  .reasons {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .reason {
      text-align: center;
      h4 {
        font-family: "Gilroy-Regular";
        font-weight: normal;
        color: #ef861d;
        margin-bottom: 15px;
      }
    }
  }
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  .entry-text {
    margin: 30px auto;
    width: 100%;
  }

  .features {
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 30px;
    .image-area {
      flex-basis: 100%;
      width: 100%;
      margin-left: -88px;
    }
    .text-area {
      flex-basis: 100%;
      width: 100%;
      padding-right: 20px;
      padding-left: 20px;
      h2 {
        margin-bottom: 20px;
      }
      ul {
        li {
          font-family: "Gilroy-Regular";
          margin-bottom: 20px;
          font-size: 10px;
        }
      }
    }
  }

  .why-vpn {
    margin: 30px auto;
    > h2 {
      margin-bottom: 25px;
    }
    .reasons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 50px;
      .reason {
        text-align: center;
        h4 {
          font-family: "Gilroy-Regular";
          font-weight: normal;
          color: #ef861d;
          margin-bottom: 15px;
        }
      }
    }
  }
}
</style>