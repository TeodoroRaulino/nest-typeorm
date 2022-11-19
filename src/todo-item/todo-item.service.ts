import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoItem } from './entities/todo-item.entity';

@Injectable()
export class TodoItemService {
  constructor(
    @Inject('TODOITEM_REPOSITORY')
    private todoItemRepository: Repository<TodoItem>,
  ) {}

  create(createTodoItemDto: CreateTodoItemDto) {
    let todoItem = new TodoItem()
    todoItem.description = createTodoItemDto.description
    todoItem.completed = createTodoItemDto.completed
    todoItem.priority = createTodoItemDto.priority
    
    this.todoItemRepository.save(todoItem)
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todoItemRepository.find()
  }


  findOne(id: number) {
    return `This action returns a #${id} todoItem`;
  }

  update(id: number, updateTodoItemDto: UpdateTodoItemDto) {
    return `This action updates a #${id} todoItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoItem`;
  }
}
