<template>
  <div class="flex flex-col gap-6">
    <OpenOrder v-for="w in orders" :key="w" />
  </div>
</template>

<script>
import OpenOrder from "@/components/shop/OpenOrder";
export default {
  name: "OpenOrders",

  components: {
    OpenOrder,
  },

  data() {
    return {
      orders: [1, 2],
    };
  },
};
</script>

<style scoped></style>
