<script>
import { RouterView } from 'vue-router';
import Home from './views/Home.vue'
import Hans from './views/Hans.vue'
import John from './views/John.vue'
import Michael from './views/Michael.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': Home,
  '/hans-zimmer': Hans,
  '/john-williams': John,
  '/michael-giacchino': Michael
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash;
      this.adjustPageSize(); // Call the method to adjust the page size
    })
  },
  methods: {
    adjustPageSize() {
      window.scrollTo(0, 0); // Scroll to the top
      document.documentElement.style.height = 'auto'; // Reset the page height
      const stateObj = { page: this.currentPath }; // Create a new state object
      history.replaceState(stateObj, '', this.currentPath); // Update the URL without reloading
      window.dispatchEvent(new Event('resize')); // Trigger a window resize event
    }
  }
}
</script>

<template>
  <component :is="currentView" />
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
