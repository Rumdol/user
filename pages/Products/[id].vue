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

          <div class="flex items-center gap-4">
            <!-- Quantity Selector -->
            <div class="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                @click="decreaseAmount"
                :disabled="amount <= 1"
              >
                -
              </button>
              <input
                type="number"
                class="w-12 text-center border-0 outline-none"
                v-model.number="amount"
                min="1"
              />
              <button
                class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                @click="increaseAmount"
              >
                +
              </button>
            </div>

            <!-- Add to Cart Button -->
            <el-button
              type="primary"
              class="buy-now-btn"
              size="large"
              @click="addToCart(productId)"
            >
              Add to Cart
            </el-button>
          </div>

        </div>
      </div>
    </el-card>
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
import { useRoute } from 'vue-router';  // Import `useRoute` from vue-router
import { useProductStore } from '~/store/product.js';
import { useCartStore } from '~/store/cart.js';

const route = useRoute();  // Use the `useRoute` hook to get access to route params
const productId = route.params.id;  // Assuming `id` is the route parameter
const product = ref(null);
const productStore = useProductStore();
const cartStore = useCartStore();

const fetchProduct = async (productId) => {
  try {
    product.value = await productStore.showProduct(productId);
  } catch (error) {
    ElMessage.error('Failed to fetch product');
  }
};

// Add to cart logic
const amount = ref(1);

const increaseAmount = () => {
  amount.value++;
};

const decreaseAmount = () => {
  if (amount.value > 1) {
    amount.value--;
  }
};

const addToCart = async () => {
  try {
    const params = {
      product: productId, // Pass the product ID from the route
      count: amount.value, // Pass the quantity
    };
    console.log('Adding to cart with params:', params);

    // Call the cartStore's addCart method (action)
    const response = await cartStore.addCart(params);

    // Log the updated cart state or API response
    console.log('Cart updated:', response);
    ElMessage.success('Product added to cart successfully');
    return response;

  } catch (error) {
    console.error('Failed to add product to cart:', error.message);
    ElMessage.error(`Failed to add product to cart: ${error.message}`);
  }
};

// Fetch the product data when the component is mounted
onMounted(() => {
  if (!productId) {
    navigateTo('/products'); // Fallback if no productId is found
  } else {
    fetchProduct(productId);
  }
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
</style>
