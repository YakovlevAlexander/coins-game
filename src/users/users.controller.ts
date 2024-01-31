import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';

const prisma = new PrismaClient();

@Controller('/users')
@ApiTags('users')
export class UsersController {
  @Get('/')
  @ApiResponse({ status: 200, description: 'Get users list' })
  async getAll(): Promise<User[]> {
    const service = new UsersService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Get user by ID' })
  async getById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const service = new UsersService(prisma);
    return service.findById(id);
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'Add new user' })
  async create(@Body() body: User): Promise<User> {
    const service = new UsersService(prisma);
    return service.create(body);
  }

  @Post('/:id')
  @ApiResponse({ status: 200, description: 'Update user by ID' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: Partial<User>): Promise<User> {
    const service = new UsersService(prisma);
    return service.update(id, body);
  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Delete user by ID' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<User | null> {
    const service = new UsersService(prisma);
    return service.delete(id);
  }
}
