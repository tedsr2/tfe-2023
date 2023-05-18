<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import 'vue3-audio-player/dist/style.css'

const title = ref(null);
const subtitle = ref(null);
const homecontainer = ref(null);
const headphonebackground = ref(null);
const headphone = ref(null);
const button = ref(null);

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
    gsap.to(title.value, {
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

const startAnimation1 = () => {
    gsap.timeline()
        .to(button.value, {
            delay: -0.5,
            duration: 1,
            y: '+100',
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .to(window, { duration: 4, ease: "power4.inOut", scrollTo: "#someID" })
};

onMounted(() => {
    gsap.timeline()
        .from(headphone.value, {
            delay: 1,
            duration: 2,
            opacity: 0,
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .to(headphone.value, {
            delay: 1,
            duration: 1,
            opacity: 0,
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .to(headphonebackground.value, {
            delay: 0.5,
            duration: 1,
            backgroundColor: 'none',
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .from(title.value, {
            duration: 1,
            y: '+100',
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .from(subtitle.value, {
            delay: -0.5,
            duration: 1,
            y: '+100',
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
        .from(button.value, {
            delay: -0.5,
            duration: 1,
            y: '+100',
            autoAlpha: 0,
            ease: 'black.out(1.7)',
        })
})
</script>

<template>
    <div ref="homecontainer" class="home-container">
        <section class="background">
            <div class="mask">
                <div class="title-container">
                    <div>
                        <h1 ref="title">soundtrack<span class="no-spacing">s</span></h1>
                        <h3 ref="subtitle">the sound of movie<span class="no-spacing">s</span></h3>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <button ref="button" @click="startAnimation1">
                    dive
                </button>
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

        <div id="section" class="bottom">
            <div class="gradient">
                <h2 id="someID">Sound & Movies</h2>
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
    height: 100vh;

    .headphone-container {
        position: fixed;
        top: 0;
        z-index: 30;
        background-color: #111111;
        width: 100vw;
        height: 100vh;
        color: white;
        display: flex;
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
    }

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

    .button-container {
        position: relative;
        z-index: 20;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        button {
            margin: 20vh 0vh;
            background-color: #292b31;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 600;
            cursor: pointer;
            transition-duration: 0.5s;
        }

        button:hover {
            background-color: #717582;
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