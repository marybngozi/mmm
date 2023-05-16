<template>
  <div class="flex justify-start gap-5 w-max">
    <SmallCard
      v-for="i in n"
      :key="i"
      class="w-[284px] lg:w-[570px] h-[auto] lg:h-[300px]"
    />
  </div>
</template>

<script>
import SmallCard from "@/components/blog/SmallCard.vue";
export default {
  name: "CardList",

  components: {
    SmallCard,
  },

  data() {
    return {
      n: 4,
    };
  },
};
</script>

<style scoped></style>
