<template>
  <div class="store-container container  ">
    <div class="flex justify-center space-x-8">
      <!-- Left Block: Promotion Sale -->
      <div class="promotion-sale w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Promotion Sale</h2>
        <div class="flex grid-cols-1 gap-4">
          <div
            v-for="promo in promotions"
            :key="promo.id"
            class="promo-item border p-4 rounded-md shadow-md"
          >
            <img
              :src="promo.image"
              alt="Promotion Sale"
              class="w-full h-60 object-cover rounded-md"
            />
            <h3 class="text-xl mt-2">{{ promo.title }}</h3>
            <div class="container flex justify-evenly">
                <p class="text-lg text-red-500 mt-2">{{ promo.price }}</p>
                <el-button type="success">Buy Now</el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Block: Most Popular -->
      <div class="most-popular w-1/2">
        <h2 class="text-2xl font-semibold mb-4">Most Popular</h2>
        <div class="flex items-center">
          <div
            v-for="item in popularItems"
            :key="item.id"
            class="popular-item border p-4 rounded-md shadow-md"
          >
            <img
              :src="item.image"
              alt="Most Popular"
              class="w-full h-60 object-cover rounded-md"
            />
            <h3 class="text-xl mt-2">{{ item.title }}</h3>
            <p class="text-lg text-blue-500 mt-2">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Define ref for storing JSON data
const promotions = ref([])
const popularItems = ref([])

// Fetch data from both JSON files
onMounted(async () => {
  const promotionResponse = await fetch('/data/promotionSale.json')
  promotions.value = await promotionResponse.json()

  const popularResponse = await fetch('/data/mostPopular.json')
  popularItems.value = await popularResponse.json()
})
</script>

<style scoped>
.store-container {
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
}
.promo-item,
.popular-item{
    width: 200px;
    height: 350px;
    
}

.promo-item img,
.popular-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.promo-item h3,
.popular-item h3 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.promo-item p,
.popular-item p {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
}

.promo-item {
  transition: transform 0.3s ease-in-out;
}

.promo-item:hover {
  transform: translateY(-10px);
}

.popular-item {
  transition: transform 0.3s ease-in-out;
}

.popular-item:hover {
  transform: translateY(-10px);
}
</style>
