<template>
  <div class="h-screen">
    <div class="page">
      <BlogHeader />

      <main class="mt-5 lg:pt-14">
        <section class="flex justify-between items-end w-full">
          <h3
            class="mt-5 text-gray-400 font-clash font-medium text-sm lg:text-xl"
          >
            <span class="underline">Your </span> Bookmarks
          </h3>

          <div
            class="bg-sand border-darksand font-clash text-xs lg:text-base border-8 py-1.5 px-4 lg:p-2"
          >
            10 marks
          </div>
        </section>

        <section class="mt-4 lg:mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
          <div
            v-if="!bookmarks.length"
            class="flex flex-col justify-center items-center gap-[29px] mt-6"
          >
            <img
              src="@/assets/images/no-bookmark.svg"
              alt="no bookmark"
              class="h-[225px] w-[287px]"
            />

            <p class="font-clash text-white text-xs">
              You have made no impression yet
            </p>
          </div>

          <SmallCard v-for="d in bookmarks" :key="d" class="w-full h-auto" />
        </section>
      </main>
    </div>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "@/components/blog/Header.vue";
import BlogFooter from "@/components/blog/Footer.vue";
import SmallCard from "@/components/blog/SmallCard.vue";
import CategoryList from "@/components/blog/CategoryList.vue";
export default {
  name: "BlogBookmark",

  components: {
    BlogHeader,
    BlogFooter,
    SmallCard,
    CategoryList,
  },

  data() {
    return {
      bookmarks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      // bookmarks: [],
      menuClicked: false,
    };
  },
};
</script>
<style scoped>
.page {
  @apply bg-black w-full px-5 lg:px-18 pt-20 pb-16;
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
