import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todoListProviders } from './todoList.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoListController],
  providers: [
    ...todoListProviders,
    TodoListService
  ]
})
export class TodoListModule {}
