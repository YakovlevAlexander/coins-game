import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

const prisma = new PrismaClient();

@Module({
  providers: [
    ItemsService,
    { provide: 'PrismaClient', useValue: prisma },
  ],
  exports: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
