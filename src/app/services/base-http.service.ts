import axios from "axios";
import { Category } from "../models/category.model"
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";
export class BaseHttpService<T> {

  constructor(
    protected url: string
  ){}

  async getAll(): Promise<T[]> {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }

  async update<ID,DTO>(id: ID, changes: DTO) {
    const {data} = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

(async() => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const productService = new BaseHttpService<Product>(url1);
  console.log('products',(await productService.getAll()).length)
  productService.update<Product['id'], UpdateProductDto>(1,{
    title:'as',
  })

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2);
  console.log('categories',(await categoryService.getAll()).length)
})()
