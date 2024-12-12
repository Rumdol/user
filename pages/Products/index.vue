<script setup>
import { ref, computed, onMounted} from 'vue';
import { useProductStore } from '~/store/product.js'

// Define reactive properties
const filterOption = ref('');
const sortOrder = ref('');
const currentPage = ref(1);
const itemsPerPage = 20;
const products = ref([]);
const filterQuery = ref('');


const productStore = useProductStore();

const fetchProduct = async () => {
  try {
    await productStore.getProduct(); // Wait for the API call to complete
    products.value = productStore.product; // Assign the data after the call finishes
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};

onMounted(async () => {
  await fetchProduct(); // Ensure the API call finishes before proceeding
  console.log('Product:', products.value); // Log the data after it has been assigned
});
</script>

<template>
    <div class="products-container">
      <h1 class="text-2xl font-bold mb-4 ">Product List</h1>
      <div class="flex gap-3">

        <!--filter section-->
        <section class="filter-container border-2 rounded-md p-2 h-auto bg-white  mb-4">
          <div class="w-[200px] ml-[50px]">
            <p class="font-bold mb-2">Filter by</p>
            <ul  class="ml-4">
              <li>
                <input type="radio" id="name" value="name" v-model="filterOption" @change="filterProducts">
                <label for="name"> Name</label>
              </li>
              <li>
                <input type="radio" id="size" value="size" v-model="filterOption" @change="filterProducts">
                <label for="size"> Size</label>
              </li>
              <li>
                <input type="radio" id="price" value="price" v-model="filterOption" @change="filterProducts">
                <label for="price"> Price</label>
              </li>
            </ul>
          </div>
          <div class="w-[200px] ml-[50px] mt-[20px]">
            <p class="font-bold mb-2">Sort by</p>
            <ul class="ml-4">
              <li>
                <input type="radio" id="ascending" value="ascending" v-model="sortOrder" @change="sortProducts">
                <label for="ascending"> Ascending</label>
              </li>
              <li>
                <input type="radio" id="descending" value="descending" v-model="sortOrder" @change="sortProducts">
                <label for="descending"> Descending</label>
              </li>
            </ul>
          </div>
        </section>
        <!-- Product list -->
        <section>
          <div class="grid grid-cols-4 gap-6 ml-6 w-[1300px] h-auto">
            <div v-for="product in products" :key="product.id" class="border-2 border-gray-200 rounded-md">
              <img :src="product.image" alt="product image" class="w-[350px] h-[350px] object-cover  border-b-2 border-gray-200  " />
              <p class="font-semibold p-2">{{ product.title}}</p>
              <p class="ml-2">{{ product.size }} ml</p>
              <p class="ml-2">&dollar;{{ product.price }}</p>
              <button v-on:click="navigateTo('/products/' + product.id)" class="m-2 p-4 bg-cyan-300 text-white rounded flex items-center active:bg-opacity-50">
                View Detail
              </button>
            </div>
          </div>

          <div class="pagination flex justify-between items-center mt-6">
            <button @click="prevPage" :disabled="currentPage === 1" class="w-[100px] px-2 py-2 border-2 border-blue-200 text-blue-400 rounded active:text-opacity-30">Previous</button>
            <p>{{currentPage}}/{{totalPages}} Page</p>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="w-[100px] px-2 py-2 border-2 border-blue-200 text-blue-400 rounded active:text-opacity-30">Next</button>
          </div>
        </section>
      </div>
    </div>
</template>


<style scoped>
.filter-container{
  width: 500px;
}
.products-container {
  animation: content-animation 1s;
  font-family: Inter , sans-serif;
}

@keyframes content-animation {
  from{
    opacity: 0;
  }to{
  opacity: 100;
     }
}
</style>
