import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterWithPasswordDto {
  @IsString()
  @IsOptional()
  readonly username?: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
