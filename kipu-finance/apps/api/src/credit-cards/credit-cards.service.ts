import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CreditCardsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: { name: string; creditLimit: number; closingDay: number; dueDate: number }) {
    return await this.prisma.creditCard.create({
      data: { userId, ...dto },
    });
  }

  async findAll(userId: string) {
    return await this.creditCardsQuery(userId);
  }

  private creditCardsQuery(userId: string) {
    return this.prisma.creditCard.findMany({ where: { userId } });
  }
}
