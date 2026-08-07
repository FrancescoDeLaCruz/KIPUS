import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('accounts')
@UseGuards(JwtGuard)
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  create(@Request() req, @Body() dto: { name: string; type: string; balance: number }) {
    return this.accountsService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.accountsService.findAll(req.user.id);
  }
}
