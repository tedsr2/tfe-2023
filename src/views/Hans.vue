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
const background = ref(null);
const minWidth = 100; // Define the minimum width for the 'wide' class
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
            width: '60vw',
        })

    // Reverse the timeline on click
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
            width: '60vw',
        })

    // Reverse the timeline on click
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
                <div class="movie" ref="movie2" @click="startAnimation2">
                    <img class="movie__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                </div>
                <div class="copy" ref="movie2copy">
                    <img class="copy__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                    <div class="card">
                        <h4>The Lion kin<span class="no-spacing">g</span></h4>
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
                <div class="movie" ref="movie3" @click="startAnimation3">
                    <img class="movie__images" src="/images/gladiator.jpg" alt="Rain Man image">
                </div>
                <div class="movie" ref="movie4" @click="startAnimation4">
                    <img class="movie__images" src="/images/inception.jpg" alt="Rain Man image">
                </div>
                <div class="movie" ref="movie5" @click="startAnimation5">
                    <img class="movie__images" src="/images/the-dark-knight-rises.jpg" alt="Rain Man image">
                </div>
                <div class="movie" ref="movie6" @click="startAnimation6">
                    <img class="movie__images" src="/images/interstellar.jpg" alt="Rain Man image">
                </div>
                <div class="movie" ref="movie7" @click="startAnimation7">
                    <img class="movie__images" src="/images/dunkirk.jpg" alt="Rain Man image">
                </div>
                <div class="movie" ref="movie8" @click="startAnimation8">
                    <img class="movie__images" src="/images/dune.jpg" alt="Rain Man image">
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
            z-index: 40;
            display: none;
            flex-direction: column;
            width: 10vw;
            height: 60vh;
            position: absolute;
            opacity: 0;

            .copy__images {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

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