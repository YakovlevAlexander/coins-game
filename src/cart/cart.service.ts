import { Injectable } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { BaseService } from '../crud/base.service';

export interface CartData {
  itemId: number;
  quantity: number;
}

@Injectable()
export class CartService extends BaseService<Cart> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'Cart');
  }

  async getCart(userId: number): Promise<CartData[]> {
    const orders = await this.prisma.cart.findMany({
      where: { userId },
    });
    return orders.map((order) => ({ itemId: order.itemId, quantity: order.quantity }));
  }

  async addItem(userId: number, itemId: number): Promise<Cart> {
    const order = await this.prisma.cart.findFirst({
      where: { userId, itemId },
    });
    return this.update(order.id, {...order, quantity: order.quantity + 1});
  }

  async removeItem(userId: number, itemId: number): Promise<Cart> {
    const order = await this.prisma.cart.findFirst({
      where: { userId, itemId },
    });
    return order.quantity > 0
      ? await this.update(order.id, {...order, quantity: order.quantity - 1})
      : order;
  }
}
