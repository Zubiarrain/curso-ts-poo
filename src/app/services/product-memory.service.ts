import { Product } from "../models/product.model";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { faker } from "@faker-js/faker";

export class ProductMemoryService {
  private products: Product[] = [];

  private throwError(error:string) {new Error(error)}

  private getIndexProduct(id: string | number) {
    const index = this.products.findIndex(product => product.id == id)
    index === -1 && this.throwError('Product not found')

    return index
  }

  create(data:CreateProductDto): Product {
    const newProduct = { //-> se haría en la BBDD
      ...data,
      id: faker.string.uuid(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.url()
      }

    }
    return this.add(newProduct)
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.getIndexProduct(id)
    let product = this.products[index]

    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index]
  }

  findOne(id:Product['id']){
    return this.products.find(item => item.id === id);
  }

  deleteProduct(id: Product['id']) {
    const index = this.getIndexProduct(id)
    this.products.splice(index,1)
  }

}








