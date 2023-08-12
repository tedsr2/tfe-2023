<script setup>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref, onMounted } from 'vue';


</script>

<template>
    <div class="hans-container">
        <Header />
        <main>
            <section class="intro-container">
                <div class="intro">
                    <div ref="text" class="intro__text">
                        <p>PROVIDING TIMELESS DISCOGRAPHIES OF THE WORK FROM SOME OF THE MOST IMPORTANT COMPOSERS OF ALL
                            TIMES SO THAT YOU CAN EMBRACE THE SOUND OF MOVIES.</p>
                    </div>
                    <div class="intro__title">
                        <h2 ref="title" class="title">hans zimmer</h2>
                    </div>
                    <img class="intro__image" src="/images/hans-zimmer.jpg" alt="Hans Zimmer image">
                </div>
            </section>
            <div class="splitter hidden">line</div>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.scroll-lock {
    overflow: hidden;
}

.hans-container {
    width: 100%;
    min-height: 100vh;
}

.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .intro__title {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 200vw;
        height: 90vh;
        position: absolute;
        overflow-y: hidden;

        .title {
            font-size: clamp(4rem, 16vw, 30rem);
            line-height: 0.8;
            font-weight: 700;
            color: #FAFAFA;
            -webkit-text-stroke-width: 3px;
            -webkit-text-stroke-color: #111111;
            text-transform: uppercase;
        }
    }

    .intro__image {
        height: 80vh;
        width: 30%;
        object-fit: cover;
        position: relative;
        padding: 20px;
        z-index: 2;
    }

    .intro__text {
        display: flex;
        text-align: start;
        width: 50%;
        margin: 16vh 4vw;

        p {
            text-transform: uppercase;
            font-size: clamp(2rem, 2vw, 2.5rem);
            line-height: clamp(35px, 2vw, 40px);
        }
    }
}

@media screen and (max-width: 1000px) {

    .intro::v-deep .intro__text {
        margin-left: 26vw;
    }
}

@media screen and (max-width: 800px) {
    .intro::v-deep .intro__title {
        height: 40vh;

        .title {
            font-weight: 600;
        }
    }

    .intro::v-deep .intro__image {
        width: 100%;
        height: 50vh;
    }

    .intro::v-deep .intro__text {
        margin-left: 4vw;
    }
}
</style>