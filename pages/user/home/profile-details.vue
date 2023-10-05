<template>
  <div class="text-white">
    <section class="w-full lg:w-10/12">
      <div>
        <label for="fullName" class="font-clash">Full Name</label>
        <Editable v-model="fullname" id="fullname" />
        <small class="italic font-raleway text-[10px]">
          received from google
        </small>
      </div>

      <div class="mt-6">
        <label for="email" class="font-clash">Email</label>
        <Editable v-model="email" id="email" />
        <small class="italic font-raleway text-[10px]">
          received from google
        </small>
      </div>

      <div class="mt-6">
        <label for="phone" class="font-clash">Phone number</label>
        <Editable v-model="phone" :edit="true" id="phone" />
      </div>

      <div class="mt-6">
        <label for="registeredOn" class="font-clash">Active since</label>
        <Editable v-model="registeredOn" id="registeredOn" />
      </div>

      <div class="mt-6 flex justify-between gap-4">
        <div
          class="border-2 border-sand flex flex-col items-center min-h-[50px] py-2 text-xs lg:text-sm bg-brown w-full"
        >
          <p class="font-clash">Time spent reading</p>
          <p class="font-raleway font-bold lg:text-3xl">22hrs, 12mins</p>
        </div>

        <div
          class="border-2 border-sand flex flex-col items-center min-h-[50px] py-2 text-xs lg:text-sm bg-brown w-full"
        >
          <p class="font-clash">Number of deliveries</p>
          <p class="font-raleway font-bold lg:text-3xl">22</p>
        </div>
      </div>
    </section>

    <!-- TODO: make the shipping dropable -->
    <h2 class="font-clash font-bold text-2xl mt-7">Shipping details</h2>
    <section class="border-2 border-sand py-5 px-4 mt-2 w-full lg:w-10/12">
      <div class="">
        <label for="country" class="font-clash">Country</label>
        <Editable v-model="shipping.country" :edit="true" id="country" />
      </div>

      <div class="mt-6">
        <label for="state" class="font-clash">State</label>
        <Editable v-model="shipping.state" :edit="true" id="state" />
      </div>

      <div class="mt-6">
        <label for="city" class="font-clash">City</label>
        <Editable v-model="shipping.city" :edit="true" id="city" />
      </div>

      <div class="mt-6">
        <label for="address" class="font-clash">Address</label>
        <Editable v-model="shipping.address" :edit="true" id="address" />
      </div>

      <div class="mt-6">
        <label for="landmark" class="font-clash">Major Landmark</label>
        <Editable v-model="shipping.landmark" :edit="true" id="landmark" />
      </div>
    </section>

    <section class="mt-6 w-full lg:w-10/12 pb-10">
      <p
        v-if="!edited"
        class="p-2.5 bg-brown font-clash text-xs lg:text-xl font-medium text-center"
      >
        Tap inside any field to edit
      </p>

      <button v-else class="bg-oragYellow text-brown w-full p-2.5">Done</button>
    </section>
  </div>
</template>

<script>
import Editable from "@/components/form/Editable.vue";
export default {
  name: "ProfileDetails",

  components: {
    Editable,
  },

  data() {
    return {
      edited: false,
      fullname: "John Okor",
      email: "Johnokor2016@gmail.com",
      phone: null,
      registeredOn: "12th February 2023",
      shipping: {
        country: "Nigeria",
        state: "Abia",
        city: "Aba",
        landmark: "H-medix supermarket",
        address: "No3 Fez street, wuse 2",
      },
    };
  },

  watch: {
    phone(nv, ov) {
      if (nv !== ov) {
        this.edited = true;
      } else {
        this.edited = false;
      }
    },
  },
};
</script>

<style scoped></style>
