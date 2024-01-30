import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';

const prisma = new PrismaClient();

@Module({
  imports: [ItemsModule, UsersModule, CartModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: 'PrismaClient', useValue: prisma },
  ],
})
export class AppModule {}
