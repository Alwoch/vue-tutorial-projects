<script setup>
import { ref } from "vue";

const count = ref(0);

const increaseCount = () => {
  count++;
};

const decreaseCount = () => {
  count--;
};
</script>
<!-- Template -->
<template>
  <body>
    <div>
      <h4>The current count is .....</h4>
      <h1>{{ count }}</h1>
      <button @click="decreaseCount" id="reduceCount">-</button>
      <button @click="increaseCount" id="increaseCount">+</button>
    </div>
  </body>
</template>

<!-- Styles -->
<style scoped>
body {
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  text-align: center;
}
</style>
