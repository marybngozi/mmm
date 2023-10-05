<template>
  <div class="blogBody">
    <div class="page">
      <ShopHeader />
    </div>
    <main
      class="w-full mt-[120px] mb-[30rem] flex flex-col justify-center mx-auto items-center"
    >
      <div
        class="w-[80%] p-8 flex flex-col md:flex-col lg:flex-row justify-between items-center"
      >
        <div class="mr-8">
          <h1
            class="text-[#000] font-mikela text-5xl w-full lg:w-[453px] leading-[72.26px] font-semibold text-[64px]"
          >
            I want you to inspire you
          </h1>
          <p
            class="text-[#262626] font-raleway text-left text-sm w-full lg:w-[453px] mt-[30px] leading-[28.18px] font-normal text-[20px]"
          >
            Give us your own words, then allow us make a great wine out of it
            just for you. Feel free to be your own inspiration; there will be no
            extra charge for its design.
          </p>
          <p
            class="text-[#797371] font-raleway text-left text-sm w-full lg:w-[453px] mt-[30px] leading-[18.78px] font-normal text-[16px]"
          >
            By using this service, you are permitting us to use your words to
            inspire others too.
          </p>
        </div>
        <div class="relative">
          <img src="@/assets/images/shop/canvas-img.svg" alt="" />
          <button
            class="w-auto absolute right-[35px] bottom-[35px] border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 p-4 flex justify-center items-center"
          >
            <img src="@/assets/images/icons/customize_icon.svg" alt="icon" />
            <p
              class="text-[#000] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
            >
              Customize
            </p>
          </button>
        </div>
      </div>

      <div class="w-[85%] relative mt-[120px] mx-auto">
        <div
          class="absolute right-[-5%] top-[50px] py-4 flex flex-col w-[50px] h-auto bg-[#262626]"
        >
          <button class="flex justify-center items-center pb-4 pt-2">
            <img src="@/assets/images/icons/cartwhite.svg" alt="icon" />
          </button>
          <button class="flex justify-center items-center">
            <img src="@/assets/images/icons/customize.svg" alt="icon" />
          </button>
          <button class="flex justify-center items-center">
            <img src="@/assets/images/icons/personal details.svg" alt="icon" />
          </button>
          <button class="flex justify-center items-center">
            <img src="@/assets/images/icons/shipping detaills.svg" alt="icon" />
          </button>
          <button class="flex justify-center items-center">
            <img src="@/assets/images/icons/Summary.svg" alt="icon" />
          </button>
          <button class="flex justify-center items-center">
            <img src="@/assets/images/icons/Payment.svg" alt="icon" />
          </button>
        </div>
        <div class="flex w-auto">
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#797371] font-raleway text-center text-sm font-normal text-[14px]"
            >
              New
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-4 text-center"
          >
            <p
              class="text-[#797371] font-raleway text-center text-sm font-normal text-[14px]"
            >
              All
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#797371] font-raleway text-center text-sm font-normal text-[14px]"
            >
              Top Sold
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#797371] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              Top Custom
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#797371] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              Frames
            </p>
          </button>
        </div>
        <div v-for="n in 3" :key="n" class="w-full mt-[40px]">
          <div
            class="flex flex-col md:flex-col lg:flex-row justify-between items-center"
          >
            <div class="border-b-2 border-[#C3B8B5] py-[20px]">
              <img src="@/assets/images/shop/newframe.svg" alt="" />
              <div class="w-full flex justify-between items-end">
                <div>
                  <p
                    class="text-[#797371] font-raleway text-left text-sm w-full mt-[30px] font-normal text-[12px]"
                  >
                    Price starting at
                  </p>
                  <h2
                    class="text-[#000] font-mikela text-5xl w-full font-semibold text-[20px]"
                  >
                    N 85,000.00
                  </h2>
                </div>
                <div>
                  <button class="border-2 border-[#C3B8B5] p-2 mr-2">
                    <img src="@/assets/images/icons/share.svg" alt="icon" />
                  </button>
                  <button class="border-2 border-[#C3B8B5] p-2 ml-2">
                    <img src="@/assets/images/icons/thumbup.svg" alt="icon" />
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center mt-[20px]">
                <button
                  class="w-full border-2 border-[#C3B8B5] mr-2 p-4 flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 p-4 flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#797371] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div class="border-b-2 border-[#C3B8B5] py-[20px]">
              <img src="@/assets/images/shop/newframe2.svg" alt="" />
              <div class="w-full flex justify-between items-end">
                <div>
                  <p
                    class="text-[#797371] font-raleway text-left text-sm w-full mt-[30px] font-normal text-[12px]"
                  >
                    Price starting at
                  </p>
                  <h2
                    class="text-[#000] font-mikela text-5xl w-full font-semibold text-[20px]"
                  >
                    N 85,000.00
                  </h2>
                </div>
                <div>
                  <button class="border-2 border-[#C3B8B5] p-2 mr-2">
                    <img src="@/assets/images/icons/share.svg" alt="icon" />
                  </button>
                  <button class="border-2 border-[#C3B8B5] p-2 ml-2">
                    <img src="@/assets/images/icons/thumbup.svg" alt="icon" />
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center mt-[20px]">
                <button
                  class="w-full border-2 border-[#C3B8B5] mr-2 p-4 flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 p-4 flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#797371] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div class="border-b-2 border-[#C3B8B5] py-[20px]">
              <img src="@/assets/images/shop/newwriteup.svg" alt="" />
              <div class="w-full flex justify-between items-end">
                <div>
                  <p
                    class="text-[#797371] font-raleway text-left text-sm w-full mt-[30px] font-normal text-[12px]"
                  >
                    Price starting at
                  </p>
                  <h2
                    class="text-[#000] font-mikela text-5xl w-full font-semibold text-[20px]"
                  >
                    N 85,000.00
                  </h2>
                </div>
                <div>
                  <button class="border-2 border-[#C3B8B5] p-2 mr-2">
                    <img src="@/assets/images/icons/share.svg" alt="icon" />
                  </button>
                  <button class="border-2 border-[#C3B8B5] p-2 ml-2">
                    <img src="@/assets/images/icons/thumbup.svg" alt="icon" />
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-center mt-[20px]">
                <button
                  class="w-full border-2 border-[#C3B8B5] mr-2 p-4 flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 p-4 flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#797371] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[50%] mt-[120px] flex flex-col justify-center items-center">
        <h1
          class="text-[#000] font-mikela text-5xl w-full text-center font-semibold text-[64px]"
        >
          What do you think?
        </h1>
        <h4
          class="text-[#000] font-raleway text-2xl my-4 w-full text-center font-normal text-[24px]"
        >
          How was your experience shopping inside this winepress?
        </h4>
        <p
          class="text-[#797371] font-raleway text-center text-sm w-full font-normal text-[16px]"
        >
          So I really need feedback from you. I am running this experiment, that
          involves finding new ways to help people shop online. What did you
          think about your experience shopping here.
        </p>
      </div>

      <div class="w-[50%] mt-[80px] flex flex-col justify-center items-center">
        <div class="w-full">
          <button class="w-full bg-[#E1C5B4] py-2">
            rafaelpascal234@gmail.com
          </button>
          <p
            class="text-[#797371] mt-[20px] font-raleway text-center text-sm w-full font-normal text-[16px]"
          >
            send a review to my email
          </p>
        </div>
      </div>
    </main>

    <ShopFooter />
  </div>
</template>
<script>
import ShopHeader from "@/components/shop/Header.vue";
import ShopFooter from "@/components/shop/Footer.vue";

export default {
  name: "Shop",

  components: {
    ShopHeader,
    ShopFooter,
  },
};
</script>
<style scoped>
.page {
  @apply w-full;
  width: 100%;
  height: 900px;
  background-image: url("../../assets/images/shop/Hero.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-origin: content-box;
}

/* .blogBody {
} */
</style>
