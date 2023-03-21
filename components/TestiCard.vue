<template>
  <div class="testi-card">
    <img src="@/assets/images/user.png" alt="user" class="h-7 w-7" />

    <div class="font-bold font-cairo text-2xxl mt-3">{{ testimony.name }}</div>

    <div class="font-raleway">
      <div class="quest">What did you like about these classes?</div>

      <div class="mt-1">{{ testimony.says }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestiCard",

  props: {
    testimony: {
      type: Object,
      default: () => ({
        name: "Joni Winter",
        says: "Classes started off on basic concepts and progressed really well.",
      }),
    },
  },
};
</script>

<style scoped>
.testi-card {
  background: #ffffff;
  padding: 20px;
  width: 20rem;
  min-height: 13.75rem;
  box-shadow: 10px 10px 0px #fbb91a;
}
.quest {
  @apply text-xs font-bold;
  color: #b3b4b4;
}
.text-2xxl {
  font-size: 28px;
  line-height: 52px;
}
</style>
