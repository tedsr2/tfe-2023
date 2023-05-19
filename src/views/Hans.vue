<script setup>
import Header from '../components/Header.vue';
import { onMounted, ref, watch, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const titleblock = ref(null);
const movie1 = ref(null);
const movie2 = ref(null);
const movie3 = ref(null);
const movie4 = ref(null);
const movie5 = ref(null);
const movie6 = ref(null);
const movie7 = ref(null);
const movie8 = ref(null);
const movie1copy = ref(null);
const movie2copy = ref(null);
const movie3copy = ref(null);
const movie4copy = ref(null);
const movie5copy = ref(null);
const movie6copy = ref(null);
const movie7copy = ref(null);
const movie8copy = ref(null);
const music1 = ref(null);
const music2 = ref(null);
const music3 = ref(null);
const music4 = ref(null);
const music5 = ref(null);
const music6 = ref(null);
const music7 = ref(null);
const music8 = ref(null);
const title1 = ref(null);
const title2 = ref(null);
const title3 = ref(null);
const title4 = ref(null);
const title5 = ref(null);
const title6 = ref(null);
const title7 = ref(null);
const title8 = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);
const card7 = ref(null);
const card8 = ref(null);
const background = ref(null);
const minWidth = 100;
const isWide = ref(false);

onMounted(() => {
    watch(
        () => movie1.value.offsetWidth,
        (newWidth) => {
            nextTick(() => {
                isWide.value = newWidth >= minWidth;
            });
        }
    );
});

console.log(isWide.value);

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

const startAnimation1 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie1copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie1copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title1.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music1.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music1.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card1.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation2 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie2copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie2copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title2.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music2.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music2.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card2.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation3 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie3copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie3copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title3.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music3.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music3.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card3.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation4 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie4copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie4copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title4.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music4.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music4.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card4.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation5 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie5copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie5copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title5.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music5.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music5.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card5.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation6 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie6copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie6copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title6.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music6.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music6.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card6.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation7 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie7copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie7copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title7.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music7.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music7.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card7.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation8 = () => {
    const tl = gsap.timeline();

    tl.to(movie1.value, {
        duration: 0.2,
        width: '10vw',
        opacity: 0,
    })
        .to(movie2.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(background.value, {
            duration: 0.01,
            display: 'block',
            zIndex: 40,
        })
        .to(movie8copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie8copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '-10vh',
            width: '70vw',
        })
        .to(title8.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music8.value, {
            duration: 0.01,
            display: 'block',
        })
        .to(music8.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(card8.value, {
            delay: -0.5,
            duration: 0.5,
            opacity: 1,
        })

    background.value.addEventListener('click', () => {
        tl.reverse();
    });
};
</script>   

<template>
    <div class="container">
        <Header />
        <section>
            <div class="parallax-container hidden" title="Hans Zimmer photo">
                hans-zimmer
            </div>
        </section>

        <section>
            <div ref="titleblock" class="title-container">
                <h3 ref="title">composo<span class="no-spacing">r</span></h3>
                <h1 class="title">hans zimme<span class="no-spacing">r</span></h1>
            </div>
        </section>

        <section>
            <div class="nav-container">
                <div class="background hidden" ref="background">Background</div>
                <div class="movie" ref="movie1" @click="startAnimation1" :class="{ 'wide': isWide }">
                    <img class="movie__images" src="/images/rain-man.jpeg" alt="Rain Man image">
                </div>
                <div class="copy" ref="movie1copy">
                    <img class="copy__images" src="/images/rain-man.jpeg" alt="Rain Man image">
                    <h4 ref="title1">Main Them<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music1">
                        <AudioPlayer :option="{
                            src: '/audio/rain-man.mp3',
                            title: 'Rain man (1988)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card1">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p>Rain Man made him known to the general public.</p>
                    </div>
                </div>
                <div class="movie" ref="movie2" @click="startAnimation2">
                    <img class="movie__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                </div>
                <div class="copy" ref="movie2copy">
                    <img class="copy__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                    <h4 ref="title2">Remembe<span class="no-spacing">r</span></h4>
                    <div class="player" ref="music2">
                        <AudioPlayer :option="{
                            src: '/audio/lion-king.mp3',
                            title: 'The Lion King (1994)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card2">
                        <p>Oscar winner - Best Music, Original Score</p>
                        <p>The Lion King was his first Oscar win.</p>
                    </div>
                </div>
                <div class="movie" ref="movie3" @click="startAnimation3">
                    <img class="movie__images" src="/images/gladiator.jpg" alt="Gladiator image">
                </div>
                <div class="copy" ref="movie3copy">
                    <img class="copy__images" src="/images/gladiator.jpg" alt="Gladiator image">
                    <h4 ref="title3" class="long-title">Now We Are Free (live)<span class="no-spacing"></span></h4>
                    <div class="player" ref="music3">
                        <AudioPlayer :option="{
                            src: '/audio/gladiator.mp3',
                            title: 'Gladiator (2000)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card3">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p>We encourage you to listen to the entire <a href="https://www.youtube.com/playlist?list=PLcSlQK9vbTGA2hS2E8cLZ36pbtbx11FZ5" target="_blank">LIVE</a></p>
                    </div>
                </div>
                <div class="movie" ref="movie4" @click="startAnimation4">
                    <img class="movie__images" src="/images/inception.jpg" alt="Inception image">
                </div>
                <div class="copy" ref="movie4copy">
                    <img class="copy__images" src="/images/inception.jpg" alt="Inception image">
                    <h4 ref="title4">Tim<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music4">
                        <AudioPlayer :option="{
                            src: '/audio/inception.mp3',
                            title: 'Inception (2010)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card4">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie5" @click="startAnimation5">
                    <img class="movie__images" src="/images/the-dark-knight-rises.jpg" alt="The Dark Knight Rises image">
                </div>
                <div class="copy" ref="movie5copy">
                    <img class="copy__images" src="/images/the-dark-knight-rises.jpg" alt="The Dark Knight Rises image">
                    <h4 ref="title5">Ris<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music5">
                        <AudioPlayer :option="{
                            src: '/audio/the-dark-knight-rises.mp3',
                            title: 'The Dark Knight Rises (2012)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card5">
                        <p>Grammy nominee - Best Score Soundtrack for Visual Media</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie6" @click="startAnimation6">
                    <img class="movie__images" src="/images/interstellar.jpg" alt="Interstellar image">
                </div>
                <div class="copy" ref="movie6copy">
                    <img class="copy__images" src="/images/interstellar.jpg" alt="Interstellar image">
                    <h4 ref="title6">Dus<span class="no-spacing">t</span></h4>
                    <div class="player" ref="music6">
                        <AudioPlayer :option="{
                            src: '/audio/interstellar.mp3',
                            title: 'Interstellar (2014)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card6">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie7" @click="startAnimation7">
                    <img class="movie__images" src="/images/dunkirk.jpg" alt="Dunkirk image">
                </div>
                <div class="copy" ref="movie7copy">
                    <img class="copy__images" src="/images/dunkirk.jpg" alt="Dunkirk image">
                    <h4 ref="title7">Supermarin<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music7">
                        <AudioPlayer :option="{
                            src: '/audio/dunkirk.mp3',
                            title: 'Dunkirk (2017)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card7">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p>The whole score is based on the tiktok of a clock.</p>
                    </div>
                </div>
                <div class="movie" ref="movie8" @click="startAnimation8">
                    <img class="movie__images" src="/images/dune.jpg" alt="Dune image">
                </div>
                <div class="copy" ref="movie8copy">
                    <img class="copy__images" src="/images/dune.jpg" alt="Dune image">
                    <h4 ref="title8" class="long-title">Dream of Arraki<span class="no-spacing">s</span></h4>
                    <div class="player" ref="music8">
                        <AudioPlayer :option="{
                            src: '/audio/dune.mp3',
                            title: 'Dune (2021)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card8">
                        <p>Oscar winner - Best Music, Original Score</p>
                        <p>The score was composed as if it was a new musical culture.</p>
                    </div>
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

    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }

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

    .parallax-container {
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

    .nav-container {
        position: absolute;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        background-color: #FAFAFA;

        .background {
            position: absolute;
            z-index: 10;
            display: none;
            width: 100vw;
            height: 100vh;
            cursor: pointer;
        }

        .copy {
            z-index: 50;
            display: none;
            flex-direction: column;
            align-items: center;
            width: 10vw;
            height: 60vh;
            position: absolute;
            opacity: 0;
            background-color: #FAFAFA;

            .copy__images {
                width: 100%;
                height: 100%;
                opacity: 70%;
                object-fit: cover;
            }

            h4 {
                z-index: 10;
                opacity: 0;
                width: 100%;
                text-align: center;
                margin-top: -12vh;
                font-size: clamp(60px, 8vw, 200px);
            }

            .long-title {
                margin-top: -7vh;
                font-size: clamp(60px, 5vw, 200px);
            }

            .player {
                display: none;
                width: 100%;
                opacity: 0;
            }

            .card {
                width: 100%;
                height: 10vh;
                display: flex;
                opacity: 0;
                padding-top: 20px;
                justify-content: space-between;
                align-items: flex-end;
            }
        }

        .movie {
            z-index: 20;
            width: 10vw;
            height: 60vh;
            margin: 0px 0.5vw;
            transition-duration: 0.5s;
            cursor: pointer;

            .movie__images {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .movie:hover {
            scale: 1.1;
        }

        .wide {
            pointer-events: none;
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