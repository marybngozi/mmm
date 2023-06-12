<template>
  <div class="flex justify-between shadow-md">
    <div class="w-1/3">
      <img
        src="@/assets/images/posts.png"
        alt="post image"
        class="w-full object-cover h-full object-center"
      />
    </div>

    <div class="p-2.5 lg:p-5 bg-white w-2/3">
      <nuxt-link to="/blog/123" class="font-mikela text-lg lg:text-4xl">
        So I've sought to understand why we yearn for Companionship...
      </nuxt-link>

      <h6
        class="font-clash text-xs lg:text-3xl text-[#262626] mt-1.5 lg:mt-2.5"
      >
        Here is what I learned
      </h6>

      <div class="flex justify-between items-center mt-1.5 lg:mt-3">
        <div class="flex gap-2 lg:gap-4">
          <h6
            class="font-clash text-xs lg:text-xl text-[#262626] border px-1.5 py-0.5"
          >
            8 mins read
          </h6>
          <div
            class="bg-camblue text-black font-raleway text-xs lg:text-xl px-3 py-1.5"
          >
            Love
          </div>
        </div>

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
