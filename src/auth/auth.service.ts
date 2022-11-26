import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ) {}

  async login(user: User) {
    const payload: UserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email
    }

    const jwtToken = this.jwtService.sign(payload)

    return {
      access_token: jwtToken
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email)

    if(user && password === user.password){
      const { password, ...result } = user;
      return {
        ...user,
        password:undefined
      }
      }
    throw new Error('Email ou senha não corresponde')
  }

}
