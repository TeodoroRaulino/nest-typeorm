import { Injectable, Inject } from '@nestjs/common';
import { TodoListService } from 'src/todo-list/todo-list.service';
import { Repository } from 'typeorm';
import { CreateTodoItemDto } from './dto/create-todo-item.dto';
import { UpdateTodoItemDto } from './dto/update-todo-item.dto';
import { TodoItem } from './entities/todo-item.entity';

@Injectable()
export class TodoItemService {
  constructor(
    @Inject('TODOITEM_REPOSITORY')
    private todoItemRepository: Repository<TodoItem>,
    private todoListService: TodoListService
  ) {}

  async create(createTodoItemDto: CreateTodoItemDto) {
    const list = await this.todoListService.findOne(+createTodoItemDto.todoList)

    if(list){
      const todoItem = { ...createTodoItemDto}
      await this.todoItemRepository.save(todoItem)
    }
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todoItemRepository.find()
  }


  async findOne(id: number) {
    return this.todoItemRepository.findOneBy({ id })
  }

  async update(id: number, updateTodoItemDto: UpdateTodoItemDto) {
    return await this.todoItemRepository.update(id, updateTodoItemDto)
  }

  async remove(id: number) {
    return this.todoItemRepository.delete({ id })
  }
}
