import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.productsService.create(data);
  }
}
