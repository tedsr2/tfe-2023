<script>
import { RouterView } from 'vue-router';
import Home from './views/Home.vue'
import Hans from './views/Hans.vue'
import John from './views/John.vue'
import Michael from './views/Michael.vue'
import NotFound from './views/NotFound.vue'
import Contact from './views/Contact.vue';
import About from './views/About.vue';
import Credits from './views/Credits.vue';

const routes = {
  '/': Home,
  '/hans-zimmer': Hans,
  '/john-williams': John,
  '/michael-giacchino': Michael,
  '/about': About,
  '/contact': Contact,
  '/credits': Credits
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
