import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[$*&@#]).*$/,
    {
      message:
        'Senha fraca. Precisa conter pelo menos um número, uma letra maiúscula, uma letra minúscula, um caracterer especial e ter entre 6 e 15 caracteres',
    },
  )
  password: string;

  @IsString()
  name: string;
}
