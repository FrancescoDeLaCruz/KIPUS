import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SavingsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: { title: string; targetAmount: number; deadline?: string }) {
    return await this.prisma.savingGoal.create({
      data: {
        userId,
        title: dto.title,
        targetAmount: dto.targetAmount,
        deadline: dto.deadline ? new Date(dto.deadline) : undefined,
      },
    });
  }

  async findAll(userId: string) {
    return await this.prisma.savingGoal.findMany({ where: { userId } });
  }
}
