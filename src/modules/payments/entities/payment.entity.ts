import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Order } from '../../orders/entities/order.entity.js';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  order_id: string;

  @Column({
    type: 'enum',
    enum: ['stripe', 'paypal', 'bakong'],
  })
  provider: 'stripe' | 'paypal' | 'bakong';

  @Column({ type: 'varchar', length: 255, nullable: true })
  transaction_id: string | null;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'paid', 'failed', 'cancelled', 'refunded'],
    default: 'pending',
  })
  status: 'pending' | 'paid' | 'failed' | 'cancelled' | 'refunded';

  @Column({ type: 'timestamp', nullable: true })
  paid_at: Date | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Order, (order) => order.payment, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order: Order;
}
