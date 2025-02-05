import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { nanoid } from 'nanoid';
import { PasswordUtilsProvider } from 'src/utils/password-utis';
import { FilterStackDeveloperDto } from './dto/filter-stack-developer-dto';

@Injectable()
export class DevelopersService {
  constructor(
    private readonly prisma: PrismaService,
    readonly passwordUtils: PasswordUtilsProvider,
  ) {}

  async create(dto: CreateDeveloperDto) {
    const hashedPassword = await this.passwordUtils.hashPassword(dto.password);

    return this.prisma.developers.create({
      data: {
        id: `dev_${nanoid()}`,
        ...dto,
        password: hashedPassword,
      },
    });
  }

  findAll(filterStack: FilterStackDeveloperDto) {
    const { stack } = filterStack;
    const developer = this.prisma.developers.findMany({
      where: stack ? { stack } : {},
    });
    return developer;
  }

  findOne(id: string) {
    return this.prisma.developers.findUnique({ where: { id } });
  }

  update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return this.prisma.developers.update({
      where: { id },
      data: updateDeveloperDto,
    });
  }

  remove(id: string) {
    return this.prisma.developers.delete({ where: { id } });
  }
}
