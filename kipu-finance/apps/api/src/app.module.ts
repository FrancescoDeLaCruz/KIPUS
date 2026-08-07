import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { CreditCardsModule } from './credit-cards/credit-cards.module';
import { SavingsModule } from './savings/savings.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AccountsModule,
    TransactionsModule,
    CreditCardsModule,
    SavingsModule,
  ],
})
export class AppModule {}
