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
const movie1copy = ref(null);
const movie2copy = ref(null);
const movie3copy = ref(null);
const movie4copy = ref(null);
const movie5copy = ref(null);
const movie6copy = ref(null);
const music1 = ref(null);
const music2 = ref(null);
const music3 = ref(null);
const music4 = ref(null);
const music5 = ref(null);
const music6 = ref(null);
const title1 = ref(null);
const title2 = ref(null);
const title3 = ref(null);
const title4 = ref(null);
const title5 = ref(null);
const title6 = ref(null);
const card1 = ref(null);
const card2 = ref(null);
const card3 = ref(null);
const card4 = ref(null);
const card5 = ref(null);
const card6 = ref(null);
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
</script>   

<template>
    <div class="container">
        <Header />

        <section class="mobile">
            <p>To live the Soundtracks experience to its fullest, please use the desktop version.</p> 
        </section>

        <section>
            <div class="parallax-container hidden" title="John Williams photo">
                john-williams
            </div>
        </section>

        <section>
            <div ref="titleblock" class="title-container">
                <h3 ref="title">composo<span class="no-spacing">r</span></h3>
                <h1 class="title">john william<span class="no-spacing">s</span></h1>
            </div>
        </section>

        <section>
            <div class="nav-container">
                <div class="background hidden" ref="background">Background</div>
                <div class="movie" ref="movie1" @click="startAnimation1" :class="{ 'wide': isWide }">
                    <img class="movie__images" src="/images/jaws.jpg" alt="Jaws image">
                </div>
                <div class="copy" ref="movie1copy">
                    <img class="copy__images" src="/images/jaws.jpg" alt="Jaws image">
                    <h4 ref="title1">Shark Them<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music1">
                        <AudioPlayer :option="{
                            src: '/audio/jaws.mp3',
                            title: 'Jaws (1975)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card1">
                        <p>Oscar winner - Best Music, Original Dramatic Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie2" @click="startAnimation2">
                    <img class="movie__images" src="/images/star-wars.jpg" alt="Star Wars image">
                </div>
                <div class="copy" ref="movie2copy">
                    <img class="copy__images" src="/images/star-wars.jpg" alt="Star Wars image">
                    <h4 ref="title2" class="long-title">The Imperial Marc<span class="no-spacing">h</span></h4>
                    <div class="player" ref="music2">
                        <AudioPlayer :option="{
                            src: '/audio/star-wars.mp3',
                            title: 'Star Wars (1977)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card2">
                        <p>Oscar winner - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie3" @click="startAnimation3">
                    <img class="movie__images" src="/images/indiana-jones.jpg" alt="Indiana Jones image">
                </div>
                <div class="copy" ref="movie3copy">
                    <img class="copy__images" src="/images/indiana-jones.jpg" alt="Indiana Jones image">
                    <h4 ref="title3" class="long-title">The Raiders Marc<span class="no-spacing">h</span></h4>
                    <div class="player" ref="music3">
                        <AudioPlayer :option="{
                            src: '/audio/indiana-jones.mp3',
                            title: 'Indiana Jones (1981)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card3">
                        <p>Oscar nominee - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie4" @click="startAnimation4">
                    <img class="movie__images" src="/images/e.t.jpg" alt="E.T image">
                </div>
                <div class="copy" ref="movie4copy">
                    <img class="copy__images" src="/images/e.t2.jpg" alt="E.T image">
                    <h4 ref="title4">Flying Them<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music4">
                        <AudioPlayer :option="{
                            src: '/audio/e.t.mp3',
                            title: 'E.T (1982)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card4">
                        <p>Oscar winner - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie5" @click="startAnimation5">
                    <img class="movie__images" src="/images/schindlers-list2.jpg" alt="Schindlers List Rises image">
                </div>
                <div class="copy" ref="movie5copy">
                    <img class="copy__images" src="/images/schindlers-list.jpg" alt="Schindlers List image">
                    <h4 ref="title5">Main Them<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music5">
                        <AudioPlayer :option="{
                            src: '/audio/schindlers-list.mp3',
                            title: 'Schindlers List (1993)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card5">
                        <p>Oscar winner - Best Music, Original Score</p>
                        <p class="hidden">/</p>
                    </div>
                </div>
                <div class="movie" ref="movie6" @click="startAnimation6">
                    <img class="movie__images" src="/images/jurassic-park.jpg" alt="Jursassic Park image">
                </div>
                <div class="copy" ref="movie6copy">
                    <img class="copy__images" src="/images/jurassic-park.jpg" alt="Jurassic Park image">
                    <h4 ref="title6">Main Them<span class="no-spacing">e</span></h4>
                    <div class="player" ref="music6">
                        <AudioPlayer :option="{
                            src: '/audio/jurassic-park.mp3',
                            title: 'Jursassic Park (1993)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                    </div>
                    <div class="card" ref="card6">
                        <p>Grammy nominee - Best Instrumental Composition</p>
                        <p class="hidden">/</p>
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
        background-image: url('/images/john-williams.jpg');
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
                height: 30vh;
                margin-top: -12vh;
                font-size: clamp(60px, 8vw, 200px);
            }

            .long-title {
                margin-top: -7vh;
                font-size: clamp(60px, 5vw, 200px);
            }

            .player {
                z-index: 49;
                display: none;
                width: 100%;
                opacity: 0;
            }

            .card {
                z-index: 48;
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