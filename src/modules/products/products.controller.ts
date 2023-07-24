/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from '../dto/products.dto';
import { defaultErrorHandler } from 'src/utils/defaultErrorHandler';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.productsService.create(data);
  }

  @Get()
  async findAll() {
    try {
      return this.productsService.findAll();
    }
    catch (e) {
      defaultErrorHandler(e)
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ProductDTO) {
    try {
      return this.productsService.update(id, data);
    }
    catch (e) {
      defaultErrorHandler(e)
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return this.productsService.delete(id);
    }
    catch (e) {
      defaultErrorHandler(e)
    }

  }
}
