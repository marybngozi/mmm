<template>
  <table class="mt-3 w-full">
    <tr>
      <td>Delivery Method</td>
      <td>Door Delivery</td>
    </tr>
    <tr class="border-b border-white">
      <td>Delivery Date</td>
      <td>12th July 2023</td>
    </tr>

    <tr>
      <td>Delivery Status</td>
      <td class="text-oragYellow">Order en-route to you</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DeliveryInfo",
};
</script>

<style scoped>
tr {
  @apply w-full text-white;
}
tr td {
  @apply font-raleway text-xs w-1/2 py-1.5;
}
tr td:first-of-type {
  @apply font-bold;
}
tr td:last-of-type {
  @apply font-semibold text-right;
}
</style>
