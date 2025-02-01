import { Stack } from '@prisma/client';
import { IsEmail, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  stack: Stack;
}
