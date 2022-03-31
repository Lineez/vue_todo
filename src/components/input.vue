<template>
  <label>
    <h3><slot name="header"></slot></h3>
    <input
      type="text"
      ref="focus"
      v-bind="$attrs"
      @input="$emit('update:title', $event.target.value)"
    />
    <span>{{ title }} <slot name="text"></slot></span>
  </label>
</template>

<script>
export default {
  name: "my-input",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      require: true,
    },
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    focusInput() {
      this.$refs.focus.focus();
    },
  },
};
</script>

<style></style>
