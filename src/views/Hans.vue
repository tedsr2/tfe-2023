<script setup>
import Header from '../components/Header.vue';
import { onMounted, ref, watch, nextTick } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

//REF

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
const music1 = ref(null);
const music2 = ref(null);
const music3 = ref(null);
const music4 = ref(null);
const music5 = ref(null);
const music6 = ref(null);
const music7 = ref(null);
const music8 = ref(null);
const title1 = ref(null);
const title2 = ref(null);
const title3 = ref(null);
const title4 = ref(null);
const title5 = ref(null);
const title6 = ref(null);
const title7 = ref(null);
const title8 = ref(null);
const back1 = ref(null);
const back2 = ref(null);
const back3 = ref(null);
const back4 = ref(null);
const back5 = ref(null);
const back6 = ref(null);
const back7 = ref(null);
const back8 = ref(null);
const audioElementRef1 = ref(null);
const audioElementRef2 = ref(null);
const audioElementRef3 = ref(null);
const audioElementRef4 = ref(null);
const audioElementRef5 = ref(null);
const audioElementRef6 = ref(null);
const audioElementRef7 = ref(null);
const audioElementRef8 = ref(null);
const minWidth = 100;
const isWide = ref(false);

//IS WIDE

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
    gsap.to(titleblock.value, {
        scrollTrigger: {
            trigger: title.value,
            scrub: true,
            start: "center center",
            end: "bottom top",
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
        .to(movie1copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie1copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title1.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music1.value, {
            duration: 0.5,
            opacity: 1,
        })

    back1.value.addEventListener('click', () => {
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
        .to(movie2copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie2copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title2.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music2.value, {
            duration: 0.5,
            opacity: 1,
        })

    back2.value.addEventListener('click', () => {
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
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie3copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie3copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title3.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music3.value, {
            duration: 0.5,
            opacity: 1,
        })

    back3.value.addEventListener('click', () => {
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
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie4copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie4copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title4.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music4.value, {
            duration: 0.5,
            opacity: 1,
        })

    back4.value.addEventListener('click', () => {
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
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie5copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie5copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title5.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music5.value, {
            duration: 0.5,
            opacity: 1,
        })

    back5.value.addEventListener('click', () => {
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
        .to(movie7.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie8.value, {
            duration: 0.2,
            opacity: 0,
        })
        .to(movie6copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie6copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title6.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music6.value, {
            duration: 0.5,
            opacity: 1,
        })

    back6.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation7 = () => {
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
        .to(movie7copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie7copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title7.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music7.value, {
            duration: 0.5,
            opacity: 1,
        })

    back7.value.addEventListener('click', () => {
        tl.reverse();
    });
};

const startAnimation8 = () => {
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
        .to(movie8copy.value, {
            duration: 0.01,
            display: 'flex',
        })
        .to(movie8copy.value, {
            duration: 2,
            opacity: 1,
            marginTop: '10vh',
            width: '96vw',
            height: '90vh',
        })
        .to(title8.value, {
            duration: 0.5,
            opacity: 1,
        })
        .to(music8.value, {
            duration: 0.5,
            opacity: 1,
        })

    back8.value.addEventListener('click', () => {
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
                <div class="movie" ref="movie1" @click="startAnimation1" :class="{ 'wide': isWide }">
                    <img class="movie__images" src="/images/rain-man.jpeg" alt="Rain Man image">
                    <h5 class="movie__title">Rain man</h5>
                </div>
                <div class="copy" ref="movie1copy">
                    <div class="copy__container">
                        <h4 ref="title1">Main Them<span class="no-spacing">e</span></h4>
                        <img class="copy__images" src="/images/rain-man.jpeg" alt="Rain Man image">
                    </div>
                    <div class="player" ref="music1">
                        <button class="back" ref="back1"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef1" :option="{
                            src: '/audio/rain-man.mp3',
                            title: 'Rain man (1988)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Rain man (1988)</p>
                    </div>
                </div>
                <div class="movie" ref="movie2" @click="startAnimation2">
                    <img class="movie__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                    <h5 class="movie__title">The Lion King</h5>
                </div>
                <div class="copy" ref="movie2copy">
                    <div class="copy__container">
                        <h4 ref="title2">Remembe<span class="no-spacing">r</span></h4>
                        <img class="copy__images" src="/images/the-lion-king.jpg" alt="The Lion King image">
                    </div>
                    <div class="player" ref="music2">
                        <button class="back" ref="back2"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef2" :option="{
                            src: '/audio/lion-king.mp3',
                            title: 'The Lion King (1994)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>The Lion King (1994)</p>
                    </div>
                </div>
                <div class="movie" ref="movie3" @click="startAnimation3">
                    <img class="movie__images" src="/images/gladiator.jpg" alt="Gladiator image">
                    <h5 class="movie__title">Gladiator</h5>
                </div>
                <div class="copy" ref="movie3copy">
                    <div class="copy__container">
                        <h4 ref="title3" class="long-title">Now We Are Free (live)<span class="no-spacing"></span></h4>
                        <img class="copy__images" src="/images/gladiator.jpg" alt="Gladiator image">
                    </div>
                    <div class="player" ref="music3">
                        <button class="back" ref="back3"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef3" :option="{
                            src: '/audio/gladiator.mp3',
                            title: 'Gladiator (2000)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Gladiator (2000)</p>
                    </div>
                </div>
                <div class="movie" ref="movie4" @click="startAnimation4">
                    <img class="movie__images" src="/images/inception.jpg" alt="Inception image">
                    <h5 class="movie__title">Inception</h5>
                </div>
                <div class="copy" ref="movie4copy">
                    <div class="copy__container">
                        <h4 ref="title4">Tim<span class="no-spacing">e</span></h4>
                        <img class="copy__images" src="/images/inception.jpg" alt="Inception image">
                    </div>
                    <div class="player" ref="music4">
                        <button class="back" ref="back4"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef4" :option="{
                            src: '/audio/inception.mp3',
                            title: 'Inception (2010)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Inception (2010)</p>
                    </div>
                </div>
                <div class="movie" ref="movie5" @click="startAnimation5">
                    <img class="movie__images" src="/images/the-dark-knight-rises.jpg" alt="The Dark Knight Rises image">
                    <h5 class="movie__title">The Dark Knight Rises</h5>
                </div>
                <div class="copy" ref="movie5copy">
                    <div class="copy__container">
                        <h4 class="black-title" ref="title5">Ris<span class="no-spacing">e</span></h4>
                        <img class="copy__images" src="/images/the-dark-knight-rises.jpg" alt="The Dark Knight Rises image">
                    </div>
                    <div class="player" ref="music5">
                        <button class="back" ref="back5"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef5" :option="{
                            src: '/audio/the-dark-knight-rises.mp3',
                            title: 'The Dark Knight Rises (2012)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>The Dark Knight Rises (2012)</p>
                    </div>
                </div>
                <div class="movie" ref="movie6" @click="startAnimation6">
                    <img class="movie__images" src="/images/interstellar.jpg" alt="Interstellar image">
                    <h5 class="movie__title">Interstellar</h5>
                </div>
                <div class="copy" ref="movie6copy">
                    <div class="copy__container">
                        <h4 ref="title6">Dus<span class="no-spacing">t</span></h4>
                        <img class="copy__images" src="/images/interstellar.jpg" alt="Interstellar image">
                    </div>
                    <div class="player" ref="music6">
                        <button class="back" ref="back6"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef6" :option="{
                            src: '/audio/interstellar.mp3',
                            title: 'Interstellar (2014)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Interstellar (2014)</p>
                    </div>
                </div>
                <div class="movie" ref="movie7" @click="startAnimation7">
                    <img class="movie__images" src="/images/dunkirk.jpg" alt="Dunkirk image">
                    <h5 class="movie__title">Dunkirk</h5>
                </div>
                <div class="copy" ref="movie7copy">
                    <div class="copy__container">
                        <h4 ref="title7">Supermarin<span class="no-spacing">e</span></h4>
                        <img class="copy__images" src="/images/dunkirk.jpg" alt="Dunkirk image">
                    </div>
                    <div class="player" ref="music7">
                        <button class="back" ref="back7"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef7" :option="{
                            src: '/audio/dunkirk.mp3',
                            title: 'Dunkirk (2017)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Dunkirk (2017)</p>
                    </div>
                </div>
                <div class="movie" ref="movie8" @click="startAnimation8">
                    <img class="movie__images" src="/images/dune.jpg" alt="Dune image">
                    <h5 class="movie__title">Dune</h5>
                </div>
                <div class="copy" ref="movie8copy">
                    <div class="copy__container">
                        <h4 ref="title8">Dream of Arraki<span class="no-spacing">s</span></h4>
                        <img class="copy__images" src="/images/dune.jpg" alt="Dune image">
                    </div>
                    <div class="player" ref="music8">
                        <button class="back" ref="back8"><span>Back</span></button>
                        <AudioPlayer ref="audioElementRef8" :option="{
                            src: '/audio/dune.mp3',
                            title: 'Dune (2021)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                        }" />
                        <p>Dune (2021)</p>
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
            overflow: hidden;

            .copy__container {
                width: 100%;
                height: 100%;
                overflow: hidden;

                .black-title {
                    color: #111111;

                    span {
                        color: #111111;
                    }
                }

                .copy__images {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    animation: scale 40s linear infinite;
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

            h4 {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10;
                opacity: 0;
                height: 100%;
                width: 100%;
                text-align: center;
                margin-top: -7vh;
                font-size: clamp(60px, 8vw, 200px);
                color: #FAFAFA;

                span {
                    color: #FAFAFA;
                }
            }

            .long-title {
                margin-top: -7vh;
                font-size: clamp(60px, 5vw, 200px);
            }

            .player {
                z-index: 50;
                width: 100%;
                height: 15vh;
                opacity: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .back {
                    display: block;
                    width: 160px;
                    height: 40px;
                    font-size: 18px;
                    font-family: sans-serif;
                    text-decoration: none;
                    border: 2px solid #292b31;
                    letter-spacing: 2px;
                    text-align: center;
                    position: relative;
                    transition: all .35s;
                    cursor: pointer;

                    span {
                        position: relative;
                        z-index: 2;
                        transition: all .35s;
                        color: #292b31;
                        font-weight: 500;
                    }
                }

                .back:after {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 100%;
                    background: #292b31;
                    transition: all .35s;
                }

                .back:hover span {
                    color: #fff;
                }

                .back:hover:after {
                    width: 100%;
                }

                p {
                    width: 160px;
                    color: #111111;
                }
            }
        }

        .movie {
            z-index: 20;
            width: 10vw;
            height: 60vh;
            margin: 0px 0.5vw;
            transition-duration: 0.5s;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            text-align: center;
            cursor: pointer;

            h5 {
                font-size: clamp(16px, 1vw, 20px);
                font-weight: 500;
            }

            .movie__title {
                margin-top: 1rem;
                opacity: 0;
            }

            .movie__images {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .movie:hover .movie__title {
            opacity: 1;
            transition: all 0.5s ease-in-out;
        }

        .movie .movie__title {
            transition: all 0.5s ease-in-out;
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