import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  name: string;
  @IsOptional()
  @IsNumber()
  price: number;
  @IsOptional()
  @IsNumber()
  quantity: number;
}
