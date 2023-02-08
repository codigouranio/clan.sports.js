import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginWithPasswordDto } from './dto/login-with-password.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
            secret: config.get<string>('JWT_SECRET'),
          }),
        }),
      ],
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            findOneBy: jest.fn(),
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    const credentials = {
      email: 'a@a.com',
      password: 'password',
    } as LoginWithPasswordDto;

    it('login with email should return a JWT', () => {
      jest
        .spyOn(authService, 'loginWithPassword')
        .mockImplementation(() => Promise.resolve({ accessToken: 'jwt' }));

      const response = controller.login(credentials);

      expect(response).resolves.toEqual({ accessToken: 'jwt' });
    });
  });

  describe('register', () => {
    const paylaod = {
      email: 'a@a.com',
      password: 'password',
      username: 'username',
    };
    it('register with email should return a JWT', async () => {
      jest
        .spyOn(authService, 'registerWithPassword')
        .mockImplementation(() => Promise.resolve({ accessToken: 'jwt' }));

      const response = await controller.register(paylaod);

      expect(response).toEqual({ accessToken: 'jwt' });
    });
  });
});
