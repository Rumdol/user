<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="category in categories"
        :key="category.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div @click="navigateTo('/category/detail/' + category.slug)" class="cursor-pointer">
          <img
            :src="category.icon"
            alt="Category Icon"
            class="w-full h-40 object-cover"
          />
          <div class="p-4">
            <div
              class="text-hover text-xl font-semibold block mb-2"
            >
              {{ category.name }}
            </div>
            <p v-if="category.description" class="text-gray-600 text-sm">
              {{ category.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
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
    categories.value = response;
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<style scoped>
.text-hover {
  color: #000;
  text-decoration: none;
}
.text-hover:hover {
  color: #2ec4b6;
}
</style>
