import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginWithPasswordDto } from './dto/login-with-password.dto';
import { RegisterWithPasswordDto } from './dto/register-with-password.dto';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() credentials: LoginWithPasswordDto) {
    return this.authService.loginWithPassword(credentials);
  }

  @Public()
  @Post('register')
  async register(@Body() register: RegisterWithPasswordDto) {
    return this.authService.registerWithPassword(register);
  }
}
