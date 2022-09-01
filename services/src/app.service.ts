import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(id: any): string {
    return `Hello World! ${id}`;
  }
}
