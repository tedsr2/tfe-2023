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
    <div class="credits-container">
        <Header />
        <main ref="all">
            <div class="credits">Credits
                <div class="credits__box">
                    <div class="credits__block">
                        <div class="credits__splitter hidden">line</div>
                        <div class="credits__title">01.<span>Copyright Notice.</span></div>
                        <p class="credits__text">

                            All original content on this website, unless otherwise stated, is the property of Diego Tellier.
                            Musical excerpts of composers are used for educational and informational purposes only. All
                            copyright for musical compositions and images is held by their respective owners.

                        </p>
                    </div>
                    <div class="credits__block">
                        <div class="credits__splitter hidden">line</div>
                        <div class="credits__title">02.<span>You can help.</span></div>
                        <p class="credits__text">We are committed to respecting copyright and properly attributing sources.
                            If
                            you find any
                            unauthorized use of your work on our site, please contact us immediately so that we can address
                            the situation.

                            Thank you for visiting Soundtracks and sharing this musical journey with us!</p>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.credits {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 60px;
    font-size: clamp(4rem, 6vw, 8rem);
    line-height: clamp(35px, 5.5vw, 140px);
    font-weight: 700;

    .credits__box {
        display: flex;
        margin-top: 60px;

        .credits__block {
            display: flex;
            flex-direction: column;
            padding-right: 100px;
            width: clamp(24vw, 36vw, 40vw);

            .credits__splitter {
                height: 2px;
                background-color: #111111;
                width: 100%;
                margin-bottom: 2vh;
            }

            .credits__title {
                display: flex;
                flex-direction: column;
                font-size: clamp(2rem, 2vw, 2rem);
                line-height: clamp(35px, 3vw, 40px);
                margin-bottom: 20px;
            }

            .credits__text {
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

    .credits__box {
        flex-direction: column;

        .credits__block {
            width: 50vw !important;
            margin-bottom: 40px;
        }
    }
}

@media screen and (max-width: 800px) {

    .credits__box {

        .credits__block {
            width: 75vw !important;
        }
    }
}

@media screen and (max-width: 600px) {

    .credits__box {

        .credits__block {
            padding-right: 0px !important;
            width: 100% !important;
        }
    }
}
</style>