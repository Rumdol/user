import ProductService from '~/services/ProductService.js'

export const useProductStore = defineStore('product', () => {
  const product = ref({});
  const productService = ProductService.getInstance()

  const getProduct = async () => {
    try {
      const { data } = await productService.getProduct()
      const { data: products} = data?.value?.data || {}
      product.value = products
      return products
    } catch (error) {
      ElMessage.error(error.message || 'Get product failed')
      throw new Error(`Get product failed: ${error.message || 'Unknown error'}`)
    }
  };

  return { product, getProduct };
});
