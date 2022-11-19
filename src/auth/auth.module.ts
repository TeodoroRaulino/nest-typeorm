import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt/dist';


@Module({
  imports: [UserModule, JwtModule.register({
    secret: process.env.JWT_SECRETE,
    signOptions: {expiresIn: '24h'}
  })],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
