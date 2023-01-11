import { Controller, Get, Query } from '@nestjs/common';

import { Public } from '../auth/public.decorator';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getTest(@Query('id') id: any): any {
    return this.appService.getTest(id);
  }
}
