<template>
  <div class="container mx-auto">
    <el-table :data="tableData" class="table-list">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="image" label="" width="190">
        <template #default="scope">
          <img
            :src="scope.row.image"
            alt="Table Image"
            class="w-16 h-16 object-cover"
          />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="Name" width="210">
        <template #default="scope">
          <span class="name-text">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="Price" width="160">
        <template #default="scope">
          <span class="price-text">{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="Type" width="200">
        <template #default="scope">
          <span class="price-text">{{ scope.row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="Stock Statue" width="200">
        <template #default="scope">
          <span class="name-text">{{ scope.row.stock }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Add to Cart" width="100">
        <template #default="scope">
          <Icon name="uil:cart" class="cart-icon" />
        </template>
      </el-table-column>
      <el-table-column label="" width="100">
        <template #default="scope">
          <Icon name="uil:trash" class="remove-icon" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
useSeoMeta({ title: 'Rumdul | Cart' })
definePageMeta({ layout: 'default' })
import { ref, onMounted } from 'vue'

const tableData = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data/tableData.json') // Adjust path as needed
    tableData.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch table data:', error)
  }
})
</script>

<style scoped>
.container {
  text-align: start;
}
.table-list{
  width: 100%;
  display: flex;
  justify-content: center;
}
img {
  border-radius: 8px;
}
.name-text {
  color: #000; 
  font-weight: bold;
}
.price-text {
  color: #3eae3e; 
  font-weight: 400;
}
.cart-icon {
  margin-left: 15px;
  font-size: 1.4rem;
  color: #000;
  cursor: pointer;
}
.cart-icon:hover {
  color: #2ec4b6;
}
.remove-icon {
  margin-left: 15px;
  font-size: 1.4rem;
  color: #000;
  cursor: pointer;
}
.remove-icon:hover {
  color: #db0d0d;
}
</style>
