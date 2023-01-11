import { IsEmail, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class LoginWithPasswordDto {
  @ValidateIf((login) => !login.email)
  @IsString()
  readonly username: string;

  @ValidateIf((login) => !login.username)
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export type LoginWithPasswordDtoType = RequireAtLeastOne<
  LoginWithPasswordDto,
  'username' | 'email'
>;
