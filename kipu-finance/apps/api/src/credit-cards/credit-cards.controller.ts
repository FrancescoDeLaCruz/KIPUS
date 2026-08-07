import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('credit-cards')
@UseGuards(JwtGuard)
export class CreditCardsController {
  constructor(private creditCardsService: CreditCardsService) {}

  @Post()
  create(@Request() req, @Body() dto: { name: string; creditLimit: number; closingDay: number; dueDate: number }) {
    return this.creditCardsService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.creditCardsService.findAll(req.user.id);
  }
}
