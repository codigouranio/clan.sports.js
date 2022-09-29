import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';
import { UserService } from './user.service';

describe('Test User Service', () => {
  let userService: UserService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    userService = app.get<UserService>(UserService);
  });
  test('test', async () => {
    expect(userService).toBeDefined();
  });
});
