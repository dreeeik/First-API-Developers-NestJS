import { Stack } from '@prisma/client';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(Stack)
  stack: Stack;
}
