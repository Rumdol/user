<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
    <ul class="space-y-4">
      <li class="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
        <NuxtLink to="/promotion" class=" text-hover text-xl font-semibold">Promotion</NuxtLink>
      </li>
      <li class="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
        <NuxtLink to="/Products" class=" text-hover text-xl font-semibold">Men</NuxtLink>
      </li>
      <li class="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
        <NuxtLink to="/Products" class=" text-hover text-xl font-semibold">Women</NuxtLink>
      </li>
      <li v-for="category in categories" :key="category.id" class="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
        <NuxtLink
          :to="`/category/detail/${category.slug}`"
          class="text-hover text-xl font-semibold"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import categories from 'assets/categories.json';
useSeoMeta({ title: 'Category' })
definePageMeta({ layout: 'homepage' })
</script>
<style scoped>
.text-hover{
  color: #000;
}
.text-hover:hover{
  color:  #2ec4b6;
}
</style>
