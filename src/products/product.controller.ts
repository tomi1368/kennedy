import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.getAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  updateOne(@Body() body: UpdateProductDto, @Param('id') id: string) {
    return this.productService.updateOne(body, id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.productService.deleteOne(id);
  }
}
