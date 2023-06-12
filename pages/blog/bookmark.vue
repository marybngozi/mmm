<template>
  <div class="h-screen">
    <div class="page">
      <PageHeader />

      <main class="mt-5 lg:pt-14">
        <section class="flex justify-between items-end w-full">
          <h3
            class="mt-5 text-gray-400 font-clash font-medium text-sm lg:text-xl"
          >
            <span class="underline">Your </span> Bookmarks
          </h3>

          <button
            class="bg-sand border-[#aa9385] font-clash text-xs lg:text-base border-8 py-1.5 px-4 lg:p-2"
          >
            10 marks
          </button>
        </section>

        <section class="mt-4 lg:mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
          <SmallCard v-for="d in 10" :key="d" class="w-full h-auto" />
        </section>
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/blog/Header.vue";
import PageFooter from "@/components/blog/Footer.vue";
import SmallCard from "@/components/blog/SmallCard.vue";
import CategoryList from "@/components/blog/CategoryList.vue";
export default {
  name: "BlogBookmark",

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
  @apply bg-black w-full px-5 lg:px-18 py-16;
}
main {
  width: 100%;
  min-height: calc(100vh - 120px);
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
