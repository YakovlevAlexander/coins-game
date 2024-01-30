import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { BaseService } from '../crud/base.service';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(prisma: PrismaClient) {
    super(prisma, 'User');
  }
}
