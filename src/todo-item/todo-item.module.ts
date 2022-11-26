import { Module } from '@nestjs/common';
import { TodoItemService } from './todo-item.service';
import { TodoItemController } from './todo-item.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todoItemProviders } from './todoItem.providers';
import { TodoListService } from 'src/todo-list/todo-list.service';
import { TodoListController } from 'src/todo-list/todo-list.controller';
import { todoListProviders } from 'src/todo-list/todoList.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoItemController, TodoListController],
  providers: [
    ...todoItemProviders,
    ...todoListProviders,
    TodoItemService,
    TodoListService
  ]
})
export class TodoItemModule {}
