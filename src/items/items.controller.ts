import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrismaClient, Item } from '@prisma/client';
import { ItemsService } from './items.service';

const prisma = new PrismaClient();

@Controller()
export class ItemsController {
  @Get('/')
  public getAll() {
    const service = new ItemsService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  public getById(@Param('id') id: number) {
    const service = new ItemsService(prisma);
    return service.findById(id);
  }

  @Post('/')
  public create(@Body() body: Item) {
    const service = new ItemsService(prisma);
    return service.create(body);
  }

  @Post('/:id')
  public update(@Param('id') id: number, @Body() body: Partial<Item>) {
    const service = new ItemsService(prisma);
    return service.update(id, body);
  }

  @Delete('/:id')
  public delete(@Param('id') id: number) {
    const service = new ItemsService(prisma);
    return service.delete(id);
  }
}
