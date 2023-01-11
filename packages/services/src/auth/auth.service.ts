import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { LoginWithPasswordDtoType } from './dto/login-with-password.dto';
import { RegisterWithPasswordDto } from './dto/register-with-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUserPassword(user: User, password: string): Promise<boolean> {
    const isValid = await this.verifyPassword(password, user.passwordHash);
    return isValid;
  }

  async loginWithPassword(credentials: LoginWithPasswordDtoType) {
    const user = await this.getUserByEmailOrUsername(credentials);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isValid = await this.validateUserPassword(user, credentials.password);

    if (!isValid) {
      throw new BadRequestException('Invalid credentials');
    }

    return {
      accessToken: await this.generateAccessToken(user),
    };
  }

  async registerWithPassword(registerWithPassword: RegisterWithPasswordDto) {
    const { password, ...userData } = registerWithPassword;
    const passwordHash = await this.hashPassword(password);

    const user = await this.usersService.create({ ...userData, passwordHash });
    const accessToken = await this.generateAccessToken(user);

    return { accessToken };
  }

  async hashPassword(password: string) {
    const salt = randomBytes(16).toString('hex');
    const key = scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${key}`;
  }

  async verifyPassword(password: string, hash: string) {
    const [salt, key] = hash.split(':');
    const keyBuffer = Buffer.from(key, 'hex');
    const derivedKey = scryptSync(password, salt, 64);
    return timingSafeEqual(keyBuffer, derivedKey);
  }

  generateAccessToken(user: User) {
    return this.jwtService.sign(
      { sub: user.id },
      {
        secret: this.configService.get<string>('JWT_SECRET'),
        expiresIn: this.configService.get<string>('JWT_EXPIRES_IN'),
      },
    );
  }

  private async getUserByEmailOrUsername(
    credentials: LoginWithPasswordDtoType,
  ) {
    if (credentials.email) {
      return await this.usersService.findOneBy({ email: credentials.email });
    }

    return await this.usersService.findOneBy({
      username: credentials.username,
    });
  }
}
