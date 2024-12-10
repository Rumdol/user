<template>
  <nav class="py-4">
    <ul class="flex justify-center space-x-8">
      <li v-for="category in categories" :key="category.slug" class="text-black font-semibold hover:text-gray-400">
        <NuxtLink
          :to="`/category/detail/${category.slug}`"
          class="px-4 py-2 hover:text-white text-black hover:bg-black rounded transition duration-300 ease-in-out">
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import categories from '~/assets/categories.json';
</script>

<style scoped>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  font-size: 1.1rem;
}
</style>
