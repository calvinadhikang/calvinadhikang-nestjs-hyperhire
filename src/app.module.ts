import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TagModule } from './tag/tag.module';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    //---Development Only---//
    // username: 'postgres',
    // password: 'postgres',
    // database: 'hyperhire-book',
    // synchronize: true,
    //---End of Development Only---//
    
    //---Production Only---//
    database: 'nanaspos_hyperhire',
    username: 'nanaspos_calvinadhikang',
    password: 'calvinadhikang02',
    //---End of Production Only---//
    
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    TagModule,
    BookModule,
    CartModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
