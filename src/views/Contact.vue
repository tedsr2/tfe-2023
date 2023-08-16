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

const links = ref([
    { name: 'Behance', color: '', href: 'https://www.behance.net' },
    { name: 'Instagram', color: '', href: 'https://www.instagram.com' },
    { name: 'Twitter', color: '', href: 'https://twitter.com' },
    { name: 'Linkedin', color: '', href: 'https://www.linkedin.com' }
]);

const changeColor = (index) => {
    links.value.forEach((link, i) => {
        if (i === index) {
            link.color = '#111111';
        } else {
            link.color = '#CACACA';
        }
    });
};

const resetColors = () => {
    links.value.forEach(link => {
        link.color = '';
    });
};
</script>

<template>
    <div class="contact-container">
        <Header />
        <main ref="all">
            <div class="contact">
                <div class="contact__box">
                    <div class="contact__block">
                        <div>Visits us</div>
                        <div class="contact__links">
                            <a v-for="(link, index) in links" :key="index" :class="['contact__link', `link${index + 1}`]"
                                :style="{ color: link.color }" @mouseover="changeColor(index)" @mouseleave="resetColors"
                                :href="link.href" target="_blank" rel="noopener noreferrer">
                                {{ link.name }}
                            </a>
                        </div>
                    </div>
                    <div class="contact__block">
                        <div class="contact__title">We would love you to leave us a word.</div>
                        <div class="contact__subtitle">Whether it's to report a problem, ask a question, or just say hello,
                            we'd love to hear from you</div>
                        <form class="contact__form" method="post" action="#">
                            <div class="form__el">
                                <input required type="name" id="name" name="name">
                                <label for="name">Name</label>
                            </div>
                            <div class="form__el">
                                <input required autofocus type="email" id="email" name="email">
                                <label for="email">Email address</label>
                            </div>
                            <div class="form__el">
                                <input required type="text" id="text" name="text">
                                <label for="text">Tell us about you</label>
                            </div>
                            <button class="form__button" type="submit" disabled>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
.contact {
    min-height: 90vh;
    padding: 60px;

    .contact__box {
        display: flex;
        height: 100%;
        justify-content: space-between;
        margin-top: 10vh;

        .contact__block {
            display: flex;
            flex-direction: column;

            .contact__links {
                display: flex;
                flex-direction: column;

                .contact__link {
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 40px;
                    transition: all 0.25s ease-in-out;
                }
            }

            .contact__title {
                display: flex;
                flex-direction: column;
                font-size: clamp(2rem, 2vw, 2rem);
                line-height: clamp(35px, 3vw, 40px);
                margin-bottom: 20px;
            }

            .contact__form {

                .form__el {
                    position: relative;
                    margin: 40px 0;
                    cursor: auto;
                }

                .form__el label {
                    position: absolute;
                    top: 8px;
                    left: 0px;
                    padding: 0 4px;
                    transition: 0.3s;
                    font-size: 30px;
                    width: 100%;
                    cursor: auto;
                }

                .form__el input {
                    width: calc(100% - 24px);
                    padding: 10px;
                    border: none;
                    border-bottom: 2px solid #CACACA;
                    background-color: #FAFAFA;
                    font-size: 24px;
                    cursor: auto;
                    transition: ease-in-out 0.3s;
                }

                .form__el input:focus {
                    outline: none;
                    border-bottom: 2px solid #111111;
                }

                .form__el input:focus+label {
                    background-color: #FAFAFA;
                    transform: translateX(-90px) translateY(-40px) scale(0.7);
                    transition: ease-in-out 0.3s;
                }

                .form__el input:valid+label {
                    transform: translateX(-90px) translateY(-40px) scale(0.7);
                }

                .form__button {
                    cursor: pointer;
                    border: #111111 2px solid;
                    color: #111111;
                    background-color: #FAFAFA;
                    padding: 10px 20px;
                    font-size: 24px;
                    font-weight: 500;
                    transition: all 0.25s ease-in-out;
                }

                .form__button:hover {
                    color: #FAFAFA;
                    background-color: #111111;
                }
            }
        }
    }
}
</style>