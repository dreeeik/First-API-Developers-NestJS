import { Module } from '@nestjs/common';
import { DevelopersService } from './developers.service';
import { DevelopersController } from './developers.controller';
import { PrismaModule } from 'src/prisma.module';
import { PasswordUtilsProvider } from 'src/utils/password-utis';

@Module({
  imports: [PrismaModule],
  controllers: [DevelopersController],
  providers: [DevelopersService, PasswordUtilsProvider],
})
export class DevelopersModule {}
