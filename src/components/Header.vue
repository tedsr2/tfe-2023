<script setup>
</script> 

<template>
    <div class="header-container">
        <div class="header-logo hidden">soundtracks</div>
        <div class="header-nav">
            <a href="#/" class="header-nav__link">hom<span class="no-spacing">e</span></a>
            <a href="#/hans-zimmer" class="header-nav__link">hans zimme<span class="no-spacing">r</span></a>
            <a href="#/john-williams" class="header-nav__link">john william<span class="no-spacing">s</span></a>
            <a href="#/michael-giacchino" class="header-nav__link">michael giacchin<span class="no-spacing">o</span></a>
            <!-- <router-link :to="{name: 'home'}"><h3>home</h3></router-link>
            <router-link :to="{name: 'hans'}"><h3>hans zimmer</h3></router-link>
            <router-link :to="{name: 'john'}"><h3>john williams</h3></router-link>
            <router-link :to="{name: 'michael'}"><h3>michael giacchino</h3></router-link> -->
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-container {
    width: 100%;
    height: 15vh;
    padding: 45px;
    background-color: transparent;
    position: fixed;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
    mix-blend-mode: difference;
    color: #111111;

    .header-logo {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.5em;
        text-transform: uppercase;
        color: white;
    }

    .header-nav {
        display: flex;

        .header-nav__link {
            position: relative;
            display: block;
            text-transform: uppercase;
            text-align: center;
            color: white;
            margin: 0px 20px;
            letter-spacing: 0.2em;
            transition: 0.5s;
            padding: 0px 5px;
        }

        .header-nav__link span {
            color: white;
        }

        .header-nav__link:last-child {
            margin-right: 0px;
        }

        .header-nav__link::after {
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

        .header-nav__link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}
</style>