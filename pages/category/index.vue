<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
    <ul class="space-y-4">
      <li
        v-for="category in categories"
        :key="category.id"
        class="flex items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
      >
        <img
          :src="category.icon"
          alt="Category Icon"
          class="w-12 h-12 mr-4 rounded-full object-cover"
        />
        <div>
          <NuxtLink
            :to="`/category/detail/${category.slug}`"
            class="text-hover text-xl font-semibold"
          >
            {{ category.name }}
          </NuxtLink>
          <p v-if="category.description" class="text-gray-600 mt-1">
            {{ category.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCategoryStore } from '~/store/category.js'

useSeoMeta({ title: 'Category' })
definePageMeta({ layout: 'homepage' })
const categoryStore = useCategoryStore();
const { getCategories } = categoryStore;

const categories = ref([]);

const fetchCategories = async () => {
  const response = await getCategories();
  if (response) {
    categories.value = response.data.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      icon: category.icon || 'https://via.placeholder.com/48', // Placeholder for missing icons
      description: category.description,
    }));
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.text-hover {
  color: #000;
}
.text-hover:hover {
  color: #2ec4b6;
}
</style>
