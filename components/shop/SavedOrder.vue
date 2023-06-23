<template>
  <div class="border-2 border-sand p-4 text-white">
    <div class="flex items-start gap-4">
      <div class="bg-sand/50 p-1.5">
        <div class="bg-sand p-2">
          <img src="@/assets/images/shop/basket.svg" alt="icon" />
        </div>
      </div>

      <div class="">
        <h5 class="font-clash font-bold">Cart #123948593</h5>
        <p class="font-semibold">4 items in cart</p>
        <p class="font-bold">NGN 32,000.00</p>
        <p class="font-semibold">Fee does not include delivery</p>
      </div>
    </div>

    <div class="flex justify-end">
      <button class="p-2 bg-sand">
        <img src="@/assets/images/shop/delete-cart.svg" alt="icons" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SavedOrder",
};
</script>

<style scoped>
p {
  @apply font-raleway text-xs mt-1;
}
</style>
