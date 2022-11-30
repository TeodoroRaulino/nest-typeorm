import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todoListProviders } from './todoList.providers';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { TodoItemService } from 'src/todo-item/todo-item.service';
import { todoItemProviders } from 'src/todo-item/todoItem.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoListController],
  providers: [
    ...todoListProviders,
    ...userProviders,
    ...todoItemProviders,
    TodoListService,
    TodoItemService,
    UserService
  ]
})
export class TodoListModule {}
