import { User } from '../entities/user.entity';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(15)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[$*&@#]).*$/, {
    message: 'Senha precisa de uma letra maiúscula, um caractere especial, pelo menos 6 caracteres e até 15 caracteres',
  })
  password: string;

  @IsString()
  name: string;
}