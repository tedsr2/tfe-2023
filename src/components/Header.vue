<script setup>
</script> 

<template>
    <div class="header-container">
        <div class="header-logo hidden">soundtracks</div>
        <div class="header-nav">
            <router-link :to="{name: 'home'}"><h3>home</h3></router-link>
            <router-link :to="{name: 'hans'}"><h3>hans zimmer</h3></router-link>
            <router-link :to="{name: 'john'}"><h3>john williams</h3></router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-container {
    width: 100%;
    height: 20vh;
    padding: 60px;
    background-color: transparent;
    position: fixed;
    z-index: 10;
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

        h3 {
            color: white;
            padding: 0px 60px;
            letter-spacing: 0.5em;
        }

        h3:last-child {
            padding-right: 0px;
        }
    }
}
</style>