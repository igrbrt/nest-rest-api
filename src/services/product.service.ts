import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async all(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  async getById(id: number): Promise<Product> {
    return this.productModel.findByPk(id);
  }

  async create(product: Product): Promise<string> {
    try {
      this.productModel.create(product);
      return 'product created successfully';
    } catch (error) {
      return error.message;
    }
  }

  async update(product: Product): Promise<string> {
    try {
      this.productModel.update(product, {
        where: { id: product.id },
      });
      return 'product updated successfully';
    } catch (error) {
      return error.message;
    }
  }

  async delete(id: number): Promise<string> {
    try {
      const product = await this.productModel.findByPk(id);
      await product.destroy();
      return 'product deleted successfully';
    } catch (error) {
      return error.message;
    }
  }
}
