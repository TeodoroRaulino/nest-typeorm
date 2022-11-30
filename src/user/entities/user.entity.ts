import { TodoList } from 'src/todo-list/entities/todo-list.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @OneToMany(() => TodoList, todoLists => todoLists.users)
  todoLists: TodoList[]
}
