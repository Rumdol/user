<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/product.js'

const products = ref([])
const productStore = useProductStore()
const { getDiscountedProduct } = productStore

const fetchProduct = async (params) => {
  try {
    products.value = await getDiscountedProduct(params) // Fetch products using the API
  } catch (error) {
    ElMessage.error('Failed to fetch product')
  }
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <div class="latest-content container mx-auto py-8">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">Discounted Products</h2>
      <el-button
        @click="navigateTo('/products')"
        class="text-lg cursor-pointer"
      >
        See More
      </el-button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mx-auto max-w-7xl p-6"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <!-- Image Section -->
        <div class="relative h-64">
          <img
            :src="product.image"
            alt="product image"
            class="w-full h-full object-cover"
          />
          <div
            v-if="product.discount"
            class="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded"
          >
            -{{ product.discount }}%
          </div>
        </div>

        <!-- Details Section -->
        <div class="p-4 flex flex-col justify-between h-[250px]">
          <div class="flex flex-col gap-2">
            <h2
              class="font-semibold text-lg text-gray-800 line-clamp-2"
            >
              {{ product.title }}
            </h2>
            <p class="text-sm text-gray-500">Code: {{ product.product_code }}</p>
            <p class="text-sm text-gray-500">Gender: {{ product.gender }}</p>
            <p class="text-lg text-green-600 font-bold">
              ${{ product.final_price || product.price }}
            </p>
            <p v-if="product.final_price" class="line-through text-gray-400">
              ${{ product.price }}
            </p>
          </div>
          <button
            @click="navigateTo('/products/' + product.slug)"
            class="w-full bg-cyan-500 text-white text-center py-2 rounded-lg hover:bg-cyan-600 active:bg-cyan-700 transition-colors duration-200 mt-2"
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.latest-content {
  width: 90%;
  margin: 0 auto;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
</style>
