<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl p-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <!-- Image Section -->
      <div class="relative h-72">
        <img
          :src="product.image"
          alt="product image"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Details Section -->
      <div class="p-2 flex flex-col justify-between h-[200px]">
        <div class="flex flex-col gap-1">
          <h2 class="font-semibold text-lg text-gray-800 line-clamp-2 h-[60px]">{{ product.title }}</h2>
          <p class="text-sm text-gray-500">Size: {{ product.volume }} ml</p>
          <p class="text-lg text-green-600 font-bold">&dollar;{{ product.price }}</p>
        </div>
        <button
          @click="navigateTo('/products/' + product.id)"
          class="w-full bg-cyan-500 text-white text-center py-2 rounded-lg hover:bg-cyan-600 active:bg-cyan-700 transition-colors duration-200 mt-2"
        >
          View Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Additional hover and transition effects */
button {
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
