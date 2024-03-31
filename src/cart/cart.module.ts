import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart } from 'src/entities/cart.entity';
import { Book } from 'src/entities/book.entity';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, Book, User])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
