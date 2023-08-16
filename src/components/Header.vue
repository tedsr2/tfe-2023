<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

//REF

const nav = ref(null);
const line1 = ref(null);
const line2 = ref(null);
const back = ref(null);
const name = ref(null);
const logo = ref(null);
const header = ref(null);

onMounted(() => {
    gsap.from(header.value, {
        delay: 0.25,
        duration: 0.75,
        opacity: 0,
        autoAlpha: 0,
        ease: 'black.out(1.7)',
    })
})

const startAnimation1 = () => {
    const tl = gsap.timeline();

    tl.to(nav.value, {
        duration: 0.2,
        display: "flex",
        overflow: "hidden",
    })
        .to(nav.value, {
            duration: 0.2,
            opacity: 100,
            ease: "power1.inOut",
        })
        .to(name.value, {
            duration: 0.1,
            opacity: 0,
        })
        .to(name.value, {
            delay: -0.1,
            duration: 0.1,
            display: "none",
        })
        .to(logo.value, {
            delay: -0.1,
            duration: 0.1,
            opacity: 0,
        })
        .to(logo.value, {
            delay: -0.1,
            duration: 0.1,
            display: "none",
        })
        .to(line1.value, {
            delay: -0.3,
            duration: 0.1,
            backgroundColor: 'white',
            y: '5px',
            rotate: "45deg",
            ease: "power1.inOut",
        })
        .to(line2.value, {
            delay: -0.3,
            duration: 0.1,
            backgroundColor: 'white',
            y: '-5px',
            rotate: "-45deg",
            ease: "power1.inOut",
        })
        .to(back.value, {
            delay: -0.6,
            duration: 0.1,
            display: "block",
        })

    back.value.addEventListener('click', () => {
        tl.reverse();
    });

    const event = new Event('header-animation-start');
    document.dispatchEvent(event);
};

const links = ref([
    { name: 'Behance', color: '', href: 'https://www.behance.net' },
    { name: 'Instagram', color: '', href: 'https://www.instagram.com' },
    { name: 'Twitter', color: '', href: 'https://twitter.com' },
    { name: 'Linkedin', color: '', href: 'https://www.linkedin.com' }
]);

const changeColor = (index) => {
    links.value.forEach((link, i) => {
        if (i === index) {
            link.color = '#FAFAFA';
        } else {
            link.color = '#555555';
        }
    });
};

const resetColors = () => {
    links.value.forEach(link => {
        link.color = '';
    });
};

const menuItems = ref([
    { label: 'Home', href: '#/' },
    { label: 'About', href: '#/about' },
    { label: 'Contact', href: '#/contact' },
    { label: 'Credits', href: '#/credits' }
]);

const changePageColor = (index) => {
    menuItems.value.forEach((menuItem, i) => {
        if (i === index) {
            menuItem.color = '#FAFAFA';
        } else {
            menuItem.color = '#555555';
        }
    });
};

const resetPageColors = () => {
    menuItems.value.forEach(menuItem => {
        menuItem.color = '';
    });
};
</script> 

<template>
    <div ref="header" class="header-container">
        <div class="header">
            <a href="#/">
                <div ref="logo" class="header__logo"><svg class="svg" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 225">
                        <polygon fill="#111111"
                            points="86.67 100 130 125 130 175 86.67 200 43.33 225 0 200 0 150 43.33 175 86.67 150 86.67 100" />
                        <polygon fill="#111111"
                            points="43.33 125 0 100 0 50 43.33 25 86.67 0 130 25 130 75 86.67 50 43.33 75 43.33 125" />
                    </svg>
                </div>
            </a>
            <div class="header__name">
                <h1 ref="name">SOUNDTRACKS @2023</h1>
            </div>
            <div class="button" @click="startAnimation1">
                <div class="button__line" ref="line1"></div>
                <div class="button__line" ref="line2"></div>
            </div>
            <div class="back-button hidden" ref="back">back</div>
        </div>
        <div class="nav-container" ref="nav">
            <div class="nav">
                <div class="nav__social">
                    <div class="nav__logo"><svg class="svg" id="Layer_1" data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 225">
                            <polygon fill="#FAFAFA"
                                points="86.67 100 130 125 130 175 86.67 200 43.33 225 0 200 0 150 43.33 175 86.67 150 86.67 100" />
                            <polygon fill="#FAFAFA"
                                points="43.33 125 0 100 0 50 43.33 25 86.67 0 130 25 130 75 86.67 50 43.33 75 43.33 125" />
                        </svg>
                    </div>
                    <div class="social">
                        <a v-for="(link, index) in links" :key="index" :class="['social__link', `link${index + 1}`]"
                            :style="{ color: link.color }" @mouseover="changeColor(index)" @mouseleave="resetColors"
                            :href="link.href" target="_blank" rel="noopener noreferrer">
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div class="nav__menu">
                    <div class="menu">
                        <div class="menu">
                            <a v-for="(menuItem, index) in menuItems" :key="index"
                                :class="['menu__link', `menuItem${index + 1}`]" :style="{ color: menuItem.color }"
                                @mouseover="changePageColor(index)" @mouseleave="resetPageColors" :href="menuItem.href"
                                rel="noopener noreferrer">
                                {{ menuItem.label }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-container {
    width: 100%;
    height: 10vh;

    .header {
        width: 100%;
        height: 10vh;
        padding: 20px;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #111111;
        z-index: 101;

        .header__logo {
            width: 35px;
            cursor: pointer;
            padding-top: 5px;

            .svg {
                width: 35px;
            }
        }

        .header__name {

            h1 {
                color: #111111;
            }
        }

        .button {
            width: 35px;
            cursor: pointer;

            .button__line {
                height: 2px;
                width: 35px;
                margin: 0.5rem 0;
                background-color: #111111;
                transition: transform 0.5s ease, opacity 0.5s ease;
            }
        }

        .back-button {
            position: absolute;
            right: 20px;
            display: none;
            z-index: 101;
            width: 35px;
            height: 35px;
            cursor: pointer;
        }
    }

    .nav-container {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: #111111;
        opacity: 0;
        display: none;
        transition: all 0.5s ease;
        z-index: 100;
        align-items: center;
        justify-content: center;

        .nav {
            width: 60%;
            max-width: 800px;
            display: flex;
            justify-content: space-between;

            .nav__social {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .nav__logo {
                    width: 150px;
                }

                .social {
                    display: flex;
                    flex-direction: column;

                    .social__link {
                        font-size: 20px;
                        font-weight: 400;
                        color: #FAFAFA;
                        transition: all 0.25s ease-in-out;
                    }

                    .social__link span {
                        color: white;
                    }
                }
            }

            .nav__menu {

                .menu {
                    display: flex;
                    flex-direction: column;

                    .menu__link {
                        font-size: 100px;
                        font-weight: 400;
                        line-height: 80px;
                        margin-bottom: 20px;
                        color: #FAFAFA;
                        transition: all 0.25s ease-in-out;
                    }

                    .menu__link:last-child {
                        margin-bottom: 0;
                    }

                    .menu__link span {
                        color: white;
                    }
                }
            }
        }
    }
}
</style>