import { Controller, Get, Post, Param } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CartService, CartData } from './cart.service';

const prisma = new PrismaClient();

@Controller('/cart')
@ApiTags('cart')
export class CartController {
  @Get('/')
  @ApiResponse({ status: 200, description: 'Get cart' })
  async getCart(@Param('id') userId: number): Promise<CartData[]> {
    const service = new CartService(prisma);
    return service.getCart(userId);
  }
  
  @Post('add/:id')
  @ApiResponse({ status: 200, description: 'Add item' })
  async addItem(@Param('id') userId: number, @Param('id') itemId: number): Promise<Cart> {
    const service = new CartService(prisma);
    return service.addItem(userId, itemId);
  }
  
  @Post('remove/:id')
  @ApiResponse({ status: 200, description: 'Remove item' })
  async removeItem(@Param('id') userId: number, @Param('id') itemId: number): Promise<Cart> {
    const service = new CartService(prisma);
    return service.addItem(userId, itemId);
  }
}
