import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CartService, CartData } from './cart.service';

const prisma = new PrismaClient();

@Controller('/cart')
@ApiTags('cart')
export class CartController {
  @Get('/')
  @ApiResponse({ status: 200, description: 'Get cart' })
  async getCart(): Promise<CartData[]> {
    const service = new CartService(prisma);
    return service.getCart();
  }
  
  @Post('add/:id')
  @ApiResponse({ status: 200, description: 'Add item' })
  async addItem(@Param('id', ParseIntPipe) id: number): Promise<Cart> {
    const service = new CartService(prisma);
    return service.addItem(id);
  }
  
  @Post('remove/:id')
  @ApiResponse({ status: 200, description: 'Remove item' })
  async removeItem(@Param('id', ParseIntPipe) id: number): Promise<Cart> {
    const service = new CartService(prisma);
    return service.removeItem(id);
  }
}
