import { TodoItem } from '../entities/todo-item.entity';
import {
  IsString,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { TodoList } from 'src/todo-list/entities/todo-list.entity';

export class CreateTodoItemDto extends TodoItem{
  @IsString()
  description: string;
  
  @IsBoolean()
  priority: boolean;
  
  @IsBoolean()
  completed: boolean;

  @IsNotEmpty()
  todoListId: typeof TodoList
}
