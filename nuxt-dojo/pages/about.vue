<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sunt laboriosam atque maxime itaque ab dolorum delectus ducimus. Saepe ab aspernatur dolores cum vero nam veritatis blanditiis dolorum quaerat eius?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    //const { data } = await useFetch('/api/ninja')
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>