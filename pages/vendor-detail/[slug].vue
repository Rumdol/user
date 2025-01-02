<script setup>
import { ref, onMounted } from 'vue'
import { useVendorStore } from '~/store/vendor.js'
import { ElMessage } from 'element-plus'

const vendorDetail = ref([])
const vendorStore = useVendorStore()
const { showVendor } = vendorStore

const route = useRoute();

// Fetch vendors
const showVendorDetail = async () => {
  try {
    const slug = route.params.slug
    vendorDetail.value = await showVendor(slug)
  } catch (error) {
    ElMessage.error('Failed to fetch vendor detail')
  }
}


onMounted(() => {
  showVendorDetail()
})
</script>

<template>
  <div class="flex items-center border-b border-b-gray-400 p-4" v-if="vendorDetail">
    <div class="mr-[400px] flex items-center">
      <img :src="vendorDetail.logo || ' '" alt="Vendor Image" class="w-[150px] h-[150px]" />
    </div>
    <div>
      <div>Name: {{ vendorDetail.name }}</div>
      <div>Address: {{ vendorDetail.address }}</div>
      <div>Total products: {{ vendorDetail.total_products }}</div>
      <div>Joined since: {{ vendorDetail.created_at }}</div>
      <div>Email: {{ vendorDetail.email }}</div>
    </div>
  </div>

  <div>
    <div class="products-container px-4 md:px-8 lg:px-12">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Product list -->
        <section class="w-full lg:w-3/4">
          <VendorProductList
            :products="vendorDetail.products"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-action {
  cursor: pointer;
  background-color: #2ec4b6;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-inactive {
  cursor: pointer;
  background-color: #f1f1f1;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
}

.filter-container {
  animation: content-animation 1s;
  font-family: Inter, sans-serif;
}

.products-container {
  animation: content-animation 1s;
  font-family: Inter, sans-serif;
}

@keyframes content-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
