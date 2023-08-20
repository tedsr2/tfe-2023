<script setup>
import gsap from 'gsap';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from 'vue';

//REFF

const all = ref(null);

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
    <div class="about-container">
        <Header />
        <main ref="all">
            <div class="about">Discover my work
                <div class="about__box">
                    <div class="about__block">
                        <div class="about__splitter hidden">line</div>
                        <div class="about__title">01.<span>About me.</span></div>
                        <p class="about__text">Hello, my name is Diego. You're now exploring the website I created
                            for my graduation in Web design and development. I'm proud to present you my
                            work and I hope you enjoy it as much as I enjoyed working on it.</p>
                    </div>
                    <div class="about__block">
                        <div class="about__splitter hidden">line</div>
                        <div class="about__title">02.<span>The project.</span></div>
                        <p class="about__text">I decided to create a website about something that I love, movies
                            soundtracks. To do so, I used the Vue.JS framework to create an easily updatable portal to
                            different composers
                            musical universe.</p>
                    </div>
                    <div class="about__block">
                        <div class="about__splitter hidden">line</div>
                        <div class="about__title">03.<span>The content</span></div>
                        <p class="about__text">The content of the website was written by me. All audio files are the
                            propriety of the musical company that owns them. More information about that <a
                                href="#/credits">here</a>.</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.about {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 60px;
    font-size: clamp(4rem, 6vw, 8rem);
    line-height: clamp(60px, 8vw, 140px);
    font-weight: 700;

    .about__box {
        display: flex;
        margin-top: 60px;

        .about__block {
            display: flex;
            flex-direction: column;
            padding-right: 100px;
            width: clamp(24vw, 30vw, 34vw);

            .about__splitter {
                height: 2px;
                background-color: #111111;
                width: 100%;
                margin-bottom: 2vh;
            }

            .about__title {
                display: flex;
                flex-direction: column;
                font-size: clamp(2rem, 2vw, 2rem);
                line-height: clamp(35px, 3vw, 40px);
                margin-bottom: 20px;
            }

            .about__text {
                width: 100%;
                font-weight: 600;

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
    }
}

@media screen and (max-width: 1000px) {

    .about__box {
        flex-direction: column;

        .about__block {
            width: 50vw !important;
            margin-bottom: 40px;
        }
    }
}

@media screen and (max-width: 800px) {

    .about__box {

        .about__block {
            width: 75vw !important;
        }
    }
}

@media screen and (max-width: 600px) {

    .about__box {
        width: 100%;

        .about__block {
            padding-right: 0px !important;
            width: 100% !important;
        }
    }
}
</style>