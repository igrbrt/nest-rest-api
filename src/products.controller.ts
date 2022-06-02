import { Product } from './entities/product.entity';
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
  products: Product[] = [
    new Product('Book0001', 'TDD and BDD in Action', 29.9),
    new Product('Book0002', 'NestJs Bible', 39.9),
    new Product('Book0003', 'NodeJs in Action', 19.9),
  ];

  @Get()
  all(): Product[] {
    return this.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.products.find((product) => product.id === params.id);
  }

  @Post()
  create(@Body() product: Product): string {
    product.id = this.products.length + 1;
    this.products.push(product);
    return 'product created successfully';
  }

  @Put()
  update(@Body() product: Product): Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params): string {
    const product = this.products.find((product) => product.id === params.id);
    this.products.splice(this.products.indexOf(product), 1);
    return 'product deleted successfully';
  }
}
