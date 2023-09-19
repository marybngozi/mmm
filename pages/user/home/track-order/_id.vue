<template>
  <div class="pb-4">
    <section class="flex justify-between items-center">
      <div class="flex items-center gap-2 lg:gap-3">
        <button
          @click="$router.back()"
          class="text-white text-xl font-bold bg-sand/50 h-10 w-10 lg:h-12 lg:w-12 flex justify-center items-center"
        >
          <img src="@/assets/images/icons/close.svg" alt="icons" />
        </button>

        <h3 class="text-white font-clash font-bold lg:text-2xl">#1244947849</h3>
      </div>

      <div>
        <button class="bg-oragYellow px-3 py-3">
          <img src="@/assets/images/icons/share.svg" alt="icons" />
        </button>
      </div>
    </section>

    <section class="box mt-6">
      <h4>Order Status</h4>

      <div class="flex items-center gap-4 my-8 text-white">
        <div class="bg-oragYellow/50 p-1.5">
          <div class="bg-oragYellow p-2">
            <img src="@/assets/images/shop/cart-check.svg" alt="icon" />
          </div>
        </div>

        <div class="flex flex-col items-start justify-start">
          <h5 class="font-clash font-bold">Order #1244947849</h5>
          <p class="font-raleway text-xs font-semibold mt-1">12th June 2023</p>
        </div>
      </div>

      <TrackStep>
        <template #title>ORDER PLACED</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>

      <TrackStep class="mt-6">
        <template #title>ORDER CONFIRMED</template>

        <template #text>Your payment was successfully received</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>

      <TrackStep class="mt-6">
        <template #title>ORDER PROCESSED</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>

      <TrackStep class="mt-6">
        <template #title>ORDER EXECUTED</template>

        <template #text>Your items are now ready</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>

      <TrackStep class="mt-6">
        <template #title>ORDER EN-ROUTE TO YOU</template>

        <template #text>Delivery on-going</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>

      <TrackStep class="mt-6">
        <template #title>ORDER DELIVERED</template>

        <template #datetime>12th June 2023 | 12:02:05</template>
      </TrackStep>
    </section>
  </div>
</template>

<script>
import TrackStep from "@/components/order_details/TrackStep.vue";
export default {
  name: "TrackOrder",

  components: {
    TrackStep,
  },
};
</script>

<style scoped>
.box {
  @apply border-2 border-sand p-4;
}
.box h4 {
  @apply font-bold font-clash text-2xl text-white;
}
</style>
