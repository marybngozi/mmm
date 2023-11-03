<template>
  <div class="blogBody">
    <div class="page">
      <ShopHeader />

      <div
        class="w-full lg:w-[30%] absolute bottom-4 right-8 flex flex-row justify-end items-center"
      >
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Heroframe2.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Heroframe3.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Hero frame 4.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Hero frame 5.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Hero frame 6.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
        <button class="mr-2">
          <img
            src="@/assets/images/shop/Hero frame 7.svg"
            alt=""
            width="72px"
            height="100px"
          />
        </button>
      </div>
    </div>

    <main
      class="w-full mt-[50px] lg:mt-[120px] mb-[30rem] flex flex-col justify-center mx-auto items-center"
    >
      <div
        class="w-full lg:w-[80%] p-0 lg:p-8 flex flex-col lg:flex-row justify-between items-center"
      >
        <div class="lg:mr-0 w-full lg:w-[60%]">
          <h1
            class="text-[#000] font-mikela lg:text-left text-center text-5xl w-full lg:w-[527px] font-semibold text-[40px] lg:text-[64px]"
          >
            I want you to inspire you
          </h1>
          <p
            class="text-[#262626] font-raleway lg:text-left text-center text-sm w-full lg:w-[527px] mt-[20px] font-normal text-[16px] lg:text-[20px]"
          >
            Give us your own words, then allow us make a great wine out of it
            just for you. Feel free to be your own inspiration; there will be no
            extra charge for its design.
          </p>
          <p
            class="text-[#797371] font-raleway lg:text-left text-center text-sm w-full lg:w-[527px] my-[20px] leading-[18.78px] font-normal text-[12px] lg:text-[16px]"
          >
            By using this service, you are permitting us to use your words to
            inspire others too.
          </p>
        </div>
        <div class="relative w-full lg:w-[40%]">
          <div class="py-[10px] bg-[#E1C5B4] w-full lg:w-[437px] my-[15px]">
            <p
              class="text-center text-[16px] font-raleway text-[#262626] font-bold"
            >
              This is your canvas, make it great
            </p>
          </div>
          <img src="@/assets/images/shop/canvas-img.svg" alt="" />
          <button
            class="w-auto absolute right-[40px] bottom-[30px] border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 py-[12px] px-[20px] flex justify-center items-center"
            @click="pushtoCart(1)"
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

      <div class="w-full lg:w-[85%] relative mt-[50px] lg:mt-[120px]">
        <div class="hidden lg:block mx-auto">
          <div
            :class="`${
              isFixed
                ? 'fixed top-[4rem] right-[7.2rem] z-2 transition-transform duration-700'
                : 'absolute top-0 right-0 z-2'
            } py-4 flex flex-col w-[50px] h-auto bg-[#262626]`"
          >
            <button
              class="flex justify-center items-center pb-4 pt-2 relative"
              @click="pushtoCart"
            >
              <img src="@/assets/images/icons/cartwhite.svg" alt="icon" />
              <span
                v-if="cart !== 0"
                class="absolute top-0 right-[5px] text-[#000] font-raleway text-[12px] w-[18px] h-[18px] bg-[#E1C5B4] flex justify-center item-center"
                >{{ cart }}</span
              >
            </button>
            <button class="flex justify-center items-center">
              <img src="@/assets/images/icons/customize.svg" alt="icon" />
            </button>
            <button class="flex justify-center items-center">
              <img
                src="@/assets/images/icons/personal details.svg"
                alt="icon"
              />
            </button>
            <button class="flex justify-center items-center">
              <img
                src="@/assets/images/icons/shipping detaills.svg"
                alt="icon"
              />
            </button>
            <button class="flex justify-center items-center">
              <img src="@/assets/images/icons/Summary.svg" alt="icon" />
            </button>
            <button class="flex justify-center items-center">
              <img src="@/assets/images/icons/Payment.svg" alt="icon" />
            </button>
          </div>
        </div>
        <div
          class="w-full lg:w-[50%] flex flex-row justify-center lg:justify-start items-start"
        >
          <button
            :class="`w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center ${
              newItems ? 'bg-[#A1BEAC]  border-2 border-[#A1BEAC]' : ''
            }`"
            @click="togglenewItem"
          >
            <p
              class="text-[#262626] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              New
            </p>
          </button>
          <button
            :class="`w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-4 text-center ${
              allItems ? 'bg-[#A1BEAC]  border-2 border-[#A1BEAC]' : ''
            }`"
            @click="toggleAllItem"
          >
            <p
              class="text-[#262626] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              All
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#262626] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              Top Sold
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#262626] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              Top Custom
            </p>
          </button>
          <button
            class="w-auto border-2 border-[#C3B8B5] mr-2 py-2 px-2 text-center"
          >
            <p
              class="text-[#262626] font-raleway text-center text-sm font-normal text-[14px] sm:text-base"
            >
              Frames
            </p>
          </button>
        </div>

        <div v-if="newItems" v-for="n in 3" :key="n" class="w-full mt-[40px]">
          <div
            class="flex flex-col md:flex-col lg:flex-row justify-start items-center"
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                  @click="addtocart"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                  @click="pushtoCart(1)"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div
              class="border-b-2 border-[#C3B8B5] ml-0 lg:ml-[5rem] py-[20px]"
            >
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                  @click="pushtoCart(1)"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div
              class="border-b-2 border-[#C3B8B5] ml-0 lg:ml-[5rem] py-[20px]"
            >
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                  @click="pushtoCart(1)"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="allItems" v-for="n in 3" :key="n" class="w-full mt-[40px]">
          <div
            class="flex flex-col md:flex-col lg:flex-row justify-start items-center"
          >
            <div class="border-b-2 border-[#C3B8B5] py-[20px]">
              <img src="@/assets/images/shop/newframe2.svg" alt="Icon" />
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div
              class="border-b-2 border-[#C3B8B5] ml-0 lg:ml-[5rem] py-[20px]"
            >
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
            <div
              class="border-b-2 border-[#C3B8B5] ml-0 lg:ml-[5rem] py-[20px]"
            >
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
                  class="w-full border-2 border-[#C3B8B5] mr-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img src="@/assets/images/icons/addcart.svg" alt="icon" />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Add to Cart
                  </p>
                </button>
                <button
                  class="w-full border-2 border-[#FBB91A] bg-[#FBB91A] ml-2 px-4 h-[40px] flex justify-center items-center"
                >
                  <img
                    src="@/assets/images/icons/customize_icon.svg"
                    alt="icon"
                  />
                  <p
                    class="text-[#262626] font-raleway text-center text-sm ml-2 font-normal text-[12px]"
                  >
                    Customize
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="w-full lg:w-[50%] px-[16px] mt-[120px] flex flex-col justify-center items-center"
      >
        <h1
          class="text-[#000] font-mikela lg:text-center text-center text-5xl w-[343px] lg:w-full font-semibold text-[40px] lg:text-[64px]"
        >
          What do you think?
        </h1>
        <h4
          class="text-[#000] font-raleway text-2xl my-4 w-[311px] lg:w-full text-center font-normal text-[16px] lg:text-[24px]"
        >
          How was your experience shopping inside this winepress?
        </h4>
        <p
          class="text-[#797371] font-raleway text-center text-sm w-[311px] lg:w-full font-normal text-[12px] lg:text-[16px]"
        >
          So I really need feedback from you. I am running this experiment, that
          involves finding new ways to help people shop online. What did you
          think about your experience shopping here.
        </p>
      </div>

      <div
        class="w-full lg:w-[50%] mt-[40px] lg:mt-[80px] px-[16px] flex flex-col justify-center items-center"
      >
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

  data() {
    return {
      customize: "",
      newItems: true,
      allItems: false,
      cart: 0,
      isFixed: false,
      scrollPosition: 1700, // Adjust this value as needed
    };
  },

  components: {
    ShopHeader,
    ShopFooter,
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= this.scrollPosition) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
    togglenewItem() {
      this.newItems = true;
      this.allItems = false;
    },
    toggleAllItem() {
      this.allItems = true;
      this.newItems = false;
    },
    pushtoCart(id) {
      // console.log(id);
      this.$router.push({
        path: "/shop/carthistory",
        query: { parameter: id },
      });
    },

    addtocart() {
      this.cart++;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.page {
  @apply w-full relative;
  width: 100%;
  height: 900px;
  background-image: url("../../assets/images/shop/Hero.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-origin: content-box;
}

.transition-transform {
  transition-delay: 1.5s; /* Add a 0.5-second delay to the transition */
}

/* .blogBody {
} */
</style>
