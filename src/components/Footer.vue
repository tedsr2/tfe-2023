<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

//REF
const footer = ref(null);

onMounted(() => {
    gsap.from(footer.value, {
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
    <div class="footer-container">
        <div class="splitter hidden">line</div>
        <div ref="footer" class="footer">
            <div class="footer__block">
                <a href="#/">
                    <div ref="logo" class="footer__logo"><svg class="svg" id="Layer_1" data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 225">
                            <polygon fill="#111111"
                                points="86.67 100 130 125 130 175 86.67 200 43.33 225 0 200 0 150 43.33 175 86.67 150 86.67 100" />
                            <polygon fill="#111111"
                                points="43.33 125 0 100 0 50 43.33 25 86.67 0 130 25 130 75 86.67 50 43.33 75 43.33 125" />
                        </svg>
                    </div>
                </a>
                <div ref="rights" class="footer__rights">©2023 Soundtracks. All rights reserved</div>
            </div>
            <div class="footer__block">
                <div class="footer__social">
                    <p class="footer__follow">follow us</p>
                    <div class="footer__links">
                        <a v-for="(link, index) in links" :key="index" :class="['footer__link', `link${index + 1}`]"
                            :style="{ color: link.color }" @mouseover="changeColor(index)" @mouseleave="resetColors"
                            :href="link.href" target="_blank" rel="noopener noreferrer">
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div ref="rights" class="footer__rights hidden">©2023 Soundtracks. All rights reserved</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer-container {
    width: 100%;
    height: 40vh;

    .footer {
        width: 100%;
        height: 100%;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        color: #111111;
        z-index: 101;

        .footer__block {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .footer__logo {
                width: 100px;
                cursor: pointer;
                padding-top: 5px;

                .svg {
                    width: 100px;
                }
            }

            .footer__rights {
                font-weight: 500;
            }

            .footer__social {
                display: flex;

                .footer__follow {
                    text-transform: uppercase;
                    font-weight: 600;
                }

                .footer__links {
                    display: flex;
                    flex-direction: column;
                    padding-left: 80px;

                    .footer__link {
                        text-transform: uppercase;
                        font-weight: 700;
                        font-size: 40px;
                        line-height: 40px;
                        transition: all 0.25s ease-in-out;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .footer-container:deep(.footer__block) {

        .footer__social {
            flex-direction: column;

            .footer__links {
                padding: 0 !important;
            }
        }
        .footer__logo {
                width: 40px !important;

                .svg {
                    width: 40px !important;
                }
            }
    }
}
</style>