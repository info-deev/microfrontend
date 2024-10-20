<script setup lang="ts">
import { onMounted, ref } from "vue";

const counter = ref(0);
onMounted(() => {
  if (window.microkernel) {
    window.microkernel.publish(
      "log",
      "Это сообщение отправил микрофронтенд, работающий на порту 3001."
    );
  }
});

const handleButton = () => {
  counter.value = ++counter.value;
  if (window.microkernel) {
    window.microkernel.publish(
      "log",
      `Это сообщение отправил микрофронтенд, counter: ${counter.value}`
    );
  }
};
</script>

<template>
  <div>
    <h2>Микрофронтенд</h2>
    <p>Это микрофронтенд, работающий на порту 3001.</p>
    <button @click="handleButton">counter {{ counter }}</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  /* background-color: #1a1a1a; */
  background-color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
  transition: border-color 0.25s;
  margin: 0.5rem;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
