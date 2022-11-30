import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import { TodoItem } from 'src/todo-item/entities/todo-item.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class TodoList {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToMany(() => TodoItem, items => items.todoList)
  todoItems: TodoItem[]

  @ManyToOne(() => User, (users) => users.todoLists, {eager: true})
  users = User
}