import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';
import { todoListProviders } from 'src/todo-list/todoList.providers';
import { TodoListService } from 'src/todo-list/todo-list.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProviders,
    ...todoListProviders,
    UserService,
    TodoListService
  ],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
