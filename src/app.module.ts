import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { ProductModule } from './products/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(
        process.cwd(),
        'environments',
        `${process.env.NODE_ENV || 'dev'}.env`,
      ),
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
