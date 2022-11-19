import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { TodoList } from 'src/todo-list/entities/todo-list.entity';

@Entity()
export class TodoItem {
  @PrimaryGeneratedColumn()
  id?: number;
  
  @Column()
  description: string;
  
  @Column({default: false})
  priority: boolean;
  
  @Column({default: false})
  completed: boolean;
  
  @ManyToOne(() => TodoList, todoList => todoList.todoItems)
  todoList = TodoList

}
