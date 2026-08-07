import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: any) {
    return await this.prisma.transaction.create({
      data: { userId, ...dto },
    });
  }

  async findAll(userId: string) {
    return await this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
  }
}
