<template>
  <div>
    <section class="sec-1">
      <div class="top pb-28">
        <!-- <img src="@/assets/images/hero.png" alt="background" class="hero" />
        <img src="@/assets/images/stock.png" alt="background" class="stock" /> -->

        <div class="top-content">
          <div class="pl-11 pt-10 lg:pt-28 lg:pl-32 w-full">
            <img
              src="@/assets/images/senseB.svg"
              alt="icon"
              class="w-24 h-14 lg:w-36 lg:h-18"
            />
          </div>

          <div class="text-white w-full text-center px-11 lg:px-80 mt-28">
            <h3 class="text-5xl lg:text-8xl font-bold font-cairo">
              What is your stock price?
            </h3>

            <p class="mt-3 lg:mt-12 text-base lg:text-3xl font-raleway">
              If I was to pay you for your time based on your experience,
              skills, and previous output, how much do you think you would be
              worth?
            </p>
          </div>
        </div>
      </div>

      <div class="mid">
        <div class="text-white w-full text-center px-10 lg:px-80 mt-28">
          <h3 class="text-5xl lg:text-8xl font-bold font-cairo">
            Can DESIGN help increase your stock price?
          </h3>
          <p class="mt-3 lg:mt-12 text-base lg:text-3xl font-raleway">
            Let's find out
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Mentorship",
};
</script>

<style scoped>
.sec-1 {
  /* background: linear-gradient(
    90.69deg,
    rgba(0, 0, 0, 0.25) -6.84%,
    #000000 -6.83%,
    #000000 44.88%,
    rgba(0, 0, 0, 0) 99.44%
  ); */
  background: #000000;
  width: 100%;
  height: auto;
}
.top {
  position: relative;
  width: 100%;
  background-image: url("../assets/images/stock.png"),
    url("../assets/images/hero.png");
  background-size: 100% 90%, 50% 90%;
  background-repeat: no-repeat;
  background-attachment: scroll;
  /* background-position: 0% top 90%; */
  background-position: 50% 100px, right center;
  /* background-position: 0% 0%; */
  /* background-position: 50% 50%, 50% bottom; */
  /* z-index: -3; */
}
.top-content {
  min-height: 100vh;
}
.top h3,
.top p,
.mid h3,
.mid p {
  @apply mx-auto;
  width: 100%;
  object-fit: fill;
  max-width: 46.5rem;
}
</style>
