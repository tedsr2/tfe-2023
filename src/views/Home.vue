<script setup>
import Menu from '../components/Menu.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const subtitle = ref(null);
const homecontainer = ref(null);
const headphonebackground = ref(null);
const headphone = ref(null);
const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);
const p4 = ref(null);

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
    gsap.to(subtitle.value, {
        scrollTrigger: {
            trigger: subtitle.value,
            scrub: true,
            start: "top 30%",
            end: "bottom top",
            invalidateOnResize: true,
        },
        opacity: 0.5,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(title.value, {
        scrollTrigger: {
            trigger: subtitle.value,
            scrub: true,
            start: "top 30%",
            end: "bottom top",
            invalidateOnResize: true,
        },
        opacity: 0.5,
        duration: 1,
    })
}
);

// onMounted(() => {
//     gsap.timeline()
//         .from(headphone.value, {
//             delay: 1,
//             duration: 1,
//             opacity: 0,
//             autoAlpha: 0,
//             ease: 'black.out(1.7)',
//         })
//         .to(headphone.value, {
//             delay: 1,
//             duration: 1,
//             opacity: 0,
//             autoAlpha: 0,
//             ease: 'black.out(1.7)',
//         })
//         .to(headphonebackground.value, {
//             delay: 0.5,
//             duration: 1,
//             backgroundColor: 'none',
//             autoAlpha: 0,
//             ease: 'black.out(1.7)',
//         })
//         .from(title.value, {
//             duration: 1,
//             y: '+100',
//             autoAlpha: 0,
//             ease: 'black.out(1.7)',
//         })
//         .from(subtitle.value, {
//             delay: -0.5,
//             duration: 1,
//             y: '+100',
//             autoAlpha: 0,
//             ease: 'black.out(1.7)',
//         })
// })

const scrollTop = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#top",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

const audioPlayerRef1 = ref(null);
const audioElementRef1 = ref(null);
const audioPlayerRef2 = ref(null);
const audioElementRef2 = ref(null);

const handleIntersection1 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef1.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef1.value = audioPlayerRef1.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection1, options);
    observer.observe(audioPlayerRef1.value);
});

const handleIntersection2 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef2.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef2.value = audioPlayerRef2.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection2, options);
    observer.observe(audioPlayerRef2.value);
});
</script>

<template>
    <div ref="homecontainer" class="home-container">

        <section class="mobile">
            <p>To live the Soundtracks experience to its fullest, please use the desktop version.</p>
        </section>

        <section ref="top" class="background">
            <div class="mask">
                <div class="title-container">
                    <h1 ref="title">soundtrack<span class="no-spacing">s</span></h1>
                    <h3 ref="subtitle">the sound of movie<span class="no-spacing">s</span></h3>
                </div>
            </div>
        </section>

        <section ref="headphonebackground" class="headphone-container">
            <div ref="headphone" class="headphone">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FAFAFA"
                        d="M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z" />
                </svg>
                <p className='uppercase tracking-[1em] m-10 text-center leading-8'>put your headphone</p>
            </div>
        </section>

        <section class="menu">
            <ul>
                <li class="menu-item" @click="scrollTop">
                    <span class="hidden line">line</span><span class="name">top</span>
                </li>
                <li class="menu-item" @click="scrollMid">
                    <span class="hidden line">line</span><span class="name">mid</span>
                </li>
                <li class="menu-item" @click="scrollBottom">
                    <span class="hidden line">line</span><span class="name">bot</span>
                </li>
            </ul>
        </section>

        <div class="parallax-container">

            <section>
                <div class="box box-1">
                    <h1>fea<span class="no-spacing">r</span></h1>
                </div>
            </section>

            <section>
                <div class="parallax parallax-one">
                    <div class="content">
                        <h2 class="title">the batma<span class="no-spacing">n</span></h2>
                        <div class="player" ref="audioPlayerRef1">
                            <AudioPlayer ref="audioElement1" :option="{
                                src: '/audio/the-batman.mp3',
                                title: 'The Batman (2022)',
                                coverImage: '',
                                progressBarColor: '#111111',
                                indicatorColor: '#111111',
                                paused: true
                            }"></AudioPlayer>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="box">
                    <h1>fea<span class="no-spacing">r</span></h1>
                </div>
            </section>

            <section>
                <div class="parallax parallax-two">
                    <div class="content">
                        <h2 class="title">dun<span class="no-spacing">e</span></h2>
                        <div class="player" ref="audioPlayerRef2">
                            <AudioPlayer ref="audioElement2" :option="{
                                src: '/audio/dune.mp3',
                                title: 'Dune (2021)',
                                coverImage: '',
                                progressBarColor: '#111111',
                                indicatorColor: '#111111',
                                paused: true
                            }"></AudioPlayer>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="box">
                    <h1>fea<span class="no-spacing">r</span></h1>
                </div>
            </section>

            <section>
                <div class="parallax parallax-three">
                    <h2 class="title">ENCHANTED FOREST</h2>
                </div>
            </section>

            <section>
                <div class="box">
                    <h1>fea<span class="no-spacing">r</span></h1>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home-container {
    width: 100%;
    height: 100vh;

    .menu {
        position: fixed;
        z-index: 50;
        height: 100%;
        display: flex;
        align-items: center;
        top: 0%;
        color: #FAFAFA;

        li {
            cursor: pointer;
            margin: 20px 20px;
            display: flex;
            align-items: center;
        }

        .line {
            height: 4px;
            width: 20px;
            background-color: #FAFAFA;
        }

        .name {
            opacity: 0;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            transform: translateX(-10px);
            color: #FAFAFA;
        }

        .menu-item:hover .name {
            opacity: 1;
            transform: translateX(10px);
            transition: all 0.3s ease-in-out;
        }

        .menu-item .name {
            transition: all 0.3s ease-in-out;
        }
    }

    .headphone-container {
        position: fixed;
        top: 0;
        z-index: 30;
        background-color: #111111;
        width: 100vw;
        height: 100vh;
        color: white;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .headphone {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                margin-top: 20px;
                text-align: center;
                text-transform: uppercase;
                color: #FAFAFA;
                letter-spacing: 0.2em;
            }
        }
    }

    .background {
        background-image: url('/images/sound.jpg');
        background-position: top;
        background-size: cover;
        height: 100vh;
        position: relative;
        padding: 20px;
        max-width: 100vw;

        .mask {
            width: 100%;
            position: absolute;
            inset: 0;
            -webkit-mask: url('/images/mask.svg');
            mask: url('/images/mask.svg');
            -webkit-mask-position: top;
            mask-position: top;
            -webkit-mask-size: cover;
            mask-size: cover;
        }

        .title-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 20vh 0vh;
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
                margin-bottom: 4vh;
            }
        }
    }

    .parallax-container {
        .box {
            background: #111111;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20vh;
            margin: 0 auto;
            text-align: center;

            h1 {
                font-size: 35px;
                letter-spacing: 8px;
                color: #FAFAFA;
            }

            span {
                color: #FAFAFA;
            }
        }

        .box-1 {
            height: 100vh;
        }

        .parallax {
            padding-top: 200px;
            padding-bottom: 200px;
            overflow: hidden;
            position: relative;
            height: 100vh;
            width: 100%;

            .content {

                .title {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    letter-spacing: 0.2em;
                    font-size: clamp(60px, 8vw, 400px);
                    text-transform: uppercase;
                }

                .player {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .parallax-one::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/images/the-batman.jpg');
            background-size: cover;
            background-position: center;
            z-index: -1;
            animation: scale 40s linear infinite;
        }

        .parallax-two::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('/images/dune.jpg');
            background-size: cover;
            background-position: center;
            z-index: -1;
            animation: scale 40s linear infinite;
        }

        .parallax-three {
            background-image: url('/images/jaws.jpg');
            background-attachment: fixed;
            background-size: cover;
            -moz-background-size: cover;
            -webkit-background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }

        @keyframes scale {
            50% {
                -webkit-transform: scale(1.2);
                -moz-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -o-transform: scale(1.2);
                transform: scale(1.2);
            }
        }
    }
}
</style>