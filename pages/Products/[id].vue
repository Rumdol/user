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
import { useRoute } from 'vue-router';
import { useProductStore } from '~/store/product.js';
import { useCartStore } from '~/store/cart.js';

const route = useRoute();
const productId = route.params.id;
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
  if(amount.value < 10)
  {
    amount.value++;
  }
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
