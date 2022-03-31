<template>
  <div>
    <my-input v-model:title="title" :class="'red'">
      <template v-slot:header>change text</template>
      <template v-slot:text>name</template>
    </my-input>
  </div>
</template>

<script>
import myInput from "@/components/input";
export default {
  name: "Home",
  components: {
    "my-input": myInput,
  },
  data() {
    return {
      title: "hello",
    };
  },
};
</script>
<style></style>
