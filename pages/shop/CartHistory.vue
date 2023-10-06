<template>
  <div class="w-full h-[100vh] p-3 relative m-0">
    <div>
      <CartHeader />
    </div>
    <div class="flex mt-[120px] justify-center items-center">
      <div
        class="w-full lg:w-[80%] flex flex-col md:flex-row justify-between items-start relative"
      >
        <div
          class="flex w-full lg:w-[70%] m-0 p-0 flex-col justify-between items-start"
        >
          <!-- CART -->
          <div v-if="cart" :class="{ cart: cart }">
            <div class="w-full flex justify-between items-center">
              <h4 class="text-center font-clash text-[24px] px-2 font-normal">
                Your Cart
              </h4>
              <p
                class="border-8 border-50-[#E1C5B4] bg-[#E1C5B4] text-center font-raleway text-[12px] px-2"
              >
                4 Items in Cart
              </p>
            </div>
            <div
              v-for="n in 2"
              :key="n"
              class="w-full flex flex-col md:flex-row justify-between items-end border-2 border-[#C3B8B5] mt-[20px] p-[16px]"
            >
              <div
                class="w-full lg:w-[70%] flex justify-start items-start mb-4 lg:mb-0"
              >
                <img src="@/assets/images/shop/cart/imagecutomize.svg" alt="" />
                <div>
                  <p class="w-full lg:w-[195px] ml-2 font-raleway text-[12px]">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <h2
                    class="w-full lg:w-[195px] ml-2 font-raleway font-semibold text-[16px] mt-4"
                  >
                    NGN 27,000.00
                  </h2>
                </div>
              </div>
              <div class="w-[60%] lg:w-[30%] flex justify-between items-center">
                <button class="p-4 bg-[#FBB91A] text-[14px]">
                  <img src="@/assets/images/icons/minus-01.svg" alt="icon" />
                </button>
                <p class="text-[12px] font-raleway">2</p>
                <button class="p-4 bg-[#FBB91A] text-[14px]">
                  <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                </button>
                <button class="p-3 bg-[#C3B8B5] text-[14px]">
                  <img src="@/assets/images/icons/delete-03.svg" alt="icon" />
                </button>
              </div>
            </div>
          </div>

          <!-- CUSTOMIZE -->
          <div v-if="customize" class="mb-[30rem] lg:mb-0">
            <div v-for="n in 2" :key="n" class="w-full mt-4">
              <div
                class="bg-[#262626] w-full h-[40px] flex justify-center items-center"
              >
                <h2 class="text-[#A1BEAC] font-clash text-[20px]">ITEM 1</h2>
              </div>
              <h2 class="text-[#262626] font-mikela text-[24px] my-[16px]">
                Let’s customize this order
              </h2>

              <div
                class="w-full flex flex-col lg:flex-row justify-between items-start"
              >
                <div class="w-full lg:w-[60%]">
                  <img
                    src="@/assets/images/shop/cart/cartcustomize.png"
                    alt="item"
                  />
                </div>

                <div class="w-full lg:w-[40%] p-0 m-0 lg:ml-4 mt-4 lg:mt-0">
                  <!-- ITEM NUMBET -->
                  <div
                    class="border-2 border-[#C3B8B5] p-[16px] mb-[12px] flex justify-between flex-row items-center"
                  >
                    <p class="w-[60%] font-raleway text-[12px] text-[#262626]">
                      Item Number
                    </p>
                    <div class="w-[40%] flex justify-between items-center">
                      <button class="p-4 bg-[#FBB91A] text-[14px]">
                        <img
                          src="@/assets/images/icons/minus-01.svg"
                          alt="icon"
                        />
                      </button>
                      <p class="text-[12px] text-[#262626] font-raleway">2</p>
                      <button class="p-4 bg-[#FBB91A] text-[14px]">
                        <img
                          src="@/assets/images/icons/add-01.svg"
                          alt="icon"
                        />
                      </button>
                    </div>
                  </div>

                  <!-- CHANGE COLOR -->
                  <div class="border-2 border-[#C3B8B5] p-[16px] mb-[12px]">
                    <div class="flex justify-between flex-row items-center">
                      <p
                        class="w-[60%] font-raleway text-[12px] text-[#262626]"
                      >
                        Background theme
                      </p>
                      <div class="w-[40%] flex justify-between items-center">
                        <button
                          class="p-5 bg-[#FFFFFF] border-2 border-[#A1BEAC] text-[14px]"
                        ></button>
                        <button
                          class="p-5 bg-[#262626] border-2 border-[#E1C5B4] text-[14px]"
                        ></button>
                      </div>
                    </div>
                    <div class="w-full flex justify-between items-center mt-4">
                      <p class="font-raleway text-[12px] text-[#262626] italic">
                        Selected
                      </p>
                      <p
                        class="font-raleway text-[12px] text-[#262626] font-semibold"
                      >
                        White wine
                      </p>
                    </div>
                  </div>

                  <!-- FRAME SIZE -->
                  <div class="border-2 border-[#C3B8B5] p-[16px] mb-[12px]">
                    <p
                      class="font-raleway text-[12px] text-[#262626] font-semibold"
                    >
                      Frame size
                    </p>

                    <div class="mt-4 flex justify-between items-center mb-6">
                      <button
                        class="py-[5px] px-[12px] border-2 border-[#C3B8B5] w-auto mr-1 hover:bg-[#A1BEAC] font-raleway text-[12px] text-[#262626] font-semibold"
                      >
                        Smallest
                      </button>
                      <button
                        class="py-[5px] px-[12px] border-2 border-[#C3B8B5] w-auto mr-1 hover:bg-[#A1BEAC] font-raleway text-[12px] text-[#262626] font-semibold"
                      >
                        Small
                      </button>
                      <button
                        class="py-[5px] px-[12px] border-2 border-[#C3B8B5] w-auto mr-1 hover:bg-[#A1BEAC] font-raleway text-[12px] text-[#262626] font-semibold"
                      >
                        Big
                      </button>
                      <button
                        class="py-[5px] px-[12px] border-2 border-[#C3B8B5] w-auto mr-1 hover:bg-[#A1BEAC] font-raleway text-[12px] text-[#262626] font-semibold"
                      >
                        Biggest
                      </button>
                    </div>
                    <img
                      src="@/assets/images/shop/cart/framesize.png"
                      alt="framesize"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- SUGGESTION -->
            <div class="w-full mt-[10rem] mb-[20rem] hidden lg:block">
              <h2
                class="mb-[15px] font-clash text-[16px] font-semibold text-left lg:w-[343px]"
              >
                Based on your choices, I felt you might also want these
              </h2>
              <div
                class="flex flex-col lg:flex-row w-full justify-between items-center"
              >
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-0 lg:mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-0 lg:mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-0 lg:mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- SUGGESTION SMALL SCREEN -->
            <div
              class="w-full h-auto mt-[4rem] mb-[10rem] block lg:hidden overflow-hidden"
            >
              <div class="w-full h-auto grid grid-cols-2">
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-0 lg:mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mr-0 lg:mr-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
                <div
                  class="w-auto h-auto border-2 border-[#C3B8B5] p-[16px] mt-4 lg:mt-0"
                >
                  <img
                    src="@/assets/images/shop/cart/framesize.png"
                    alt="framesize"
                  />
                  <div class="flex items-end justify-end mt-[16px]">
                    <button class="p-4 bg-[#FBB91A] text-[14px]">
                      <img src="@/assets/images/icons/add-01.svg" alt="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RECIEVERS DETAILS -->
          <div v-if="reciever" class="mb-[15rem] lg:mb-[5rem] w-full">
            <div class="w-full mt-4">
              <h1 class="text-[36px] font-mikela font-bold text-[#262626]">
                Receivers Details
              </h1>

              <div
                class="w-full border-2 border-[#C3B8B5] p-[16px] lg:p-[32px]"
              >
                <div
                  class="w-full flex flex-row lg:flex-row justify-between items-start"
                >
                  <div class="w-[30%] lg:w-[20%] p-0 mr-4">
                    <img
                      src="@/assets/images/shop/cart/framesize.png"
                      alt="framesize"
                      width="100%"
                    />
                  </div>
                  <div class="w-[70%] lg:w-[80%] p-0 my-0">
                    <h2
                      class="text-[16px] lg:text-[24px] font-raleway font-bold text-[#262626] mb-[13px]"
                    >
                      Cart summary
                    </h2>
                    <p
                      class="text-[12px] lg:text-[16px] font-raleway font-normal text-[#262626]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Faucibus nec sed
                      convallis id dolor massa aliquam eget. Nibh ultrices
                      ultricies donec consequat. Ipsum sit dui
                    </p>
                  </div>
                </div>

                <div
                  class="flex flex-row justify-between item-center mt-[30px] mx-0"
                >
                  <p
                    class="py-[5px] text-[12px] lg:text-[16px] font-raleway font-semibold italic text-[#262626]"
                  >
                    Cost of Cart
                  </p>
                  <div
                    class="px-[20px] lg:px-[32px] py-[5px] border-2 border-[#C3B8B5]"
                  >
                    <h2
                      class="text-[12px] lg:text-[16px] font-clash font-bold text-[#262626]"
                    >
                      NGN 27,000.00
                    </h2>
                  </div>
                </div>
              </div>

              <div
                class="w-full border-2 border-[#C3B8B5] p-[16px] lg:p-[32px] mt-[24px]"
              >
                <h2
                  class="text-[16px] lg:text-[24px] font-raleway font-semibold text-[#262626]"
                >
                  Receivers Details
                </h2>

                <div
                  class="w-full flex flex-row justify-between items-center my-[20px]"
                >
                  <button
                    class="w-[50%] mr-4 py-[10px] px-auto border-2 border-[#C3B8B5] flex justify-center items-center"
                  >
                    <img
                      src="@/assets/images/icons/google-01.svg"
                      alt="google"
                      class="mr-0 lg:mr-2"
                    />
                    <span class="text-[12px] font-raleway text-[#262626] py-0"
                      >Sign in with Gmail</span
                    >
                  </button>
                  <button
                    class="w-[50%] ml-4 py-[10px] px-auto border-2 border-[#C3B8B5] flex justify-center items-center"
                  >
                    <img
                      src="@/assets/images/icons/facebook-01.svg"
                      alt="facebook"
                      class="mr-0 lg:mr-2"
                    />
                    <span class="text-[12px] font-raleway text-[#262626] py-0"
                      >Sign in with Facebook</span
                    >
                  </button>
                </div>
                <p class="w-full text-center">Or</p>

                <div class="w-full my-[24px]">
                  <div>
                    <label
                      for="name"
                      class="text-[12px] font-raleway text-[#262626] mb-2"
                      >Name of Reciever</label
                    >
                    <input
                      type="text"
                      placeholder="Reciever's Name"
                      class="px-[16px] py-[10px] border-2 mb-[24px] border-[#C3B8B5] w-full"
                    />
                  </div>
                  <div>
                    <label
                      for="name"
                      class="text-[12px] font-raleway text-[#262626] mb-2"
                      >Phone number</label
                    >
                    <input
                      type="number"
                      placeholder="Reciever's Phone"
                      class="px-[16px] py-[10px] border-2 mb-[24px] border-[#C3B8B5] w-full"
                    />
                  </div>
                  <div>
                    <label
                      for="name"
                      class="text-[12px] font-raleway text-[#262626] mb-2"
                      >Email address</label
                    >
                    <input
                      type="email"
                      placeholder="Reciever's Email"
                      class="px-[16px] py-[10px] border-2 border-[#C3B8B5] w-full"
                    />
                  </div>
                </div>

                <p
                  class="text-[12px] lg:text-[18px] font-raleway font-normal w-full"
                >
                  So we would send <span class="font-bold">John Okor</span> with
                  <span class="font-bold">09090909009</span> and email
                  <span class="font-bold">Johnokor2016@gmai.com</span> your
                  order of <span class="font-bold">the 2 items above</span>
                </p>
              </div>
            </div>
          </div>

          <!-- SHIPPING DETAILS -->
          <div v-if="shippingdetails" class="mb-[15rem] lg:mb-[5rem] w-full">
            <div class="w-full mt-4">
              <h1 class="text-[36px] font-mikela font-bold text-[#262626]">
                Shipping Details
              </h1>

              <div
                class="w-full border-2 border-[#C3B8B5] p-[16px] lg:p-[32px]"
              >
                <div
                  class="w-full flex flex-row lg:flex-row justify-between items-start"
                >
                  <div class="w-[30%] lg:w-[20%] p-0 mr-4">
                    <img
                      src="@/assets/images/shop/cart/framesize.png"
                      alt="framesize"
                      width="100%"
                    />
                  </div>
                  <div class="w-[70%] lg:w-[80%] p-0 my-0">
                    <h2
                      class="text-[16px] lg:text-[24px] font-raleway font-bold text-[#262626] mb-[13px]"
                    >
                      Cart summary
                    </h2>
                    <p
                      class="text-[12px] lg:text-[16px] font-raleway font-normal text-[#262626]"
                    >
                      Lorem ipsum dolor sit amet consectetur. Faucibus nec sed
                      convallis id dolor massa aliquam eget. Nibh ultrices
                      ultricies donec consequat. Ipsum sit dui
                    </p>
                  </div>
                </div>
                <div
                  class="flex flex-row justify-between item-center mt-[30px] mx-0"
                >
                  <p
                    class="py-[5px] text-[12px] lg:text-[16px] font-raleway font-semibold italic text-[#262626]"
                  >
                    Cost of Cart
                  </p>
                  <div
                    class="px-[20px] lg:px-[32px] py-[5px] border-2 border-[#C3B8B5]"
                  >
                    <h2
                      class="text-[12px] lg:text-[16px] font-clash font-bold text-[#262626]"
                    >
                      NGN 27,000.00
                    </h2>
                  </div>
                </div>
              </div>

              <div
                class="w-full border-2 border-[#C3B8B5] p-[16px] lg:p-[32px] mt-[24px]"
              >
                <h1 class="text-[24px] font-raleway font-bold text-[#262626]">
                  Shipping Details
                </h1>

                <div
                  class="w-full border-2 border-[#C3B8B5] p-0 mt-[24px] bg-[#fff] relative rounded-[5px]"
                >
                  <img
                    src="@/assets/images/icons/dropdown.svg"
                    alt="dropdown"
                    class="mr-0 lg:mr-2 absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                  <select class="custom-select">
                    <option value="option1">Country</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div
                  class="w-full border-2 border-[#C3B8B5] p-0 mt-[24px] bg-[#fff] relative rounded-[5px]"
                >
                  <img
                    src="@/assets/images/icons/dropdown.svg"
                    alt="dropdown"
                    class="mr-0 lg:mr-2 absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                  <select class="custom-select">
                    <option value="option1">Choose State</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div
                  class="w-full border-2 border-[#C3B8B5] p-0 mt-[24px] bg-[#fff] relative rounded-[5px]"
                >
                  <img
                    src="@/assets/images/icons/dropdown.svg"
                    alt="dropdown"
                    class="mr-0 lg:mr-2 absolute right-3 top-1/2 transform -translate-y-1/2"
                  />
                  <select class="custom-select">
                    <option value="option1">Choose LGA</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div>
                  <label for="addressline">Adress line 1</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BUTTONS -->
        <div class="w-[30%] ml-2 mt-4 px-2 hidden lg:block">
          <div class="h-auto flex justify-start items-center flex-row mr-4">
            <button
              :class="`group relative lg:w-[50px] w-full h-[50px] p-2 ${
                cart
                  ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                  : 'bg-black'
              }`"
              @click="toggleCart"
            >
              <img
                v-if="cart"
                src="@/assets/images/icons/addcart.svg"
                :class="`absolute inset-0 transition-opacity p-2 group-hover:opacity-100 ${
                  cart ? 'opacity-100' : 'opacity-0'
                }`"
                alt="icon"
                width="100%"
              />
              <img
                v-else
                src="@/assets/images/icons/addcart-white.svg"
                :class="`absolute inset-0 transition-opacity p-1 group-hover:opacity-100 ${
                  cart ? 'opacity-0' : 'opacity-100'
                }`"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Cart
              </p>
            </button>
          </div>
          <div class="h-auto flex justify-start items-center flex-row mr-4">
            <button
              :class="`group relative lg:w-[50px] h-[50px] w-full p-2 ${
                customize
                  ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                  : 'bg-black'
              }`"
              @click="toggleCustomize"
            >
              <img
                v-if="customize === false"
                src="@/assets/images/icons/customize_new.svg"
                :class="`absolute inset-0 transition-opacity p-2 group-hover:opacity-100 ${
                  customize ? 'opacity-0' : 'opacity-100'
                }`"
                alt="icon"
                width="100%"
              />
              <img
                v-else
                src="@/assets/images/icons/customize_black.svg"
                :class="`absolute inset-0 transition-opacity p-1 group-hover:opacity-100 ${
                  customize ? 'opacity-100' : 'opacity-0'
                }`"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Customize
              </p>
            </button>
          </div>
          <div class="h-auto flex justify-start items-center flex-row mr-4">
            <button
              :class="`group relative lg:w-[50px] w-full h-[50px] p-2 ${
                reciever
                  ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                  : 'bg-black '
              }`"
              @click="togglePersonaldetails"
            >
              <img
                v-if="reciever === false"
                src="@/assets/images/icons/personal_details.svg"
                :class="`absolute inset-0 transition-opacity p-2 group-hover:opacity-100 ${
                  reciever ? 'opacity-0' : 'opacity-100'
                }`"
                alt="icon"
                width="100%"
              />
              <img
                v-else
                src="@/assets/images/icons/personal_details_dark.svg"
                :class="`absolute inset-0 transition-opacity p-1 group-hover:opacity-100 ${
                  reciever ? 'opacity-100' : 'opacity-0'
                }`"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Your details
              </p>
            </button>
          </div>
          <div class="h-auto flex justify-start items-center flex-row mr-4">
            <button
              class="group relative bg-black lg:w-[50px] w-full h-[50px] p-2"
            >
              <img
                src="@/assets/images/icons/shipping_details.svg"
                class="absolute inset-0 transition-opacity p-2 opacity-100 group-hover:opacity-0"
                alt="icon"
                width="100%"
              />
              <img
                src="@/assets/images/icons/shipping_details_dark.svg"
                class="absolute inset-0 transition-opacity p-1 opacity-0 group-hover:opacity-100"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Shipping details
              </p>
            </button>
          </div>
          <div
            class="h-auto w-full flex justify-start items-center flex-row mr-4"
          >
            <button
              class="group relative bg-black lg:w-[50px] w-full h-[50px] p-2"
            >
              <img
                src="@/assets/images/icons/Purchase_summary.svg"
                class="absolute inset-0 transition-opacity p-2 opacity-100 group-hover:opacity-0"
                alt="icon"
                width="100%"
              />
              <img
                src="@/assets/images/icons/Purchase_summary_dark.svg"
                class="absolute inset-0 transition-opacity p-1 opacity-0 group-hover:opacity-100"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Purchase summary
              </p>
            </button>
          </div>
          <div
            class="h-auto w-full flex justify-start items-center flex-row mr-4"
          >
            <button
              class="group relative bg-black lg:w-[50px] w-full h-[50px] p-2"
            >
              <img
                src="@/assets/images/icons/Payment_status.svg"
                class="absolute inset-0 transition-opacity p-2 opacity-100 group-hover:opacity-0"
                alt="icon"
                width="100%"
              />
              <img
                src="@/assets/images/icons/Payment_status_dark.svg"
                class="absolute inset-0 transition-opacity p-1 opacity-0 group-hover:opacity-100"
                alt="icon"
                width="100%"
              />
              <p
                class="absolute right-[-11rem] text-left w-[150px] transition-text bottom-[15px] p-0 m-0 text-[#B3B4B4] group-hover:text-[#000]"
              >
                Payment status
              </p>
            </button>
          </div>
        </div>

        <!-- BUTTONS SMALL SCREEN -->
        <div class="w-full block h-auto lg:hidden absolute top-[-3rem]">
          <div class="w-full flex justify-center items-center h-auto">
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] p-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  cart
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="toggleCart"
              >
                <img
                  v-if="cart"
                  src="@/assets/images/icons/addcart.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    cart ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  v-else
                  src="@/assets/images/icons/cartwhite.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    cart ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] px-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  customize
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="toggleCustomize"
              >
                <img
                  v-if="customize === false"
                  src="@/assets/images/icons/customize_new.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    customize ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  v-else
                  src="@/assets/images/icons/customize_black.svg"
                  :class="`absolute inset-0 transition-opacity  pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    customize ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] px-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  reciever
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="togglePersonaldetails"
              >
                <img
                  v-if="reciever === false"
                  src="@/assets/images/icons/personal_details.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    reciever ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  src="@/assets/images/icons/personal_details_dark.svg"
                  :class="`absolute inset-0 transition-opacity  pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    reciever ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] px-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  shippingdetails
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="toggleShippingdetails"
              >
                <img
                  src="@/assets/images/icons/shipping_details.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    shippingdetails ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  src="@/assets/images/icons/shipping_details_dark.svg"
                  :class="`absolute inset-0 transition-opacity  pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    shippingdetails ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] px-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  purchase
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="togglePurchase"
              >
                <img
                  src="@/assets/images/icons/Purchase_summary.svg"
                  :class="`absolute inset-0 transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    purchase ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  src="@/assets/images/icons/Purchase_summary_dark.svg"
                  :class="`absolute inset-0 transition-opacity  pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    purchase ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
            <div class="h-auto flex justify-start items-center flex-row w-full">
              <button
                :class="`group relative lg:w-[50px] w-full h-auto py-4 lg:h-[50px] px-2 hover:border-4 hover:border-50-[#A1BEAC80] hover:bg-[#A1BEAC] ${
                  paymentStatus
                    ? 'bg-[#A1BEAC] border-4 border-50-[#A1BEAC80]'
                    : 'bg-black'
                }`"
                @click="togglePaymentStatus"
              >
                <img
                  src="@/assets/images/icons/Payment_status.svg"
                  :class="`absolute inset-0 flex justify-center items-center transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    paymentStatus ? 'opacity-0' : 'opacity-100'
                  }`"
                  alt="icon"
                  width="auto"
                />
                <img
                  src="@/assets/images/icons/Payment_status_dark.svg"
                  :class="`absolute inset-0 flex justify-center items-center transition-opacity pl-3 pt-1 pb-1 group-hover:opacity-100 ${
                    paymentStatus ? 'opacity-100' : 'opacity-0'
                  }`"
                  alt="icon"
                  width="auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-black w-full lg:w-[33%] py-4 px-10 h-[150px] mt-[120px] lg:mt-0 lg:h-[200px] fixed bottom-0 right-0"
    >
      <div class="w-full flex justify-between items-center mb-6">
        <p class="text-[#B3B4B4] font-raleway text-[14px] italic font-semibold">
          Cost of Cart
        </p>
        <h4 class="text-[#fff] font-clash text-[12px] font-bold">
          NGN 27,000.00
        </h4>
      </div>
      <button class="w-full py-4 bg-[#FBB91A]">Proceed</button>
    </div>
  </div>
</template>
<script>
import CartHeader from "@/components/shop/CartHeader.vue";
// import CartFooter from "@/components/shop/Footer.vue";

export default {
  name: "Shop",

  data() {
    return {
      cart: false,
      customize: false,
      reciever: false,
      shippingdetails: true,
      purchase: false,
      paymentStatus: false,
    };
  },

  components: {
    CartHeader,
    // ShopFooter,
  },

  methods: {
    toggleCart() {
      this.cart = true;
      this.customize = false;
      this.reciever = false;
    },

    toggleCustomize() {
      this.customize = true;
      this.cart = false;
      this.reciever = false;
    },

    togglePersonaldetails() {
      this.reciever = true;
      this.cart = false;
      this.customize = false;
    },

    toggleShippingdetails() {
      console.log("Hello");
    },

    togglePurchase() {
      console.log("Hello");
    },

    togglePaymentStatus() {
      console.log("Hello");
    },
  },
};
</script>
<style scoped>
@import url("../../assets/css/icons.css");

.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  color: #797371;
  @apply w-full py-2 rounded border border-gray-300 font-raleway focus:outline-none focus:ring focus:border-blue-300;
}
.icon {
  @apply w-5 h-5 lg:w-8 lg:h-8;
}

.cart {
  @apply w-full px-4 lg:p-0 mr-2;
  display: block;
}
</style>
