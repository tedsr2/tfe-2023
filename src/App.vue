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
      this.adjustPageSize();
    })
  },
  methods: {
    adjustPageSize() {
      window.scrollTo(0, 0);
      document.documentElement.style.height = 'auto';
      const stateObj = { page: this.currentPath };
      history.replaceState(stateObj, '', this.currentPath);
      window.dispatchEvent(new Event('resize'));
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
