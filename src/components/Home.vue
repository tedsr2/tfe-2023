<script setup>

</script>

<template>
    <div class="home-container">
        <img src='src/assets/sound.jpg' class="background" alt="" />
        <div class="title-container">
            <h1 class="title">soundtrack<span class="tracking">s</span></h1>
            <h2 class="subtitle">the sound of movie<span class="tracking">s</span></h2>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    .background {
        bottom: 0;
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .title-container {
        z-index: 1;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        text-transform: uppercase;
        padding-top: 60px;

        .title {
            font-size: 4.5rem;
            font-weight: 400;
            letter-spacing: 1em;
            margin: 20px 0px;
        }

        .subtitle {
            font-size: 1.3rem;
            font-weight: 500;
            letter-spacing: 0.6em;
        }

        .tracking {
            letter-spacing: 0;
        }

    }
}
</style>