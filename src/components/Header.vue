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

const startAnimation1 = () => {
    const tl = gsap.timeline();

    tl.to(nav.value, {
        duration: 0.2,
        display: "flex",
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
        .to(logo.value, {
            duration: 0.1,
            opacity: 0,
        })
        .to(line1.value, {
            delay: -0.6,
            duration: 0.1,
            backgroundColor: 'white',
            y: '5px',
            rotate: "45deg",
            ease: "power1.inOut",
        })
        .to(line2.value, {
            delay: -0.6,
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
};
</script> 

<template>
    <div>
        <div class="nav-container">
            <div class="header-container">
                <div ref="logo" class="header-logo"><svg class="svg" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 225">
                        <polygon
                            points="86.67 100 130 125 130 175 86.67 200 43.33 225 0 200 0 150 43.33 175 86.67 150 86.67 100" />
                        <polygon points="43.33 125 0 100 0 50 43.33 25 86.67 0 130 25 130 75 86.67 50 43.33 75 43.33 125" />
                    </svg>
                </div>
                <div class="header-name">
                    <p ref="name">SOUNDTRACKS @2023</p>
                </div>
                <div class="button" @click="startAnimation1">
                    <div class="button__line" ref="line1"></div>
                    <div class="button__line" ref="line2"></div>
                </div>
                <div class="back-button hidden" ref="back">back</div>
            </div>
            <div class="nav-menu" ref="nav">
                <div class="menu-container">
                    <div class="nav-link">
                        <div ref="logo" class="nav-logo"><svg class="svg" id="Layer_1" data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 225">
                                <polygon
                                    points="86.67 100 130 125 130 175 86.67 200 43.33 225 0 200 0 150 43.33 175 86.67 150 86.67 100" />
                                <polygon
                                    points="43.33 125 0 100 0 50 43.33 25 86.67 0 130 25 130 75 86.67 50 43.33 75 43.33 125" />
                            </svg>
                        </div>
                    </div>
                    <div class="menu">
                        <a href="#/" class="menu__link">hom<span class="no-spacing">e</span></a>
                        <a href="#/hans-zimmer" class="menu__link">hans zimme<span class="no-spacing">r</span></a>
                        <a href="#/john-williams" class="menu__link">john william<span class="no-spacing">s</span></a>
                        <a href="#/michael-giacchino" class="menu__link">michael giacchin<span
                                class="no-spacing">o</span></a>
                    </div>
                </div>
                <!-- <router-link :to="{name: 'home'}"><h3>home</h3></router-link>
                <router-link :to="{name: 'hans'}"><h3>hans zimmer</h3></router-link>
                <router-link :to="{name: 'john'}"><h3>john williams</h3></router-link>
                <router-link :to="{name: 'michael'}"><h3>michael giacchino</h3></router-link> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav-container {
    .header-container {
        width: 100%;
        height: 10vh;
        padding: 20px;
        background-color: transparent;
        position: fixed;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        mix-blend-mode: difference;
        color: #111111;
    }

    .header-container {
        width: 100%;
        height: 10vh;
        padding: 20px;
        background-color: transparent;
        position: fixed;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: space-between;
        mix-blend-mode: difference;
        color: #111111;
        z-index: 101;

        .header-logo {
            width: 35px;
            padding-top: 5px;

            .svg {
                height: 40px;
            }
        }

        .header-name {

            p {
                color: #111111;
                font-weight: 600;
            }
        }

        .header-void {
            width: 35px;
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
        }
    }

    .nav-menu {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: #111111;
        opacity: 0;
        display: none;
        transition: all 0.5s ease;
        z-index: 100;
        align-items: center;
        justify-content: center;

        .menu-container {
            width: 80%;

            .nav-link {
                display: flex;
                flex-direction: column;

                .nav-logo {
                    width: 35px;
                }
            }
        }

        .nav__link {
            position: relative;
            display: block;
            text-transform: uppercase;
            text-align: center;
            color: white;
            margin: 100px 20px;
            letter-spacing: 0.2em;
            transition: 0.5s;
            padding: 0px 5px;
        }

        .nav__link span {
            color: white;
        }

        .nav__link:last-child {
            margin-right: 0px;
        }

        .nav__link::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 7px;
            top: 11px;
            left: 0px;
            background: #b64f00;
            transition: transform 0.5s;
            transform: scaleX(0);
            transform-origin: right;
            z-index: -1;
        }

        .nav__link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}
</style>