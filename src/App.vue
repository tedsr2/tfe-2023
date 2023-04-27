<script setup>
import Intro from './components/Intro.vue';
import Home from './components/Home.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// const container = ref(null);
// const content = ref(null);

// onMounted(() => {
//   gsap.from(container.value, {
//     delay: 0.5,
//     duration: 1,
//     y: '+100',
//     autoAlpha: 0,
//     ease: 'black.out(1.7)',
//   })
// })

</script>

<template>
  <main class="main">
    <!-- <div ref="container">
      <div ref="content">
        <div class="hello"><span class="child">Test nesting</span>Hello</div>
        <div>Wesh</div>
        <div>Wesh</div>
        <div>Wesh</div>
      </div>
    </div> -->
    <!-- <Intro /> -->
    <Home />
  </main>
</template>

<style scoped lang="scss">
// $bgColor: red;

// .hello {
//   background-color: $bgColor;

//   .child {
//     background-color: blue;
//   }
// }
</style>
