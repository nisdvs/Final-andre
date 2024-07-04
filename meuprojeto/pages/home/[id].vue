<script setup>
    const route = useRoute();
    const url = 'http://localhost:8000/api/auth/product/';

    const {data: produto} = await useFetch(`${url}${route.params.id}`);

    console.log(`${url}${route.params.id}`);
    console.log(produto);
</script>

<template>
    <div>
        <strong>{{ produto.id }}</strong><br>
        <strong>Nome:{{produto.name}}</strong><br>
        <strong>Descrição:{{produto.description}}</strong><br>
        <img :src="produto.image">
    </div>
</template>