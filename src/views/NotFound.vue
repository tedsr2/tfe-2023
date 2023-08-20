<script setup>

</script>

<template>
    <div class="container">
        <h1>40<span class="no-spacing">4</span></h1>
        <p>The page you are looking for does not exist</p>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 100vh;
    width: 100vw;
    background-color: #292b31;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color: #FAFAFA;
        font-size: clamp(4rem, 6vw, 8rem);
        margin-bottom: 40px;

        span {
            color: #FAFAFA;
        }
    }

    p {
        color: #FAFAFA;
    }
}
</style>