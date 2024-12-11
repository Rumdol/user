<script setup>
import { ref } from 'vue';

const product = ref({
  id: 1,
  name: 'Product D',
  size: '350',
  price: 350,
  image: 'https://fastly.picsum.photos/id/316/400/400.jpg?hmac=4XFS3Y8na400IQP9h1DA72eeO4FiA8RVJk4CE9sNpzw',
  brand: 'Huewenw',
  gender: 'Female',
  description: 'Product D is a wonderful product designed for optimal use.'
});
</script>

<template>
    <h1 class="text-3xl mb-4"><Strong>Product Detail</Strong></h1>
    <div class="flex rounded-md border-2 border-gray-200 w-full h-[700px]">
      <div class="border-r-2 border-r-gray-200 p-4">
        <img :src="product.image" alt="Product Image" class="w-[500px] h-[500px]"/>
      </div>
      <div class="product-detail ml-4 p-4 text-xl font-bold">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-brand">span {{ product.brand }}</p>
        <p class="product-gender">Gender: {{ product.gender }}</p>
        <p class="product-size">Size: {{ product.size }} ml</p>
        <p class="product-price">Price: &dollar;{{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: &dollar;{{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">Price: &dollar;{{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <button class="buy-now">Buy Now</button>
      </div>
    </div>
</template>

<style scoped>
</style>

