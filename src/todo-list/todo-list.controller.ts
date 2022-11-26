import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createTodoListDto: CreateTodoListDto) {
    return this.todoListService.create(createTodoListDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.todoListService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoListService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoListDto: UpdateTodoListDto) {
    return this.todoListService.update(+id, updateTodoListDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoListService.remove(+id);
  }
}
