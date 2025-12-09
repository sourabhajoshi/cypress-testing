<template>
  <div>
    <h1 data-cy="title">Product Details Page</h1>
    <p data-cy="product-id">Product ID: {{ productId }}</p>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const productId = route.params.id;
</script>
