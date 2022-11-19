import { TodoList } from '../entities/todo-list.entity';
import {
  IsString,
} from 'class-validator';

export class CreateTodoListDto extends TodoList {
  @IsString()
  name: string;
}
