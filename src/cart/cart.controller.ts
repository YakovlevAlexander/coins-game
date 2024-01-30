import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrismaClient, Cart } from '@prisma/client';
import { CartService } from './cart.service';

const prisma = new PrismaClient();

@Controller()
export class CartController {
  @Get('/')
  public getAll() {
    const service = new CartService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  public getById(@Param('id') id: number) {
    const service = new CartService(prisma);
    return service.findById(id);
  }

  @Post('/')
  public create(@Body() body: Cart) {
    const service = new CartService(prisma);
    return service.create(body);
  }

  @Post('/:id')
  public update(@Param('id') id: number, @Body() body: Partial<Cart>) {
    const service = new CartService(prisma);
    return service.update(id, body);
  }

  @Delete('/:id')
  public delete(@Param('id') id: number) {
    const service = new CartService(prisma);
    return service.delete(id);
  }

  @Post('/add/:id')
  public addItem(@Param('id') itemId: number, userId: number) {
    const service = new CartService(prisma);
    // return service.addItem();
  }
}
