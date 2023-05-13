<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="main">
    <RouterView />
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
