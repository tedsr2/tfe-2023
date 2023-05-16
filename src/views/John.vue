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
                <h1 class="title">john william<span class="no-spacing">s</span></h1>
            </div>
        </section>

        <section class="block-container">
            <div class="block block-left">
                <div class="card">
                    <h4>Jaw<span class="no-spacing">s</span></h4>
                    <p>Oscar winner - Best Music, Original Dramatic Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/jaws.mp3',
                        title: 'Shark Theme - Jaws (1975)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
            <div class="block"><img class="images" src="/images/jaws.jpg" alt="Jaws image"></div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/star-wars.jpg" alt="Star Wars image"></div>
            <div ref="block1" class="block block-left">
                <div class="card">
                    <h4 ref="content1">Star War<span class="no-spacing">s</span></h4>
                    <p>Oscar winner - Best Music, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/star-wars.mp3',
                        title: 'Main Theme - Star Wars (1977)',
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
                    <h4>Indiana Jone<span class="no-spacing">s</span></h4>
                    <p>Oscar nominations - Best Music, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/indiana-jones.mp3',
                        title: 'The Raiders March - Indiana Jones (1981)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
            <div class="block"><img class="images" src="/images/indiana-jones.jpg" alt="Indiana Jones image"></div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/e.t.jpg" alt="E.T image"></div>
            <div ref="block2" class="block block-left">
                <div class="card">
                    <h4 ref="content2">E.<span class="no-spacing">T</span></h4>
                    <p>Oscar winner - Best Music, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/e.t.mp3',
                        title: 'Flying Theme - E.T (1982)',
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
                    <h4>Schindler's Lis<span class="no-spacing">t</span></h4>
                    <p>Oscar winner - Best Music, Original Score</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/schindlers-list.mp3',
                        title: 'Theme - Schindlers List (1993)',
                        coverImage: '',
                        progressBarColor: '#111111',
                        indicatorColor: '#111111',
                    }" />
                </div>
            </div>
            <div class="block"><img class="images" src="/images/schindlers-list.jpg" alt="Schindler's List image">
            </div>
        </section>

        <section class="block-container">
            <div class="block"><img class="images" src="/images/jurassic-park.jpg" alt="Jurassic Park image"></div>
            <div ref="block3" class="block block-left">
                <div class="card">
                    <h4 ref="content3">Jurassic Par<span class="no-spacing">k</span></h4>
                    <p>Grammy nominations - Best Instrumental Composition Written for a Motion Picture or for Television</p>
                </div>
                <div class="player">
                    <AudioPlayer :option="{
                        src: '/audio/jurassic-park.mp3',
                        title: 'Theme - Jurassic Park (1993)',
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
        background-image: url('/images/john-williams.jpg');
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