import { defineStore } from 'pinia'
import CategoryService from '~/services/CategoryService.js'

export const useCategoryStore = defineStore('category', () => {
  const category = ref({})
  const categoryService = CategoryService.getInstance()

  const getCategories = async (params) => {
    try {
      const { data } = await categoryService.getCategory(params)
      const categories = data || {}
      category.value = categories
      return categories
    } catch (error) {
      ElMessage.error(error.message || 'Get product failed')
      throw new Error(`Get product failed: ${error.message || 'Unknown error'}`)
    }
  }

  return {
    category: computed(() => category.value),
    getCategories
  }
})
