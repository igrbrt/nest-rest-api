import { ProductService } from '../services/product.service';
import { Product } from '../entities/product.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  async all(): Promise<Product[]> {
    return this.productService.all();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Product> {
    return this.productService.getById(params.id);
  }

  @Post()
  async create(@Body() product: Product): Promise<string> {
    return this.productService.create(product);
  }

  @Put()
  async update(@Body() product: Product): Promise<string> {
    return this.productService.update(product);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<string> {
    return this.productService.delete(params.id);
  }
}
