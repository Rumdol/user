<template>
  <div class="max-w-sm mx-auto p-4 bg-gray-50 rounded-lg shadow-lg">
    <div v-if="category">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">{{ category.name }}</h2>
        <p class="text-sm text-gray-500 mt-2">{{ category.description }}</p>
      </div>

      <div>
        <ul class="space-y-4">
          <li v-for="product in category.products" :key="product.id" class="bg-white p-4 rounded-lg shadow-sm hover:bg-gray-100">
            <p class="text-gray-800 text-lg">{{ product.name }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div v-else-if="loading" class="text-center text-gray-600">
      <p>Loading...</p>
    </div>

    <div v-else class="text-center text-gray-600">
      <p>Category not found</p>
    </div>
  </div>
</template>


<script setup>
definePageMeta({
  layout: 'homepage',
});
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import categories from 'assets/categories.json';

const categoriesData = categories;

const category = ref(null);
const loading = ref(true);
const error = ref(null);

const route = useRoute();

onMounted(() => {
  const categorySlug = route.params.slug;
  console.log(categorySlug);
  const foundCategory = categoriesData.find(cat => cat.slug === categorySlug);

  if (foundCategory) {
    category.value = foundCategory;
  } else {
    error.value = 'Category not found';
  }

  loading.value = false;
});
</script>
