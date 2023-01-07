import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(id: any): any {
    return {
      msg: `Hello World! ${id}`,
    };
  }
}
