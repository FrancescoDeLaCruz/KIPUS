import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: { name: string; type: string; balance: number }) {
    return await this.prisma.account.create({
      data: { userId, name: dto.name, type: dto.type, balance: dto.balance },
    });
  }

  async findAll(userId: string) {
    return await this.prisma.account.findMany({ where: { userId } });
  }
}
