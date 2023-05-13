<script setup>
</script> 

<template>
    <div class="header-container">
        <div class="logo">soundtracks</div>
        <div class="header-nav">
            <router-link :to="{name: 'home'}"><h4>home</h4></router-link>
            <router-link :to="{name: 'hans'}"><h4>hans zimmer</h4></router-link>
            <router-link :to="{name: 'john'}"><h4>john williams</h4></router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header-container {
    width: 100%;
    height: 10vh;
    padding: 30px;
    background-color: transparent;
    position: fixed;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    mix-blend-mode: difference;
    color: #111111;

    .logo {
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: white;
    }

    .header-nav {
        display: flex;

        h4 {
            color: white;
            padding: 0px 20px;
        }

        h4:last-child {
            padding-right: 0px;
        }
    }
}
</style>