<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const config = useRuntimeConfig()
    const uri = config.public.apiBase + '/products'

    const { data: products } = await useFetch(uri)

    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            { name: 'description', content: 'Nux 3 Merch' }
        ],
    })
</script>

<style scoped>

</style>