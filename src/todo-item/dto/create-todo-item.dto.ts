import {
  IsString,
  IsBoolean,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { TodoList } from 'src/todo-list/entities/todo-list.entity';

export class CreateTodoItemDto{
  @IsString()
  description: string;
  
  @IsBoolean()
  priority: boolean;
  
  @IsBoolean()
  completed: boolean;

  @IsNumber()
  @IsNotEmpty()
  todoList: typeof TodoList;
}