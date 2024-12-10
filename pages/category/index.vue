<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
    <ul class="space-y-4">
      <li v-for="category in categories" :key="category.id" class="bg-white p-4 rounded-lg shadow-md hover:bg-gray-50">
        <NuxtLink
          :to="`/category/detail/${category.slug}`"
          class="text-xl font-semibold text-gray-700 hover:text-blue-600"
        >
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import categories from 'assets/categories.json';
</script>
