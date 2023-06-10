<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'

//REF

const title = ref(null);
const subtitle = ref(null);
const homecontainer = ref(null);
const headphonebackground = ref(null);
const headphone = ref(null);
const p1 = ref(null);
const p2 = ref(null);
const p3 = ref(null);
const p4 = ref(null);
const p5 = ref(null);
const audioPlayerRef1 = ref(null);
const audioElementRef1 = ref(null);
const audioPlayerRef2 = ref(null);
const audioElementRef2 = ref(null);
const audioPlayerRef3 = ref(null);
const audioElementRef3 = ref(null);
const audioPlayerRef4 = ref(null);
const audioElementRef4 = ref(null);
const audioPlayerRef5 = ref(null);
const audioElementRef5 = ref(null);

//GSAP ANIMATION

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

onMounted(() => {
    gsap.to(p1.value, {
        scrollTrigger: {
            trigger: p1.value,
            start: "middle 90%",
            end: "middle 50%",
            scrub: true,
            invalidateOnResize: true,
        },
        opacity: 1,
        duration: 2,
    });
}
);

onMounted(() => {
    gsap.to(p2.value, {
        scrollTrigger: {
            trigger: p2.value,
            start: "middle 90%",
            end: "middle 50%",
            scrub: true,
            invalidateOnResize: true,
        },
        opacity: 1,
        duration: 2,
    });
}
);

onMounted(() => {
    gsap.to(p3.value, {
        scrollTrigger: {
            trigger: p3.value,
            start: "middle 90%",
            end: "middle 50%",
            scrub: true,
            invalidateOnResize: true,
        },
        opacity: 1,
        duration: 2,
    });
}
);

onMounted(() => {
    gsap.to(p4.value, {
        scrollTrigger: {
            trigger: p4.value,
            start: "middle 90%",
            end: "middle 50%",
            scrub: true,
            invalidateOnResize: true,
        },
        opacity: 1,
        duration: 2,
    });
}
);

onMounted(() => {
    gsap.to(p5.value, {
        scrollTrigger: {
            trigger: p5.value,
            start: "middle 90%",
            end: "middle 50%",
            scrub: true,
            invalidateOnResize: true,
        },
        opacity: 1,
        duration: 2,
    });
}
);

onMounted(() => {
    gsap.timeline()
        .from(headphone.value, {
            delay: 1,
            duration: 1,
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
})

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

const scroll1 = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#jai",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

const scroll2 = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#presque",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

const scroll3 = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#termine",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

const scroll4 = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#mon",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

const scroll5 = () => {
    gsap.to(window, {
        scrollTo: {
            y: "#tfe",
            autoKill: false,
        },
        delay: -1,
        duration: 1,
        onComplete: () => {
            console.log("Scroll animation completed.");
        },
    });
};

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
    audioElementRef3.value = audioPlayerRef3.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection3, options);
    observer.observe(audioPlayerRef3.value);
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
    audioElementRef4.value = audioPlayerRef4.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection4, options);
    observer.observe(audioPlayerRef4.value);
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
    audioElementRef5.value = audioPlayerRef5.value.querySelector('audio');

    const options = {
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection5, options);
    observer.observe(audioPlayerRef5.value);
});
</script>

<template>
    <div ref="homecontainer" class="home-container">

        <section class="mobile">
            <p>To live the Soundtracks experience to its fullest, please use the desktop version.</p>
        </section>

        <section id="top" ref="top" class="background">
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
            <p ref="p1">In the wild, a sound is a deep valley that has been filled with sea water.</p>
            <p ref="p2">In physics, sound is a vibration that propagates as an acoustic wave.</p>
            <p ref="p3">In movies, these sounds are used to create atmosphere, feelings, and emotions...</p>
            <p ref="p4">Today you will have the opportunity to dive into the work of some of the greatest composers of
                all times.</p>
            <p ref="p5">To start, I'm going to share with you my greatest emotional moments while listening to scores.</p>
        </section>

        <section class="menu">
            <ul>
                <li class="menu-item" @click="scrollTop">
                    <span class="hidden line">line</span><span class="name">top</span>
                </li>
                <li class="menu-item" @click="scroll1">
                    <span class="hidden line">line</span><span class="name">heart of child</span>
                </li>
                <li class="menu-item" @click="scroll2">
                    <span class="hidden line">line</span><span class="name">tears</span>
                </li>
                <li class="menu-item" @click="scroll3">
                    <span class="hidden line">line</span><span class="name">fear</span>
                </li>
                <li class="menu-item" @click="scroll4">
                    <span class="hidden line">line</span><span class="name">excitement</span>
                </li>
                <li class="menu-item" @click="scroll5">
                    <span class="hidden line">line</span><span class="name">hype</span>
                </li>
            </ul>
        </section>

        <section>
            <div class="box">
                <h1>heart of chil<span class="no-spacing">d</span></h1>
                <div class="content">
                    <div>
                        <p>Movie: The Incredibles (2004)</p>
                        <p>Composer: Michael Giacchino <a href="#/michael-giacchino" class="header-nav__link">More of him
                                here</a></p>
                    </div>
                    <div>
                        <p>As far as I can remember, it was the first time that the score of a movie hitted me.
                            When I listen to it now, I can feel long times forgotten emotions from another time of my life.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="jai" ref="jai" class="scroll">
            <div class="parallax parallax-one">
                <div class="content">
                    <h2 class="title long-title">the Incredible<span class="no-spacing">s</span></h2>
                    <div class="player" ref="audioPlayerRef1">
                        <AudioPlayer ref="audioElement1" :option="{
                            src: '/audio/the-incredibles.mp3',
                            title: 'The Incredibles (2004)',
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
                <h1>tear<span class="no-spacing">s</span></h1>
                <div class="content">
                    <div>
                        <p>Movie: Rain man (1988)</p>
                        <p>Composer: Hans Zimmer <a href="#/hans-zimmer" class="header-nav__link">More of him
                                here</a></p>
                    </div>
                    <div>
                        <p>For the first time in my life, a music had me in tears. I don't cry easily at movies, but the
                            score of Hans Zimmer for Rain Man will be forever a part of me.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="presque" ref="presque" class="scroll">
            <div class="parallax parallax-two">
                <div class="content">
                    <h2 class="title">rain ma<span class="no-spacing">n</span></h2>
                    <div class="player" ref="audioPlayerRef2">
                        <AudioPlayer ref="audioElement2" :option="{
                            src: '/audio/rain-man.mp3',
                            title: 'Rain man (1988)',
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
                <div class="content">
                    <div>
                        <p>Movie: Jaws (1975)</p>
                        <p>Composer: John Williams<a href="#/john-williams" class="header-nav__link">More of him
                                here</a></p>
                    </div>
                    <div>
                        <p>Was it a good idea from my dad to let me watch this movie alone at the age of 6? Well it made me
                            fall
                            in love with movies of the 1970s at least, but I don't think I will ever forget the chills this
                            score gave me the first time.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="termine" ref="termine" class="scroll">
            <div class="parallax parallax-three">
                <div class="content">
                    <h2 class="title">jaw<span class="no-spacing">s</span></h2>
                    <div class="player" ref="audioPlayerRef3">
                        <AudioPlayer ref="audioElement3" :option="{
                            src: '/audio/jaws.mp3',
                            title: 'Jaws (1975)',
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
                <h1>excitemen<span class="no-spacing">t</span></h1>
                <div class="content">
                    <div>
                        <p>Movie: Rogue One (2016)</p>
                        <p>Composer: Michael Giacchino<a href="#/michael-giacchino" class="header-nav__link">More of him
                                here</a></p>
                    </div>
                    <div>
                        <p>Michael Giacchino probably gave me one of my most favorite and intense movie scene of my life.
                            What could be more exciting than one of the greatest villains of all time slaughtering rebels,
                            if not to add an incredible background music?
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="mon" ref="mon" class="scroll">
            <div class="parallax parallax-four">
                <div class="content">
                    <h2 class="title">rogue on<span class="no-spacing">e</span></h2>
                    <div class="player" ref="audioPlayerRef4">
                        <AudioPlayer ref="audioElement4" :option="{
                            src: '/audio/rogue-one.mp3',
                            title: 'Rogue One (2016)',
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
                <h1>hyp<span class="no-spacing">e</span></h1>
                <div class="content">
                    <div>
                        <p>Movie: Spider Man Into Spiderverse (2018)</p>
                        <p>Composer: Blackway & Black Caviar</p>
                    </div>
                    <div>
                        <p>All of the movie led to this scene, all the build up and the tension find itself in this moment
                            of the movie.
                            I still can't find the words to describe how gratifying this scene was, with the score playing a
                            big part in it.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="tfe" ref="tfe" class="scroll">
            <div class="parallax parallax-five">
                <div class="content">
                    <h2 class="title">spider ma<span class="no-spacing">n</span></h2>
                    <div class="player" ref="audioPlayerRef5">
                        <AudioPlayer ref="audioElement5" :option="{
                            src: '/audio/spiderman.mp3',
                            title: 'Spider Man Into Spiderverse (2018)',
                            coverImage: '',
                            progressBarColor: '#111111',
                            indicatorColor: '#111111',
                            paused: true
                        }"></AudioPlayer>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.home-container::-webkit-scrollbar {
    display: none;
}

.home-container {
    width: 100%;
    height: 100vh;
    scroll-snap-type: y proximity;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */

    .scroll {
        scroll-snap-align: start;
    }

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
        z-index: 100;
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
        min-height: 330vh;
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
        margin-top: -230vh;
        height: 200vh;
        width: 100vw;
        position: absolute;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        p {
            max-width: 600px;
            height: 20px;
            text-align: center;
            opacity: 0;
        }
    }

    .box {
        background: #111111;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 50vh;
        margin: 0 auto;
        text-align: center;

        h1 {
            font-size: 35px;
            letter-spacing: 8px;
            color: #FAFAFA;
            margin-bottom: 20px;
        }

        span {
            color: #FAFAFA;
        }

        .content {
            display: flex;

            div {
                width: 30vw;
                margin: 20px;

                p {
                    text-align: left;
                    margin-bottom: 2px;

                    a {
                        margin-left: 20px;
                        font-size: 16px;
                        color: rgb(170, 170, 170);
                        text-decoration: underline;
                        transition: all 0.3s ease-in-out;
                    }

                    a:hover {
                        color: #FAFAFA;
                    }
                }
            }
        }
    }

    .box-1 {
        height: 100vh;
        background-color: #292b31;
    }

    .parallax {
        padding-top: 200px;
        padding-bottom: 200px;
        overflow: hidden;
        position: relative;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .content {
            width: 100%;
            height: 100%;

            .title {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                letter-spacing: 0.2em;
                font-size: clamp(60px, 8vw, 400px);
                text-transform: uppercase;
                color: #FAFAFA;

                span {
                    color: #FAFAFA;
                }
            }

            .long-title {
                font-size: clamp(60px, 5vw, 200px);
            }

            .player {
                margin-top: -10vh;
            }
        }
    }

    .parallax-one {
        background-image: url('/images/the-incredibles.jpg');
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .parallax-two {
        background-image: url('/images/rain-man.jpeg');
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
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

    .parallax-four {
        background-image: url('/images/rogue-one.jpg');
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .parallax-five {
        background-image: url('/images/spiderman.jpg');
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }
}
</style>