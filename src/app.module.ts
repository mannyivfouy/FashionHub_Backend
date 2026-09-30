import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './modules/roles/roles.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { CategoriesModule } from './modules/categories/categories.module.js';
import { ProductsModule } from './modules/products/products.module.js';
import { ProductImagesModule } from './modules/product-images/product-images.module.js';
import { ProductVariantsModule } from './modules/product-variants/product-variants.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { CartsModule } from './modules/carts/carts.module.js';
import { CartItemsModule } from './modules/cart-items/cart-items.module.js';
import { OrdersModule } from './modules/orders/orders.module.js';
import { OrderItemsModule } from './modules/order-items/order-items.module.js';
import { PaymentsModule } from './modules/payments/payments.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RolesModule,
    UsersModule,
    CategoriesModule,
    ProductsModule,
    ProductImagesModule,
    ProductVariantsModule,
    CustomersModule,
    CartsModule,
    CartItemsModule,
    OrdersModule,
    OrderItemsModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
