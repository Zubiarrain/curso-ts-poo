import axios from "axios";
import { Category } from "../models/category.model"
import { Product } from "../models/product.model";
export class BaseHttpService<T> {

  constructor(
    private url: string
  ){}

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }
}

(async() => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const service = new BaseHttpService<Product>(url1);
  console.log('products',(await service.getAll()).length)

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const service2 = new BaseHttpService<Product>(url2);
  console.log('categories',(await service2.getAll()).length)
})()
