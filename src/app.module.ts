import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoItemModule } from './todo-item/todo-item.module';
import { CryptographyModule } from './cryptography/cryptography.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, TodoListModule, TodoItemModule, CryptographyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
