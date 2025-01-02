import { defineStore } from 'pinia'
import VendorService from '~/services/VendorService.js'

export const useVendorStore = defineStore('vendor', () => {
  const vendor = ref({})
  const vendorDetail = ref({})
  const vendorService = VendorService.getInstance()

  const getVendor = async(params) => {
    try{
      const { data } = await vendorService.getVendor(params)
      const vendors = data || {}
      vendor.value = vendors
      return vendors
    }catch(error) {
      ElMessage.error("Failed to get vendor",error)
    }
  }

  const showVendor = async (slug) => {
    try{
      const { data } = await vendorService.showVendor(slug); // Fetch data using the slug
      return data || {}; // Return vendor data or empty object if no data found
    }catch (error) {
      ElMessage.error(error.message || 'Failed to fetch vendor',error)
    }
  }

  return {
    getVendor,
    showVendor
  }
})
