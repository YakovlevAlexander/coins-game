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

  //userId - fill after validate jwt in version with authentification
  async getCart(userId = 1): Promise<CartData[]> {
    const orders = await this.prisma.cart.findMany({
      where: { userId },
    });
    return orders.map((order) => ({ itemId: order.itemId, quantity: order.quantity }));
  }

  async addItem(itemId: number, userId = 1): Promise<Cart> {
    const order = await this.prisma.cart.findFirst({
      where: { userId, itemId },
    });
    return this.update(order.id, {...order, quantity: order.quantity + 1});
  }

  async removeItem(itemId: number, userId = 1): Promise<Cart> {
    const order = await this.prisma.cart.findFirst({
      where: { userId, itemId },
    });
    return order.quantity > 0
      ? await this.update(order.id, {...order, quantity: order.quantity - 1})
      : order;
  }
}
