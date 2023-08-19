<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import { ref, onMounted } from 'vue';

//REFF

const block1 = ref(null);
const block2 = ref(null);
const img1 = ref(null);
const img2 = ref(null);
const img3 = ref(null);
const img4 = ref(null);
const img5 = ref(null);
const img6 = ref(null);
const img7 = ref(null);
const img8 = ref(null);
const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const box4 = ref(null);
const box5 = ref(null);
const box6 = ref(null);
const box7 = ref(null);
const box8 = ref(null);
const music1 = ref(null);
const music2 = ref(null);
const music3 = ref(null);
const music4 = ref(null);
const music5 = ref(null);
const music6 = ref(null);
const music7 = ref(null);
const music8 = ref(null);
const audioElementRef1 = ref(null);
const audioElementRef2 = ref(null);
const audioElementRef3 = ref(null);
const audioElementRef4 = ref(null);
const audioElementRef5 = ref(null);
const audioElementRef6 = ref(null);
const audioElementRef7 = ref(null);
const audioElementRef8 = ref(null);

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

const handleIntersection4 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef4.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef4.value = music4.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection4, options);
    observer.observe(music4.value);
});

const handleIntersection5 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef5.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef5.value = music5.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection5, options);
    observer.observe(music5.value);
});

const handleIntersection6 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef6.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef6.value = music6.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection6, options);
    observer.observe(music6.value);
});

const handleIntersection7 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef7.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef7.value = music7.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection7, options);
    observer.observe(music7.value);
});

const handleIntersection8 = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            const audioElement = audioElementRef8.value;
            if (audioElement) {
                audioElement.pause();
            }
        }
    });
};

onMounted(() => {
    audioElementRef8.value = music8.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection8, options);
    observer.observe(music8.value);
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

onMounted(() => {
    gsap.from(img4.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img4.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music4.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music4.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box4.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box4.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img5.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img5.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music5.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music5.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box5.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box5.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img6.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img6.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music6.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music6.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box6.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box6.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img7.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img7.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music7.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music7.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.to(box7.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: box7.value,
            start: "bottom 40%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(img8.value, {
        width: "20%",
        duration: 0.75,
        scrollTrigger: {
            trigger: img8.value,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            toggleActions: "play none none reverse",
        },
    });
});

onMounted(() => {
    gsap.from(music8.value, {
        opacity: 0,
        scrollTrigger: {
            trigger: music8.value,
            start: "top 90%",
            toggleActions: "play none none reverse",
        },
    });
});
</script>

<template>
    <div class="hans-container">
        <Header />
        <main>
            <section class="intro-container">
                <div class="intro">
                    <div ref="text" class="intro__text">
                        <p>Hans Zimmer is a prolific and influential composer known for his masterful film scores that have
                            left an indelible mark on the world of cinema. His diverse body of
                            work spans a wide range of genres, from epic action films to thought-provoking dramas, each
                            composition intricately tailored to enhance the storytelling on the big screen.</p>
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
                            <img ref="img1" class="disco__image" src="/images/rain-man.jpeg" alt="Rain man image">
                            <div class="player" ref="music1">
                                <AudioPlayer ref="audioElementRef1" :option="{
                                    src: '/audio/rain-man.mp3',
                                    title: 'Main Theme - Rain man (1988)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">1988</h3>
                            <p class="disco__text">Rain man was his first huge success as a composer, bringing him an Oscar.
                                While working on it, Zimmer was determined to create a score
                                that conveyed the emotional
                                journey of the characters. He collaborated with Raymond Leppard to bring a unique blend
                                of classical
                                and contemporary musical elements to capture the essence of the film's story.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box2" class="disco__box disco__box--image">
                            <img ref="img2" class="disco__image" src="/images/the-lion-king.jpg" alt="The Lion King image">
                            <div class="player" ref="music2">
                                <AudioPlayer ref="audioElementRef2" :option="{
                                    src: '/audio/lion-king.mp3',
                                    title: 'Remember - The Lion King (1994)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">1994</h3>
                            <p class="disco__text">When composing the iconic music for "The Lion King," Zimmer drew
                                inspiration from African rhythms and melodies. The result was a soundtrack that not only
                                enhanced the animated world but also became a cultural phenomenon in its own right.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box3" class="disco__box disco__box--image">
                            <img ref="img3" class="disco__image" src="/images/gladiator.jpg" alt="Gladiator image">
                            <div class="player" ref="music3">
                                <AudioPlayer ref="audioElementRef3" :option="{
                                    src: '/audio/gladiator.mp3',
                                    title: 'Now We Are Free (live) - Gladiator (2000)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2000</h3>
                            <p class="disco__text">The powerful and sweeping score of "Gladiator" became one of Zimmer's
                                most recognized works. He collaborated with Lisa Gerrard to incorporate her haunting vocals,
                                creating a deeply emotional and epic atmosphere that resonated with audiences worldwide. The
                                audio was recorded during a live in Prague in 2017. Discover the full set <a target="_blank"
                                    href="https://www.youtube.com/playlist?list=PLcSlQK9vbTGA2hS2E8cLZ36pbtbx11FZ5">here</a>.
                            </p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box4" class="disco__box disco__box--image">
                            <img ref="img4" class="disco__image" src="/images/inception.jpg" alt="Inception image">
                            <div class="player" ref="music4">
                                <AudioPlayer ref="audioElementRef4" :option="{
                                    src: '/audio/inception.mp3',
                                    title: 'Time - Inception (2010)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2010</h3>
                            <p class="disco__text">The score of "Inception" features the memorable track "Time," which
                                Zimmer wrote to mirror the concept of layered dreams in the film. He used a ticking sound
                                throughout the piece to represent the ticking of a clock and the sense of urgency present in
                                the dream sequences.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box5" class="disco__box disco__box--image">
                            <img ref="img5" class="disco__image" src="/images/the-dark-knight-rises.jpg"
                                alt="Batman The Dark Knight Rises image">
                            <div class="player" ref="music5">
                                <AudioPlayer ref="audioElementRef5" :option="{
                                    src: '/audio/the-dark-knight-rises.mp3',
                                    title: 'Rise - The Dark Knight Rises (2012)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2012</h3>
                            <p class="disco__text">Zimmer's collaboration with James Newton Howard on "Batman Begins" laid
                                the foundation for the trilogy's distinctive musical style. For "The Dark Knight," Zimmer
                                created the now-iconic Joker theme, a simple but haunting motif that reflects the chaos of
                                the character. For the sequel, he wrote a new iconic theme for the Dark Knight himself.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box6" class="disco__box disco__box--image">
                            <img ref="img6" class="disco__image" src="/images/interstellar.jpg" alt="Interstellar image">
                            <div class="player" ref="music6">
                                <AudioPlayer ref="audioElementRef6" :option="{
                                    src: '/audio/interstellar.mp3',
                                    title: 'Dust - Interstellar (2014)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2014</h3>
                            <p class="disco__text">Hans Zimmer's score for "Interstellar" involved a unique approach.
                                Director Christopher Nolan provided Zimmer with only a single page of handwritten text
                                describing the emotional journey of the film. This sparse guidance allowed Zimmer's
                                creativity to flourish, resulting in a deeply moving and atmospheric soundtrack.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box7" class="disco__box disco__box--image">
                            <img ref="img7" class="disco__image" src="/images/dunkirk.jpg" alt="Dunkirk image">
                            <div class="player" ref="music7">
                                <AudioPlayer ref="audioElementRef7" :option="{
                                    src: '/audio/dunkirk.mp3',
                                    title: 'Supermarine - Dunkirk (2017)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2017</h3>
                            <p class="disco__text">To capture the intensity of the evacuation at Dunkirk, Zimmer composed
                                the soundtrack for "Dunkirk" with a ticking clock motif woven throughout. This musical
                                device, inspired by the sounds of a watch that Zimmer owns, serves as a constant reminder of
                                the time-sensitive nature of the events in the film.</p>
                        </div>
                    </div>
                    <div class="disco__block">
                        <div ref="box8" class="disco__box disco__box--image">
                            <img ref="img8" class="disco__image" src="/images/dune.jpg" alt="Dune image">
                            <div class="player" ref="music8">
                                <AudioPlayer ref="audioElementRef8" :option="{
                                    src: '/audio/dune.mp3',
                                    title: 'Dream of Arrakis - Dune (2021)',
                                    coverImage: '',
                                    progressBarColor: '#111111',
                                    indicatorColor: '#111111',
                                }" />
                            </div>
                        </div>
                        <div class="disco__box disco__box--text">
                            <h3 class="disco__date">2021</h3>
                            <p class="disco__text">In crafting the score for "Dune," Zimmer drew inspiration from the desert
                                landscapes and rich cultural tapestry of the story's universe. He used a blend of
                                traditional instruments and modern techniques to create a sound that captures the grandeur
                                and mystique of the world of Arrakis.</p>
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
            background-image: url('/images/hans-zimmer.jpg');
            background-size: cover;
            background-position: 40%;
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