import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cart } from '../../carts/entities/cart.entity.js';
import { ProductVariant } from '../../product-variants/entities/product-variant.entity.js';

@Entity('cart_items')
export class CartItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  cart_id: string;

  @Column({ type: 'uuid' })
  product_variant_id: string;

  @Column({ type: 'integer', default: 1 })
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Cart, (cart) => cart.cart_items, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;

  @ManyToOne(
    () => ProductVariant,
    (product_variant) => product_variant.cart_items,
    {
      onDelete: 'RESTRICT',
    },
  )
  @JoinColumn({ name: 'product_variant_id' })
  product_variant: ProductVariant;
}
