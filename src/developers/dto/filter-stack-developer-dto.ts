import { Stack } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class FilterStackDeveloperDto {
  @IsOptional()
  @IsEnum(Stack)
  stack: Stack;
}
