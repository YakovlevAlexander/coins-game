import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UsersService } from './users.service';

const prisma = new PrismaClient();

@Controller()
export class UsersController {
  @Get('/')
  public getAll() {
    const service = new UsersService(prisma);
    return service.findAll();
  }

  @Get('/:id')
  public getById(@Param('id') id: number) {
    const service = new UsersService(prisma);
    return service.findById(id);
  }

  @Post('/')
  public create(@Body() body: User) {
    const service = new UsersService(prisma);
    return service.create(body);
  }

  @Post('/:id')
  public update(@Param('id') id: number, @Body() body: Partial<User>) {
    const service = new UsersService(prisma);
    return service.update(id, body);
  }

  @Delete('/:id')
  public delete(@Param('id') id: number) {
    const service = new UsersService(prisma);
    return service.delete(id);
  }
}
