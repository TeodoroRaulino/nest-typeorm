import {
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class CreateTodoListDto {
  @IsString()
  name: string;

  users: typeof User;
}
