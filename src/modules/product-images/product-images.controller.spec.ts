import { Test, TestingModule } from '@nestjs/testing';
import { ProductImagesController } from './product-images.controller.js';
import { ProductImagesService } from './product-images.service.js';

describe('ProductImagesController', () => {
  let controller: ProductImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductImagesController],
      providers: [ProductImagesService],
    }).compile();

    controller = module.get<ProductImagesController>(ProductImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
