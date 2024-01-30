import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrismaClient, Item } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ItemsService } from './items.service';

const prisma = new PrismaClient();

@Controller('/items')
@ApiTags('items')
export class ItemsController {
  @Get('/')
  @ApiResponse({ status: 200, description: 'Get items list' })
  async getAll(): Promise<Item[]> {
    const service = new ItemsService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Get item by ID' })
  async getById(@Param('id') id: number): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.findById(id);
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'Add item' })
  async create(@Body() body: Item): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.create(body);
  }

  @Post('/:id')
  @ApiResponse({ status: 200, description: 'Update item' })
  async update(@Param('id') id: number, @Body() body: Partial<Item>): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.update(id, body);
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Delete item by ID' })
  async delete(@Param('id') id: number): Promise<Item | null> {
    const service = new ItemsService(prisma);
    return service.delete(id);
  }
}
