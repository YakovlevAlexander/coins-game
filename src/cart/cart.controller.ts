import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CartService } from './cart.service';

const prisma = new PrismaClient();

@Controller('/cart')
@ApiTags('cart')
export class CartController {
  // getCart(userId)
  // addItem(userId, itemId)
  // removeItem(userId, ItemId)
}
