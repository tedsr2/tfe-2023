<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const title = ref(null);
const content = ref(null);

onMounted(() => {
    gsap.from(title.value, {
        delay: 0.5,
        duration: 1,
        y: '+100',
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    })
})
</script> 

<template>
    <div class="home-container">

        <section class="background">
            <div class="mask">
                <div class="title" ref="title">
                    <h1>soundtrack<span class="no-spacing">s</span></h1>
                    <h3>the sound of movie<span class="no-spacing">s</span></h3>
                </div>
            </div>
        </section>
        <div class="bottom">
            <div class="gradient">
                <h2>Sound & Movies</h2>
                <p>
                    In the wild, a sound is a deep valley that has been filled with sea water.
                    In physics, sound is a vibration that propagates as an acoustic wave.
                    In movies, these sounds are used to create atmosphere, feelings, and emotions...
                </p>
                <p>
                    Today you will be given the opportunity to dive into the work of some of the greatest composers of all
                    times.
                </p>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.home-container {
    width: 100%;
    height: 100%;

    .background {
        background-image: url("src/assets/sound.jpg");
        background-position: top;
        background-size: cover;
        min-height: 300vh;
        position: relative;
        padding: 20px;
    }

    .mask {
        width: 100%;
        position: absolute;
        inset: 0;
        -webkit-mask: url("src/assets/mask.svg");
        mask: url("src/assets/mask.svg");
        -webkit-mask-position: top;
        mask-position: top;
        -webkit-mask-size: cover;
        mask-size: cover;
    }

    .title {
        margin-top: 20vh;
        text-align: center;
        text-transform: uppercase;
        position: fixed;
        width: 100%;

        h1 {
            font-size: clamp(20px, 4vw, 80px);
            margin-bottom: 4vh;
        }

        h3 {
            font-size: clamp(16px, 2vw, 30px);
        }
    }

    .bottom {
        height: 100vh;
        width: 100vw;
        background-color: #292b31;
        z-index: 10;
    }

    .gradient {
        margin-top: -20px;
        height: 100%;
        width: 100%;
        background: linear-gradient(rgb(41, 43, 49, 0), rgb(41, 43, 49));
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-size: clamp(20px, 3vw, 60px);
        color: white;
        margin-bottom: 4vh;
    }

    p {
        width: 700px;
        text-align: center;
        margin-bottom: 4vh;
    }
}
</style>