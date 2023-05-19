<script setup>
</script> 

<template>
    <div class="nav-container">
        <router-link :to="{ name: 'hans' }">
            <div class="composer">
                <img class="composer__images" src="/images/hans-zimmer.jpg" alt="Hans Zimmer image">
            </div>
        </router-link>
        <router-link :to="{ name: 'john' }">
            <div class="composer">
                <img class="composer__images" src="/images/john-williams.jpg" alt="John Williams image">
            </div>
        </router-link>
        <router-link :to="{ name: 'michael' }">
            <div class="composer">
                <img class="composer__images" src="/images/michael-giacchino.jpg" alt="Michael Giacchino image">
            </div>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
.nav-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    .composer {
        z-index: 20;
        width: 20vw;
        height: 60vh;
        margin: 0px 0.5vw;
        transition-duration: 0.5s;
        cursor: pointer;

        .composer__images {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .composer:hover {
        scale: 1.05;
    }

    .wide {
        pointer-events: none;
    }
}
</style>