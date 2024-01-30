import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const prisma = new PrismaClient();

@Module({
  providers: [
    UsersService,
    { provide: 'PrismaClient', useValue: prisma },
  ],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
