<script setup>
import { defineProps } from 'vue';

// Define props for products, current page, and total pages
const props = defineProps({
  products: Array,
});
</script>

<template>
  <div class="products-container px-4 md:px-8 lg:px-12">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl p-6 w-[1500px]">
      <div
        v-for="product in products"
        :key="product.id"
        class="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <!-- Product Image -->
        <div class="relative h-72">
          <img :src="product.image" :alt="product.image" class="w-full h-full object-cover" />
        </div>

        <!-- Product Details -->
        <div class="p-2 flex flex-col justify-between h-[200px]">
          <h2 class="font-semibold text-lg text-gray-800 line-clamp-2 h-[60px]">{{ product.title }}</h2>
          <p class="text-lg  font-bold">{{ product.volume }} ml</p>
          <p class="text-lg text-green-600 font-bold">&dollar;{{ product.price }}</p>
          <p class="text-lg text-red-600 font-bold">{{ product.discount }}&#37;</p>
          <button
            @click="() => navigateTo('/vendor-detail/product-detail/' + product.id)"
            class="w-full bg-cyan-500 text-white text-center py-2 rounded-lg hover:bg-cyan-600 active:bg-cyan-700 transition-colors duration-200 mt-2"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination flex justify-between items-center mt-6 w-[1500px]">
      <el-button @click="prevPage" :disabled="currentPage === 1" class="w-[100px] text-blue-400 border-blue-200">Previous</el-button>
      <div class="page-numbers flex gap-2">
        <el-button
          v-for="page in Array.from({ length: totalPages }, (_, i) => i + 1)"
          :key="page"
          :class="page === currentPage ? 'btn-action' : 'btn-inactive'"
          @click="fetchProducts(page)"
        >
          {{ page }}
        </el-button>
      </div>
      <el-button @click="nextPage" :disabled="currentPage === totalPages" class="w-[100px] text-blue-400 border-blue-200">Next</el-button>
    </div>
  </div>
</template>

<style scoped>
.btn-action {
  cursor: pointer;
  background-color: #2ec4b6;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-inactive {
  cursor: pointer;
  background-color: #f1f1f1;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
}

.filter-container {
  animation: content-animation 1s;
  font-family: Inter, sans-serif;
}

.products-container {
  animation: content-animation 1s;
  font-family: Inter, sans-serif;
}

@keyframes content-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
