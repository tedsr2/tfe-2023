<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import { ref, onMounted } from 'vue';

//REFF

const all = ref(null);
const block1 = ref(null);
const block2 = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);
const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const music1 = ref(null);
const music2 = ref(null);
const music3 = ref(null);
const audioElementRef1 = ref(null);
const audioElementRef2 = ref(null);
const audioElementRef3 = ref(null);

//CUT MUSIC

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
    audioElementRef1.value = music1.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection1, options);
    observer.observe(music1.value);
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
    audioElementRef2.value = music2.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection2, options);
    observer.observe(music2.value);
});

const handleIntersection3 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef3.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef3.value = music3.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection3, options);
    observer.observe(music3.value);
});

//GSAP ANIMATION

gsap.registerPlugin(ScrollTrigger)

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
    gsap.from(img1.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img1.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music1.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music1.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box1.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box1.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img2.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img2.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music2.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music2.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box2.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box2.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img3.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img3.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music3.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music3.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box3.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box3.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

//GSAP RELOAD OPACITY ANIMATION

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
    <div class="hans-container">
        <Header />
        <main ref="all">
            <section class="intro-container">
                <div class="intro">
                    <div ref="text" class="intro__text">
                        <p>Alexandre Desplat is a composer celebrated for his
                            ability to capture the essence of stories through music. Desplat's approach is
                            akin to painting with sound, as he weaves intricate musical tapestries that complement the
                            visual and emotional facets of each film. His compositions range from intimate and introspective
                            to grand and sweeping, adapting effortlessly to a variety of genres.</p>
                    </div>
                    <div class="intro__block">
                        <div ref="block1" class="intro__cover hidden">white</div>
                        <div class="intro__image"></div>
                        <div ref="block2" class="intro__cover hidden">white</div>
                    </div>
                </div>
            </section>
            <div class="splitter hidden">line</div>
            <section class="disco-container">
                <div class="disco">
                    <div class="disco__block">
                        <div ref="box1" class="disco__box disco__box--image">
                            <img ref="img1" class="disco__image" src="/images/the-danish-girl.jpg"
                                alt="The Danish Girl image">
                            <div class="player" ref="music1">
                                <AudioPlayer ref="audioElementRef1" :option="{
                                    src: '/audio/the-danish-girl.mp3',
                                    title: 'Lily\'s Dream - The Danish Girl (2015)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2015</h3>
                            <p class="disco__text">Alexandre Desplat's score for "The Danish Girl" delicately captured the
                                emotional journey of the characters. The music reflects the intimate and introspective
                                nature of the film's exploration of gender identity and self-discovery.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box2" class="disco__box disco__box--image">
                            <img ref="img2" class="disco__image" src="/images/the-shape-of-water.jpg"
                                alt="The Shape of Water image">
                            <div class="player" ref="music2">
                                <AudioPlayer ref="audioElementRef2" :option="{
                                    src: '/audio/the-shape-of-water.mp3',
                                    title: 'Underwater Kiss - The Shape of Water (2017)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2017</h3>
                            <p class="disco__text">Alexandre Desplat's enchanting score for "The Shape of Water" contributed
                                to the film's fairy-tale-like atmosphere. The music beautifully echoed the romance and
                                otherworldly connection between the main characters.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box3" class="disco__box disco__box--image">
                            <img ref="img3" class="disco__image" src="/images/jaccuse.jpg" alt="J'accuse image">
                            <div class="player" ref="music3">
                                <AudioPlayer ref="audioElementRef3" :option="{
                                    src: '/audio/jaccuse.mp3',
                                    title: 'Alfred Dreyfus - J\'accuse (1981)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2019</h3>
                            <p class="disco__text">For "J'accuse," Desplat's score enhanced the film's dramatic tension and
                                historical context. The music added depth to the narrative, complementing the story's
                                exploration of the Dreyfus Affair.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.hans-container {
    width: 100%;
    min-height: 100vh;
}

.intro-container {
    position: relative;
    z-index: 5;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .intro__block {
        width: 30%;
        height: 80vh;
        z-index: 5;
        margin-bottom: 30vh;

        .intro__image {
            background-image: url('/images/alexandre-desplat.jpg');
            background-size: cover;
            background-position: 80%;
            height: 100%;
            width: 100%;
            position: relative;
            padding: 20px;
            overflow: hidden;
        }

        .intro__cover {
            position: relative;
            width: 101%;
            height: 20vh;
            background-color: #FAFAFA;
            z-index: 10;
        }
    }

    .intro__text {
        z-index: 10;
        display: flex;
        text-align: start;
        width: 60%;
        margin: 16vh 4vw;
        margin-bottom: -10vh;

        p {
            font-size: clamp(1.2rem, 2vw, 2.5rem);
            line-height: clamp(25px, 2.5vw, 50px);
        }
    }
}

.disco {
    width: 100%;
    padding: 20vh 0;

    .disco__block {
        display: flex;
        align-items: center;
        height: 100vh;

        .disco__box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            width: 50%;
            padding: 60px;

            .player {
                position: relative;
                width: 100%;
                height: 100%;
            }

            .disco__date {
                font-size: clamp(8rem, 4vw, 12rem);
            }

            .disco__text {
                text-align: right;
                width: 70%;
                font-weight: 500;
                font-size: clamp(1rem, 1.2vw, 2rem);
                line-height: clamp(1rem, 1.4vw, 2rem);

                a {
                    text-decoration: underline;
                    transition: all 0.25s ease-in-out;
                    cursor: pointer;
                }

                a:hover {
                    color: #FAFAFA;
                    background-color: #111111;
                }
            }
        }

        .disco__box--image {
            padding: 0 0 0 60px;
            display: flex;
            align-items: center;

            .disco__image {
                height: 60vh;
                width: 100%;
                object-fit: cover;
            }
        }
    }
}

@media screen and (max-width: 600px) {

    .disco__block {

        .disco__box--image {
            .disco__image {
                width: 100% !important;
            }
        }

        .disco__box--text {

            .disco__text {
                width: 100% !important;
            }
        }
    }
}

@media screen and (max-width: 800px) {

    .intro__text {
        width: 100% !important;
        padding: 0px 60px;
    }
}

@media screen and (max-width: 1000px) {

    .disco__block {
        flex-direction: column-reverse;
        align-items: center;
        height: auto !important;

        .disco__box {
            width: 100% !important;
        }

        .disco__box--image {
            padding: 60px !important;
        }
    }
}
</style>