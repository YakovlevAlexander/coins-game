import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [ItemsModule, UsersModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
