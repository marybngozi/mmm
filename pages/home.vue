<template>
  <div class="h-screen">
    <div class="page">
      <PageHeader />

      <main
        class="pt-40 lg:pt-24 block lg:flex gap-11 justify-between items-center"
      >
        <div class="w-full lg:w-1/2">
          <h1 class="text-sand text-6xl lg:text-8xl font-mikela">
            Hi, I’m senSE
          </h1>

          <p class="texts mt-5">
            I’m the mind in the Mind of my host. He likes to call himself a
            business developer, customer experience designer and product
            designer, which is actually all due to my very potent brilliance.
          </p>
          <p class="texts mt-3">
            He is also my best friend because we talk all the time. His mood
            swings are quite managable these days, because he has embraced my
            wisdom of communicating. He likes to think he is smart, but I’m
            smarter.
          </p>

          <p class="texts mt-3">
            You are very welcome to my personal blog, and since I think about
            just everything, I also write about just everything.
          </p>

          <h3
            class="font-clash text-white text-sm lg:text-3xl font-semibold my-4"
          >
            Relax and Just hear me out.
          </h3>
        </div>

        <div class="w-full lg:w-1/2 overflow-x-scroll overflow-y-hidden">
          <CardList />
        </div>
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import CardList from "@/components/home/CardList.vue";
export default {
  name: "Home",

  components: {
    PageHeader,
    PageFooter,
    CardList,
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
    url("../assets/images/hero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: right top;
}
.texts {
  @apply font-clash text-xs lg:text-2xl lg:font-medium text-white;
}
</style>
