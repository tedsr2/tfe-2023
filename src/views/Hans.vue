<script setup>
import Header from '../components/Header.vue';
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const titleblock = ref(null);
const block1 = ref(null);
const content1 = ref(null);
const block2 = ref(null);
const content2 = ref(null);
const block3 = ref(null);
const content3 = ref(null);
const block4 = ref(null);
const content4 = ref(null);

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

onMounted(() => {
    gsap.to(block1.value, {
        scrollTrigger: {
            trigger: content1.value,
            scrub: true,
            start: "top 30%",
            end: "top top",
            markers: true,
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 3,
    });
}
);

onMounted(() => {
    gsap.to(block2.value, {
        scrollTrigger: {
            trigger: content2.value,
            scrub: true,
            start: "top 30%",
            end: "top top",
            markers: true,
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 3,
    });
}
);

onMounted(() => {
    gsap.to(block3.value, {
        scrollTrigger: {
            trigger: content3.value,
            scrub: true,
            start: "top 30%",
            end: "top top",
            markers: true,
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 3,
    });
}
);

onMounted(() => {
    gsap.to(block4.value, {
        scrollTrigger: {
            trigger: content4.value,
            scrub: true,
            start: "top 30%",
            end: "top top",
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
            <div ref="titleblock" class="title-container">
                <h3 ref="title">composo<span class="no-spacing">r</span></h3>
                <h1 class="title">hans zimme<span class="no-spacing">r</span></h1>
            </div>
        </section>

        <section class="block-container">
            <div class="block block-left">
                <div class="card">
                    <h4>Rain Ma<span class="no-spacing">n</span></h4>
                    <p>Oscar nominations - Best Music, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/rain-man.mp3',
                        title: 'Main Theme - Rain man (1988)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
            <div class="block"><img class="images" src="/images/rain-man.jpeg" alt="Rain Man image"></div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/the-lion-king.jpg" alt="The Lion King image"></div>
            <div ref="block1" class="block block-left">
                <div class="card">
                    <h4 ref="content1">The Lion kin<span class="no-spacing">g</span></h4>
                    <p>Oscar winner - Best Music, Original Score</p>
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
            </div>
        </section>

        <section class="block-container">
            <div class="block block-left">
                <div class="card">
                    <h4>Gladiato<span class="no-spacing">r</span></h4>
                    <p>Oscar nominations - Best Music, Original Score</p>
                    <p>Excerpt from the live performance "Live in Prague"</p>
                    <p>Watch the full performance at <a href="https://www.youtube.com/playlist?list=PLcSlQK9vbTGA2hS2E8cLZ36pbtbx11FZ5">this address</a></p>
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
            </div>
            <div class="block"><img class="images" src="/images/gladiator.jpg" alt="Gladiator image"></div>
        </section>
        
        <section class="block-container">
            <div class="block"><img class="images" src="/images/inception.jpg" alt="Inception image"></div>
            <div ref="block2" class="block block-left">
                <div class="card">
                    <h4 ref="content2">Inceptio<span class="no-spacing">n</span></h4>
                    <p>Oscar nominations - Best Achievement in Music Written for Motion Pictures, Original Score</p>
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
            </div>
        </section>

        <section class="block-container">
            <div class="block block-left">
                <div class="card">
                    <h4>The Dark Knight Rise<span class="no-spacing">s</span></h4>
                    <p>Grammy nominations - Best Score Soundtrack for Visual Media</p>
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
            </div>
            <div class="block"><img class="images" src="/images/the-dark-knight-rises.jpg" alt="The Dark Knight Rises image"></div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/interstellar.jpg" alt="Interstellar image"></div>
            <div ref="block3" class="block block-left">
                <div class="card">
                    <h4 ref="content3">Interstella<span class="no-spacing">r</span></h4>
                    <p>Oscar nominations - Best Achievement in Music Written for Motion Pictures, Original Score</p>
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
            </div>
        </section>

        <section class="block-container">
            <div class="block block-left">
                <div class="card">
                    <h4>Dunkir<span class="no-spacing">k</span></h4>
                    <p>Oscar nominations - Best Achievement in Music Written for Motion Pictures, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/dunkirk.mp3',
                        title: 'Supermarine - Dunkirk (2017)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
            <div class="block"><img class="images" src="/images/dunkirk.jpg" alt="Dunkirk image"></div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/dune.jpg" alt="Dune image"></div>
            <div ref="block4" class="block block-left">
                <div class="card">
                    <h4 ref="content4">Dun<span class="no-spacing">e</span></h4>
                    <p>Oscar winner - Best Achievement in Music Written for Motion Pictures, Original Score</p>
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

    .title-container {
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

    .block-container {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;

        .block {
            width: 50%;

            .images {
                width: 100%;
                height: 70vh;
                object-fit: cover;
            }
        }

        .block-left {
            height: 70vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h4 {
                    font-size: clamp(20px, 3vw, 60px);
                }
            }

            .player {
                width: 100%;
            }
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