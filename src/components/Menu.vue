<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const a1 = ref(null);
const a2 = ref(null);
const a3 = ref(null);
const container = ref(null);

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.from(a1.value, {
        scrollTrigger: {
            trigger: container.value,
            scrub: true,
            start: "top 60%",
            end: "top 40%",
            markers: true,
            invalidateOnResize: true,
        },
        x: "-200",
        duration: 0.5,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    });
}
);

onMounted(() => {
    gsap.from(a2.value, {
        scrollTrigger: {
            trigger: container.value,
            scrub: true,
            start: "top 40%",
            end: "top 20%",
            markers: true,
            invalidateOnResize: true,
        },
        x: "-200",
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    });
}
);

onMounted(() => {
    gsap.from(a3.value, {
        scrollTrigger: {
            trigger: container.value,
            scrub: true,
            start: "top 20%",
            end: "top 0%",
            markers: true,
            invalidateOnResize: true,
        },
        x: "-200",
        delay: 0.5,
        duration: 0.5,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    });
}
);
</script> 

<template>
    <div class="nav-container" ref="container">
        <div class="link-container" ref="a1">
            <a href="#/hans-zimmer">
                <div class="composer">
                    <h3>hans zimmer</h3>
                    <img class="composer__images" src="/images/hans-zimmer.jpg" alt="Hans Zimmer image">
                </div>
            </a>
            <div>
                <p>Hans Zimmer has scored more than 500 projects across all mediums, which, combined, has been honored with
                    two Academy Awards®, three Golden Globes®, four Grammys®, an American Music Award, and a Tony® Award.
                    He is frequently said to be the greatest movie composer of all times.</p>
            </div>
        </div>
        <div class="link-container" ref="a2">
            <a href="#/john-williams">
                <div class="composer">
                    <h3>john williams</h3>
                    <img class="composer__images" src="/images/john-williams.jpg" alt="John Williams image">
                </div>
            </a>
            <div>
                <p>Throughout his extensive career, Williams created some of the most memorable music in movie history,
                    including the scores and iconic theme songs of many Steven Spielberg and Ridley Scott films.
                    In addition to his film work, Williams was well known as a concert composer and conductor.</p>
            </div>
        </div>
        <div class="link-container" ref="a3">
            <a href="#/michael-giacchino">
                <div class="composer">
                    <h3>michael giacchino</h3>
                    <img class="composer__images" src="/images/michael-giacchino.jpg" alt="Michael Giacchino image">
                </div>
            </a>
            <div>
                <p>Composer and director Michael Giacchino grew up fascinated with both movies and music, and he's gone on
                    to an ideal career writing acclaimed scores for numerous films and television series. Best known for
                    scoring many Pixar animated films plus latter-day installments of franchises spanning Mission:
                    Impossible and Marvel.</p>
            </div>
        </div>
        <!-- <router-link :to="{ name: 'hans' }">
            <div class="composer">
                <img class="composer__images" src="/images/hans-zimmer.jpg" alt="Hans Zimmer image">
            </div>
        </router-link>
        <router-link :to="{ name: 'john' }">
            <div class="composer">
                <img class="composer__images" src="/images/john-williams.jpg" alt="John Williams image">
            </div>
        </router-link>
        <router-link :to="{ name: 'michael' }">
            <div class="composer">
                <img class="composer__images" src="/images/michael-giacchino.jpg" alt="Michael Giacchino image">
            </div>
        </router-link> -->
    </div>
</template>

<style scoped lang="scss">
.nav-container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    padding: 0px 20px;

    .link-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .composer {
            z-index: 20;
            width: 40vw;
            height: 30vh;
            margin: 0.5vw 0px;
            transition-duration: 0.5s;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
            text-align: center;

            h3 {
                color: #FAFAFA;
                position: absolute;
                font-weight: 600;
                font-size: clamp(20px, 2vw, 24px);
                margin: 20px;
            }

            .composer__images {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }

        .composer:hover {
            scale: 1.05;
        }

        p {
            max-width: 40vw;
            margin: 0px 80px;
        }
    }
}</style>