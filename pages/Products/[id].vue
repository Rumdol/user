<template>
  <h1 class="text-3xl mb-4"><strong>Product Detail</strong></h1>
  <div class="flex rounded-md border-2 border-gray-200 w-full h-[700px]">
    <div class="border-r-2 border-r-gray-200 p-4">
      <img :src="products.image" alt="Product Image" class="w-[500px] h-[500px]"/>
    </div>
    <div class="product-detail ml-4 p-4 text-xl font-bold">
      <h2 class="product-name">{{ products.title }}</h2>
      <p class="product-brand">{{ products.brand_id }}</p>
      <p class="product-gender">Gender: {{ products.gender }}</p>
      <p class="product-price">Price: &dollar;{{ products.price }}</p>
      <button class="buy-now">Buy Now</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '~/store/product.js';

const route = useRoute();
const productID = route.params.id;
const products = ref(null);
const productStore = useProductStore();

const fetchProduct = async (productID) => {
  try {
    await productStore.showProductById(productID);
    products.value = productStore.product;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

onMounted(() => {
  if (productID) {
    console.log(productID);
    showProductById(productID);
  }
});
</script>

<style scoped>
</style>


