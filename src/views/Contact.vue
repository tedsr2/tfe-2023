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
                        <div class="contact__text">Send us a message on</div>
                        <div class="contact__links">
                            <a class="contact__link" href="https://www.instagram.com" target="_blank"
                                rel="noopener noreferrer">Instagram</a>
                        </div>
                        <div class="contact__text">Visit us</div>
                        <div class="contact__address">Av. Comte de Smet de Nayer 20, 5000 Namur</div>
                    </div>
                    <div class="contact__block">
                        <div class="contact__title">We would love you to leave us a word.</div>
                        <div class="contact__subtitle">Whether it's to report a problem, ask a question, or just say hello,
                            we'd love to hear from you.</div>
                        <form class="contact__form" method="post" action="#">
                            <div class="form__el">
                                <input required autofocus type="name" id="name" name="name">
                                <label for="name">Name</label>
                            </div>
                            <div class="form__el">
                                <input required type="email" id="email" name="email">
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
        margin-top: 14vh;
        margin-bottom: 14vh;

        .contact__block {
            display: flex;
            flex-direction: column;
            width: 50%;

            .contact__text {
                font-size: clamp(1rem, 2vw, 3rem);
                line-height: clamp(25px, 2.5vw, 50px);
                font-weight: 500;
            }

            .contact__address {
                font-weight: 600;
            }

            .contact__links {
                display: flex;
                flex-direction: column;
                margin-bottom: 40px;

                .contact__link {
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 40px;
                    transition: all 0.25s ease-in-out;
                }

                .contact__link:hover {
                    color: #CACACA;
                }
            }

            .contact__title {
                display: flex;
                flex-direction: column;
                text-transform: uppercase;
                font-size: clamp(2rem, 6vw, 8rem);
                line-height: clamp(35px, 5.5vw, 140px);
                font-weight: 700;
                margin-bottom: 40px;
            }

            .contact__subtitle {
                display: flex;
                flex-direction: column;
                font-size: clamp(1rem, 2vw, 3rem);
                line-height: clamp(25px, 2.5vw, 50px);
                font-weight: 500;
                margin-bottom: 40px;
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
                    transform: translateX(-6.5vw) translateY(-40px) scale(0.7);
                    transition: ease-in-out 0.3s;
                }

                .form__el input:valid+label {
                    transform: translateX(-6.5vw) translateY(-40px) scale(0.7);
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

@media screen and (max-width: 800px) {

    .contact {

        .contact__box {
            flex-direction: column;

            .contact__block {
                width: 100% !important;

                .contact__address {
                    margin-bottom: 100px;
                }
            }
        }
    }

    .contact__form {

        .form__el input:focus+label {
            transform: translateX(-11.5vw) translateY(-40px) scale(0.7) !important;
        }

        .form__el input:valid+label {
            transform: translateX(-11.5vw) translateY(-40px) scale(0.7) !important;
        }
    }
}
</style>