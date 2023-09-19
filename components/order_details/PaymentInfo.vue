<template>
  <table class="mt-3">
    <tr>
      <td>Payment Method</td>
      <td>Paid with Cards, Bank Transfer or USSD</td>
    </tr>
    <tr>
      <td>Payment Date</td>
      <td>12th June 2023</td>
    </tr>
    <tr class="border-b border-white">
      <td>Payment Time</td>
      <td>12:03 pm</td>
    </tr>
    <tr>
      <td>Items total</td>
      <td class="font-bold">NGN 12,000.00</td>
    </tr>
    <tr class="border-b border-white">
      <td>Delivery Fee</td>
      <td class="font-bold">NGN 200.00</td>
    </tr>
    <tr>
      <td>Grand Total</td>
      <td class="text-oragYellow">NGN 12,000.00</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "PaymentInfo",
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
