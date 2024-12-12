import BaseService from './BaseService'

let instance = null
class ProductService extends BaseService {
  constructor() {
    super('product')
  }

  static getInstance() {
    if (!instance) {
      instance = new ProductService()
    }
    return instance
  }

  async getProduct() {
    return await this._get(`${this._prefix}/all`)
  }
  async getwishlist() {
    return await this._get(`${this._prefix}/wishlist`)
  }
  async fetchProductId(productID) {
    return await this._get(`${this._prefix}/:product`);
  }

}

export default ProductService
