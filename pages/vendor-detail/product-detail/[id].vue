<template xmlns="http://www.w3.org/1999/html">
  <div  class="product-detail-container">
    <el-card shadow="hover" class="max-w-5xl mx-auto mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Image Section -->
        <div class="product-image-section flex justify-center items-center" v-if="productDetail">
          <el-image
            :src="productDetail.image || 'path/to/fallback-image.jpg'"
            fit="cover"
            class="w-full h-96 rounded-lg shadow-md"
          ></el-image>
        </div>

        <!-- Details Section -->
        <div class="product-info space-y-6">
          <h1 class="text-3xl font-bold text-gray-800">{{productDetail.title}}</h1>
          <p class="text-gray-600 text-lg">{{productDetail.slug}}</p>

          <div class="text-gray-700">
            <p><strong>Category: </strong> {{productDetail.category?.name}}</p>
            <p><strong>Gender: </strong> {{ productDetail.gender }}</p>
            <p><strong>Volume: </strong> {{ productDetail.volume }} ml</p>
            <p><strong>Product Code: </strong> {{productDetail.product_code}}</p>
          </div>

          <div>
            <p class="text-green-600 text-2xl font-bold">Price: &dollar;{{ productDetail.price }}</p>
            <p  class="text-red-500">Discount: {{ productDetail.discount }}%</p>
            <p  class="">Tags: {{ productDetail.tags }}</p>
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
              <p class="border border-gray:10 p-2">{{amount}}</p>
              <button
                class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600"
                @click="increaseAmount"
                :disabled="amount >= maxAmount"
              >
                +
              </button>
            </div>

            <!-- Add to Cart Button -->
            <el-button
              type="primary"
              class="buy-now-btn"
              size="large"
              @click="addToCart"
            >Add to Cart
            </el-button>
          </div>
        </div>
      </div>
      </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore} from '~/store/product.js'
import { ElMessage } from 'element-plus'


const route = useRoute();

const productStore = useProductStore();
const { showProduct } = productStore;
const productDetail = ref('');
const id = route.params.id

// Fetch vendors
const fetchProduct = async (id) => {
  try {
    productDetail.value = await showProduct(id)
  } catch (error) {
    ElMessage.error('Failed to fetch vendor detail')
  }
}

const amount = ref(1) // Initial quantity
const maxAmount = ref(10) // Set the maximum quantity

// Decrease the quantity
const decreaseAmount = () => {
  if (amount.value > 1) {
    amount.value -= 1
  }
}

// Increase the quantity
const increaseAmount = () => {
  if (amount.value < maxAmount.value) {
    amount.value += 1
  }
}

const validateAmount = () => {
  if (amount.value < 1) {
    amount.value = 1
  } else if (amount.value > maxAmount.value) {
    amount.value = maxAmount.value
  }
}

// Add to Cart
const addToCart = ( id, amount ) => {
   navigateTo('/cart');
}

onMounted(() => {
  fetchProduct(id)
})



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
