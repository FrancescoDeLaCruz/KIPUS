@Controller('accounts')
@UseGuards(JwtGuard)
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  create(@Request() req, @Body() dto: any) {
    return this.accountsService.create(req.user.id, dto);
  }

  @Get()
  findAll(@Request() req) {
    return this.accountsService.findAll(req.user.id);
  }
}
