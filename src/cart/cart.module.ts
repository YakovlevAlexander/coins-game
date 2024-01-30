import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

const prisma = new PrismaClient();

@Module({
  providers: [
    CartService,
    { provide: 'PrismaClient', useValue: prisma },
  ],
  exports: [CartService],
  controllers: [CartController],
})
export class CartModule {}
