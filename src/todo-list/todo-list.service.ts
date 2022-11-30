import { Injectable, Inject } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { TodoList } from './entities/todo-list.entity';

@Injectable()
export class TodoListService {
  constructor(
    @Inject('TODOLIST_REPOSITORY')
    private todoListRepository: Repository<TodoList>,
    private userService: UserService
  ) {}

  async create(createTodoListDto: CreateTodoListDto, email: string) {
    const userMail = await this.userService.findByEmail(email)
    if(userMail){
      const list = {users: userMail.id, ...createTodoListDto}
      await this.todoListRepository.save(list)
    } else {
      throw new Error("Usuário não encontrado")
    }
  }

  async findAll(): Promise<TodoList[]> {
    return this.todoListRepository.find()
  }

  async findOne(id: number) {
    return await this.todoListRepository.findOneBy({ id: id })
  }

  async findTodoItems(id: number) {
    return this.todoListRepository.createQueryBuilder('todoList')
    .leftJoinAndSelect('todoList.todoItems', 'todoItems')
    .where("todoList.id = :id", {id: id})
    .getMany()
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return this.todoListRepository.update(id, updateTodoListDto)
  }

  async remove(id: number) {
    return await this.todoListRepository.delete({ id })
  }
}
