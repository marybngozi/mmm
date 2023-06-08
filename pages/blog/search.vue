<template>
  <div class="h-screen">
    <div class="page">
      <PageHeader />

      <main
        class="pt-40 lg:pt-24 block lg:flex gap-11 justify-between items-center"
      >
        <CategoryList />

        <SmallCard />
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import SmallCard from "@/components/blog/SmallCard.vue";
import CategoryList from "@/components/blog/CategoryList.vue";
export default {
  name: "BlogSearch",

  components: {
    PageHeader,
    PageFooter,
    SmallCard,
    CategoryList,
  },

  data() {
    return {
      menuClicked: false,
    };
  },
};
</script>
<style scoped>
.page {
  @apply bg-black w-full px-5 lg:px-18 pt-5;
}
main {
  width: 100%;
  height: calc(100vh - 120px);
  background-image: linear-gradient(
      0deg,
      rgba(15, 4, 11, 0.3),
      rgba(15, 4, 11, 0.37)
    ),
    url("../../assets/images/hero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: right top;
}
.texts {
  @apply font-clash text-xs lg:text-2xl lg:font-medium text-white;
}
</style>
