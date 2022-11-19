import { Module } from '@nestjs/common';
import { TodoItemService } from './todo-item.service';
import { TodoItemController } from './todo-item.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todoItemProviders } from './todoItem.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoItemController],
  providers: [
    ...todoItemProviders,
    TodoItemService
  ]
})
export class TodoItemModule {}
