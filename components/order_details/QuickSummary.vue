<template>
  <table class="mt-3">
    <tr>
      <td>Order Date</td>
      <td>12th June 2023</td>
    </tr>
    <tr>
      <td>Number of Items</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Cost of Order</td>
      <td>NGN 12,200.00</td>
    </tr>
    <tr>
      <td>Payment Method</td>
      <td>Paid with Cards, Bank Transfer or USSD</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "QuickSummary",
};
</script>

<style scoped>
tr {
  @apply w-full;
}
tr td {
  @apply font-raleway text-xs text-white w-1/2 py-1;
}
tr td:first-of-type {
  @apply font-bold;
}
tr td:last-of-type {
  @apply font-semibold text-right;
}
</style>
