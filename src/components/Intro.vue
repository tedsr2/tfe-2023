<script setup>

</script>

<template>
    <div class="headphone">
        <svg className='scale-[2.0]' width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FAFAFA"
                d="M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z" />
        </svg>
        <p className='uppercase tracking-[1em] m-10 text-center leading-8'>put your headphone</p>
    </div>
</template>

<style scoped lang="scss">
.headphone {
    position: absolute;
    background-color: black;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
