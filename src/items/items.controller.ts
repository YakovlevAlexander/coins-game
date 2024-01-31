import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PrismaClient, Item } from '@prisma/client';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './create-item.dto';

const prisma = new PrismaClient();

@Controller('/items')
@ApiTags('items')
export class ItemsController {
  @Get()
  @ApiResponse({ status: 200, description: 'Get items list' })
  async getAll(): Promise<Item[]> {
    const service = new ItemsService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Get item by ID' })
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.findById(id);
  }

  @Post()
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 200, description: 'Add item' })
  async create(@Body() data: CreateItemDto): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.create(data);
  }

  @Put('/:id')
  @ApiBody({ type: CreateItemDto })
  @ApiResponse({ status: 200, description: 'Update item' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: CreateItemDto): Promise<Item> {
    const service = new ItemsService(prisma);
    return service.update(id, data);
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Delete item by ID' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Item | null> {
    const service = new ItemsService(prisma);
    return service.delete(id);
  }
}
