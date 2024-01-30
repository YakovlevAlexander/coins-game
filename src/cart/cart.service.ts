import { Injectable } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { BaseService } from '../crud/base.service';

@Injectable()
export class CartService extends BaseService<Cart> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'Cart');
  }

  // addItem
  // removeItem
}
