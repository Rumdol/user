<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/store/product.js'

const products = ref([])
const productStore = useProductStore()
const { getLatestProduct } = productStore

const fetchProduct = async (params) => {
  try {
    products.value = await getLatestProduct(params) // Data fetched from API response
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
      <h2 class="text-3xl font-bold">Latest Product</h2>
      <el-button
        @click="navigateTo('/Category')"
        class="text-lg cursor-pointer"
      >
        See More
      </el-button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="promo-item border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-48 object-cover cursor-pointer"
        />
        <div class="p-4">
          <h3 class="item-title text-lg font-semibold mb-2">
            {{ product.title }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.latest-content{
  width: 90%;
  margin: 0 auto;
}
</style>
