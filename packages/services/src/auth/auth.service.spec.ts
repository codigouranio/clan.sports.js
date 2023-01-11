import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { isJWT } from 'class-validator';
import { User } from 'src/user/user.entity';

import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { RegisterWithPasswordDto } from './dto/register-with-password.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          useFactory: async () => ({
            secret: 'testSecret',
            signOptions: { expiresIn: '60s' },
          }),
        }),
      ],
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

    authService = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  describe('hashPassword', () => {
    it('should return a hashed password', async () => {
      const password = 'password';
      const hashedPassword = await authService.hashPassword(password);

      expect(hashedPassword).not.toEqual(password);
    });
  });

  describe('verifyPassword', () => {
    it('should return true if the password is valid', async () => {
      const password = 'password';
      const hashedPassword = await authService.hashPassword(password);

      const isValid = await authService.verifyPassword(
        password,
        hashedPassword,
      );

      expect(isValid).toBeTruthy();
    });

    it('should return false if the password is invalid', async () => {
      const password = 'password';
      const hashedPassword = await authService.hashPassword(password);

      const isValid = await authService.verifyPassword(
        'invalid',
        hashedPassword,
      );

      expect(isValid).toBeFalsy();
    });
  });

  describe('validateUserPassword', () => {
    it('should return true if the password is valid', async () => {
      const password = 'password';
      const hashedPassword = await authService.hashPassword(password);

      const user: User = {
        id: 1,
        email: 'jhon@doe.com',
        username: 'jhon Doe',
        passwordHash: hashedPassword,
      };

      const isValid = await authService.validateUserPassword(user, password);

      expect(isValid).toBeTruthy();
    });
  });

  describe('passwordLogin', () => {
    let user: User;
    const password = 'password';
    let hashedPassword: string;

    beforeEach(async () => {
      hashedPassword = await authService.hashPassword(password);
      user = {
        id: 1,
        email: 'jhon@doe.com',
        username: 'jhonDoe',
        passwordHash: hashedPassword,
      };
    });

    it('should return a token if the email and password is valid', async () => {
      jest.spyOn(userService, 'findOneBy').mockResolvedValue(user);

      const token = await authService.loginWithPassword({
        email: user.email,
        password,
      });

      expect(token).toHaveProperty('accessToken');
      expect(isJWT(token.accessToken)).toBe(true);

      expect(userService.findOneBy).toHaveBeenCalledWith({ email: user.email });

      expect(userService.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if the email does not exist', async () => {
      jest.spyOn(userService, 'findOneBy').mockResolvedValue(null);

      await expect(
        authService.loginWithPassword({
          email: user.email,
          password,
        }),
      ).rejects.toThrowError('Invalid credentials');

      expect(userService.findOneBy).toHaveBeenCalledWith({ email: user.email });

      expect(userService.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should return a token if the username and password is valid', async () => {
      jest.spyOn(userService, 'findOneBy').mockResolvedValue(user);

      const token = await authService.loginWithPassword({
        username: user.username as string,
        password,
      });

      expect(token).toHaveProperty('accessToken');
      expect(isJWT(token.accessToken)).toBe(true);

      expect(userService.findOneBy).toHaveBeenCalledWith({
        username: user.username,
      });

      expect(userService.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if the username does not exist', async () => {
      jest.spyOn(userService, 'findOneBy').mockResolvedValue(null);

      await expect(
        authService.loginWithPassword({
          username: user.username as string,
          password,
        }),
      ).rejects.toThrowError('Invalid credentials');

      expect(userService.findOneBy).toHaveBeenCalledWith({
        username: user.username,
      });

      expect(userService.findOneBy).toHaveBeenCalledTimes(1);
    });

    it('should throw an error if the password is invalid', async () => {
      jest.spyOn(userService, 'findOneBy').mockResolvedValue(user);

      await expect(
        authService.loginWithPassword({
          email: user.email,
          password: 'invalid',
        }),
      ).rejects.toThrowError('Invalid credentials');

      expect(userService.findOneBy).toHaveBeenCalledWith({ email: user.email });

      expect(userService.findOneBy).toHaveBeenCalledTimes(1);
    });
  });

  describe('passwordRegister', () => {
    const hashedPassword = 'hashedPassword';

    beforeEach(async () => {
      jest.spyOn(authService, 'hashPassword').mockResolvedValue(hashedPassword);
    });

    it('should return a token if the user is created', async () => {
      const payload: RegisterWithPasswordDto = {
        email: 'jhon@doe.com',
        username: 'jhonDoe',
        password: 'password',
      };

      const user = {
        id: 1,
        email: payload.email,
        username: payload.username,
        passwordHash: hashedPassword,
      };

      jest.spyOn(userService, 'create').mockResolvedValue(user);

      const response = await authService.registerWithPassword(payload);

      expect(response).toHaveProperty('accessToken');
      expect(isJWT(response.accessToken)).toBe(true);

      expect(userService.create).toHaveBeenCalledWith({
        email: payload.email,
        username: payload.username,
        passwordHash: hashedPassword,
      });
    });
  });
});
