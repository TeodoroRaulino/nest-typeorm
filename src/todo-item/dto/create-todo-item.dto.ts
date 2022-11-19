import { TodoItem } from '../entities/todo-item.entity';
import {
  IsString,
  IsBoolean,
} from 'class-validator';

export class CreateTodoItemDto extends TodoItem{
  @IsString()
  description: string;
  
  @IsBoolean()
  priority: boolean;
  
  @IsBoolean()
  completed: boolean;

}
