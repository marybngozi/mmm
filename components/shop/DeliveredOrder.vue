<template>
  <div class="flex items-center border-2 border-sand gap-4 p-4 text-white">
    <div class="bg-camblue/50 p-1.5">
      <div class="bg-camblue p-2">
        <img src="@/assets/images/shop/box-check.svg" alt="icon" />
      </div>
    </div>

    <div class="flex flex-col items-start justify-start">
      <h5 class="font-clash font-bold">Delivery #1244947849</h5>
      <p class="font-raleway text-xs font-semibold mt-1">12th June 2023</p>
      <nuxt-link
        to="/user/home/order-details/4"
        class="border-2 border-sand text-sand text-xs lg:text-sm px-6 py-1.5 font-raleway mt-2 lg:mt-4 block"
      >
        View details
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveredOrder",
};
</script>

<style scoped></style>
