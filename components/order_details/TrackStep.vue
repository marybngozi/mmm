<template>
  <div class="flex items-center gap-4 my-8 text-white">
    <div class="bg-camblue/50 p-1">
      <div class="bg-camblue p-1">
        <img src="@/assets/images/shop/cart-check.svg" alt="icon" />
      </div>
    </div>

    <div class="flex flex-col items-start justify-start">
      <h5 class="font-raleway font-bold">
        <slot name="title"></slot>
      </h5>
      <p class="font-raleway text-xs font-normal mt-1">
        <slot name="text"></slot>
      </p>
      <p class="font-raleway text-xs font-semibold mt-1 text-sonSilver">
        <slot name="datetime"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackStep",
};
</script>

<style scoped></style>
