<template>
  <div class="">
    <section class="font-clash text-white">
      <div v-if="showSearch">
        <div class="flex justify-between border-2 border-sand">
          <form @submit.prevent="searchReadingHstory" class="flex w-full">
            <input
              type="text"
              placeholder="enter text here"
              name="searchText"
              id="searchText"
              class="w-full lg:h-14 bg-black text-white px-2 outline-none hover:outline-none"
            />
            <button class="bg-white p-3 lg:p-4">
              <img
                src="@/assets/images/icons/search.svg"
                alt="icon"
                class="h-4 w-5 lg:w-7 lg:h-7"
              />
            </button>
          </form>

          <button @click="showSearch = false" class="p-3 lg:py-4 lg:px-5">
            <img src="@/assets/images/icons/close.svg" alt="icons" />
          </button>
        </div>

        <div class="mt-4">
          <CategoryList />
        </div>
      </div>

      <div v-else class="flex justify-between items-center">
        <div
          class="bg-sand text-xs lg:text-base border-8 border-darksand text-black px-2 py-1 font-clash"
        >
          22 posts read
        </div>

        <button
          @click="showSearch = true"
          class="bg-black border-2 border-sand p-3 lg:p-4"
        >
          <img
            src="@/assets/images/icons/search.svg"
            alt="icon"
            class="h-4 w-5 lg:w-7 lg:h-6"
          />
        </button>
      </div>
    </section>

    <section
      class="mt-4 lg:mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3 max-w-[1077px]"
    >
      <SmallCard v-for="d in readingHistory" :key="d" class="w-full h-auto" />
    </section>
  </div>
</template>

<script>
import CategoryList from "@/components/blog/CategoryList";
import SmallCard from "@/components/blog/SmallCard.vue";
export default {
  name: "ReadingHistory",

  components: {
    CategoryList,
    SmallCard,
  },

  data() {
    return {
      showSearch: false,
      readingHistory: [1, 2, 3, 4, 5, 6, 7],
    };
  },

  methods: {
    searchReadingHstory() {
      console.log("searching");
    },
  },
};
</script>

<style scoped></style>
