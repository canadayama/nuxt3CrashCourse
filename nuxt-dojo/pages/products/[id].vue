<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetail :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const config = useRuntimeConfig()
    const uri = config.public.apiBase + '/products/' + id

    const { data: product } = await useFetch(uri, {key: id})

    if (!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found!', fatal: true })
    }
    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>