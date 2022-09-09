import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma';

@Injectable()
export class TimeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.time.findMany();
  }
  findByUnique(input: Prisma.TimeWhereUniqueInput) {
    return this.prismaService.time.findUnique({
      where: input,
    });
  }

  create(input: Prisma.TimeCreateInput) {
    return this.prismaService.time.create({
      data: input,
    });
  }

  update(input: Prisma.TimeUpdateInput, id: string) {
    return this.prismaService.time.update({
      data: input,
      where: {
        id,
      },
    });
  }
  delete(id: string) {
    return this.prismaService.time.delete({
      where: {
        id,
      },
    });
  }
}