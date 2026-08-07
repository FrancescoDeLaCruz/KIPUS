import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: { email: string; password: string; fullName: string }) {
    const existingUser = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (existingUser) {
      throw new BadRequestException('El correo electrónico ya está registrado.');
    }

    const passwordHash = await argon2.hash(dto.password);
    const user = await this.prisma.user.create({
      data: { email: dto.email, passwordHash, fullName: dto.fullName },
    });

    return this.signToken(user.id, user.email);
  }

  async signin(dto: { email: string; password: string }) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Credenciales inválidas.');

    const passwordMatches = await argon2.verify(user.passwordHash, dto.password);
    if (!passwordMatches) throw new UnauthorizedException('Credenciales inválidas.');

    return this.signToken(user.id, user.email);
  }

  private async signToken(userId: string, email: string): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };
    const secret = process.env.JWT_SECRET || 'super-secret-kipu-key';
    const token = await this.jwt.signAsync(payload, { expiresIn: '15m', secret });
    return { access_token: token };
  }
}
