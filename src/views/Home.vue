<script setup>
import { nextTick } from 'vue';
import { gsap } from 'gsap';
import Header from '../components/Header.vue';

// const mount = () => {
//     // Delay the execution of the animation until the next DOM update cycle
//     // to ensure that the elements are available in the DOM.
//     // This uses the nextTick function provided by Vue.js.

//     nextTick(() => {
//         gsap.to('#mask rect', { attr: { width: '100' }, duration: 2, repeat: 1});
//     });
// };

// mount();
</script>

<template>
    <div>
        <Header />
        <!-- <svg width="400" height="400">
            <defs>
                <filter id="turbulence">
                    <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="5" seed="2" />
                </filter>
            </defs>
            <mask id="mask">
                <rect width="400" height="400" fill="white" filter="url(#turbulence)"></rect>
            </mask>
            <rect width="400" height="400" fill="blue" mask="url(#mask)" />
        </svg> -->
    </div>
</template>