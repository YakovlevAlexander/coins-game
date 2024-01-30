import { Injectable } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { BaseService } from '../crud/base.service';

@Injectable()
export class CartService extends BaseService<Cart> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'Cart');
  }

  // async getCart(userId: number): Promise<Cart> {
  //   const res = await this.findAll()
  // }

  // async addItem(userId: number, itemId: number): Promise<Cart> {
  //   const currentOrder = await this.prisma.cart.findFirst({
  //     where: { userId, itemId },
  //   });
  //   const updatedOrder = await this.update(currentOrder);
  // }
  // removeItem(userId, ItemId)
}
