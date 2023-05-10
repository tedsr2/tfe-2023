<script setup>
import Intro from './components/Intro.vue';
import Home from './components/Home.vue';
import Hans from './components/Hans.vue';

</script>

<template>
  <main class="main">
    <!-- <Home /> -->
    <Hans />
  </main>
</template>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111111;
}
</style>
