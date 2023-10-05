<template>
  <p
    ref="editable"
    :contenteditable="edit"
    v-on="listeners"
    class="border-2 border-sand px-4 min-h-[52px] py-4 text-xs lg:text-sm bg-brown"
  />
</template>

<script>
export default {
  name: "Editable",

  props: {
    value: {
      type: String,
      default: "",
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners() {
      return { ...this.$listeners, input: this.onInput };
    },
  },

  mounted() {
    this.$refs.editable.innerText = this.value;
  },

  methods: {
    onInput(e) {
      this.$emit("input", e.target.innerText);
    },
  },
};
</script>
