import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';

@Injectable()
export class TodoListService {
  find(): TodoList[] | PromiseLike<TodoList[]> {
    throw new Error('Method not implemented.');
  }
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

  findOne(id: number) {
    return `This action returns a #${id} todoList`;
  }

  update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return `This action updates a #${id} todoList`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoList`;
  }
}
