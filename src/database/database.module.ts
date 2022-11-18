import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Global()
@Module({
imports: [
  TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'db',
  autoLoadEntities: true,
  synchronize: true}),
  ]})
export class DatabaseModule {}