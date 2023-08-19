<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from 'vue';

const isHeaderAnimationActive = ref(false);

const handleHeaderAnimationStart = () => {
    isHeaderAnimationActive.value = true;
}


//REFF

const all = ref(null);
const title = ref(null);
const image = ref(null);
const subtitle = ref(null);
const text = ref(null);
const catchphrase1 = ref(null);
const catchphrase2 = ref(null);
const catchphrase3 = ref(null);
const catchphrasetitle = ref(null);
const line1 = ref(null);
const line2 = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const block3 = ref(null);
const block4 = ref(null);
const block5 = ref(null);
const block6 = ref(null);
const block7 = ref(null);
const block8 = ref(null);
const composerintro = ref(null);



//GSAP ANIMATION

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.to(title.value, {
        scrollTrigger: {
            trigger: title.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(image.value, {
        scrollTrigger: {
            trigger: image.value,
            scrub: true,
            start: "top 90%",
            end: "top top",
            invalidateOnResize: true,
        },
        width: "100%",
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.from(subtitle.value, {
        scrollTrigger: {
            trigger: image.value,
            scrub: true,
            start: "50% 100%",
            end: "50% 50%",
            invalidateOnResize: true,
        },
        y: "400",
        duration: 5,
    })
}
);

onMounted(() => {
    gsap.to(subtitle.value, {
        scrollTrigger: {
            trigger: image.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(text.value, {
        scrollTrigger: {
            trigger: text.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(catchphrase1.value, {
        scrollTrigger: {
            trigger: catchphrase1.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(catchphrase2.value, {
        scrollTrigger: {
            trigger: catchphrase2.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(catchphrase3.value, {
        scrollTrigger: {
            trigger: catchphrase3.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(catchphrasetitle.value, {
        scrollTrigger: {
            trigger: catchphrasetitle.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(composerintro.value, {
        scrollTrigger: {
            trigger: composerintro.value,
            scrub: true,
            start: "50% 30%",
            end: "50% top",
            invalidateOnResize: true,
        },
        opacity: 0,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(line1.value, {
        scrollTrigger: {
            trigger: line1.value,
            start: "50% 90%",
            invalidateOnResize: true,
        },
        width: "100%",
        duration: 0.5,
    });
}
);

onMounted(() => {
    gsap.to(line2.value, {
        scrollTrigger: {
            trigger: line2.value,
            start: "50% 90%",
            invalidateOnResize: true,
        },
        width: "100%",
        duration: 0.75,
    });
}
);

onMounted(() => {
    gsap.from(catchphrase2.value, {
        scrollTrigger: {
            trigger: catchphrase2.value,
            start: "50% 90%",
            invalidateOnResize: true,
        },
        opacity: 0.25,
        duration: 0.75,
    });
}
);

onMounted(() => {
    gsap.from(catchphrase3.value, {
        scrollTrigger: {
            trigger: catchphrase3.value,
            start: "50% 90%",
            invalidateOnResize: true,
        },
        opacity: 0.25,
        duration: 0.75,
    });
}
);

onMounted(() => {
    gsap.from(block1.value, {
        scrollTrigger: {
            trigger: block1.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: 100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(block2.value, {
        scrollTrigger: {
            trigger: block2.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: -100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.from(block3.value, {
        scrollTrigger: {
            trigger: block3.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: 100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(block4.value, {
        scrollTrigger: {
            trigger: block4.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: -100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.from(block5.value, {
        scrollTrigger: {
            trigger: block5.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: 100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(block6.value, {
        scrollTrigger: {
            trigger: block6.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: -100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.from(block7.value, {
        scrollTrigger: {
            trigger: block7.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: 100,
        duration: 1,
    });
}
);

onMounted(() => {
    gsap.to(block8.value, {
        scrollTrigger: {
            trigger: block8.value,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            invalidateOnResize: true,
        },
        translateY: -100,
        duration: 1,
    });
}
);

//GSAP RELOAD OPACITY ANIMATION

onMounted(() => {
    gsap.from(title.value, {
        delay: 0.25,
        duration: 0.75,
        y: 100,
        rotateX: 45,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    })
})

onMounted(() => {
    gsap.from(all.value, {
        delay: 0.25,
        duration: 0.75,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    })
})
</script>

<template>
    <div class="home-container" :class="{ 'scroll-lock': isHeaderAnimationActive }">
        <Header @header-animation-start="handleHeaderAnimationStart" />
        <main ref="all">
            <section class="intro-container">
                <div class="intro">
                    <div ref="title" class="intro__title">
                        <h2 class="title">Discover The Sound of Movies</h2>
                        <p>Scroll Down</p>
                    </div>
                    <div ref="image" class="intro__image">
                        <div class="mask">
                            <div class="subtitle-container">
                                <h3 ref="subtitle">soundtrack<span class="no-spacing">s</span></h3>
                            </div>
                        </div>
                    </div>
                    <div ref="text" class="intro__text">
                        <p>PROVIDING TIMELESS DISCOGRAPHIES OF THE WORK FROM SOME OF THE MOST IMPORTANT COMPOSERS OF ALL
                            TIMES SO THAT YOU CAN EMBRACE THE SOUND OF MOVIES.</p>
                    </div>
                </div>
            </section>
            <div class="splitter hidden">line</div>
            <section class="catchphrase-container">
                <div class="catchphrase">
                    <div ref="catchphrasetitle" class="catchphrase__title">The sound</div>
                    <div class="catchphrase__box">
                        <div ref="catchphrase1" class="catchphrase__block">
                            <div class="catchphrase__chapter">Nr1. In wilderness.</div>
                            <div class="catchphrase__text">
                                Within the field of the wild, a sound materializes itself as a
                                deep valley within the earth's contours, an expansive hollow amid rugged terrains,
                                subsequently imbued by the inexorable ingress of saline oceanic waters.
                            </div>
                        </div>
                        <div ref="line1" class="catchphrase__splitter hidden">line</div>
                        <div ref="catchphrase2" class="catchphrase__block">
                            <div class="catchphrase__chapter">Nr2. In physics.</div>
                            <div class="catchphrase__text">
                                Within the realm of physics, sound manifests as a rhythmic oscillation, setting forth a
                                ripple of vibrational energy that gracefully traverses through the medium, fashioning what
                                is recognized as an acoustic wave, an elegant propagation of auditory sensation.
                            </div>
                        </div>
                        <div ref="line2" class="catchphrase__splitter hidden">line</div>
                        <div ref="catchphrase3" class="catchphrase__block">
                            <div class="catchphrase__chapter">Nr3. In movies.</div>
                            <div class="catchphrase__text">
                                Within the industry of cinema, these auditory expressions these
                                sounds are used by composers to create atmosphere, evoke profound feelings, and emotions...
                                Today you will have the opportunity to dive into the work of some of the greatest composers
                                of all times.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="splitter hidden">line</div>
            <section class="composer-container">
                <div class="composer">
                    <div class="composer__container">
                        <div ref="composerintro" class="composer__intro">
                            <div class="composer__title">Composers</div>
                            <div class="composer__text">Here is the first selection of composers disponible for you to
                                discover.
                            </div>
                        </div>
                        <div class="composer__box">
                            <div class="composer__block margin1">
                                <div ref="block1" class="composer__cover hidden">white</div>
                                <a href="#/hans-zimmer">
                                    <div class="composer__image image1"></div>
                                </a>
                                <div ref="block2" class="composer__cover composer__cover--active">
                                    <div class="composer__name">Hans zimmer <span>- The virtuose of </span></div>
                                </div>
                            </div>
                            <div class="composer__block margin2">
                                <div ref="block3" class="composer__cover hidden">white</div>
                                <a href="#/john-williams">
                                    <div class="composer__image image2"></div>
                                </a>
                                <div ref="block4" class="composer__cover composer__cover--active">
                                    <div class="composer__name">Daniel Pemberton <span>- The virtuose of </span></div>
                                </div>
                            </div>
                            <div class="composer__block margin3">
                                <div ref="block5" class="composer__cover hidden">white</div>
                                <a href="#/michael-giacchino">
                                    <div class="composer__image image3"></div>
                                </a>
                                <div ref="block6" class="composer__cover composer__cover--active">
                                    <div class="composer__name">Michael Giacchino <span>- The virtuose of </span></div>
                                </div>
                            </div>
                            <div class="composer__block margin4">
                                <div ref="block7" class="composer__cover hidden">white</div>
                                <a href="#/">
                                    <div class="composer__image image4 hover-gray"></div>
                                </a>
                                <div ref="block8" class="composer__cover composer__cover--active">
                                    <div class="composer__name">John Williams <span>- Coming Soon</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.scroll-lock {
    overflow: hidden;
}

.home-container {
    width: 100%;
    min-height: 100vh;
    background-color: #FAFAFA;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;


    .intro__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 80%;
        height: 80vh;

        .title {
            font-size: clamp(1rem, 7vw, 9rem);
            line-height: clamp(20px, 7vw, 140px);
            margin-bottom: 40px;
        }

        p {
            font-size: clamp(1rem, 1.5vw, 2rem);
        }
    }

    .intro__image {
        height: 120vh;
        width: 60%;
        background-image: url('/images/sound.jpg');
        background-position: top;
        background-size: cover;
        position: relative;
        padding: 20px;

        .mask {
            height: 100%;
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

        .subtitle-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            text-transform: uppercase;
            height: 100%;
            width: 100%;

            h3 {
                font-size: clamp(30px, 4vw, 64px);
                color: #FAFAFA;
                letter-spacing: 0.5rem;
                margin-bottom: 4vh;
            }

            h3 span {
                color: #FAFAFA;
            }
        }
    }

    .intro__text {
        display: flex;
        text-align: start;
        margin: 20vh 4vw;
        margin-left: 40vw;

        p {
            text-transform: uppercase;
            font-size: clamp(2rem, 3vw, 3rem);
            line-height: clamp(35px, 3vw, 50px);
        }
    }
}

.catchphrase {
    display: flex;
    justify-content: space-between;
    padding: 60px;
    width: 100%;

    .catchphrase__title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: clamp(2rem, 4vw, 6rem);
        width: 10%;
        height: 10vh;
    }

    .catchphrase__box {
        display: flex;
        flex-direction: column;
        width: 60%;

        .catchphrase__splitter {
            height: 2px;
            background-color: #111111;
            width: 0%;
            margin-top: 16vh;
            margin-bottom: 4vh;
        }

        .catchphrase__block {
            display: flex;
            margin: 20px;

            .catchphrase__chapter {
                font-weight: 500;
                font-size: clamp(2rem, 2vw, 2.5rem);
                width: 50%;
            }

            .catchphrase__text {
                font-weight: 700;
                font-size: clamp(1rem, 1vw, 2rem);
                line-height: clamp(10px, 2vw, 30px);
                width: 50%;
            }
        }
    }
}

.composer {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;

    .composer__container {
        width: 100%;

        .composer__intro {
            width: 50%;
            margin-bottom: 10vh;
            position: relative;
            z-index: 10;

            .composer__title {
                font-size: clamp(2rem, 4vw, 6rem);
                font-weight: 600;
                margin-bottom: 4vh;
            }

            .composer__text {
                font-size: clamp(1rem, 2vw, 2rem);
            }
        }

        .composer__box {
            position: relative;
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;
            column-gap: 50px;
            padding: 0 10vw;
            margin-top: -100px;
            z-index: 5;

            .margin1 {
                position: relative;
                z-index: 4;
            }

            .margin2 {
                position: relative;
                margin-top: 25vh;
                z-index: 3;
            }

            .margin3 {
                position: relative;
                margin-top: -50vh;
                z-index: 2;
            }

            .margin4 {
                position: relative;
                margin-top: -25vh;
                z-index: 1;
            }

            .composer__block {
                width: 40vw;
                height: 120vh;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                width: 100%;

                .composer__cover {
                    position: relative;
                    width: 101%;
                    height: 20vh;
                    background-color: #FAFAFA;
                    z-index: 10;

                    &.composer__cover--active {
                        display: flex;
                        justify-content: center;
                    }

                    .composer__name {
                        margin-top: 10vh;
                        font-size: clamp(1rem, 1.5vw, 3rem);
                        font-weight: 600;

                        span {
                            font-weight: 400;
                            font-size: clamp(1rem, 1.5vw, 3rem);
                        }
                    }
                }

                .composer__image {
                    background-position: 40%;
                    background-size: cover;
                    height: 40vw;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.5s ease-in-out;
                    overflow: hidden;
                    cursor: pointer;
                }

                .composer__image:hover {
                    transform: scale(0.95);
                }

                .image1 {
                    background-image: url('/images/hans-zimmer.jpg');
                }

                .image2 {
                    background-image: url('/images/john-williams.jpg');
                }

                .image3 {
                    background-image: url('/images/michael-giacchino.jpg');
                }

                .image4 {
                    background-image: url('/images/john-williams.jpg');
                }

                .hover-gray:hover {
                    filter: grayscale(100%);
                    transform: none;
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {

    .intro:deep(.intro__text) {
        margin-left: 26vw;
    }
}

@media screen and (max-width: 800px) {
    .intro:deep(.intro__title) {
        height: 40vh;

        .title {
            font-weight: 600;
        }
    }

    .intro:deep(.intro__image) {
        width: 100%;
        height: 50vh;
    }

    .intro:deep(.intro__text) {
        margin-left: 4vw;
    }
}
</style>