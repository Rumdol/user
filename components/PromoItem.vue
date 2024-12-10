<template>
  <head>
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <div class="promo-content container flex justify-center">
    <div class="promotion-sale">
      <div class="container flex justify-between">
        <h2 class="text-2xl font-semibold mb-4">Super Sale</h2>
        <h2 class="text-2xl font-semibold mb-4">See More</h2>
      </div>
      <div class="flex grid-cols-1 gap-4">
        <div
          v-for="promo in promotions"
          :key="promo.id"
          class="promo-item relative flex flex-col border p-4 rounded-md shadow-md"
        >
          <!-- Icon at Top-Right -->
          <div class="absolute top-2 right-2">
            <i class="bx bx-heart text-lg"></i>
          </div>

          <!-- Image -->
          <img
            :src="promo.image"
            alt="Promotion Sale"
            class="w-full h-60 object-cover rounded-md"
          />

          <!-- Title -->
          <h3 class="item-title text-xl mt-2">{{ promo.title }}</h3>

          <!-- Discount -->
          <p class="text-lg text-green-600 font-bold">{{ promo.discount }}</p>

          <!-- Price and Button -->
          <div class="grid grid-flow-col justify-stretch">
            <p class="item-price text-lg mt-2">{{ promo.price }}</p>
            <el-button type="success">Buy Now</el-button>
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

// Fetch data from both JSON files
onMounted(async () => {
  const promotionResponse = await fetch('/data/promotionSale.json')
  promotions.value = await promotionResponse.json()
})
</script>
<style scoped>
.promo-content {
  width: 90%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
}
.promo-item {
  width: 22.5%;
}
.item-tittle {
  color: #000;
}
.item-price {
  color: #000;
}
.bx {
  width: 40px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
