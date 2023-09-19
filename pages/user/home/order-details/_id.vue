<template>
  <div class="pb-4">
    <section class="flex justify-between items-center">
      <div class="flex items-center gap-2 lg:gap-3">
        <button
          @click="$router.back()"
          class="text-white text-xl font-bold bg-sand/50 h-10 w-10 lg:h-12 lg:w-12 pb-2 flex justify-center items-center"
        >
          &#10229;
        </button>

        <h3 class="text-white font-clash font-bold lg:text-2xl">#1244947849</h3>
      </div>

      <div>
        <nuxt-link
          to="/user/home/track-order/4"
          class="block bg-oragYellow font-raleway font-bold text-xs px-2.5 lg:px-5 py-2 lg:py-3"
        >
          Track this Order
        </nuxt-link>
      </div>
    </section>

    <section class="box mt-6">
      <h4>Quick Summary</h4>

      <QuickSummary />
    </section>

    <section class="box mt-6">
      <h4>Items Summary</h4>

      <ItemsSummary />
    </section>

    <!-- <section class="box mt-6">
      <h4>Receivers Details</h4>

      <p class="mt-3 text-white text-xs font-raleway">
        So we would send <span class="font-bold">John Okor</span> with
        <span class="font-bold">09090909009</span> and email
        <span class="font-bold">Johnokor2016@gmai.com</span> your order
        <span class="font-bold">of the 2 items above</span>
      </p>
    </section> -->

    <section class="box mt-6">
      <h4>Shipping Details</h4>

      <p class="mt-3 text-white text-xs font-raleway">
        So we would send <span class="font-bold">John Okor</span> with
        <span class="font-bold">09090909009</span> and email
        <span class="font-bold">Johnokor2016@gmai.com</span>, located at
        <span class="font-bold">
          no1960 Buhari way, economic avenue, Manchester, Ghana
        </span>
        . your order
        <span class="font-bold">of the 2 items above</span>
      </p>

      <hr class="bg-white h-px mt-3" />

      <div class="flex justify-between mt-3">
        <h5 class="text-white font-raleway font-bold text-xs">Delivery Fee</h5>
        <h5 class="text-right text-oragYellow font-raleway font-bold text-xs">
          NGN 300.00
        </h5>
      </div>
    </section>

    <section class="box mt-6">
      <h4>Payment Information</h4>

      <PaymentInfo />
    </section>

    <section class="box mt-6">
      <h4>Delivery Information</h4>

      <DeliveryInfo />
    </section>

    <section class="box mt-6">
      <h4>Rate the Service Delivery</h4>

      <ReviewForm v-model="serviceReview" />
    </section>

    <section class="box mt-6">
      <h4>Rate the Product(s)</h4>

      <ReviewForm v-model="productReview" />
    </section>
  </div>
</template>

<script>
import QuickSummary from "@/components/order_details/QuickSummary.vue";
import ItemsSummary from "@/components/order_details/ItemsSummary.vue";
import PaymentInfo from "@/components/order_details/PaymentInfo.vue";
import DeliveryInfo from "@/components/order_details/DeliveryInfo.vue";
import ReviewForm from "@/components/order_details/ReviewForm.vue";
export default {
  name: "OrderDetails",

  components: {
    QuickSummary,
    ItemsSummary,
    PaymentInfo,
    DeliveryInfo,
    ReviewForm,
  },

  data() {
    return {
      serviceReview: { face: null, review: null },
      productReview: { face: null, review: null },
    };
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
