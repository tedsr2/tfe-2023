<script setup>
import Menu from '../components/Menu.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const subtitle = ref(null);
const scroll = ref(null);
const homecontainer = ref(null);
const headphonebackground = ref(null);
const headphone = ref(null);

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin);

onMounted(() => {
    gsap.to(subtitle.value, {
        scrollTrigger: {
            trigger: subtitle.value,
            scrub: true,
            start: "top 30%",
            end: "bottom top",
            markers: true,
            invalidateOnResize: true,
        },
        opacity: 0.5,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.timeline()
        .to(title.value, {
            scrollTrigger: {
                trigger: subtitle.value,
                scrub: true,
                start: "top 30%",
                end: "bottom top",
                markers: true,
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
//             duration: 2,
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
</script>

<template>
    <div ref="homecontainer" class="home-container">

        <section class="mobile">
            <p>To experience the full experience of soundtrack, pls use the website on desktop</p> 
        </section>

        <section class="background">
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

        <section class="middle">
            <p>In the wild, a sound is a deep valley that has been filled with sea water.</p>
            <p>In physics, sound is a vibration that propagates as an acoustic wave.</p>
            <p>In movies, these sounds are used to create atmosphere, feelings, and emotions...</p>
            <p>
                Today you will be given the opportunity to dive into the work of some of the greatest composers of all
                times.
            </p>
        </section>

        <section class="bottom">
            <div class="gradient">
                <Menu />
            </div>
        </section>

    </div>
</template>

<style scoped lang="scss">
.home-container {
    width: 100%;
    height: 100vh;

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
        min-height: 300vh;
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

    .middle {
        margin-top: -200vh;
        height: 200vh;
        width: 100vw;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            width: 700px;
            text-align: center;
            margin-bottom: 4vh;
            max-width: 100vw;
        }

    }

    .bottom {
        height: 100vh;
        width: 100vw;
        background-color: #292b31;
        z-index: 10;

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
    }
}
</style>