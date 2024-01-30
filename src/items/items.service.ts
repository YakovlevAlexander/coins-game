import { Injectable } from '@nestjs/common';
import { PrismaClient, Item } from '@prisma/client';
import { BaseService } from '../crud/base.service';

@Injectable()
export class ItemsService extends BaseService<Item> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'Item');
  }
}
