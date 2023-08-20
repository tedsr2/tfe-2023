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
const music2 = ref(null);
const music3 = ref(null);
const audioElementRef2 = ref(null);
const audioElementRef3 = ref(null);

//CUT MUSIC

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
                        <p>A composer known for his versatility and innovation, Daniel Pemberton has carved a unique niche
                            in the realm of film scoring. From blending
                            contemporary and vintage sounds to experimenting with genre-defying arrangements, Pemberton's
                            music is a testament to his creativity. Pemberton's ability to breathe life into narratives
                            through his inventive scores
                            cements his place as a modern maestro of cinematic music.</p>
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
                            <img ref="img1" class="disco__image" src="/images/steve-jobs.jpg" alt="Steve Jobs image">
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2015</h3>
                            <p class="disco__text">Daniel Pemberton's score for "Steve Jobs" featured a unique blend of
                                electronic and orchestral elements, mirroring the technological innovation and personal
                                complexities of the film's titular character. Discover the complete score <a target="_blank"
                                    href="https://www.youtube.com/playlist?list=PLfJrhODF82Z990odM5s-84YR7Vkw_VeIH">here</a>.
                            </p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box2" class="disco__box disco__box--image">
                            <img ref="img2" class="disco__image" src="/images/spiderman.jpg" alt="Spider-man image">
                            <div class="player" ref="music2">
                                <AudioPlayer ref="audioElementRef2" :option="{
                                    src: '/audio/spiderman.mp3',
                                    title: 'What\'s Up Danger -  Spider-Man: Into The Spider-verse (2018)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2018</h3>
                            <p class="disco__text">Pemberton's work on "Spider-Man: Into the Spider-Verse" embraced the
                                film's innovative animation style and diverse characters. He crafted a dynamic and
                                genre-blending score that perfectly complemented the film's unique storytelling approach.
                                Discover the full score <a target="_blank"
                                    href="https://www.youtube.com/playlist?list=OLAK5uy_n44Lz6fkAcYPNkmY1ycAArPkZR6xWI_Yg">here</a>.

                            </p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box3" class="disco__box disco__box--image">
                            <img ref="img3" class="disco__image" src="/images/spiderman-dos.jpeg" alt="Spider-man image">
                            <div class="player" ref="music3">
                                <AudioPlayer ref="audioElementRef3" :option="{
                                    src: '/audio/spiderman-dos.mp3',
                                    title: 'Am I Dreaming - Spider-Man: Across the Spider-Verse (2023)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2023</h3>
                            <p class="disco__text">5 years after the release of "Spider-Man: Into the Spider-Verse",
                                Pemberton returned to the world of the web-slinger with his work on the sequel, "Spider-Man:
                                Across the Spider-Verse".
                                Living up to the expectations of the original film, Pemberton's created a score that
                                captured the spirit of every character in the film and unintentionally starting a trend on
                                social networks with the "Spider-Man 2099" music. Discover the full score <a target="_blank"
                                    href="https://www.youtube.com/playlist?list=OLAK5uy_nciDYVjuDwvq7nqDH5Rc8JLF58G81skwQ">here</a>.
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
            background-image: url('/images/daniel-pemberton.jpg');
            background-size: cover;
            background-position: 50%;
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