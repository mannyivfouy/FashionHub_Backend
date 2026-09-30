import { Module } from '@nestjs/common';
import { ProductVariantsService } from './product-variants.service.js';
import { ProductVariantsController } from './product-variants.controller.js';

@Module({
  controllers: [ProductVariantsController],
  providers: [ProductVariantsService],
})
export class ProductVariantsModule {}
