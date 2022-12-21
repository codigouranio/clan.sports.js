import { Controller, Get, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(@Query('id') id: any): any {
    return this.appService.getTest(id);
  }
}
