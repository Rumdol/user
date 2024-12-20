<template>
  <div v-if="product" class="product-detail-container">
    <el-card shadow="hover" class="max-w-5xl mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Image Section -->
        <div class="product-image-section flex justify-center items-center">
          <el-image
            v-if="product.image"
            :src="product.image"
            fit="cover"
            class="w-full h-96 rounded-lg shadow-md"
          ></el-image>
          <div v-else class="skeleton w-96 h-96 rounded-lg"></div>
        </div>

        <!-- Details Section -->
        <div class="product-info space-y-6">
          <h1 class="text-3xl font-bold text-gray-800">{{ product.title }}</h1>
          <p class="text-gray-600 text-lg">{{ product.description }}</p>

          <div class="text-gray-700">
            <p><strong>Brand:</strong> {{ product.brand_id }}</p>
            <p><strong>Gender:</strong> {{ product.gender }}</p>
            <p><strong>Fragrance Family:</strong> {{ product.fragrance_family }}</p>
            <p><strong>Volume:</strong> {{ product.volume }} ml</p>
            <p><strong>Product Code:</strong> {{ product.product_code }}</p>
          </div>

          <div>
            <p class="text-green-600 text-2xl font-bold">Price: &dollar;{{ product.price }}</p>
            <p v-if="product.discount > 0" class="text-red-500">Discount: {{ product.discount }}%</p>
          </div>

          <el-button type="primary" class="buy-now-btn" size="large">
            Buy Now
          </el-button>
        </div>
      </div>
    </el-card>

    <!-- Related Products Section -->
    <div class="related-products mt-12">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <el-card
          v-for="relatedProduct in product.related_products"
          :key="relatedProduct.id"
          class="relative hover:shadow-lg"
        >
          <el-image
            :src="relatedProduct.image"
            fit="cover"
            class="w-full h-48 rounded-lg"
          ></el-image>
          <div class="mt-4">
            <h3 class="text-lg font-semibold text-gray-700">{{ relatedProduct.title }}</h3>
            <p class="text-gray-500 text-sm">{{ relatedProduct.description }}</p>
            <p class="text-green-600 text-lg font-bold mt-2">
              &dollar;{{ relatedProduct.price }}
            </p>
            <p v-if="relatedProduct.discount > 0" class="text-red-500 text-sm">
              Discount: {{ relatedProduct.discount }}%
            </p>
          </div>
          <el-button
            type="primary"
            size="small"
            class="absolute bottom-4 right-4"
            @click="navigateTo(`/products/${relatedProduct.id}`)"
          >
            View Product
          </el-button>
        </el-card>
      </div>
    </div>
  </div>

  <div v-else class="loading-container flex justify-center items-center w-full">
    <el-skeleton animated>
      <template #template>
        <div class="text-gray-500 text-xl">Loading...</div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '~/store/product.js';

const route = useRoute();
const router = useRouter();
const productId = route.params.id;
const product = ref(null);
const productStore = useProductStore();

const fetchProduct = async (productId) => {
  try {
    product.value = await productStore.showProduct(productId);
  } catch (error) {
    ElMessage.error('Failed to fetch product');
  }
};

const navigateTo = (path) => {
  router.push(path);
};

onMounted(() => {
  if (!productId) {
    navigateTo('/products');
  }
  fetchProduct(productId);
});
</script>

<style scoped>
.product-detail-container {
  padding: 1rem;
}
.skeleton {
  background-color: #e5e7eb;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
.related-products .el-card {
  cursor: pointer;
}
</style>
