import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevelopersModule } from './developers/developers.module';
import { PrismaModule } from './prisma.module';
import { PasswordUtilsProvider } from './utils/password-utis';

@Module({
  imports: [DevelopersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaModule, PasswordUtilsProvider],
  exports: [PrismaModule, PasswordUtilsProvider],
})
export class AppModule {}
