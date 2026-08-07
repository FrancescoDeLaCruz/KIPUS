import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
// import { JwtGuard } from '../auth/guard'; // Asumiendo que crearás este Guard

@Controller('transactions')
// @UseGuards(JwtGuard) // Descomenta cuando el Guard esté listo
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post()
  create(@Request() req, @Body() dto: any) {
    return this.transactionsService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.transactionsService.findAll(req.user.id);
  }
}
