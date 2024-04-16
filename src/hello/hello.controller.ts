import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    response.status(200).json({
      message: 'Hello World',
    });
  }

  @Get('/not-found')
  @HttpCode(404)
  notFound() {
    return 'not found';
  }

  @Get('/error')
  @HttpCode(500)
  errorPage() {
    return 'error page';
  }

  @Get('/ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 17;
  }
}
