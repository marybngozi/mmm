<template>
  <ul class="mt-3">
    <li
      v-for="n in 3"
      :key="n"
      class="flex items-start gap-2 text-white border-b border-white mt-6 pb-3"
    >
      <div>
        <img
          src="@/assets/images/item_image.png"
          alt="item"
          class="h-10 w-10"
        />
      </div>

      <div class="w-full">
        <h5 class="text-xs font-raleway font-bold">Get Started Frame</h5>
        <table class="w-full">
          <tr>
            <td>Number of Item</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Unit Cost</td>
            <td>NGN 2,000</td>
          </tr>
          <tr>
            <td>Items Cost</td>
            <td>NGN 4,000</td>
          </tr>
        </table>
      </div>
    </li>

    <li class="flex justify-between font-raleway font-bold text-xs mt-6">
      <h4 class="text-white">Total Cost of Cart</h4>
      <h4 class="text-right text-oragYellow">NGN 12,000.00</h4>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ItemsSummary",
};
</script>

<style scoped>
tr {
  @apply w-full;
}
tr td {
  @apply font-raleway text-xs text-white py-1 w-1/2;
}
tr td:last-of-type {
  @apply font-bold text-right;
}
</style>
