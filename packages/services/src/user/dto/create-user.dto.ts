import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  readonly username?: string;

  @IsNotEmpty()
  @IsString()
  readonly passwordHash: string;

  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber()
  @IsOptional()
  readonly phone?: string;

  @IsString()
  @IsOptional()
  readonly streeAddress?: string;

  @IsString()
  @IsOptional()
  readonly postalCode?: string;

  @IsString()
  @IsOptional()
  readonly addressCountry?: string;

  @IsString()
  @IsOptional()
  readonly addressState?: string;

  @IsString()
  @IsOptional()
  readonly photo?: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive?: boolean;
}
