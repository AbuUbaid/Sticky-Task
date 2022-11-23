<template>
  <div class="home-container" id="fifth">
    <div class="fisix">
      <div class="fi-first">
        <img src="~/assets/images/shape3.svg" alt="Shape" />
        <p>Our Solutions</p>
        <h2>Offering Comprehensive Digital Solutions</h2>
        <a class="cta-orange">Let's Talk</a>
      </div>
      <div class="fi-two">
        <img
          src="~/assets/logos/msdynamics.svg"
          alt="Microsoft Dynamics Logo"
        />
        <h3>Microsoft Dynamics</h3>
        <p>
          Combine the power of CRM and ERP in your business network through AI
          tools and intelligent applications.
        </p>
      </div>
      <div class="fi-two">
        <img src="~/assets/logos/hrcon.svg" alt="fi-two" />
        <h3>HR Connect</h3>
        <p>
          Partners with the firm, that strives to increase the productivity and
          profits of your business through our agile HR services that provide an
          efficient workforce.
        </p>
      </div>
      <div class="fi-two">
        <img src="~/assets/logos/ecom.svg" alt="fi-two" />
        <h3>E-Commerce</h3>
        <p>
          Work with the e-commerce experts, gain a competitive edge in business
          with advanced techniques from buying to selling the services or
          products online.
        </p>
      </div>
      <div class="fi-two">
        <img src="~/assets/logos/st.svg" alt="fi-two" />
        <h3>Sticky Tasks</h3>
        <p>
          Plan the strategies, prioritise the workload, schedule meetings with
          the managers and keep an eye on the workforce through this software.
        </p>
      </div>
      <div class="fi-two">
        <img src="~/assets/logos/vpn.svg" alt="fi-two" />
        <h3>Enterprise VPN</h3>
        <p>
          VPNaaS, is an essential addition to your business network so that you
          can access the information with the resources, hosted both locally and
          in the cloud-integrated system.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionCards",
};
</script>

<style scoped>
#fifth {
  height: 920px;
}

.fisix {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  gap: 35px 15px;
  height: 100%;
}

.fi-first,
.fi-two {
  width: 90%;
  margin: auto;
  max-height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fi-first a.cta-orange {
  align-self: start;
}

.fi-first img {
  width: 94px;
  height: 99px;
  position: absolute;
  top: -50px;
  left: -32px;
}

.fi-first h2 {
  margin: 20px 0;
  color: #091756;
  font-size: 35px;
}

.fi-two h3 {
  color: #091756;
  margin: 25px 0;
}

.fi-two img {
  width: max-content;
  height: 70px;
  object-fit: contain;
}

.fi-two {
  border: 0.5px solid #707070;
  border-radius: 5px;
  padding: 10%;
  height: 100%;
}

@media (min-width: 481px) and (max-width: 1024px) {
}

@media (max-width: 480px) {
  #fifth {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .fisix {
    grid-template-columns: 1fr;
  }

  .fisix > * {
    width: 100%;
  }
}
</style>