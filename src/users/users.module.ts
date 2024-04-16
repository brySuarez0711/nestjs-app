import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})

//implement a middleware
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      //apply middleware only a get routes
      path: '/users',
      method: RequestMethod.GET,
    });
  }
}
