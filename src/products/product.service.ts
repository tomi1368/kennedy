import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model, Types } from 'mongoose';
import { CreateProductDto } from './dtos/createProduct.dto';
import { UpdateProductDto } from './dtos/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(body: CreateProductDto) {
    const newProduct = await this.productModel.create(body);
    return newProduct;
  }

  async getAll() {
    const products = await this.productModel.find({}).lean().exec();
    return products;
  }

  async deleteOne(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
    }

    const deleteProduct = await this.productModel
      .findOneAndDelete({ _id: id })
      .lean()
      .exec();
    if (!deleteProduct) {
      throw new HttpException('No product founded', HttpStatus.BAD_REQUEST);
    }
    return deleteProduct;
  }

  async updateOne(body: UpdateProductDto, id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
    }
    const updatedProduct = await this.productModel
      .findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
      .lean()
      .exec();
    if (!updatedProduct) {
      throw new HttpException('No product founded', HttpStatus.BAD_REQUEST);
    }
    return updatedProduct;
  }
}
