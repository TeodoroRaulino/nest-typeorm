import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { TodoItem } from 'src/todo-item/entities/todo-item.entity';

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToMany(() => TodoItem, items => items.todoList)
  todoItems: TodoItem[]
}