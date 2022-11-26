import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';

@Injectable()
export class TodoListService {
  constructor(
    @Inject('TODOLIST_REPOSITORY')
    private todoListRepository: Repository<TodoList>,
  ) {}

  create(createTodoListDto: CreateTodoListDto) {
    let todoList = new TodoList()
    todoList.name = createTodoListDto.name
    
    this.todoListRepository.save(todoList)
  }

  async findAll(): Promise<TodoList[]> {
    return this.todoListRepository.find()
  }

  async findOne(id: number) {
    return await this.todoListRepository.findOneBy({ id: id})
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return this.todoListRepository.update(id, updateTodoListDto)
  }

  async remove(id: number) {
    return await this.todoListRepository.delete({ id })
  }
}
