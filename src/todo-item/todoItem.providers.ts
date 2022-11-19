import { DataSource } from "typeorm";
import { TodoItem } from "./entities/todo-item.entity";

export const todoItemProviders = [
  {
    provide: 'TODOITEM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TodoItem),
    inject: ['DATA_SOURCE']
  }
]