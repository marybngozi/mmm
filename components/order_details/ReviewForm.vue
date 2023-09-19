<template>
  <div class="mt-3">
    <div class="flex gap-3">
      <button
        class="p-2.5 border border-sonSilver"
        @click="form.face = 'happy'"
      >
        <!-- <img src="@/assets/images/icons/happy_face.svg" alt="icons" /> -->
        <HappyFace />
      </button>
      <button class="p-2.5 border border-sonSilver" @click="form.face = 'sad'">
        <!-- <img src="@/assets/images/icons/sad_face.svg" alt="icons" /> -->
        <SadFace />
      </button>
    </div>

    <input
      type="text"
      v-model="form.review"
      placeholder="Add a written review here"
      class="w-full bg-brown border-2 border-sonSilver outline-none font-raleway text-white text-xs lg:text-sm p-4 mt-3"
    />

    <button
      @click="$emit('input', form)"
      :disabled="!formReady"
      class="mt-3 disabled:bg-brown disabled:text-sonSilver text-xs bg-oragYellow text-black w-full text-center py-3"
    >
      Submit
    </button>
  </div>
</template>

<script>
import HappyFace from "@/components/icons/HappyFace.vue";
import SadFace from "@/components/icons/SadFace.vue";
export default {
  name: "ReviewForm",

  components: {
    HappyFace,
    SadFace,
  },

  props: {
    value: {
      type: Object,
      default: () => ({ face: null, review: null }),
    },
  },

  data() {
    return {
      form: { face: null, review: null },
    };
  },

  computed: {
    formReady() {
      return this.form.face && this.form.review;
    },
  },
};
</script>

<style scoped></style>
