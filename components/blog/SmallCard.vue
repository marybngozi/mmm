<template>
  <div class="flex justify-between items-stretch">
    <img
      src="@/assets/images/posts.png"
      alt="post image"
      class="w-[162px] object-cover"
    />

    <div class="p-2.5 lg:p-5 bg-white w-3/4">
      <h3 class="font-mikela text-lg lg:text-4xl">
        So I’ve sought to understand why we yearn for Companionship...
      </h3>

      <h6
        class="font-clash text-xs lg:text-3xl text-[#262626] mt-1.5 lg:mt-2.5"
      >
        Here is what i learned
      </h6>

      <div class="flex justify-between items-center mt-1.5 lg:mt-3">
        <h6
          class="font-clash text-xs lg:text-xl text-[#262626] border px-1.5 py-0.5"
        >
          8 mins read
        </h6>

        <button>
          <font-awesome-icon class="lg:w-6 lg:h-9" icon="bookmark" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallCard",
};
</script>

<style scoped></style>
