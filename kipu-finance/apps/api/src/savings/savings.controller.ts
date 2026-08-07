import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('savings')
@UseGuards(JwtGuard)
export class SavingsController {
  constructor(private savingsService: SavingsService) {}

  @Post()
  create(@Request() req, @Body() dto: { title: string; targetAmount: number; deadline?: string }) {
    return this.savingsService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.savingsService.findAll(req.user.id);
  }
}
