import BaseService from './BaseService'

let instance = null
class VendorService extends BaseService {
  constructor() {
    super('vendor')
  }

  static getInstance() {
    if (!instance) {
      instance = new VendorService()
    }
    return instance
  }

  async getVendor(payload = {}) {
    const queryParams = new URLSearchParams(payload).toString()
    // Make the API call with the query parameters
    return await this._get(`${this._prefix}?${queryParams}`, {})
  }

  async showVendor(slug) {
    return await this._get(`${this._prefix}/${slug}`);
  }

}

export default VendorService
