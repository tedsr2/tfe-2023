<script setup>
import Header from '../components/Header.vue';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const titleblock = ref(null);

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.to(titleblock.value, {
        scrollTrigger: {
            trigger: title.value,
            scrub: true,
            start: "center center",
            end: "bottom top",
            markers: true,
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 3,
    });
}
);
</script>   

<template>
    <div class="container">
        <Header />
        <section>
            <div class="parallax">

            </div>
        </section>

        <section>
            <div ref="titleblock" class="title-block">
                <h3 ref="title">composo<span class="no-spacing">r</span></h3>
                <h1 class="title">hans zimme<span class="no-spacing">r</span></h1>
            </div>
        </section>

        <section>
            <div class="intro">
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/rain-man.mp3',
                        title: 'Main Theme - Rain man (1988)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/lion-king.mp3',
                        title: 'Remember - Lion King (1994)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/gladiator.mp3',
                        title: 'Gladiator Medley - Gladiator (2000)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/inception.mp3',
                        title: 'Time - Inception (2010)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/the-dark-knight-rises.mp3',
                        title: 'Rise - The Dark Knight Rises (2012)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/interstellar.mp3',
                        title: 'Dust - Interstellar (2014)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/dunkirk.mp3',
                        title: 'Supermarine - Dunkirk (2019)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/dune.mp3',
                        title: 'Dream of Arrakis - Dune (2021)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    background-color: #FAFAFA;

    .title-block {
        background: #FAFAFA;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30vh;
        padding: 60px;
        z-index: 10;

        h1 {
            font-size: clamp(20px, 4vw, 60px);
            letter-spacing: 0.5em;
        }

        h3 {
            font-size: clamp(16px, 2vw, 20px);
            margin-bottom: 1vh;
            font-weight: 600;
            color: rgb(155, 155, 155);

            span {
                color: rgb(155, 155, 155);
            }
        }
    }

    .parallax {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 70vh;
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: top center;
        padding-top: 8vh;
        background-image: url('/images/hans-zimmer.jpg');
    }

    .intro {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        flex-direction: column;

        .player {
            width: 50%;
        }
    }
}

/* Media Queries */

@media screen and (max-width: 959px) and (min-width: 768px) {
    .home-container .block {
        padding: 40px;
        width: 620px;
    }
}

@media screen and (max-width: 767px) {
    .home-container .block {
        padding: 30px;
    }

    .home-container h2 {
        font-size: 30px;
    }

    .home-container .block {
        padding: 30px;
    }

    .home-container .parallax-one,
    .home-container .parallax-two,
    .home-container .parallax-three {
        padding-top: 100px;
        padding-bottom: 100px;
    }
}

@media screen and (max-width: 479px) {
    .home-container .block {
        padding: 30px 15px;
    }
}
</style>